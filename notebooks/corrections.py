from common import nlp

from spacy.tokens import Span

def KATA_KERJA_KATA_GANTI_KATA_BENDA(matcher, doc, i, matches):
    match_id, start, end = matches[i]
    koreksi = [0, 2, 1]
    print(f"{[doc[i] for i in range(start, end)]} -> {[doc[start+i] for i in koreksi]}")

def KATA_DEPAN_DI(matcher, doc, i, matches):
    match_id, start, end = matches[i]
    frasa = doc[start].text[:2] + " " + doc[start].text[2:]
    doc_frasa = nlp(frasa)
    for token in doc_frasa:
        print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
                token.shape_, token.is_alpha, token.is_stop, token.morph)
    print(f'{doc[start]} ->  {doc[start] if doc_frasa[1].pos_ == "VERB" else frasa}')
    # entity = Span(doc, start, end, label="KATA_DEPAN")
    # doc.ents += (entity,)
    # print(entity.text, "test test")

# def ATB_00002(matcher, doc, i, matches):
#     match_id, start, end = matches[i]
#     frasa = doc[start].text[:2] + " " + doc[start].text[2:]
#     doc_frasa = nlp(frasa)
#     for token in doc_frasa:
#         print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
#                 token.shape_, token.is_alpha, token.is_stop, token.morph)
#     print(f'{doc[start]} ->  {doc[start] if doc_frasa[1].pos_ == "VERB" else frasa}')
#     # entity = Span(doc, start, end, label="KATA_DEPAN")
#     # doc.ents += (entity,)
#     # print(entity.text, "test test")

def HURUF_KAPITAL_AWAL_KALIMAT(matcher, doc, i, matches):
    match_id, start, end = matches[i]
    # koreksi = [0, 2, 1]
    print(f"{[doc[i] for i in range(start, end)]} -> ")