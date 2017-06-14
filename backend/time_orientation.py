import spacy
nlp = spacy.load('en')

def time_orientation_fn(str):
    document = nlp(str)

    past_count = 0
    present_count = 0
    future_count = 0

    past = ["VBD", "VBN"]
    present = ["VB", "VBG", "VBP", "VBZ"]

    aux_verbs = ["am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "do", "does", "did", "will"]
    past_aux = ["was", "were", "had", "did"]
    present_aux = ["am", "is", "are", "has", "have", "do", "does"]
    # TODO: negative verbs, going to, etc

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

    return {
        "percentages": {
            "past": (0 if total_verbs == 0 else past_count / total_verbs),
            "present": (0 if total_verbs == 0 else present_count / total_verbs),
            "future": (0 if total_verbs == 0 else future_count / total_verbs)
        },
        "counts": {
            "past": past_count,
            "present": present_count,
            "future": future_count
        }
    }
