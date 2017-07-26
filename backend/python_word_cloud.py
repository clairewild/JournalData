from os import path
from PIL import Image
import numpy as np
from wordcloud import WordCloud, STOPWORDS

def new_word_cloud_fn(nlp, str):
    document = nlp(str)
    entities = ""

    ent_types = ["GPE", "PERSON", "LOC", "ORG", "WORK_OF_ART"]

    for ent in document.ents:
        if ent.label_ in ent_types:
            entities += " " + ent.text

    book_mask = np.array(Image.open("./assets/book_mask.png"))
    stopwords = set(STOPWORDS)
    stopwords.add("said")

    wc = WordCloud(background_color="white", max_words=2000, mask=book_mask,
                   stopwords=stopwords)

    # Word cloud with all words except stopwords
    wc.generate(str)
    wc.to_file("./assets/allwords.png")

    # Word cloud with proper nouns only
    wc.generate(entities)
    wc.to_file("./assets/entities.png")

    # Word cloud with other words only
    for word in entities.split():
        stopwords.add(word)

    wc.generate(str)
    wc.to_file("./assets/otherwords.png")
