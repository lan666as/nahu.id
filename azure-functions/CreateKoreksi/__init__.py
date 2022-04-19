import logging

import azure.functions as func
import stanza
import spacy_stanza
import json
import random
import re

stanza.download("id")
nlp = spacy_stanza.load_pipeline("id")


def main(req: func.HttpRequest, docs: func.Out[func.Document]) -> func.HttpResponse:
    logging.info("Python CreateKoreksi function processed a request.")

    text = req.params.get("text")
    if not text:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            text = req_body.get("text")

    if text:
        logging.info("Creating Koreksi.")
        doc = nlp(text)

        ret = dict()
        ret["document"] = doc.text
        ret["sentences"] = []

        for sent in doc.sents:
            sent_container = {"sentence": sent.text, "koreksi": "", "tokens": []}

            koreksi = []

            for token in sent:
                sent_container["tokens"].append(
                    {"text": token.text, "lemma": token.lemma_, "pos": token.pos_}
                )

                if token.pos_ == "PUNCT":
                    koreksi.append(token.text_with_ws)
                elif random.random() <= 0.9:
                    if random.random() <= 0.5:
                        koreksi.append(
                            "".join(
                                [
                                    c
                                    for c in token.text_with_ws
                                    if (random.random() <= 0.9 or re.search(r"\s", c))
                                ]
                            )
                        )
                    else:
                        koreksi.append(
                            token.lemma_ + (" " if token.text_with_ws[-1] == " " else "")
                        )

            sent_container["koreksi"] = "".join([token for token in koreksi])
            ret["sentences"].append(sent_container)

        new_docs = func.DocumentList()
        new_docs.append(func.Document.from_dict(ret))
        docs.set(new_docs)

        logging.info(doc.text)
        return func.HttpResponse(
            f"Hello. This CreateKoreksi function executed successfully.\n{json.dumps(ret)}"
        )
    else:
        return func.HttpResponse(
            "This HTTP triggered function executed successfully. "
            + "Pass a text in the query string or in the request body for a text analytics.",
            status_code=200,
        )