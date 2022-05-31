from spacy.tokens import Span
from shared_code.commons import NLPSingleton

nlp = NLPSingleton("id").nlp

def KATA_KERJA_KATA_GANTI_KATA_BENDA(matcher, doc, i, matches):
    match_id, start, end = matches[i]
    kalimat = [doc[i] for i in range(start, end)]
    koreksi = [doc[start+i] for i in [0, 2, 1]]
    print(f"{kalimat} -> {koreksi}")

def KATA_DEPAN_DI_DIPISAH(matcher, doc, i, matches):
    match_id, start, end = matches[i]
    frasa = doc[start]
    koreksi = frasa.text[:2] + " " + frasa.text[2:]
    doc_koreksi = nlp(koreksi)
    koreksi = frasa if doc_koreksi[1].pos_ == "VERB" else koreksi
    # for token in doc_frasa:
    #     print(token.text, token.lemma_, token.pos_, token.tag_, token.dep_,
    #             token.shape_, token.is_alpha, token.is_stop, token.morph)
    print(f'{frasa} ->  {koreksi}')
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
    kata = doc[start].text
    koreksi = kata.title()
    print(f"{kata} -> {koreksi}")

def KOMA_SEBELUM_DAN(matcher, doc, i, matches):
    match_id, start, end = matches[i]
    kalimat = [doc[i] for i in range(start, end)]
    koreksi = [token.text_with_ws for token in doc[start:end-3]] + [doc[end-3].text, ", "] + [token.text_with_ws for token in doc[end-2:end]]
    koreksi = nlp("".join(koreksi))
    print(f"{kalimat} -> {koreksi}")