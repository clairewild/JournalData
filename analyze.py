import json
from pprint import pprint
import time

from time_orientation import time_orientation_fn
from word_cloud import word_cloud_fn
from pronouns import pronouns_fn
from word_count import word_count_fn

def analyze_json():

    data = {
        "time_orientation": {
            "past": [],
            "present": [],
            "future": []
        },
        "word_cloud": {},
        "pronouns": {
            "first_person": [],
            "first_plural": [],
            "second_person": [],
            "third_person": []
        },
        "word_count": []
    }

    with open('./corpus/diary.json') as data_file:
        raw_data = json.load(data_file)

    entries = raw_data["entries"]

    # Calculate the first date in the dict
    # so we can calculate seconds passed for each entry
    firstDate = None
    for entry in entries:
        date = entry["creationDate"]

        if firstDate == None:
            firstDate = date

        if date < firstDate:
            firstDate = date
    firstDate = time.strptime(firstDate, '%Y-%m-%dT%H:%M:%SZ')

    # Append the relevant data from each entry
    # to the past, present and future arrays, and different pronoun
    # arrays in the main object
    all_text = ""

    for entry in entries:
        date = entry["creationDate"]
        date = time.strptime(date, '%Y-%m-%dT%H:%M:%SZ')
        difference = time.mktime(date) - time.mktime(firstDate)

        text = entry["text"]
        all_text += text

        time_analysis = time_orientation_fn(text)
        pronoun_analysis = pronouns_fn(text)
        count_analysis = word_count_fn(text)

        # TODO: refactor this!!?? it's not very DRY, can we use some metaprogramming maybe?
        past_percentage = time_analysis["past"]
        past = {"date": difference, "percentage": past_percentage}
        data["time_orientation"]["past"].append(past)

        present_percentage = time_analysis["past"] + time_analysis["present"]
        present = {"date": difference, "percentage": present_percentage}
        data["time_orientation"]["present"].append(present)

        future = {"date": difference, "percentage": 1.0}
        data["time_orientation"]["future"].append(future)

        first_person_percentage = pronoun_analysis["first_person"]
        first_person = {"date": difference, "percentage": first_person_percentage}
        data["pronouns"]["first_person"].append(first_person)

        first_plural_percentage = pronoun_analysis["first_person"] + pronoun_analysis["first_plural"]
        first_plural = {"date": difference, "percentage": first_plural_percentage}
        data["pronouns"]["first_plural"].append(first_plural)

        second_person_percentage = pronoun_analysis["first_person"] + pronoun_analysis["first_plural"] + pronoun_analysis["second_person"]
        second_person = {"date": difference, "percentage": second_person_percentage}
        data["pronouns"]["second_person"].append(second_person)

        third_person = {"date": difference, "percentage": 1.0}
        data["pronouns"]["third_person"].append(third_person)

        count = {"date": difference, "count": count_analysis}
        data["word_count"].append(count)

    # Pass all text from all entries to word cloud function
    data["word_cloud"] = word_cloud_fn(all_text)

    return data
