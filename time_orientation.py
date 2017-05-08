import spacy
nlp = spacy.load('en')

def time_orientation_fn():
    str = open('./corpus/entry1.txt', 'r').read()
    document = nlp(str)

    past_count = 0
    present_count = 0
    future_count = 0

    past = ["VBD", "VBN"]
    present = ["VB", "VBG", "VBP", "VBZ"]

    aux_verbs = ["am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "do", "does", "did", "will"]
    past_aux = ["was", "were", "had", "did"]
    present_aux = ["am", "is", "are", "has", "have", "do", "does"]
    #TODO negative verbs, going

    for token in document:
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

    total_verbs = past_count + present_count + future_count
    print("past: ", past_count / total_verbs)
    print("present: ", present_count / total_verbs)
    print("future: ", future_count / total_verbs)

    return {"past": past_count / total_verbs, "present": present_count / total_verbs, "future": future_count / total_verbs }
