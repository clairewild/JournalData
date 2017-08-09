import os
import numpy
import requests
import cloudinary
import cloudinary.uploader as Cloud
from PIL import Image
from io import BytesIO
from wordcloud import WordCloud, STOPWORDS

import keys

def word_cloud_fn(nlp, str):
    document = nlp(str)
    entities = ""

    ent_types = ["GPE", "PERSON", "LOC", "ORG", "WORK_OF_ART"]

    for ent in document.ents:
        if ent.label_ in ent_types:
            entities += " " + ent.text

    resp = requests.get("https://res.cloudinary.com/dq5kxnx9d/image/upload/v1501875232/book_mask_olgmeu.jpg")
    book_mask = numpy.array(Image.open(BytesIO(resp.content)))
    stopwords = set(STOPWORDS)
    stopwords.add("said")

    wc = WordCloud(background_color="white",
                   max_words=2000,
                   mask=book_mask,
                   stopwords=stopwords)

    # Word cloud with all words except stopwords
    wc.generate(str)
    wc.to_file("./all_words.png")

    # Word cloud with proper nouns only
    wc.generate(entities)
    wc.to_file("./proper_nouns.png")

    # Word cloud with other words only
    for word in entities.split():
        stopwords.add(word)

    wc.generate(str)
    wc.to_file("./other_words.png")

    # Upload images to cloudinary
    data = {}
    for cloudtype in ["all_words", "proper_nouns", "other_words"]:
        filename = cloudtype + ".png"
        img = Cloud.upload(filename,
                           public_id=cloudtype,
                           cloud_name=keys.cloud_name,
                           api_key=keys.cloud_key,
                           api_secret=keys.cloud_secret)

        data[cloudtype] = img['secure_url']
        os.remove(filename)

    return data
