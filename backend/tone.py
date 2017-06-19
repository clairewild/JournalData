from watson_developer_cloud import ToneAnalyzerV3 as ToneAnalyzer

import keys

def analyze_tone(text):
    ta = ToneAnalyzer(version='2016-05-19', username=keys.ta_username, password=keys.ta_password)
    return ta.tone(text)

def flatten_t(orig):
    data = {}
    for category in orig['document_tone']['tone_categories']:
        for tone in category['tones']:
            data[tone['tone_name']] = tone['score']
    return data

def overall_tone_fn(str):
    return flatten_t(anlyze_tone(str))

def overall_tone_fn(str):
    data = entry_tone_fn(str)
    results = {
        "percentages": {},
        ""
    }

    for k, v in data:


    return {
        "percentages": {
            "first_person": (0 if total_count == 0 else first_person_count / total_count),
            "first_plural": (0 if total_count == 0 else first_plural_count / total_count),
            "second_person": (0 if total_count == 0 else second_person_count / total_count),
            "third_person": (0 if total_count == 0 else third_person_count / total_count)
        },
        "counts": {
            "first_person": first_person_count,
            "first_plural": first_plural_count,
            "second_person": second_person_count,
            "third_person": third_person_count
        }
