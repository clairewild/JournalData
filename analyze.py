import json
from pprint import pprint
import time

from time_orientation import time_orientation_fn
# from pronouns import pronouns_fn

# time_data = time_orientation_fn()
# pronouns_data = pronouns_fn()

def analyze_json():

    data = {
        "time_orientation": {
            "past": [],
            "present": [],
            "future": []
        },
        "pronouns": {}
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
    # to the past, present and future arrays in the main object
    for entry in entries:
        date = entry["creationDate"]
        date = time.strptime(date, '%Y-%m-%dT%H:%M:%SZ')
        difference = time.mktime(date) - time.mktime(firstDate)

        text = entry["text"]
        analysis = time_orientation_fn(text)

        past_percentage = analysis["past"]
        past = {"date": difference, "percentage": past_percentage}
        data["time_orientation"]["past"].append(past)

        present_percentage = analysis["past"] + analysis["present"]
        present = {"date": difference, "percentage": present_percentage}
        data["time_orientation"]["present"].append(present)

        future = {"date": difference, "percentage": 1.0}
        data["time_orientation"]["future"].append(future)

    pprint(data)
    return data

# TODO:
# store as array
# time should be seconds from first entry
