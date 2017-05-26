import spacy
nlp = spacy.load('en')

def word_count_fn(str):
    document = nlp(str)
    word_count = 0

    for token in document:
        word_count += 1

    return word_count
