import spacy
import stanza
import spacy_stanza
import json
import random
import re

def init():
    global nlp
    stanza.download("id")
    nlp = spacy_stanza.load_pipeline("id")