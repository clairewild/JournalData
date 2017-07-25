from os import path
from PIL import Image
import numpy as np
from wordcloud import WordCloud, STOPWORDS

def word_cloud_fn(str):
    book_mask = np.array(Image.open("./assets/book_mask.png"))
    stopwords = set(STOPWORDS)
    stopwords.add("said")

    wc = WordCloud(background_color="white", max_words=2000, mask=book_mask,
                   stopwords=stopwords)
    wc.generate(str)
    wc.to_file("./assets/wordcloud.png")
