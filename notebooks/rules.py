import corrections

aturan_tata_bahasa = [
    {
        "kode": "KATA_KERJA_KATA_GANTI_KATA_BENDA",
        "pola": [{"POS": "VERB"}, {"POS": "PRON"}, {"POS": "NOUN"}],
        "keterangan": "Struktur <b>Kata kerja+Saya/mereka/dia (kata ganti)+kata benda</b> tidak sesuai",
        "koreksi": corrections.KATA_KERJA_KATA_GANTI_KATA_BENDA,
        "contoh": {"awal": "dia memakan saya apel", "akhir": "dia memakan apel saya"},
        "sumber": "",
    },
    {
        "kode": "KATA_DEPAN_DI",
        "pola": [
            {
                "LOWER": {"REGEX": "^di\w+"},
                "POS": {
                    "IN": [
                        "NOUN",
                        "ADP",
                    ]
                },
            }
        ],
        "keterangan": "<b>di</b> harus pisah dengan kata <b>benda/tempat</b>.",
        "koreksi": corrections.KATA_DEPAN_DI,
        "contoh": {"awal": "dikantor", "akhir": "di kantor"},
        "sumber": "",
    },
    # {
    #     "kode": "ATB_00002",
    #     "pola": [
    #         {
    #             "LOWER": {"REGEX": "^ke\w+"},
    #             # "POS": {
    #             #     "NOT_IN": [
    #             #         "VERB",
    #             #     ]
    #             # },
    #         }
    #     ],
    #     "keterangan": "<b>ke</b> harus pisah dengan kata yang mengikutinya.",
    #     "koreksi": corrections.ATB_00002,
    #     "contoh": {"awal": "kesana", "akhir": "ke sana"},
    #     "sumber": "",
    # },
]


aturan_tata_tulis = [
    {
        "kode": "HURUF_KAPITAL_AWAL_KALIMAT",
        "pola": [{"IS_SENT_START" : True, "TEXT" : {"REGEX" : "^[a-z].*"}}],
        "keterangan": "Awal kalimat harus menggunakan huruf kapital",
        "koreksi": corrections.HURUF_KAPITAL_AWAL_KALIMAT,
        "contoh": {"awal": "dia sedang makan apel.", "akhir": "Dia sedang makan apel."},
        "sumber": "",
    },
]
