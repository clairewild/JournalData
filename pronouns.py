import spacy
nlp = spacy.load('en')

# def pronouns_fn():
str = "Austin, Claire, and Candra they are the team members working on this project!"
document = nlp(str)

first_person = ["I", "me", "my", "mine"]
first_plural = ["we", "us", "our", "ours"]
second_person = ["you", "your", "yours"]
third = [""]

first_person_count = 0
first_plural_count = 0

for token in document:
    if token.text in first_person:
        first_person_count += 1
    elif token.text in first_plural:
        first_plural_count += 1



for ent in document.ents:
    print(ent, ent.label_)
