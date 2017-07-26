import json
import time
import os.path

import spacy
nlp = spacy.load('en')

from backend.word_count import word_count_fn
# from backend.word_cloud import word_cloud_fn
from backend.python_word_cloud import new_word_cloud_fn
from backend.pronouns import pronouns_fn
from backend.time_orientation import time_orientation_fn
from backend.tone import entry_tone_fn
from backend.tone import overall_tone_fn

def analyze_json():

    data = {
        "word_count": [],
        "word_cloud": {},
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

    with open(path) as data_file:
        raw_data = json.load(data_file)

    entries = raw_data["entries"]

    # Calculate the first date in the dict
    # so we can calculate seconds passed for each entry
    first_date = None
    last_date = None
    for entry in entries:
        date = entry["creationDate"]

        if first_date == None:
            first_date = date

        if date < first_date:
            first_date = date

        if last_date == None:
            last_date = date

        if date > last_date:
            last_date = date

    data["date"]["min"] = first_date
    data["date"]["max"] = last_date

    first_date = time.strptime(first_date, '%Y-%m-%dT%H:%M:%SZ')

    all_text = ""

    # Analyze each entry individually
    for entry in entries:
        date = entry["creationDate"]
        date = time.strptime(date, '%Y-%m-%dT%H:%M:%SZ')
        difference = time.mktime(date) - time.mktime(first_date)

        text = entry["text"]
        all_text += text

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

        past_percentage = time_analysis["percentages"]["past"]
        past = {"date": difference, "percentage": past_percentage}
        data["time_orientation"]["area"]["past"].append(past)
        data["time_orientation"]["pie"]["past"] += time_analysis["counts"]["past"]

        present_percentage = time_analysis["percentages"]["past"] + time_analysis["percentages"]["present"]
        present = {"date": difference, "percentage": present_percentage}
        data["time_orientation"]["area"]["present"].append(present)
        data["time_orientation"]["pie"]["present"] += time_analysis["counts"]["present"]

        future = {"date": difference, "percentage": 1.0}
        data["time_orientation"]["area"]["future"].append(future)
        data["time_orientation"]["pie"]["future"] += time_analysis["counts"]["future"]

        #######################
        ### Tone analysis

        add = 0
        for emotion in ["Joy", "Fear", "Sadness", "Anger", "Disgust"]:
            emotion_percentage = tone_analysis[emotion] + add
            add = emotion_percentage
            obj = {"date": difference, "percentage": emotion_percentage}
            data["tone"]["area"][emotion].append(obj)

    # Pass all text from all entries to word cloud function
    # data["word_cloud"] = word_cloud_fn(nlp, all_text)
    new_word_cloud_fn(nlp, all_text)

    # Pass all text from all entries to overall tone analysis function
    data["tone"]["summary"] = overall_tone_fn(all_text)

    if path == "./uploads/diary.json":
        print("Deleting file")
        os.remove(path)

    return data
