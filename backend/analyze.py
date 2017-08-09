import json
import time
import os.path

import spacy
nlp = spacy.load('en')

from backend.word_count import word_count_fn
from backend.word_cloud import word_cloud_fn
from backend.pronouns import pronouns_fn
from backend.time_orientation import time_orientation_fn
from backend.tone import entry_tone_fn
from backend.tone import overall_tone_fn

def stream_entries(path):
    with open(path) as data_file:
        raw_data = json.load(data_file)

    entries = raw_data["entries"]

    for entry in entries:
        date = entry["creationDate"]
        yield entry, date # TODO: is this actually saving space at all since have to load everything first?

def date_range(entry_stream):
    first_date = None
    last_date = None

    for entry, date in entry_stream:
        if first_date == None:
            first_date = date

        if date < first_date:
            first_date = date

        if last_date == None:
            last_date = date

        if date > last_date:
            last_date = date

    return (first_date, last_date)

def analyze_json():

    data = {
        "word_count": [],
        "word_cloud": {
            "all_words": "",
            "proper_nouns": "",
            "other_words": ""
        },
        "pronouns": {
            "area": {
                "first_person": [],
                "first_plural": [],
                "second_person": [],
                "third_person": []
            },
            "pie": {
                "first_person": 0,
                "first_plural": 0,
                "second_person": 0,
                "third_person": 0
            }
        },
        "time_orientation": {
            "area": {
                "past": [],
                "present": [],
                "future": []
            },
            "pie": {
                "past": 0,
                "present": 0,
                "future": 0
            }
        },
        "tone": {
            "summary": {
                'Joy': 0,
                'Fear': 0,
                'Sadness': 0,
                'Anger': 0,
                'Disgust': 0
            },
            "area": {
                'Joy': [],
                'Fear': [],
                'Sadness': [],
                'Anger': [],
                'Disgust': []
            }
        },
        "date": {
            "min": None,
            "max": None
        }
    }

    if os.path.isfile("./uploads/diary.json"):
        path = "./uploads/diary.json"
    else:
        path = "./corpus/diary.json"

    entry_stream = stream_entries(path)
    first_date, last_date = date_range(entry_stream)
    data["date"]["min"] = first_date
    data["date"]["max"] = last_date

    entry_stream = stream_entries(path)
    first_date = time.strptime(first_date, '%Y-%m-%dT%H:%M:%SZ')
    all_text = ""

    for entry, date in entry_stream:
        text = entry["text"]
        all_text += text

        date = time.strptime(date, '%Y-%m-%dT%H:%M:%SZ')
        difference = time.mktime(date) - time.mktime(first_date)

        analyze_entry(text, difference, data) # TODO: make this asynchronous?

    # Pass all text from all entries to word cloud function
    data["word_cloud"] = word_cloud_fn(nlp, all_text)

    # Pass all text from all entries to overall tone analysis function
    data["tone"]["summary"] = overall_tone_fn(all_text)

    if path == "./uploads/diary.json":
        print("Deleting file")
        os.remove(path)

    return data

def analyze_entry(text, difference, data):
    count_analysis = word_count_fn(nlp, text)
    pronoun_analysis = pronouns_fn(nlp, text)
    time_analysis = time_orientation_fn(nlp, text)
    tone_analysis = entry_tone_fn(text)

    # TODO: refactor this!!?? it's not very DRY, can we use some metaprogramming maybe?

    #######################
    ### Word Count

    count = {"date": entry["creationDate"], "count": count_analysis}
    data["word_count"].append(count)

    #######################
    ### Pronouns

    first_person_percentage = pronoun_analysis["percentages"]["first_person"]
    first_person = {"date": difference, "percentage": first_person_percentage}
    data["pronouns"]["area"]["first_person"].append(first_person)
    data["pronouns"]["pie"]["first_person"] += pronoun_analysis["counts"]["first_person"]

    first_plural_percentage = pronoun_analysis["percentages"]["first_person"] + pronoun_analysis["percentages"]["first_plural"]
    first_plural = {"date": difference, "percentage": first_plural_percentage}
    data["pronouns"]["area"]["first_plural"].append(first_plural)
    data["pronouns"]["pie"]["first_plural"] += pronoun_analysis["counts"]["first_plural"]

    second_person_percentage = pronoun_analysis["percentages"]["first_person"] + pronoun_analysis["percentages"]["first_plural"] + pronoun_analysis["percentages"]["second_person"]
    second_person = {"date": difference, "percentage": second_person_percentage}
    data["pronouns"]["area"]["second_person"].append(second_person)
    data["pronouns"]["pie"]["second_person"] += pronoun_analysis["counts"]["second_person"]

    third_person = {"date": difference, "percentage": 1.0}
    data["pronouns"]["area"]["third_person"].append(third_person)
    data["pronouns"]["pie"]["third_person"] += pronoun_analysis["counts"]["third_person"]

    #######################
    ### Time Orientation

    add = 0
    for tense in ["past", "present", "future"]:
        tense_percentage = time_analysis["percentages"][tense] + add
        add = tense_percentage
        obj = {"date": difference, "percentage": tense_percentage}
        data["time_orientation"]["area"][tense].append(obj)
        data["time_orientation"]["pie"][tense] += time_analysis["counts"][tense]

    #######################
    ### Tone analysis

    add = 0
    for emotion in ["Joy", "Fear", "Sadness", "Anger", "Disgust"]:
        emotion_percentage = tone_analysis[emotion] + add
        add = emotion_percentage
        obj = {"date": difference, "percentage": emotion_percentage}
        data["tone"]["area"][emotion].append(obj)
