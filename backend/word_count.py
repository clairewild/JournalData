def word_count_fn(nlp, str):
    document = nlp(str)
    word_count = 0

    for token in document:
        word_count += 1

    return word_count
