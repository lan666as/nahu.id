import corrections

aturan_tata_bahasa = [
    {
        "kode": "KATA_KERJA_KATA_GANTI_KATA_BENDA",
        "pola": [{"POS": "VERB"}, {"POS": "PRON"}, {"POS": "NOUN"}],
        "antipola": [],
        "keterangan": "Struktur <b>Kata kerja + Saya/mereka/dia (kata ganti) + kata benda</b> tidak sesuai.",
        "koreksi": corrections.KATA_KERJA_KATA_GANTI_KATA_BENDA,
        "contoh": {"awal": "Dia memakan saya apel", "akhir": "Dia memakan apel saya"},
        "sumber": "",
    },
    {
        "kode": "KATA_DEPAN_DI_DIPISAH",
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
        "antipola": [],
        "keterangan": "Kata <b>di</b> harus pisah dengan kata <b>benda/tempat</b>.",
        "koreksi": corrections.KATA_DEPAN_DI_DIPISAH,
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
        "antipola": [],
        "keterangan": "Awal kalimat harus menggunakan huruf kapital.",
        "koreksi": corrections.HURUF_KAPITAL_AWAL_KALIMAT,
        "contoh": {"awal": "dia sedang makan apel.", "akhir": "Dia sedang makan apel."},
        "sumber": "",
    },
    {
        "kode": "KOMA_SEBELUM_DAN",
        "pola": [{}, {"TEXT" : ","}, {"IS_PUNCT" : False, "OP" : "+"}, {"LOWER" : "dan"}, {"IS_PUNCT" : False}],
        "antipola": [],
        "keterangan": "Gunakan tanda koma sebelum kata 'dan'",
        "koreksi": corrections.KOMA_SEBELUM_DAN,
        "contoh": {"awal": "Kucing, singa, macan dan jaguar", "akhir": "Kucing, singa, macan, dan jaguar"},
        "sumber": "",
    },
]
