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
    return flatten_t(analyze_tone(str))

def entry_tone_fn(str):
    emotions = ["Joy", "Fear", "Sadness", "Anger", "Disgust"]
    data = overall_tone_fn(str)
    results = {}
    total_count = 0

    for emotion in emotions:
        total_count += data[emotion]

    for emotion in emotions:
        results[emotion] = (0 if total_count == 0 else data[emotion] / total_count)

    return results
