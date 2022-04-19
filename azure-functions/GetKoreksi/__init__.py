import logging

import azure.functions as func
import json


def main(req: func.HttpRequest, docs: func.DocumentList) -> func.HttpResponse:
    logging.info("Python GetKoreksi function processed a request.")

    koreksi_list = []

    for doc in docs:
        koreksi = {"document": doc["document"], "sentences": []}

        for sentence in doc["sentences"]:
            koreksi["sentences"].append(
                {"sentence": sentence["sentence"], "koreksi": sentence["koreksi"]}
            )

        koreksi_list.append(koreksi)

    return func.HttpResponse(
        json.dumps(koreksi_list), status_code=200, mimetype="application/json"
    )