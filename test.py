import spacy
nlp = spacy.load('en')

# doc1 = nlp(u"this's spacy tokenize test")
#
# print(doc1)
#
# for token in doc1:
#     print(token)
#
# doc2 = nlp(u"this is spacy sentence tokenize test. this is second sent! is this the third sent? final test.")
#
# for sent in doc2.sents:
#     print(sent)
#
# doc3 = nlp(u"this is spacy lemmatize testing. programming books are more better than others")
#
# for token in doc3:
#     print(token, token.lemma, token.lemma_)
#
# doc4 = nlp(u"This is pos tagger test for spacy pos tagger")
#
# for token in doc4:
#     print(token, token.pos, token.pos_)

# doc5 = nlp(u"Rami Eid is studying at Stony Brook University, which is located in New York. He lives in San Francisco.")
#
# for ent in doc5.ents:
#     print(ent, ent.label, ent.label_)
#
# doc6 = nlp(u"Natural language processing (NLP) deals with the application of computational models to text or speech data.")
#
# for np in doc6.noun_chunks:
#     print(np)

# https://people.eecs.berkeley.edu/~klein/cs294-19/SP08%20cs294%20lecture%207%20--%20POS%20tagging%20(6PP).pdf

str = open('./corpus/entry1.txt', 'r').read()
doc7 = nlp(str)
# doc7 = nlp(u"I will have been writing. I just ate my lunch.")

past_count = 0
present_count = 0
future_count = 0

past = ["VBD", "VBN"]
present = ["VB", "VBG", "VBP", "VBZ"]

aux_verbs = ["am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "do", "does", "did", "will"]
past_aux = ["was", "were", "had", "did"]
present_aux = ["am", "is", "are", "has", "have", "do", "does"]
#TODO negative verbs, going

root_verbs = 0

for token in sent:
    if token == token.head:
        idx = token.i - 1
        while token.doc[idx].text in aux_verbs:
            idx -= 1
        first_verb = token.doc[idx + 1].text
        if first_verb in past_aux:
            past_count += 1
        elif first_verb in present_aux:
            present_count += 1
        elif first_verb == "will":
            future_count += 1
        elif first_verb == token.text:
            if token.tag_ in past:
                past_count += 1
            elif token.tag_ in present:
                present_count += 1

print("past: ", past_count)
print("present: ", present_count)
print("future: ", future_count)
print("total verbs: ", past_count + present_count + future_count)

count = 0
for sent in doc7.sents:
    count += 1

print("sentences: ", count)
