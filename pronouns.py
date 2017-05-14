import spacy
nlp = spacy.load('en')

def pronouns_fn():
    str = open('./corpus/entry1.txt', 'r').read()
    document = nlp(str)

    first_person_count = 0
    first_plural_count = 0
    second_person_count = 0
    third_person_count = 0

    first_person = ["I", "me", "my", "mine"]
    first_plural = ["we", "us", "our", "ours"]
    second_person = ["you", "your", "yours"]
    third_person = ["he", "him", "his", "she", "her", "hers", "they", "them", "their"]

    for token in document:
        if token.text in first_person:
            first_person_count += 1
        elif token.text in first_plural:
            first_plural_count += 1
        elif token.text in second_person:
            second_person_count += 1
        elif token.text in third_person:
            third_person_count += 1

    total_count = first_person_count + first_plural_count + second_person_count + third_person_count
    print("first_person:", first_person_count / total_count)
    print("first_plural:", first_plural_count / total_count)
    print("second_person:", second_person_count / total_count)
    print("third_person:", third_person_count / total_count)

    return {"first_person": first_person_count / total_count, "first_plural": first_plural_count / total_count, "second_person": second_person_count / total_count, "third_person": third_person_count / total_count}

str = open('./corpus/entry1.txt', 'r').read()
document = nlp(str)

entities = {}
ents = ["GPE", "PERSON", "LOC", "ORG", "DATE", "WORK_OF_ART", "MONEY"]

for ent in document.ents:
    # TODO: Maybe also keep track of number of times each entity appears?
    if ent.label_ in ents:
        if ent.text in entities:
            entities[ent.text].append(ent.label_)
        else:
            entities[ent.text] = [ent.label_]

print(entities)
