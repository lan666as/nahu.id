import logging

import azure.functions as func
import stanza
import spacy_stanza
import json
import random
import re

from shared_code.commons import NLPSingleton
import shared_code.rules as rules
from spacy.matcher import Matcher

nlp = None
matcher = None

# def main(req: func.HttpRequest, docs: func.Out[func.Document]) -> func.HttpResponse:
def main(req: func.HttpRequest) -> func.HttpResponse:
    global nlp
    if nlp is None:
        nlp = NLPSingleton("id").nlp

    global matcher
    if matcher is None:
        matcher = Matcher(nlp.vocab)

        for i, aturan in enumerate(rules.aturan_tata_bahasa):
            # matcher.add(f"ATB{i:05d}", [aturan["pola"],], on_match = aturan["koreksi"]) #if "koreksi" in aturan else None)
            matcher.add(
                aturan["kode"],
                [
                    aturan["pola"],
                ],
                on_match=aturan["koreksi"],
            )  # if "koreksi" in aturan else None)

        for i, aturan in enumerate(rules.aturan_tata_tulis):
            # matcher.add(f"ATB{i:05d}", [aturan["pola"],], on_match = aturan["koreksi"]) #if "koreksi" in aturan else None)
            matcher.add(
                aturan["kode"],
                [
                    aturan["pola"],
                ],
                on_match=aturan["koreksi"],
            )  # if "koreksi" in aturan else None)

    logging.info("Python CreateKoreksi function processed a request.")

    text = req.params.get("text")
    if not text:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        # else:
        #     text = req_body.get("text")

    ret = dict()

    if text:
        logging.info("Creating Koreksi.")
        doc = nlp(text)

        ret["document"] = doc.text
        ret["tokens"] = []
        ret["koreksi"] = []

        for i, token in enumerate(doc):
            ret["tokens"].append(
                {
                    "index" : i,
                    "text": token.text,
                    "lemma": token.lemma_,
                    "pos": token.pos_,
                    "tag": token.tag_,
                }
            )

        # ret["sentences"] = []

        # for sent in doc.sents:
        #     sent_container = {"sentence": sent.text, "tokens": []}

        #     # koreksi = []

        #     for token in sent:
        #         sent_container["tokens"].append(
        #             {"text": token.text, "lemma": token.lemma_, "pos": token.pos_}
        #         )

        #     #     if token.pos_ == "PUNCT":
        #     #         koreksi.append(token.text_with_ws)
        #     #     elif random.random() <= 0.9:
        #     #         if random.random() <= 0.5:
        #     #             koreksi.append(
        #     #                 "".join(
        #     #                     [
        #     #                         c
        #     #                         for c in token.text_with_ws
        #     #                         if (random.random() <= 0.9 or re.search(r"\s", c))
        #     #                     ]
        #     #                 )
        #     #             )
        #     #         else:
        #     #             koreksi.append(
        #     #                 token.lemma_ + (" " if token.text_with_ws[-1] == " " else "")
        #     #             )

        #     # sent_container["koreksi"] = "".join([token for token in koreksi])
        #     ret["sentences"].append(sent_container)

        matches = matcher(doc)
        for match_id, start, end in matches:
            string_id = nlp.vocab.strings[match_id]  # Get string representation
            span = doc[start:end]  # The matched span
            # print(match_id, string_id, start, end, span.text)
            ret["koreksi"].append(
                {"code": string_id, "start": start, "end": end, "text": span.text}
            )

        # new_docs = func.DocumentList()
        # new_docs.append(func.Document.from_dict(ret))
        # docs.set(new_docs)

        logging.info(doc.text)
        # return func.HttpResponse(
        #     f"Hello. This CreateKoreksi function executed successfully.\n{json.dumps(ret)}"
        # )
        return func.HttpResponse(
            f"{json.dumps(ret)}"
        )
    else:
        return func.HttpResponse(
            "This HTTP triggered function executed successfully. "
            + "Pass a text in the query string or in the request body for a text analytics.",
            status_code=200,
        )
