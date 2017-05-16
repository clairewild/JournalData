import spacy
nlp = spacy.load('en')

def word_cloud(str):
    document = nlp(str)
    entity_count = {}
    other_word_count = {}

    ent_types = ["GPE", "PERSON", "LOC", "ORG", "WORK_OF_ART"]

    for ent in document.ents:
        if ent.label_ in ent_types:
            if ent.text in entity_count:
                entity_count[ent.text] += 1
            else:
                entity_count[ent.text] = 1

    for token in document:
        if token.text not in entity_count:
            if len(token.lemma_) > 2 and token.lemma_ != "-PRON-":
                if token.lemma_ in other_word_count:
                    other_word_count[token.lemma_] += 1
                else:
                    other_word_count[token.lemma_] = 1

    data = {
        "entities": [],
        "other_words": []
    }

    for text, value in entity_count.items():
        obj = { "text": text, "value": value }
        data["entities"].append(obj)

    for text, value in other_word_count.items():
        obj = { "text": text, "value": value }
        data["other_words"].append(obj)

    return data
