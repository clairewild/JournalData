import spacy
nlp = spacy.load('en')

# def pronouns_fn():
# str = "Austin, Claire, and Candra they are the team members working on this project!"
str = open('./corpus/entry1.txt', 'r').read()
document = nlp(str)

first_person = ["I", "me", "my", "mine"]
first_plural = ["we", "us", "our", "ours"]
second_person = ["you", "your", "yours"]
third_person = ["he", "him", "his", "she", "her", "hers", "they", "them", "their"]

first_person_count = 0
first_plural_count = 0
second_person_count = 0
third_person_count = 0

for token in document:
    if token.text in first_person:
        first_person_count += 1
    elif token.text in first_plural:
        first_plural_count += 1
    elif token.text in second_person:
        second_person_count += 1
    elif token.text in third_person:
        third_person_count += 1

print("first_person_count:", first_person_count)
print("first_plural_count:", first_plural_count)
print("second_person_count:", second_person_count)
print("third_person_count:", third_person_count)

entities = {}

for ent in document.ents:
    # TODO: What if the same entity appears multiple times with
    # different labels? Use format {entity: [labels_]} ?
    # Maybe also keep track of number of times each entity appears?
    entities[ent] = ent.label_

# print(entities)
