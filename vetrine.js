/* Mercatale, anteprima vetrine.
   Un'azienda per blocco dentro EX. Modificate solo questo file per correggere i dati.
   Campi: id, n (nome), cat (vino, olio, pasta, formaggi, salumi, dolci, conserve, caffe, liquori, misti),
   reg (regione), city, lat, lng, y (anno di fondazione o null), certs (DOP, DOC, DOCG, IGP, IGT, Bio),
   exp (Paesi in cui esporta: DE AT CH NL BE FR DK SE PL ES), lg (lingue: it en de fr es), moq (cartoni o null),
   d (storia in it, en, de), p (prodotti: [nome, formato, sottocategoria facoltativa]), pd (schede prodotto, chiave "ID-indice", con pr = prezzo al pubblico),
   sub (sottocategorie cliccabili nella vetrina: [{k, cat, n:{it,en,de}}], facoltativo), fonti (link usati).
   REGOLA SOTTOCATEGORIE: ogni sottocategoria ha "cat" = padiglione (vino, olio, liquori, ...). La vetrina compare
   automaticamente in tutti quei padiglioni, e aprendola da un padiglione si apre già sulla sottocategoria giusta.
   IMG: foto per chiave "logo-ID" (logo ufficiale dal sito dell'azienda: è anche la copertina della scheda in fiera),
   "prod-ID-indice". "stand-ID" (foto di copertina) va usato solo se manca il logo.
   Un dato non trovato resta null o vuoto: il sito mostra "Da completare". */
window.VETRINE = {
  "EX": [
    {
      "id": "V-01",
      "n": "Casa Garello",
      "cat": "vino",
      "reg": "Lombardia",
      "city": "Godiasco Salice Terme (PV)",
      "lat": 44.894,
      "lng": 9.054,
      "y": null,
      "certs": ["IGT"],
      "exp": [],
      "lg": ["it", "en"],
      "moq": null,
      "d": {
        "it": "Azienda agricola, cantina e agriturismo sulle colline di Salice Terme, nell'Oltrepò Pavese. La famiglia segue di persona vigna, cantina e cucina e vende il proprio vino direttamente, dal produttore al cliente. In gamma rossi Provincia di Pavia IGT: Pinot Nero, Barbera e un rosso affinato in rovere.",
        "en": "Farm, winery and agriturismo in the hills of Salice Terme, Oltrepò Pavese. The family personally runs the vineyard, cellar and kitchen and sells its own wine directly, from producer to customer. The range includes Provincia di Pavia IGT reds: Pinot Nero, Barbera and an oak-aged red.",
        "de": "Landwirtschaftsbetrieb, Weingut und Agriturismo in den Hügeln von Salice Terme im Oltrepò Pavese. Die Familie betreut Weinberg, Keller und Küche selbst und verkauft ihren Wein direkt vom Erzeuger an den Kunden. Im Sortiment: Rotweine Provincia di Pavia IGT, darunter Pinot Nero, Barbera und ein im Eichenfass gereifter Rotwein."
      },
      "p": [
        ["Bosco delle Gazze, Pinot Nero Provincia di Pavia IGT", "cartone da 6 bottiglie"],
        ["Barbera Provincia di Pavia IGT", "cartone da 6 bottiglie"],
        ["Sabbione, Rosso affinato in rovere Provincia di Pavia IGT", "cartone da 6 bottiglie"],
        ["Box degustazione", "cartone da 6 bottiglie miste"]
      ],
      "pd": {
        "V-01-0": {"c": ["IGT"], "d": {"it": "Pinot Nero, Provincia di Pavia IGT.", "en": "Pinot Nero, Provincia di Pavia IGT.", "de": "Pinot Nero, Provincia di Pavia IGT."}, "a": {"it": "", "en": "", "de": ""}},
        "V-01-1": {"c": ["IGT"], "d": {"it": "Barbera, Provincia di Pavia IGT.", "en": "Barbera, Provincia di Pavia IGT.", "de": "Barbera, Provincia di Pavia IGT."}, "a": {"it": "", "en": "", "de": ""}},
        "V-01-2": {"c": ["IGT"], "d": {"it": "Vino rosso affinato in rovere, Provincia di Pavia IGT.", "en": "Oak-aged red wine, Provincia di Pavia IGT.", "de": "Im Eichenfass gereifter Rotwein, Provincia di Pavia IGT."}, "a": {"it": "", "en": "", "de": ""}},
        "V-01-3": {"d": {"it": "Selezione di 6 bottiglie della cantina, tra rossi e bianchi.", "en": "A selection of 6 bottles from the winery, reds and whites.", "de": "Auswahl von 6 Flaschen des Weinguts, Rot- und Weißweine."}, "a": {"it": "", "en": "", "de": ""}}
      },
      "fonti": ["https://www.agricolacasagarello.it/bere-in-oltrepo-pavese/"]
    },
    {
      "id": "V-02",
      "n": "Podere Lucano",
      "cat": "olio",
      "reg": "Basilicata",
      "city": "Ripacandida (PZ)",
      "lat": 40.911,
      "lng": 15.725,
      "y": null,
      "certs": [
        "Bio",
        "DOCG",
        "IGP",
        "IGT"
      ],
      "exp": [],
      "lg": [
        "it"
      ],
      "moq": null,
      "d": {
        "it": "Piccola azienda agricola di famiglia a Ripacandida, nella zona del Vulture, nel nord della Basilicata. La famiglia lavora di persona uliveti e vigneti secondo l'agricoltura biologica: raccoglie a mano olive e uva, fa molire le olive in un frantoio della zona e vinifica nella propria cantina, con affinamento in rovere francese. Oltre all'olio extravergine bio produce vini da Aglianico del Vulture e altri vitigni locali e una grappa invecchiata in barrique.",
        "en": "Small family farm in Ripacandida, in the Vulture area of northern Basilicata. The family works its olive groves and vineyards itself, following organic farming methods: olives and grapes are picked by hand, the olives are milled at a local press and the wine is made in the farm's own cellar and aged in French oak. Besides organic extra virgin olive oil, it produces wines from Aglianico del Vulture and other local varieties, and a barrique-aged grappa.",
        "de": "Kleiner Familienbetrieb in Ripacandida im Vulture-Gebiet im Norden der Basilikata. Die Familie bewirtschaftet Olivenhaine und Weinberge selbst nach den Regeln des ökologischen Landbaus: Oliven und Trauben werden von Hand gelesen, die Oliven in einer Ölmühle der Gegend gepresst, der Wein im eigenen Keller ausgebaut und in französischer Eiche gereift. Neben Bio-Olivenöl extra vergine erzeugt der Betrieb Weine aus Aglianico del Vulture und anderen lokalen Sorten sowie einen im Barrique gereiften Grappa."
      },
      "sub": [
        {
          "k": "vini", "cat": "vino",
          "n": {
            "it": "Vini",
            "en": "Wines",
            "de": "Weine"
          }
        },
        {
          "k": "distillati", "cat": "liquori",
          "n": {
            "it": "Distillati",
            "en": "Spirits",
            "de": "Spirituosen"
          }
        },
        {
          "k": "olio", "cat": "olio",
          "n": {
            "it": "Olio",
            "en": "Olive oil",
            "de": "Olivenöl"
          }
        }
      ],
      "p": [
        [
          "Mastantuono 2017, Aglianico del Vulture Superiore DOCG Riserva",
          null,
          "vini"
        ],
        [
          "Augustus, rosso",
          null,
          "vini"
        ],
        [
          "Symposium, Aglianico del Vulture",
          null,
          "vini"
        ],
        [
          "Settecolli, rosso",
          null,
          "vini"
        ],
        [
          "Rosato Basilicata IGP",
          null,
          "vini"
        ],
        [
          "Greco Basilicata IGP",
          null,
          "vini"
        ],
        [
          "Moscato",
          null,
          "vini"
        ],
        [
          "D'ARIA, Spumante Bianco Extra Dry",
          null,
          "vini"
        ],
        [
          "Terra dei Lupi, Rosso Basilicata IGT",
          "bag in box da 3 litri",
          "vini"
        ],
        [
          "Grappa Barrique, Terra dei Lupi",
          null,
          "distillati"
        ],
        [
          "Olio extravergine di oliva Bio",
          "bottiglia da 0,75 litri",
          "olio"
        ],
        [
          "Olio extravergine di oliva Bio",
          "latta da 5 litri",
          "olio"
        ]
      ],
      "pd": {
        "V-02-0": {
          "c": [
            "DOCG"
          ],
          "pr": "25,00 €",
          "d": {
            "it": "Riserva da sole uve Aglianico del Vulture dei vigneti di famiglia, raccolte a mano. Macerazione di 20-25 giorni, 36 mesi in barrique nuove di rovere francese e almeno 24 mesi in bottiglia. 14% vol.",
            "en": "Riserva made only from hand-picked Aglianico del Vulture grapes from the family vineyards. 20-25 days of maceration, 36 months in new French oak barriques and at least 24 months in bottle. 14% vol.",
            "de": "Riserva ausschließlich aus handgelesenen Aglianico-del-Vulture-Trauben aus den eigenen Weinbergen. 20-25 Tage Maischestandzeit, 36 Monate in neuen Barriques aus französischer Eiche und mindestens 24 Monate auf der Flasche. 14% Vol."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-02-1": {
          "c": [],
          "pr": "18,00 €",
          "d": {
            "it": "Rosso a produzione limitata, con profumi intensi di ciliegia, amarena, prugna e spezie. Affinato in botti da 225 litri e almeno 6 mesi in bottiglia. 14% vol.",
            "en": "Limited-production red with intense aromas of cherry, sour cherry, plum and spice. Aged in 225-litre barrels and at least 6 months in bottle. 14% vol.",
            "de": "Rotwein in limitierter Produktion mit intensiven Aromen von Kirsche, Sauerkirsche, Pflaume und Gewürzen. Ausbau in 225-Liter-Fässern und mindestens 6 Monate auf der Flasche. 14% Vol."
          },
          "a": {
            "it": "Aprire la bottiglia un'ora prima di servirlo.",
            "en": "Open the bottle an hour before serving.",
            "de": "Die Flasche eine Stunde vor dem Servieren öffnen."
          }
        },
        "V-02-2": {
          "c": [],
          "pr": "15,00 €",
          "d": {
            "it": "Aglianico del Vulture in purezza da terreni vulcanici: un rosso morbido, armonico, con tannini delicati. 14% vol.",
            "en": "100% Aglianico del Vulture from volcanic soils: a smooth, balanced red with gentle tannins. 14% vol.",
            "de": "Reinsortiger Aglianico del Vulture von vulkanischen Böden: ein weicher, harmonischer Rotwein mit sanften Tanninen. 14% Vol."
          },
          "a": {
            "it": "Aprire la bottiglia un'ora prima di servirlo.",
            "en": "Open the bottle an hour before serving.",
            "de": "Die Flasche eine Stunde vor dem Servieren öffnen."
          }
        },
        "V-02-3": {
          "c": [],
          "pr": "8,00 €",
          "d": {
            "it": "Rosso rubino da uve delle colline del Vulture, su suoli vulcanici sabbiosi. Passa in botti da 225 litri e almeno 3 mesi in bottiglia. 13% vol.",
            "en": "Ruby red from grapes grown on the Vulture hills, on sandy volcanic soils. Aged in 225-litre barrels and at least 3 months in bottle. 13% vol.",
            "de": "Rubinroter Wein aus Trauben von den Hügeln des Vulture, auf sandigen Vulkanböden. Ausbau in 225-Liter-Fässern und mindestens 3 Monate auf der Flasche. 13% Vol."
          },
          "a": {
            "it": "Aprire la bottiglia un'ora prima di servirlo.",
            "en": "Open the bottle an hour before serving.",
            "de": "Die Flasche eine Stunde vor dem Servieren öffnen."
          }
        },
        "V-02-4": {
          "c": [
            "IGP"
          ],
          "pr": "8,00 €",
          "d": {
            "it": "Rosato da uve Aglianico, fresco ed equilibrato, con note di ciliegia, fragola e lampone. 13% vol.",
            "en": "Rosé from Aglianico grapes, fresh and balanced, with notes of cherry, strawberry and raspberry. 13% vol.",
            "de": "Roséwein aus Aglianico-Trauben, frisch und ausgewogen, mit Noten von Kirsche, Erdbeere und Himbeere. 13% Vol."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-02-5": {
          "c": [
            "IGP"
          ],
          "pr": "8,00 €",
          "d": {
            "it": "Bianco da uve Greco, giallo paglierino con riflessi dorati: fresco, fruttato e aromatico. 13% vol.",
            "en": "White from Greco grapes, straw yellow with golden hints: fresh, fruity and aromatic. 13% vol.",
            "de": "Weißwein aus Greco-Trauben, strohgelb mit goldenen Reflexen: frisch, fruchtig und aromatisch. 13% Vol."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-02-6": {
          "c": [],
          "pr": "8,00 €",
          "d": {
            "it": "Moscato in purezza, vendemmia a mano a settembre, fermentazione in acciaio e almeno 3 mesi in bottiglia. Giallo paglierino.",
            "en": "100% Moscato, hand-harvested in September, fermented in steel and aged at least 3 months in bottle. Straw yellow.",
            "de": "Reinsortiger Moscato, Handlese im September, Gärung im Stahltank und mindestens 3 Monate auf der Flasche. Strohgelb."
          },
          "a": {
            "it": "Con antipasti all'italiana e piatti di pesce.",
            "en": "With Italian antipasti and fish dishes.",
            "de": "Zu italienischen Antipasti und Fischgerichten."
          }
        },
        "V-02-7": {
          "c": [],
          "pr": "9,00 €",
          "d": {
            "it": "Spumante bianco Extra Dry da uve delle colline del Vulture, su terreni di origine vulcanica. 13% vol.",
            "en": "Extra Dry white sparkling wine from grapes grown on the Vulture hills, on volcanic soils. 13% vol.",
            "de": "Weißer Extra-Dry-Schaumwein aus Trauben von den Hügeln des Vulture, auf vulkanischen Böden. 13% Vol."
          },
          "a": {
            "it": "Per l'aperitivo e con antipasti leggeri.",
            "en": "For aperitifs and with light starters.",
            "de": "Zum Aperitif und zu leichten Vorspeisen."
          }
        },
        "V-02-8": {
          "c": [
            "IGT"
          ],
          "pr": "12,00 €",
          "d": {
            "it": "Rosso granato dal profumo vinoso con ricordi di viola, asciutto e sapido, in confezione bag in box.",
            "en": "Garnet red with a vinous nose and hints of violet, dry and savoury, in a bag-in-box pack.",
            "de": "Granatroter Wein mit weinigem Duft und Anklängen von Veilchen, trocken und würzig, im Bag-in-Box."
          },
          "a": {
            "it": "Con arrosti e primi piatti della cucina mediterranea.",
            "en": "With roasts and Mediterranean pasta dishes.",
            "de": "Zu Braten und mediterranen Nudelgerichten."
          }
        },
        "V-02-9": {
          "c": [],
          "pr": "25,00 €",
          "d": {
            "it": "Grappa da vinacce freschissime, distillata con alambicco discontinuo e invecchiata in carati di rovere francese. 42% vol.",
            "en": "Grappa from very fresh pomace, distilled in a discontinuous still and aged in French oak casks. 42% vol.",
            "de": "Grappa aus frischem Trester, im diskontinuierlichen Brennverfahren destilliert und in Fässern aus französischer Eiche gereift. 42% Vol."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-02-10": {
          "c": [
            "Bio"
          ],
          "pr": "14,00 €",
          "d": {
            "it": "Olio biologico 100% italiano da olive Cima di Melfi (70%) e Ogliarola del Vulture (30%), coltivate su terreni vulcanici alle pendici del Vulture.",
            "en": "100% Italian organic oil from Cima di Melfi (70%) and Ogliarola del Vulture (30%) olives, grown on volcanic soils on the slopes of Mount Vulture.",
            "de": "100% italienisches Bio-Öl aus Oliven der Sorten Cima di Melfi (70%) und Ogliarola del Vulture (30%), angebaut auf Vulkanböden am Hang des Vulture."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-02-11": {
          "c": [
            "Bio"
          ],
          "pr": "70,00 €",
          "d": {
            "it": "Lo stesso olio biologico Cima di Melfi e Ogliarola del Vulture, in latta da 5 litri.",
            "en": "The same organic Cima di Melfi and Ogliarola del Vulture oil, in a 5-litre tin.",
            "de": "Dasselbe Bio-Öl aus Cima di Melfi und Ogliarola del Vulture, im 5-Liter-Kanister."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        }
      },
      "fonti": [
        "https://poderelucano.com/vino-e-grappa-shop/",
        "https://poderelucano.com/olio-shop/",
        "https://poderelucano.com/azienda/"
      ]
    },
    {
      "id": "V-03",
      "n": "Il Monaco Felice",
      "cat": "conserve",
      "reg": "Campania",
      "city": "Agropoli (SA)",
      "lat": 40.35,
      "lng": 14.99,
      "y": null,
      "certs": [],
      "exp": [],
      "lg": [
        "it"
      ],
      "moq": null,
      "d": {
        "it": "Azienda di agricoltura naturale di Vito Monaco ad Agropoli, nel Parco Nazionale del Cilento, Vallo di Diano e Alburni, con un opificio agricolo annesso. Lavora a filiera chiusa: coltiva e trasforma solo erbe officinali e frutta di produzione propria e di stagione, dal campo al vaso. Produce liquori botanici per infusione naturale, infusi di erbe, sciroppi analcolici, confetture extra e composte dolci e salate, senza coloranti, additivi, pectine aggiunte, addensanti o conservanti di sintesi. La produzione segue le stagioni e ogni referenza è disponibile fino a esaurimento scorte.",
        "en": "Natural farm run by Vito Monaco in Agropoli, in the Cilento, Vallo di Diano and Alburni National Park, with its own small processing workshop. It works as a closed supply chain: it grows and processes only its own seasonal medicinal herbs and fruit, from field to jar. It makes botanical liqueurs by natural infusion, herb infusions, non-alcoholic syrups, extra jams and sweet and savoury compotes, with no colourings, additives, added pectin, thickeners or synthetic preservatives. Production follows the seasons and each product is available while stocks last.",
        "de": "Naturlandwirtschaftlicher Betrieb von Vito Monaco in Agropoli, im Nationalpark Cilento, Vallo di Diano und Alburni, mit eigener Verarbeitungswerkstatt. Der Betrieb arbeitet in geschlossener Lieferkette: Er baut nur eigene saisonale Heilkräuter und Früchte an und verarbeitet sie selbst, vom Feld bis ins Glas. Er stellt botanische Liköre durch natürliche Mazeration her, Kräuterauszüge, alkoholfreie Sirupe, Extra-Konfitüren sowie süße und herzhafte Kompotte, ohne Farbstoffe, Zusatzstoffe, zugesetztes Pektin, Verdickungsmittel oder synthetische Konservierungsstoffe. Die Produktion folgt den Jahreszeiten, jedes Produkt ist erhältlich, solange der Vorrat reicht."
      },
      "sub": [
        {
          "k": "liquori",
          "cat": "liquori",
          "n": {
            "it": "Liquori botanici",
            "en": "Botanical liqueurs",
            "de": "Botanische Liköre"
          }
        },
        {
          "k": "infusi",
          "cat": "liquori",
          "n": {
            "it": "Infusi di erbe",
            "en": "Herb infusions",
            "de": "Kräuterauszüge"
          }
        },
        {
          "k": "sciroppi",
          "cat": "conserve",
          "n": {
            "it": "Sciroppi analcolici",
            "en": "Non-alcoholic syrups",
            "de": "Alkoholfreie Sirupe"
          }
        },
        {
          "k": "confetture",
          "cat": "conserve",
          "n": {
            "it": "Confetture e composte",
            "en": "Jams and compotes",
            "de": "Konfitüren und Kompotte"
          }
        }
      ],
      "p": [
        [
          "Liquore botanico, Melograno",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Arancio",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Cetrangolo",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Mandarino",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Bergamotto",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Chinotto",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Prugnolo",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Rosa canina",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Viola selvatica",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Gelso bianco",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Nespolino",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Fico bianco",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Fico d'india",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, More selvatiche",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Mandorle",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Liquore botanico, Peperoncino",
          "bottiglia da 500 ml",
          "liquori"
        ],
        [
          "Infuso di erbe, Alloro",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Infuso di erbe, Rosmarino",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Infuso di erbe, Origano",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Infuso di erbe, Maggiorana",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Infuso di erbe, Melissa",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Infuso di erbe, Menta cioccolato",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Infuso di erbe, Menta cocktail",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Infuso di erbe, Salvia",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Infuso di erbe, Basilico viola",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Infuso di erbe, Foglie di ulivo",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Infuso di erbe, Foglie di fico bianco del Cilento",
          "bottiglia da 500 ml",
          "infusi"
        ],
        [
          "Sciroppo botanico analcolico, Menta",
          "bottiglia da 250 ml",
          "sciroppi"
        ],
        [
          "Sciroppo botanico analcolico, Salvia",
          "bottiglia da 250 ml",
          "sciroppi"
        ],
        [
          "Sciroppo botanico analcolico, Alloro",
          "bottiglia da 250 ml",
          "sciroppi"
        ],
        [
          "Sciroppo botanico analcolico, Melissa",
          "bottiglia da 250 ml",
          "sciroppi"
        ],
        [
          "Sciroppo botanico analcolico, Maggiorana",
          "bottiglia da 250 ml",
          "sciroppi"
        ],
        [
          "Sciroppo botanico analcolico, Basilico viola",
          "bottiglia da 250 ml",
          "sciroppi"
        ],
        [
          "Sciroppo botanico analcolico, More selvatiche",
          "bottiglia da 250 ml",
          "sciroppi"
        ],
        [
          "Sciroppo botanico analcolico, Foglie di ulivo",
          "bottiglia da 250 ml",
          "sciroppi"
        ],
        [
          "Sciroppo botanico analcolico, Foglie di fico bianco del Cilento",
          "bottiglia da 250 ml",
          "sciroppi"
        ],
        [
          "Confettura extra, Arancio",
          "barattolo da 212 ml",
          "confetture"
        ],
        [
          "Confettura extra, Cetrangolo",
          "barattolo da 212 ml",
          "confetture"
        ],
        [
          "Confettura extra, Limone",
          "barattolo da 212 ml",
          "confetture"
        ],
        [
          "Confettura extra, Mandarino",
          "barattolo da 212 ml",
          "confetture"
        ],
        [
          "Confettura extra, Gelsi bianchi",
          "barattolo da 212 ml",
          "confetture"
        ],
        [
          "Confettura extra, Fico bianco",
          "barattolo da 212 ml",
          "confetture"
        ],
        [
          "Confettura extra, Fico d'india",
          "barattolo da 212 ml",
          "confetture"
        ],
        [
          "Composta salata, Cicoria",
          "barattolo da 212 ml",
          "confetture"
        ],
        [
          "Composta salata, Borragine",
          "barattolo da 212 ml",
          "confetture"
        ],
        [
          "Composta salata, Broccolo selvatico",
          "barattolo da 212 ml",
          "confetture"
        ],
        [
          "Composta salata, Cardo mariano",
          "barattolo da 212 ml",
          "confetture"
        ]
      ],
      "pd": {
        "V-03-0": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione autunno/inverno, disponibile fino a esaurimento scorte.",
            "en": "Autumn/winter production, available while stocks last.",
            "de": "Herbst-/Winterproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-1": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione autunno/inverno, disponibile fino a esaurimento scorte.",
            "en": "Autumn/winter production, available while stocks last.",
            "de": "Herbst-/Winterproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-2": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione autunno/inverno, disponibile fino a esaurimento scorte.",
            "en": "Autumn/winter production, available while stocks last.",
            "de": "Herbst-/Winterproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-3": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione autunno/inverno, disponibile fino a esaurimento scorte.",
            "en": "Autumn/winter production, available while stocks last.",
            "de": "Herbst-/Winterproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-4": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione autunno/inverno, disponibile fino a esaurimento scorte.",
            "en": "Autumn/winter production, available while stocks last.",
            "de": "Herbst-/Winterproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-5": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione autunno/inverno, disponibile fino a esaurimento scorte.",
            "en": "Autumn/winter production, available while stocks last.",
            "de": "Herbst-/Winterproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-6": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione autunno/inverno, disponibile fino a esaurimento scorte.",
            "en": "Autumn/winter production, available while stocks last.",
            "de": "Herbst-/Winterproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-7": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione autunno/inverno, disponibile fino a esaurimento scorte.",
            "en": "Autumn/winter production, available while stocks last.",
            "de": "Herbst-/Winterproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-8": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione autunno/inverno, disponibile fino a esaurimento scorte.",
            "en": "Autumn/winter production, available while stocks last.",
            "de": "Herbst-/Winterproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-9": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione primavera/estate, disponibile fino a esaurimento scorte.",
            "en": "Spring/summer production, available while stocks last.",
            "de": "Frühjahrs-/Sommerproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-10": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione primavera/estate, disponibile fino a esaurimento scorte.",
            "en": "Spring/summer production, available while stocks last.",
            "de": "Frühjahrs-/Sommerproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-11": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione primavera/estate, disponibile fino a esaurimento scorte.",
            "en": "Spring/summer production, available while stocks last.",
            "de": "Frühjahrs-/Sommerproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-12": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione primavera/estate, disponibile fino a esaurimento scorte.",
            "en": "Spring/summer production, available while stocks last.",
            "de": "Frühjahrs-/Sommerproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-13": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione primavera/estate, disponibile fino a esaurimento scorte.",
            "en": "Spring/summer production, available while stocks last.",
            "de": "Frühjahrs-/Sommerproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-14": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione primavera/estate, disponibile fino a esaurimento scorte.",
            "en": "Spring/summer production, available while stocks last.",
            "de": "Frühjahrs-/Sommerproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-15": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Liquore artigianale ottenuto per infusione naturale diretta di frutta, fiori o erbe di produzione propria, senza aromi né estratti industriali.",
            "en": "Craft liqueur made by direct natural infusion of the farm's own fruit, flowers or herbs, with no flavourings or industrial extracts.",
            "de": "Handwerklicher Likör aus direkter natürlicher Mazeration von Früchten, Blüten oder Kräutern aus eigenem Anbau, ohne Aromen oder industrielle Extrakte."
          },
          "a": {
            "it": "Produzione primavera/estate, disponibile fino a esaurimento scorte.",
            "en": "Spring/summer production, available while stocks last.",
            "de": "Frühjahrs-/Sommerproduktion, solange der Vorrat reicht."
          }
        },
        "V-03-16": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-17": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-18": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-19": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-20": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-21": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-22": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-23": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-24": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-25": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-26": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Infuso alcolico di erbe officinali coltivate in azienda, ottenuto per infusione naturale subito dopo la raccolta.",
            "en": "Spirit infusion of medicinal herbs grown on the farm, made by natural infusion right after harvest.",
            "de": "Alkoholischer Auszug aus auf dem Hof angebauten Heilkräutern, durch natürliche Mazeration direkt nach der Ernte hergestellt."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-27": {
          "c": [],
          "pr": "5,00 €",
          "d": {
            "it": "Sciroppo botanico analcolico di erbe officinali e frutta di produzione propria, 100% naturale.",
            "en": "Non-alcoholic botanical syrup made from the farm's own medicinal herbs and fruit, 100% natural.",
            "de": "Alkoholfreier botanischer Sirup aus Heilkräutern und Früchten aus eigenem Anbau, 100% natürlich."
          },
          "a": {
            "it": "Per aromatizzare bevande calde o fredde, cocktail, yogurt o gelati.",
            "en": "To flavour hot or cold drinks, cocktails, yoghurt or ice cream.",
            "de": "Zum Aromatisieren von warmen oder kalten Getränken, Cocktails, Joghurt oder Eis."
          }
        },
        "V-03-28": {
          "c": [],
          "pr": "5,00 €",
          "d": {
            "it": "Sciroppo botanico analcolico di erbe officinali e frutta di produzione propria, 100% naturale.",
            "en": "Non-alcoholic botanical syrup made from the farm's own medicinal herbs and fruit, 100% natural.",
            "de": "Alkoholfreier botanischer Sirup aus Heilkräutern und Früchten aus eigenem Anbau, 100% natürlich."
          },
          "a": {
            "it": "Per aromatizzare bevande calde o fredde, cocktail, yogurt o gelati.",
            "en": "To flavour hot or cold drinks, cocktails, yoghurt or ice cream.",
            "de": "Zum Aromatisieren von warmen oder kalten Getränken, Cocktails, Joghurt oder Eis."
          }
        },
        "V-03-29": {
          "c": [],
          "pr": "5,00 €",
          "d": {
            "it": "Sciroppo botanico analcolico di erbe officinali e frutta di produzione propria, 100% naturale.",
            "en": "Non-alcoholic botanical syrup made from the farm's own medicinal herbs and fruit, 100% natural.",
            "de": "Alkoholfreier botanischer Sirup aus Heilkräutern und Früchten aus eigenem Anbau, 100% natürlich."
          },
          "a": {
            "it": "Per aromatizzare bevande calde o fredde, cocktail, yogurt o gelati.",
            "en": "To flavour hot or cold drinks, cocktails, yoghurt or ice cream.",
            "de": "Zum Aromatisieren von warmen oder kalten Getränken, Cocktails, Joghurt oder Eis."
          }
        },
        "V-03-30": {
          "c": [],
          "pr": "5,00 €",
          "d": {
            "it": "Sciroppo botanico analcolico di erbe officinali e frutta di produzione propria, 100% naturale.",
            "en": "Non-alcoholic botanical syrup made from the farm's own medicinal herbs and fruit, 100% natural.",
            "de": "Alkoholfreier botanischer Sirup aus Heilkräutern und Früchten aus eigenem Anbau, 100% natürlich."
          },
          "a": {
            "it": "Per aromatizzare bevande calde o fredde, cocktail, yogurt o gelati.",
            "en": "To flavour hot or cold drinks, cocktails, yoghurt or ice cream.",
            "de": "Zum Aromatisieren von warmen oder kalten Getränken, Cocktails, Joghurt oder Eis."
          }
        },
        "V-03-31": {
          "c": [],
          "pr": "5,00 €",
          "d": {
            "it": "Sciroppo botanico analcolico di erbe officinali e frutta di produzione propria, 100% naturale.",
            "en": "Non-alcoholic botanical syrup made from the farm's own medicinal herbs and fruit, 100% natural.",
            "de": "Alkoholfreier botanischer Sirup aus Heilkräutern und Früchten aus eigenem Anbau, 100% natürlich."
          },
          "a": {
            "it": "Per aromatizzare bevande calde o fredde, cocktail, yogurt o gelati.",
            "en": "To flavour hot or cold drinks, cocktails, yoghurt or ice cream.",
            "de": "Zum Aromatisieren von warmen oder kalten Getränken, Cocktails, Joghurt oder Eis."
          }
        },
        "V-03-32": {
          "c": [],
          "pr": "5,00 €",
          "d": {
            "it": "Sciroppo botanico analcolico di erbe officinali e frutta di produzione propria, 100% naturale.",
            "en": "Non-alcoholic botanical syrup made from the farm's own medicinal herbs and fruit, 100% natural.",
            "de": "Alkoholfreier botanischer Sirup aus Heilkräutern und Früchten aus eigenem Anbau, 100% natürlich."
          },
          "a": {
            "it": "Per aromatizzare bevande calde o fredde, cocktail, yogurt o gelati.",
            "en": "To flavour hot or cold drinks, cocktails, yoghurt or ice cream.",
            "de": "Zum Aromatisieren von warmen oder kalten Getränken, Cocktails, Joghurt oder Eis."
          }
        },
        "V-03-33": {
          "c": [],
          "pr": "5,00 €",
          "d": {
            "it": "Sciroppo botanico analcolico di erbe officinali e frutta di produzione propria, 100% naturale.",
            "en": "Non-alcoholic botanical syrup made from the farm's own medicinal herbs and fruit, 100% natural.",
            "de": "Alkoholfreier botanischer Sirup aus Heilkräutern und Früchten aus eigenem Anbau, 100% natürlich."
          },
          "a": {
            "it": "Per aromatizzare bevande calde o fredde, cocktail, yogurt o gelati.",
            "en": "To flavour hot or cold drinks, cocktails, yoghurt or ice cream.",
            "de": "Zum Aromatisieren von warmen oder kalten Getränken, Cocktails, Joghurt oder Eis."
          }
        },
        "V-03-34": {
          "c": [],
          "pr": "5,00 €",
          "d": {
            "it": "Sciroppo botanico analcolico di erbe officinali e frutta di produzione propria, 100% naturale.",
            "en": "Non-alcoholic botanical syrup made from the farm's own medicinal herbs and fruit, 100% natural.",
            "de": "Alkoholfreier botanischer Sirup aus Heilkräutern und Früchten aus eigenem Anbau, 100% natürlich."
          },
          "a": {
            "it": "Per aromatizzare bevande calde o fredde, cocktail, yogurt o gelati.",
            "en": "To flavour hot or cold drinks, cocktails, yoghurt or ice cream.",
            "de": "Zum Aromatisieren von warmen oder kalten Getränken, Cocktails, Joghurt oder Eis."
          }
        },
        "V-03-35": {
          "c": [],
          "pr": "5,00 €",
          "d": {
            "it": "Sciroppo botanico analcolico di erbe officinali e frutta di produzione propria, 100% naturale.",
            "en": "Non-alcoholic botanical syrup made from the farm's own medicinal herbs and fruit, 100% natural.",
            "de": "Alkoholfreier botanischer Sirup aus Heilkräutern und Früchten aus eigenem Anbau, 100% natürlich."
          },
          "a": {
            "it": "Per aromatizzare bevande calde o fredde, cocktail, yogurt o gelati.",
            "en": "To flavour hot or cold drinks, cocktails, yoghurt or ice cream.",
            "de": "Zum Aromatisieren von warmen oder kalten Getränken, Cocktails, Joghurt oder Eis."
          }
        },
        "V-03-36": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Confettura extra o composta con un'altissima percentuale di frutta fresca dell'azienda, a basso contenuto di zucchero, senza pectine aggiunte né addensanti.",
            "en": "Extra jam or compote with a very high share of the farm's fresh fruit, low in sugar, with no added pectin or thickeners.",
            "de": "Extra-Konfitüre oder Kompott mit sehr hohem Anteil an frischen Früchten vom Hof, zuckerarm, ohne zugesetztes Pektin oder Verdickungsmittel."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-37": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Confettura extra o composta con un'altissima percentuale di frutta fresca dell'azienda, a basso contenuto di zucchero, senza pectine aggiunte né addensanti.",
            "en": "Extra jam or compote with a very high share of the farm's fresh fruit, low in sugar, with no added pectin or thickeners.",
            "de": "Extra-Konfitüre oder Kompott mit sehr hohem Anteil an frischen Früchten vom Hof, zuckerarm, ohne zugesetztes Pektin oder Verdickungsmittel."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-38": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Confettura extra o composta con un'altissima percentuale di frutta fresca dell'azienda, a basso contenuto di zucchero, senza pectine aggiunte né addensanti.",
            "en": "Extra jam or compote with a very high share of the farm's fresh fruit, low in sugar, with no added pectin or thickeners.",
            "de": "Extra-Konfitüre oder Kompott mit sehr hohem Anteil an frischen Früchten vom Hof, zuckerarm, ohne zugesetztes Pektin oder Verdickungsmittel."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-39": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Confettura extra o composta con un'altissima percentuale di frutta fresca dell'azienda, a basso contenuto di zucchero, senza pectine aggiunte né addensanti.",
            "en": "Extra jam or compote with a very high share of the farm's fresh fruit, low in sugar, with no added pectin or thickeners.",
            "de": "Extra-Konfitüre oder Kompott mit sehr hohem Anteil an frischen Früchten vom Hof, zuckerarm, ohne zugesetztes Pektin oder Verdickungsmittel."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-40": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Confettura extra o composta con un'altissima percentuale di frutta fresca dell'azienda, a basso contenuto di zucchero, senza pectine aggiunte né addensanti.",
            "en": "Extra jam or compote with a very high share of the farm's fresh fruit, low in sugar, with no added pectin or thickeners.",
            "de": "Extra-Konfitüre oder Kompott mit sehr hohem Anteil an frischen Früchten vom Hof, zuckerarm, ohne zugesetztes Pektin oder Verdickungsmittel."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-41": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Confettura extra o composta con un'altissima percentuale di frutta fresca dell'azienda, a basso contenuto di zucchero, senza pectine aggiunte né addensanti.",
            "en": "Extra jam or compote with a very high share of the farm's fresh fruit, low in sugar, with no added pectin or thickeners.",
            "de": "Extra-Konfitüre oder Kompott mit sehr hohem Anteil an frischen Früchten vom Hof, zuckerarm, ohne zugesetztes Pektin oder Verdickungsmittel."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-42": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Confettura extra o composta con un'altissima percentuale di frutta fresca dell'azienda, a basso contenuto di zucchero, senza pectine aggiunte né addensanti.",
            "en": "Extra jam or compote with a very high share of the farm's fresh fruit, low in sugar, with no added pectin or thickeners.",
            "de": "Extra-Konfitüre oder Kompott mit sehr hohem Anteil an frischen Früchten vom Hof, zuckerarm, ohne zugesetztes Pektin oder Verdickungsmittel."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-43": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Composta salata di erbe selvatiche di stagione, senza addensanti né conservanti di sintesi.",
            "en": "Savoury compote of seasonal wild greens, with no thickeners or synthetic preservatives.",
            "de": "Herzhaftes Kompott aus saisonalen Wildkräutern, ohne Verdickungsmittel oder synthetische Konservierungsstoffe."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-44": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Composta salata di erbe selvatiche di stagione, senza addensanti né conservanti di sintesi.",
            "en": "Savoury compote of seasonal wild greens, with no thickeners or synthetic preservatives.",
            "de": "Herzhaftes Kompott aus saisonalen Wildkräutern, ohne Verdickungsmittel oder synthetische Konservierungsstoffe."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-45": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Composta salata di erbe selvatiche di stagione, senza addensanti né conservanti di sintesi.",
            "en": "Savoury compote of seasonal wild greens, with no thickeners or synthetic preservatives.",
            "de": "Herzhaftes Kompott aus saisonalen Wildkräutern, ohne Verdickungsmittel oder synthetische Konservierungsstoffe."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        },
        "V-03-46": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Composta salata di erbe selvatiche di stagione, senza addensanti né conservanti di sintesi.",
            "en": "Savoury compote of seasonal wild greens, with no thickeners or synthetic preservatives.",
            "de": "Herzhaftes Kompott aus saisonalen Wildkräutern, ohne Verdickungsmittel oder synthetische Konservierungsstoffe."
          },
          "a": {
            "it": "Disponibile in base alla stagione, fino a esaurimento scorte.",
            "en": "Seasonal, available while stocks last.",
            "de": "Saisonal, solange der Vorrat reicht."
          }
        }
      },
      "fonti": [
        "Listino 2026-2027 per Mercatale (inviato dall'azienda)",
        "https://aziendailmonacofel.wixsite.com/ilmiosito",
        "https://www.instagram.com/ilmonaco_felice2015/"
      ]
    },
    {
      "id": "V-04",
      "n": "Agricola San Nunzio",
      "cat": "olio",
      "reg": "Abruzzo",
      "city": "Tocco da Casauria (PE)",
      "lat": 42.211,
      "lng": 13.917,
      "y": null,
      "certs": [],
      "exp": [],
      "lg": [
        "it"
      ],
      "moq": null,
      "d": {
        "it": "Azienda agricola di Antonino Fiorentino in Val Pescara, tra Bolognano e Tocco da Casauria, nelle Terre di Casauria. Ha cominciato nel 2024 con i primi olivi di Bolognano e oggi coltiva circa trecento piante, quasi tutte secolari, di cui quasi duecento di Toccolana. Le olive si raccolgono con gli abbacchiatori sulle reti e si moliscono entro sei ore. Produce due oli extravergine: il Mandorlato e La Toccolana. Il nome viene da San Nunzio Sulprizio, che da ragazzo lavorò come apprendista nella bottega di Bolognano acquistata dall'azienda.",
        "en": "Antonino Fiorentino's farm in the Pescara valley, between Bolognano and Tocco da Casauria, in the Terre di Casauria. It started in 2024 with its first olive trees in Bolognano and now tends about three hundred trees, almost all of them centuries old, nearly two hundred of them Toccolana. The olives are harvested with beaters onto nets and milled within six hours. It produces two extra virgin olive oils: Mandorlato and La Toccolana. The name comes from Saint Nunzio Sulprizio, who as a boy was an apprentice in the Bolognano workshop the farm bought.",
        "de": "Landwirtschaftsbetrieb von Antonino Fiorentino im Pescara-Tal, zwischen Bolognano und Tocco da Casauria, in den Terre di Casauria. Er begann 2024 mit den ersten Olivenbäumen in Bolognano und pflegt heute rund dreihundert fast ausschließlich jahrhundertealte Bäume, davon fast zweihundert Toccolana. Die Oliven werden mit Schüttlern auf Netze geerntet und innerhalb von sechs Stunden gemahlen. Er erzeugt zwei Olivenöle extra vergine: Mandorlato und La Toccolana. Der Name stammt vom heiligen Nunzio Sulprizio, der als Junge Lehrling in der Werkstatt in Bolognano war, die der Betrieb gekauft hat."
      },
      "p": [
        [
          "Mandorlato, olio extravergine di oliva",
          "bottiglia da 0,5 litri"
        ],
        [
          "Mandorlato, olio extravergine di oliva",
          "latta da 2 litri"
        ],
        [
          "Mandorlato, olio extravergine di oliva",
          "latta da 5 litri"
        ],
        [
          "La Toccolana, olio extravergine di oliva monocultivar",
          "bottiglia da 0,5 litri"
        ],
        [
          "La Toccolana, olio extravergine di oliva monocultivar",
          "latta da 5 litri"
        ]
      ],
      "pd": {
        "V-04-0": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Blend di Toccolana e Leccino da olivi quasi tutti secolari. Sentore di mandorla e gusto pieno, che accompagna il piatto senza coprirlo. Analisi raccolta 2026: acidità 0,25%, polifenoli totali 648 mg/kg, perossidi 4,7 mEq O2/kg.",
            "en": "Blend of Toccolana and Leccino from mostly century-old trees. Hints of almond and a full flavour that complements the dish without overpowering it. 2026 harvest analysis: acidity 0.25%, total polyphenols 648 mg/kg, peroxides 4.7 mEq O2/kg.",
            "de": "Cuvée aus Toccolana und Leccino von fast ausschließlich jahrhundertealten Bäumen. Mandelnote und voller Geschmack, der das Gericht begleitet, ohne es zu überdecken. Analyse Ernte 2026: Säure 0,25%, Gesamtpolyphenole 648 mg/kg, Peroxide 4,7 mEq O2/kg."
          },
          "a": {
            "it": "Per pane e brace: bruschetta, carne alla griglia, legumi, cicoria ripassata, pecorino. Sempre a crudo. Conservare tappato, al buio, tra 14 e 18 °C.",
            "en": "For bread and grilled food: bruschetta, grilled meat, pulses, sautéed chicory, pecorino. Always raw. Store closed, in the dark, at 14-18 °C.",
            "de": "Für Brot und Grillgerichte: Bruschetta, gegrilltes Fleisch, Hülsenfrüchte, Zichorie, Pecorino. Immer roh verwenden. Verschlossen, dunkel und bei 14-18 °C lagern."
          }
        },
        "V-04-1": {
          "c": [],
          "pr": "80,00 €",
          "d": {
            "it": "Blend di Toccolana e Leccino da olivi quasi tutti secolari. Sentore di mandorla e gusto pieno, che accompagna il piatto senza coprirlo. Analisi raccolta 2026: acidità 0,25%, polifenoli totali 648 mg/kg, perossidi 4,7 mEq O2/kg.",
            "en": "Blend of Toccolana and Leccino from mostly century-old trees. Hints of almond and a full flavour that complements the dish without overpowering it. 2026 harvest analysis: acidity 0.25%, total polyphenols 648 mg/kg, peroxides 4.7 mEq O2/kg.",
            "de": "Cuvée aus Toccolana und Leccino von fast ausschließlich jahrhundertealten Bäumen. Mandelnote und voller Geschmack, der das Gericht begleitet, ohne es zu überdecken. Analyse Ernte 2026: Säure 0,25%, Gesamtpolyphenole 648 mg/kg, Peroxide 4,7 mEq O2/kg."
          },
          "a": {
            "it": "Per pane e brace: bruschetta, carne alla griglia, legumi, cicoria ripassata, pecorino. Sempre a crudo. Conservare tappato, al buio, tra 14 e 18 °C.",
            "en": "For bread and grilled food: bruschetta, grilled meat, pulses, sautéed chicory, pecorino. Always raw. Store closed, in the dark, at 14-18 °C.",
            "de": "Für Brot und Grillgerichte: Bruschetta, gegrilltes Fleisch, Hülsenfrüchte, Zichorie, Pecorino. Immer roh verwenden. Verschlossen, dunkel und bei 14-18 °C lagern."
          }
        },
        "V-04-2": {
          "c": [],
          "pr": "200,00 €",
          "d": {
            "it": "Blend di Toccolana e Leccino da olivi quasi tutti secolari. Sentore di mandorla e gusto pieno, che accompagna il piatto senza coprirlo. Analisi raccolta 2026: acidità 0,25%, polifenoli totali 648 mg/kg, perossidi 4,7 mEq O2/kg.",
            "en": "Blend of Toccolana and Leccino from mostly century-old trees. Hints of almond and a full flavour that complements the dish without overpowering it. 2026 harvest analysis: acidity 0.25%, total polyphenols 648 mg/kg, peroxides 4.7 mEq O2/kg.",
            "de": "Cuvée aus Toccolana und Leccino von fast ausschließlich jahrhundertealten Bäumen. Mandelnote und voller Geschmack, der das Gericht begleitet, ohne es zu überdecken. Analyse Ernte 2026: Säure 0,25%, Gesamtpolyphenole 648 mg/kg, Peroxide 4,7 mEq O2/kg."
          },
          "a": {
            "it": "Per pane e brace: bruschetta, carne alla griglia, legumi, cicoria ripassata, pecorino. Sempre a crudo. Conservare tappato, al buio, tra 14 e 18 °C.",
            "en": "For bread and grilled food: bruschetta, grilled meat, pulses, sautéed chicory, pecorino. Always raw. Store closed, in the dark, at 14-18 °C.",
            "de": "Für Brot und Grillgerichte: Bruschetta, gegrilltes Fleisch, Hülsenfrüchte, Zichorie, Pecorino. Immer roh verwenden. Verschlossen, dunkel und bei 14-18 °C lagern."
          }
        },
        "V-04-3": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Monocultivar Toccolana dalla contrada Marano, a Tocco da Casauria. Più delicato del Mandorlato: fine e leggero, con un netto sentore di pomodoro verde.",
            "en": "Single-variety Toccolana from the Marano district in Tocco da Casauria. More delicate than the Mandorlato: fine and light, with a distinct note of green tomato.",
            "de": "Sortenreines Toccolana-Öl aus der Lage Marano in Tocco da Casauria. Feiner als das Mandorlato: zart und leicht, mit deutlicher Note von grüner Tomate."
          },
          "a": {
            "it": "A crudo su insalate, pomodori, caprese, verdure crude, pesce crudo e legumi. Conservare tappato, al buio, tra 14 e 18 °C.",
            "en": "Raw on salads, tomatoes, caprese, raw vegetables, raw fish and pulses. Store closed, in the dark, at 14-18 °C.",
            "de": "Roh zu Salaten, Tomaten, Caprese, Rohkost, rohem Fisch und Hülsenfrüchten. Verschlossen, dunkel und bei 14-18 °C lagern."
          }
        },
        "V-04-4": {
          "c": [],
          "pr": "200,00 €",
          "d": {
            "it": "Monocultivar Toccolana dalla contrada Marano, a Tocco da Casauria. Più delicato del Mandorlato: fine e leggero, con un netto sentore di pomodoro verde.",
            "en": "Single-variety Toccolana from the Marano district in Tocco da Casauria. More delicate than the Mandorlato: fine and light, with a distinct note of green tomato.",
            "de": "Sortenreines Toccolana-Öl aus der Lage Marano in Tocco da Casauria. Feiner als das Mandorlato: zart und leicht, mit deutlicher Note von grüner Tomate."
          },
          "a": {
            "it": "A crudo su insalate, pomodori, caprese, verdure crude, pesce crudo e legumi. Conservare tappato, al buio, tra 14 e 18 °C.",
            "en": "Raw on salads, tomatoes, caprese, raw vegetables, raw fish and pulses. Store closed, in the dark, at 14-18 °C.",
            "de": "Roh zu Salaten, Tomaten, Caprese, Rohkost, rohem Fisch und Hülsenfrüchten. Verschlossen, dunkel und bei 14-18 °C lagern."
          }
        }
      },
      "fonti": [
        "https://agricolasannunzio.it/olio",
        "https://agricolasannunzio.it/storia"
      ]
    },
    {
      "id": "V-05",
      "n": "Pasta Romeo",
      "cat": "pasta",
      "reg": "Sicilia",
      "city": "Capo d'Orlando (ME)",
      "lat": 38.153,
      "lng": 14.745,
      "y": 1954,
      "certs": [],
      "exp": [],
      "lg": [
        "it"
      ],
      "moq": null,
      "d": {
        "it": "Pastificio artigianale di famiglia a Capo d'Orlando, sulla costa tirrenica in provincia di Messina, attivo dal 1954 e guidato da Felice Romeo. Lavora con pochi ingredienti di qualità e solo con processi di trasformazione naturali, seguendo la tradizione. Ha iniziato con la pasta fresca, che vende nel proprio negozio, e oggi produce anche pasta secca in molti formati: busiate, anelletti, conchiglioni e una linea all'uovo di spaghetti alla chitarra e tagliolini, anche aromatizzati. La pasta secca è venduta da rivenditori e online.",
        "en": "Family-run artisan pasta maker in Capo d'Orlando, on the Tyrrhenian coast in the province of Messina, in business since 1954 and led by Felice Romeo. It works with a few quality ingredients and only natural processing methods, following tradition. It started with fresh pasta, sold in its own shop, and now also makes dry pasta in many shapes: busiate, anelletti, conchiglioni and an egg pasta line of spaghetti alla chitarra and tagliolini, some of them flavoured. The dry pasta is sold through retailers and online.",
        "de": "Handwerkliche Nudelmanufaktur in Familienbesitz in Capo d'Orlando an der Tyrrhenischen Küste in der Provinz Messina, seit 1954 tätig und von Felice Romeo geführt. Sie arbeitet mit wenigen hochwertigen Zutaten und ausschließlich natürlichen Verarbeitungsverfahren nach traditioneller Art. Angefangen hat sie mit frischer Pasta, die im eigenen Laden verkauft wird; heute stellt sie auch Trockenpasta in vielen Formaten her: Busiate, Anelletti, Conchiglioni und eine Eiernudel-Linie aus Spaghetti alla chitarra und Tagliolini, teils aromatisiert. Die Trockenpasta wird über Händler und online verkauft."
      },
      "sub": [
        {
          "k": "semola",
          "cat": "pasta",
          "n": {
            "it": "Pasta di semola",
            "en": "Semolina pasta",
            "de": "Grießnudeln"
          }
        },
        {
          "k": "uovo",
          "cat": "pasta",
          "n": {
            "it": "Pasta all'uovo",
            "en": "Egg pasta",
            "de": "Eiernudeln"
          }
        }
      ],
      "p": [
        [
          "Busiata Tricolore",
          "250 g / 500 g",
          "semola"
        ],
        [
          "Busiata al Pistacchio",
          "250 g / 500 g",
          "semola"
        ],
        [
          "Busiata Classica",
          "250 g / 500 g",
          "semola"
        ],
        [
          "Anelletti Siciliani",
          "500 g",
          "semola"
        ],
        [
          "Conchiglioni Giganti",
          "500 g",
          "semola"
        ],
        [
          "Spaghetti alla Chitarra al Limone e Pepe Nero",
          "500 g",
          "uovo"
        ],
        [
          "Spaghetti alla Chitarra all'Uovo",
          "500 g",
          "uovo"
        ],
        [
          "Spaghetti alla Chitarra al Pistacchio",
          "500 g",
          "uovo"
        ],
        [
          "Spaghetti alla Chitarra al Peperoncino",
          "500 g",
          "uovo"
        ],
        [
          "Tagliolini all'Arancia",
          "500 g",
          "uovo"
        ],
        [
          "Tagliolini al Limone",
          "500 g",
          "uovo"
        ],
        [
          "Tagliolini all'Uovo",
          "500 g",
          "uovo"
        ],
        [
          "Tagliolini al Nero di Seppia",
          "500 g",
          "uovo"
        ]
      ],
      "pd": {
        "V-05-0": {
          "c": [],
          "pr": "2,30 € (250 g) · 4,50 € (500 g)",
          "d": {
            "it": "Busiata artigianale, la tipica pasta siciliana a spirale ottenuta avvolgendo la sfoglia attorno a un ferro. Tre impasti: semola di grano duro classica, agli spinaci e al peperoncino.",
            "en": "Artisan busiata, the typical Sicilian spiral pasta made by winding the dough around an iron rod. Three doughs: classic durum wheat semolina, spinach and chilli.",
            "de": "Handwerkliche Busiata, die typisch sizilianische Spiralnudel, bei der der Teig um einen Eisenstab gewickelt wird. Drei Teige: klassischer Hartweizengrieß, Spinat und Chili."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-1": {
          "c": [],
          "pr": "2,25 € (250 g) · 4,40 € (500 g)",
          "d": {
            "it": "Busiata artigianale, la tipica pasta siciliana a spirale ottenuta avvolgendo la sfoglia attorno a un ferro. Di semola di grano duro, acqua e pistacchi di Sicilia.",
            "en": "Artisan busiata, the typical Sicilian spiral pasta made by winding the dough around an iron rod. Made from durum wheat semolina, water and Sicilian pistachios.",
            "de": "Handwerkliche Busiata, die typisch sizilianische Spiralnudel, bei der der Teig um einen Eisenstab gewickelt wird. Aus Hartweizengrieß, Wasser und sizilianischen Pistazien."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-2": {
          "c": [],
          "pr": "1,95 € (250 g) · 3,80 € (500 g)",
          "d": {
            "it": "Busiata artigianale, la tipica pasta siciliana a spirale ottenuta avvolgendo la sfoglia attorno a un ferro. Di semola di grano duro e acqua.",
            "en": "Artisan busiata, the typical Sicilian spiral pasta made by winding the dough around an iron rod. Made from durum wheat semolina and water.",
            "de": "Handwerkliche Busiata, die typisch sizilianische Spiralnudel, bei der der Teig um einen Eisenstab gewickelt wird. Aus Hartweizengrieß und Wasser."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-3": {
          "c": [],
          "pr": "2,50 €",
          "d": {
            "it": "Pasta ad anello di semola di grano duro e acqua, il formato della pasta al forno siciliana.",
            "en": "Ring-shaped pasta made from durum wheat semolina and water, the shape used for Sicilian baked pasta.",
            "de": "Ringnudeln aus Hartweizengrieß und Wasser, das klassische Format für sizilianische Ofenpasta."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-4": {
          "c": [],
          "pr": "3,80 €",
          "d": {
            "it": "Conchiglie grandi di semola di grano duro, da farcire o da condire con sughi corposi.",
            "en": "Large durum wheat semolina shells, for stuffing or for rich sauces.",
            "de": "Große Muschelnudeln aus Hartweizengrieß, zum Füllen oder für kräftige Saucen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-5": {
          "c": [],
          "pr": "4,35 €",
          "d": {
            "it": "Pasta all'uovo artigianale di semola di grano duro e uova fresche, con scorza di limone e pepe nero macinato.",
            "en": "Artisan egg pasta made from durum wheat semolina and fresh eggs, with lemon zest and ground black pepper.",
            "de": "Handwerkliche Eiernudeln aus Hartweizengrieß und frischen Eiern, mit Zitronenschale und gemahlenem schwarzem Pfeffer."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-6": {
          "c": [],
          "pr": "3,00 €",
          "d": {
            "it": "Pasta all'uovo artigianale di semola di grano duro e uova fresche.",
            "en": "Artisan egg pasta made from durum wheat semolina and fresh eggs.",
            "de": "Handwerkliche Eiernudeln aus Hartweizengrieß und frischen Eiern."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-7": {
          "c": [],
          "pr": "4,40 €",
          "d": {
            "it": "Pasta all'uovo artigianale di semola di grano duro e uova fresche, con pistacchi di Sicilia.",
            "en": "Artisan egg pasta made from durum wheat semolina and fresh eggs, with Sicilian pistachios.",
            "de": "Handwerkliche Eiernudeln aus Hartweizengrieß und frischen Eiern, mit sizilianischen Pistazien."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-8": {
          "c": [],
          "pr": "3,90 €",
          "d": {
            "it": "Pasta all'uovo artigianale di semola di grano duro e uova fresche, con peperoncino piccante.",
            "en": "Artisan egg pasta made from durum wheat semolina and fresh eggs, with hot chilli.",
            "de": "Handwerkliche Eiernudeln aus Hartweizengrieß und frischen Eiern, mit scharfem Chili."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-9": {
          "c": [],
          "pr": "4,30 €",
          "d": {
            "it": "Pasta all'uovo artigianale di semola di grano duro e uova fresche, aromatizzata all'arancia.",
            "en": "Artisan egg pasta made from durum wheat semolina and fresh eggs, flavoured with orange.",
            "de": "Handwerkliche Eiernudeln aus Hartweizengrieß und frischen Eiern, mit Orangenaroma."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-10": {
          "c": [],
          "pr": "4,30 €",
          "d": {
            "it": "Pasta all'uovo artigianale di semola di grano duro e uova fresche, aromatizzata al limone.",
            "en": "Artisan egg pasta made from durum wheat semolina and fresh eggs, flavoured with lemon.",
            "de": "Handwerkliche Eiernudeln aus Hartweizengrieß und frischen Eiern, mit Zitronenaroma."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-11": {
          "c": [],
          "pr": "3,00 €",
          "d": {
            "it": "Pasta all'uovo artigianale di semola di grano duro e uova fresche.",
            "en": "Artisan egg pasta made from durum wheat semolina and fresh eggs.",
            "de": "Handwerkliche Eiernudeln aus Hartweizengrieß und frischen Eiern."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-05-12": {
          "c": [],
          "pr": "4,50 €",
          "d": {
            "it": "Pasta all'uovo artigianale di semola di grano duro e uova fresche, con nero di seppia.",
            "en": "Artisan egg pasta made from durum wheat semolina and fresh eggs, with cuttlefish ink.",
            "de": "Handwerkliche Eiernudeln aus Hartweizengrieß und frischen Eiern, mit Sepiatinte."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        }
      },
      "fonti": [
        "https://shop.sicilianstories.eu/it/brand/59-pasta-romeo",
        "https://www.pastaromeo.com/"
      ]
    },
    {
      "id": "V-06",
      "n": "Diegale",
      "cat": "vino",
      "reg": "Toscana",
      "city": "Civitella Marittima (GR)",
      "lat": 43,
      "lng": 11.27,
      "y": null,
      "certs": [
        "IGT"
      ],
      "exp": [],
      "lg": [
        "it"
      ],
      "moq": null,
      "logoBg": "#FF8800",
      "d": {
        "it": "Azienda agricola di famiglia a Podere Sant'Antimo, a Civitella Marittima, nella Maremma toscana. L'hanno creata da zero Alessandro e Paola, con il sostegno dei figli Gabriele e Sara, per fare vino nel rispetto della terra e delle stagioni. Il nome Diegale unisce i nomi dei nipoti, Diego e Alessandro. I vigneti sono tra 230 e 280 metri di quota, esposti a sud-sud/est, con vendemmia a mano. Produce rossi, un rosato e un bianco IGT Toscana e uno spumante Metodo Classico.",
        "en": "Family farm at Podere Sant'Antimo in Civitella Marittima, in the Tuscan Maremma. Alessandro and Paola built it from scratch, backed by their children Gabriele and Sara, to make wine with respect for the land and the seasons. The name Diegale combines the names of their grandsons, Diego and Alessandro. The vineyards lie between 230 and 280 metres, facing south-southeast, and are harvested by hand. It makes reds, a rosé and a white IGT Toscana, plus a traditional-method sparkling wine.",
        "de": "Familienweingut auf dem Podere Sant'Antimo in Civitella Marittima in der toskanischen Maremma. Alessandro und Paola haben es aus dem Nichts aufgebaut, unterstützt von ihren Kindern Gabriele und Sara, um Wein im Einklang mit Boden und Jahreszeiten zu machen. Der Name Diegale verbindet die Namen der Enkel Diego und Alessandro. Die Weinberge liegen auf 230 bis 280 Metern mit Süd-Südost-Ausrichtung, gelesen wird von Hand. Erzeugt werden Rotweine, ein Rosé und ein Weißwein IGT Toscana sowie ein Schaumwein nach klassischer Methode."
      },
      "p": [
        [
          "Diegale 2014, Pinot Noir",
          "bottiglia da 0,75 litri / 1,5 litri"
        ],
        [
          "Ciarlibò 2018, rosato",
          "bottiglia da 0,75 litri"
        ],
        [
          "Rossoscuro 2015",
          "bottiglia da 0,75 litri"
        ],
        [
          "Chaver 2015, bianco",
          "bottiglia da 0,75 litri"
        ],
        [
          "Cuordicru, Metodo Classico Dosaggio Zero",
          "bottiglia da 0,75 litri / 1,5 litri"
        ]
      ],
      "pd": {
        "V-06-0": {
          "c": [
            "IGT"
          ],
          "pr": "24,00 € (0,75 l) · 50,00 € (1,5 l)",
          "d": {
            "it": "IGT Toscana Rosso, Pinot Noir in purezza. Rosso rubino intenso, elegante e di facile beva, con un carattere maremmano. Affinato in tonneaux e barrique usate.",
            "en": "IGT Toscana Rosso, 100% Pinot Noir. Deep ruby red, elegant and easy to drink, with a Maremma character. Aged in used tonneaux and barriques.",
            "de": "IGT Toscana Rosso, reinsortiger Pinot Noir. Intensives Rubinrot, elegant und süffig, mit Maremma-Charakter. Ausbau in gebrauchten Tonneaux und Barriques."
          },
          "a": {
            "it": "Vigneti a 230-280 m di quota con esposizione sud-sud/est, vendemmia a mano.",
            "en": "Vineyards at 230-280 m facing south-southeast, harvested by hand.",
            "de": "Weinberge auf 230-280 m Höhe mit Süd-Südost-Ausrichtung, Handlese."
          }
        },
        "V-06-1": {
          "c": [
            "IGT"
          ],
          "pr": "14,00 €",
          "d": {
            "it": "IGT Toscana Rosato, Grenache in purezza. Rosato da uva a bacca rossa con 12-18 ore di fermentazione sulle bucce, affinato in acciaio. Profumi di melograno e frutti rossi, con agrumi in fiore e petali di rosa; colore intenso, da tutto pasto.",
            "en": "IGT Toscana Rosato, 100% Grenache. Rosé from red grapes with 12-18 hours of fermentation on the skins, aged in steel. Aromas of pomegranate and red fruit, with citrus blossom and rose petals; deep colour, good with a whole meal.",
            "de": "IGT Toscana Rosato, reinsortiger Grenache. Roséwein aus roten Trauben mit 12-18 Stunden Gärung auf der Maische, Ausbau im Stahltank. Duft von Granatapfel und roten Früchten, mit Zitrusblüten und Rosenblättern; intensive Farbe, passt zu einem ganzen Menü."
          },
          "a": {
            "it": "Vigneti a 230-280 m di quota con esposizione sud-sud/est, vendemmia a mano.",
            "en": "Vineyards at 230-280 m facing south-southeast, harvested by hand.",
            "de": "Weinberge auf 230-280 m Höhe mit Süd-Südost-Ausrichtung, Handlese."
          }
        },
        "V-06-2": {
          "c": [
            "IGT"
          ],
          "pr": "20,00 €",
          "d": {
            "it": "IGT Toscana Rosso da Sangiovese (70%), Grenache (15%) e Syrah (15%). Rubino scuro con riflessi violacei, note di frutta nera, fruttato e floreale, equilibrato. Affinato in tonneaux e barrique usate.",
            "en": "IGT Toscana Rosso from Sangiovese (70%), Grenache (15%) and Syrah (15%). Dark ruby with violet hints, notes of black fruit, fruity and floral, well balanced. Aged in used tonneaux and barriques.",
            "de": "IGT Toscana Rosso aus Sangiovese (70%), Grenache (15%) und Syrah (15%). Dunkles Rubinrot mit violetten Reflexen, Noten von schwarzen Früchten, fruchtig und blumig, ausgewogen. Ausbau in gebrauchten Tonneaux und Barriques."
          },
          "a": {
            "it": "Vigneti a 230-280 m di quota con esposizione sud-sud/est, vendemmia a mano.",
            "en": "Vineyards at 230-280 m facing south-southeast, harvested by hand.",
            "de": "Weinberge auf 230-280 m Höhe mit Süd-Südost-Ausrichtung, Handlese."
          }
        },
        "V-06-3": {
          "c": [
            "IGT"
          ],
          "pr": "12,00 €",
          "d": {
            "it": "IGT Toscana Bianco da Chardonnay e Vermentino, un abbinamento insolito di due vitigni. Affinato in acciaio.",
            "en": "IGT Toscana Bianco from Chardonnay and Vermentino, an unusual pairing of two varieties. Aged in steel.",
            "de": "IGT Toscana Bianco aus Chardonnay und Vermentino, eine ungewöhnliche Kombination zweier Rebsorten. Ausbau im Stahltank."
          },
          "a": {
            "it": "Vigneti a 230-280 m di quota con esposizione sud-sud/est, vendemmia a mano.",
            "en": "Vineyards at 230-280 m facing south-southeast, harvested by hand.",
            "de": "Weinberge auf 230-280 m Höhe mit Süd-Südost-Ausrichtung, Handlese."
          }
        },
        "V-06-4": {
          "c": [],
          "pr": "30,00 € (0,75 l) · 60,00 € (1,5 l)",
          "d": {
            "it": "Spumante Metodo Classico da Chardonnay e Pinot Noir, dosaggio zero, 36 mesi sui lieviti. Vino spumante di qualità (VSQ) Extra Brut.",
            "en": "Traditional-method sparkling wine from Chardonnay and Pinot Noir, zero dosage, 36 months on the lees. Quality sparkling wine (VSQ) Extra Brut.",
            "de": "Schaumwein nach klassischer Methode aus Chardonnay und Pinot Noir, ohne Dosage, 36 Monate auf der Hefe. Qualitätsschaumwein (VSQ) Extra Brut."
          },
          "a": {
            "it": "Vigneti a 230-280 m di quota con esposizione sud-sud/est, vendemmia a mano.",
            "en": "Vineyards at 230-280 m facing south-southeast, harvested by hand.",
            "de": "Weinberge auf 230-280 m Höhe mit Süd-Südost-Ausrichtung, Handlese."
          }
        }
      },
      "fonti": [
        "https://www.diegalewineshop.info/wineshop",
        "https://www.diegalewineshop.info/chisiamo",
        "https://www.diegalewineshop.info/contatti",
        "https://www.diegale.it/i-nostri-vini/ciarlibo/"
      ]
    },
    {
      "id": "V-07",
      "n": "Ca' de Cartocci",
      "cat": "olio",
      "reg": "Toscana",
      "city": "Arezzo (AR)",
      "lat": 43.42,
      "lng": 11.85,
      "y": null,
      "certs": [
        "IGP",
        "Bio"
      ],
      "exp": [],
      "lg": [
        "it",
        "en"
      ],
      "moq": null,
      "d": {
        "it": "Azienda agricola a conduzione familiare da generazioni in località Fontiano, ad Arezzo, nel cuore della Valdichiana. Coltiva olivi secolari su colline tra 300 e 400 metri di quota, con pratiche sostenibili; le olive vanno subito al frantoio e diventano olio extravergine toscano IGP. Nel campo in Valdichiana coltiva anche l'Aglione della Valdichiana, l'aglio bianco e il fagiolino dall'occhio, e prepara conserve con l'aglione e le verdure di stagione.",
        "en": "Family-run farm for generations in Fontiano, Arezzo, in the heart of the Valdichiana. It grows century-old olive trees on hills between 300 and 400 metres using sustainable practices; the olives go straight to the mill and become Tuscan IGP extra virgin olive oil. In its Valdichiana field it also grows Aglione della Valdichiana, white garlic and black-eyed beans, and makes preserves with aglione and seasonal vegetables.",
        "de": "Seit Generationen familiengeführter Landwirtschaftsbetrieb in Fontiano bei Arezzo, im Herzen des Valdichiana. Er pflegt jahrhundertealte Olivenbäume auf Hügeln zwischen 300 und 400 Metern mit nachhaltigen Methoden; die Oliven kommen sofort in die Ölmühle und werden zu toskanischem Olivenöl extra vergine g.g.A. Auf seinem Feld im Valdichiana baut er außerdem Aglione della Valdichiana, weißen Knoblauch und Augenbohnen an und stellt Konserven mit Aglione und saisonalem Gemüse her."
      },
      "sub": [
        {
          "k": "olio",
          "cat": "olio",
          "n": {
            "it": "Olio extravergine",
            "en": "Extra virgin olive oil",
            "de": "Olivenöl extra vergine"
          }
        },
        {
          "k": "aglione",
          "cat": "conserve",
          "n": {
            "it": "Aglione e conserve",
            "en": "Aglione and preserves",
            "de": "Aglione und Konserven"
          }
        }
      ],
      "p": [
        [
          "Olio extravergine di oliva toscano IGP",
          "bottiglia da 100 ml",
          "olio"
        ],
        [
          "Olio extravergine di oliva toscano IGP",
          "bottiglia da 250 ml",
          "olio"
        ],
        [
          "Olio extravergine di oliva toscano IGP",
          "latta da 250 ml",
          "olio"
        ],
        [
          "Olio extravergine di oliva toscano IGP",
          "bottiglia da 500 ml",
          "olio"
        ],
        [
          "Olio extravergine di oliva toscano IGP",
          "latta da 500 ml",
          "olio"
        ],
        [
          "Olio extravergine di oliva toscano IGP",
          "bottiglia da 750 ml",
          "olio"
        ],
        [
          "Olio extravergine di oliva toscano IGP",
          "3 litri",
          "olio"
        ],
        [
          "Olio extravergine di oliva toscano IGP",
          "5 litri",
          "olio"
        ],
        [
          "Aglione della Valdichiana",
          "al chilo",
          "aglione"
        ],
        [
          "Crema di Aglione della Valdichiana",
          "vasetto",
          "aglione"
        ],
        [
          "Sugo all'Aglione della Valdichiana",
          "vasetto",
          "aglione"
        ],
        [
          "Zucchine sott'olio Stuzzicaperitivi",
          "vasetto",
          "aglione"
        ],
        [
          "Zucchine al pomodoro",
          "vasetto",
          "aglione"
        ]
      ],
      "pd": {
        "V-07-0": {
          "c": [
            "IGP"
          ],
          "pr": "6,00 €",
          "d": {
            "it": "Olio extravergine di oliva toscano IGP da olivi secolari della Valdichiana. Sentori erbacei e di oliva, note di mandorla e ortaggi freschi; in bocca amaro lieve e piccante medio, con sensazioni vegetali.",
            "en": "Tuscan IGP extra virgin olive oil from century-old olive trees in the Valdichiana. Grassy and olive aromas with notes of almond and fresh vegetables; on the palate a light bitterness and medium pungency, with green notes.",
            "de": "Toskanisches Olivenöl extra vergine g.g.A. von jahrhundertealten Olivenbäumen im Valdichiana. Grasige Aromen und Olivennoten, dazu Mandel und frisches Gemüse; im Mund leicht bitter und mittel scharf, mit grünen Noten."
          },
          "a": {
            "it": "Olive raccolte a giusta maturazione e portate subito al frantoio.",
            "en": "Olives picked at the right ripeness and taken straight to the mill.",
            "de": "Oliven werden im richtigen Reifegrad geerntet und sofort zur Ölmühle gebracht."
          }
        },
        "V-07-1": {
          "c": [
            "IGP"
          ],
          "pr": "9,00 €",
          "d": {
            "it": "Olio extravergine di oliva toscano IGP da olivi secolari della Valdichiana. Sentori erbacei e di oliva, note di mandorla e ortaggi freschi; in bocca amaro lieve e piccante medio, con sensazioni vegetali.",
            "en": "Tuscan IGP extra virgin olive oil from century-old olive trees in the Valdichiana. Grassy and olive aromas with notes of almond and fresh vegetables; on the palate a light bitterness and medium pungency, with green notes.",
            "de": "Toskanisches Olivenöl extra vergine g.g.A. von jahrhundertealten Olivenbäumen im Valdichiana. Grasige Aromen und Olivennoten, dazu Mandel und frisches Gemüse; im Mund leicht bitter und mittel scharf, mit grünen Noten."
          },
          "a": {
            "it": "Olive raccolte a giusta maturazione e portate subito al frantoio.",
            "en": "Olives picked at the right ripeness and taken straight to the mill.",
            "de": "Oliven werden im richtigen Reifegrad geerntet und sofort zur Ölmühle gebracht."
          }
        },
        "V-07-2": {
          "c": [
            "IGP"
          ],
          "pr": "9,00 €",
          "d": {
            "it": "Olio extravergine di oliva toscano IGP da olivi secolari della Valdichiana. Sentori erbacei e di oliva, note di mandorla e ortaggi freschi; in bocca amaro lieve e piccante medio, con sensazioni vegetali.",
            "en": "Tuscan IGP extra virgin olive oil from century-old olive trees in the Valdichiana. Grassy and olive aromas with notes of almond and fresh vegetables; on the palate a light bitterness and medium pungency, with green notes.",
            "de": "Toskanisches Olivenöl extra vergine g.g.A. von jahrhundertealten Olivenbäumen im Valdichiana. Grasige Aromen und Olivennoten, dazu Mandel und frisches Gemüse; im Mund leicht bitter und mittel scharf, mit grünen Noten."
          },
          "a": {
            "it": "Olive raccolte a giusta maturazione e portate subito al frantoio.",
            "en": "Olives picked at the right ripeness and taken straight to the mill.",
            "de": "Oliven werden im richtigen Reifegrad geerntet und sofort zur Ölmühle gebracht."
          }
        },
        "V-07-3": {
          "c": [
            "IGP"
          ],
          "pr": "18,00 €",
          "d": {
            "it": "Olio extravergine di oliva toscano IGP da olivi secolari della Valdichiana. Sentori erbacei e di oliva, note di mandorla e ortaggi freschi; in bocca amaro lieve e piccante medio, con sensazioni vegetali.",
            "en": "Tuscan IGP extra virgin olive oil from century-old olive trees in the Valdichiana. Grassy and olive aromas with notes of almond and fresh vegetables; on the palate a light bitterness and medium pungency, with green notes.",
            "de": "Toskanisches Olivenöl extra vergine g.g.A. von jahrhundertealten Olivenbäumen im Valdichiana. Grasige Aromen und Olivennoten, dazu Mandel und frisches Gemüse; im Mund leicht bitter und mittel scharf, mit grünen Noten."
          },
          "a": {
            "it": "Olive raccolte a giusta maturazione e portate subito al frantoio.",
            "en": "Olives picked at the right ripeness and taken straight to the mill.",
            "de": "Oliven werden im richtigen Reifegrad geerntet und sofort zur Ölmühle gebracht."
          }
        },
        "V-07-4": {
          "c": [
            "IGP"
          ],
          "pr": "16,00 €",
          "d": {
            "it": "Olio extravergine di oliva toscano IGP da olivi secolari della Valdichiana. Sentori erbacei e di oliva, note di mandorla e ortaggi freschi; in bocca amaro lieve e piccante medio, con sensazioni vegetali.",
            "en": "Tuscan IGP extra virgin olive oil from century-old olive trees in the Valdichiana. Grassy and olive aromas with notes of almond and fresh vegetables; on the palate a light bitterness and medium pungency, with green notes.",
            "de": "Toskanisches Olivenöl extra vergine g.g.A. von jahrhundertealten Olivenbäumen im Valdichiana. Grasige Aromen und Olivennoten, dazu Mandel und frisches Gemüse; im Mund leicht bitter und mittel scharf, mit grünen Noten."
          },
          "a": {
            "it": "Olive raccolte a giusta maturazione e portate subito al frantoio.",
            "en": "Olives picked at the right ripeness and taken straight to the mill.",
            "de": "Oliven werden im richtigen Reifegrad geerntet und sofort zur Ölmühle gebracht."
          }
        },
        "V-07-5": {
          "c": [
            "IGP"
          ],
          "pr": "22,00 €",
          "d": {
            "it": "Olio extravergine di oliva toscano IGP da olivi secolari della Valdichiana. Sentori erbacei e di oliva, note di mandorla e ortaggi freschi; in bocca amaro lieve e piccante medio, con sensazioni vegetali.",
            "en": "Tuscan IGP extra virgin olive oil from century-old olive trees in the Valdichiana. Grassy and olive aromas with notes of almond and fresh vegetables; on the palate a light bitterness and medium pungency, with green notes.",
            "de": "Toskanisches Olivenöl extra vergine g.g.A. von jahrhundertealten Olivenbäumen im Valdichiana. Grasige Aromen und Olivennoten, dazu Mandel und frisches Gemüse; im Mund leicht bitter und mittel scharf, mit grünen Noten."
          },
          "a": {
            "it": "Olive raccolte a giusta maturazione e portate subito al frantoio.",
            "en": "Olives picked at the right ripeness and taken straight to the mill.",
            "de": "Oliven werden im richtigen Reifegrad geerntet und sofort zur Ölmühle gebracht."
          }
        },
        "V-07-6": {
          "c": [
            "IGP"
          ],
          "pr": "66,00 €",
          "d": {
            "it": "Olio extravergine di oliva toscano IGP da olivi secolari della Valdichiana. Sentori erbacei e di oliva, note di mandorla e ortaggi freschi; in bocca amaro lieve e piccante medio, con sensazioni vegetali.",
            "en": "Tuscan IGP extra virgin olive oil from century-old olive trees in the Valdichiana. Grassy and olive aromas with notes of almond and fresh vegetables; on the palate a light bitterness and medium pungency, with green notes.",
            "de": "Toskanisches Olivenöl extra vergine g.g.A. von jahrhundertealten Olivenbäumen im Valdichiana. Grasige Aromen und Olivennoten, dazu Mandel und frisches Gemüse; im Mund leicht bitter und mittel scharf, mit grünen Noten."
          },
          "a": {
            "it": "Olive raccolte a giusta maturazione e portate subito al frantoio.",
            "en": "Olives picked at the right ripeness and taken straight to the mill.",
            "de": "Oliven werden im richtigen Reifegrad geerntet und sofort zur Ölmühle gebracht."
          }
        },
        "V-07-7": {
          "c": [
            "IGP"
          ],
          "pr": "100,00 €",
          "d": {
            "it": "Olio extravergine di oliva toscano IGP da olivi secolari della Valdichiana. Sentori erbacei e di oliva, note di mandorla e ortaggi freschi; in bocca amaro lieve e piccante medio, con sensazioni vegetali.",
            "en": "Tuscan IGP extra virgin olive oil from century-old olive trees in the Valdichiana. Grassy and olive aromas with notes of almond and fresh vegetables; on the palate a light bitterness and medium pungency, with green notes.",
            "de": "Toskanisches Olivenöl extra vergine g.g.A. von jahrhundertealten Olivenbäumen im Valdichiana. Grasige Aromen und Olivennoten, dazu Mandel und frisches Gemüse; im Mund leicht bitter und mittel scharf, mit grünen Noten."
          },
          "a": {
            "it": "Olive raccolte a giusta maturazione e portate subito al frantoio.",
            "en": "Olives picked at the right ripeness and taken straight to the mill.",
            "de": "Oliven werden im richtigen Reifegrad geerntet und sofort zur Ölmühle gebracht."
          }
        },
        "V-07-8": {
          "c": [],
          "pr": "18,00 €/kg fresco · 20-25 €/kg secco",
          "d": {
            "it": "Bulbo di grandi dimensioni, fino a 800 grammi, con spicchi che arrivano a 70-80 g. Più dolce e delicato dell'aglio comune, con un contenuto di allina molto basso. Si vende fresco oppure secco: il prezzo del secco sale da luglio (20 €/kg) ad agosto (22 €/kg) e da settembre in poi (25 €/kg).",
            "en": "A very large bulb, up to 800 grams, with cloves of 70-80 g. Sweeter and milder than common garlic, with very low alliin content. Sold fresh or dried: the dried price rises from July (20 €/kg) to August (22 €/kg) and from September on (25 €/kg).",
            "de": "Sehr große Knolle bis 800 Gramm mit Zehen von 70-80 g. Milder und feiner als gewöhnlicher Knoblauch, mit sehr wenig Alliin. Erhältlich frisch oder getrocknet: der Preis für getrockneten steigt von Juli (20 €/kg) über August (22 €/kg) bis ab September (25 €/kg)."
          },
          "a": {
            "it": "Disponibile da luglio a dicembre; la vendita riprende dal 15 giugno.",
            "en": "Available from July to December; sales resume from 15 June.",
            "de": "Erhältlich von Juli bis Dezember; der Verkauf beginnt wieder ab 15. Juni."
          }
        },
        "V-07-9": {
          "c": [],
          "pr": "6,00 € (1 pz) · 30,00 € (6 pz)",
          "d": {
            "it": "Crema pronta a base di Aglione della Valdichiana, da usare come base per pasta, riso, vellutate e crostini.",
            "en": "Ready-made cream of Aglione della Valdichiana, a base for pasta, rice, soups and crostini.",
            "de": "Fertige Creme aus Aglione della Valdichiana, als Grundlage für Pasta, Reis, Suppen und Crostini."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-07-10": {
          "c": [],
          "pr": "6,00 € (1 pz) · 30,00 € (6 pz)",
          "d": {
            "it": "Sugo vegetale, senza carne, da ricette semplici: per pasta di ogni formato, pici, tagliatelle e bruschette.",
            "en": "Plant-based sauce without meat, from simple recipes: for any pasta shape, pici, tagliatelle and bruschetta.",
            "de": "Pflanzliche Sauce ohne Fleisch nach einfachen Rezepten: für alle Nudelsorten, Pici, Tagliatelle und Bruschetta."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-07-11": {
          "c": [],
          "pr": "7,00 € (1 pz) · 36,00 € (6 pz)",
          "d": {
            "it": "Zucchine di stagione sott'olio preparate come una volta, con pochi ingredienti semplici. Da aperitivo.",
            "en": "Seasonal courgettes in oil made the old-fashioned way, with a few simple ingredients. For aperitifs.",
            "de": "Saisonale Zucchini in Öl nach alter Art, mit wenigen einfachen Zutaten. Zum Aperitif."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-07-12": {
          "c": [],
          "pr": "7,00 € (1 pz) · 36,00 € (6 pz)",
          "d": {
            "it": "Zucchine cotte nella salsa di pomodoro con olio extravergine e un pizzico di finocchietto. Per antipasti e contorni.",
            "en": "Courgettes cooked in tomato sauce with extra virgin olive oil and a pinch of wild fennel. For starters and side dishes.",
            "de": "Zucchini in Tomatensauce mit Olivenöl extra vergine und einer Prise wildem Fenchel gegart. Für Vorspeisen und Beilagen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        }
      },
      "fonti": [
        "https://www.cadecartocci.it/shop/",
        "https://www.cadecartocci.it/"
      ]
    },
    {
      "id": "V-08",
      "n": "Agrigiò",
      "cat": "pasta",
      "reg": "Puglia",
      "city": "Candela (FG)",
      "lat": 41.14,
      "lng": 15.51,
      "y": null,
      "certs": [],
      "exp": [],
      "lg": [
        "it"
      ],
      "moq": null,
      "d": {
        "it": "Azienda agricola di Generoso Siconolfi, detto Gio Giò, a Candela, in provincia di Foggia: quarta generazione di una famiglia di coltivatori. Lavora 100 ettari con metodi sostenibili e punta sul grano duro Senatore Cappelli, con circa 2.000 quintali l'anno. Metà del raccolto diventa farina, macinata a pietra naturale in azienda; l'altra metà diventa pasta, biscotti e scaldatelli, i taralli tipici del territorio. A Natale produce anche panettoni artigianali.",
        "en": "Farm run by Generoso Siconolfi, known as Gio Giò, in Candela, province of Foggia: the fourth generation of a farming family. It works 100 hectares with sustainable methods and focuses on Senatore Cappelli durum wheat, about 200 tonnes a year. Half the harvest becomes flour, ground on natural stone on the farm; the other half becomes pasta, biscuits and scaldatelli, the area's typical taralli. At Christmas it also makes artisan panettoni.",
        "de": "Landwirtschaftsbetrieb von Generoso Siconolfi, genannt Gio Giò, in Candela in der Provinz Foggia: vierte Generation einer Bauernfamilie. Er bewirtschaftet 100 Hektar mit nachhaltigen Methoden und setzt auf den Hartweizen Senatore Cappelli, rund 200 Tonnen pro Jahr. Die Hälfte der Ernte wird im Betrieb auf Naturstein zu Mehl gemahlen, die andere Hälfte zu Pasta, Keksen und Scaldatelli, den typischen Taralli der Gegend, verarbeitet. Zu Weihnachten gibt es auch handwerkliche Panettoni."
      },
      "sub": [
        {
          "k": "pasta",
          "cat": "pasta",
          "n": {
            "it": "Pasta",
            "en": "Pasta",
            "de": "Pasta"
          }
        },
        {
          "k": "farine",
          "cat": "pasta",
          "n": {
            "it": "Farine",
            "en": "Flours",
            "de": "Mehle"
          }
        },
        {
          "k": "biscotti",
          "cat": "dolci",
          "n": {
            "it": "Biscotti",
            "en": "Biscuits",
            "de": "Kekse"
          }
        },
        {
          "k": "panettoni",
          "cat": "dolci",
          "n": {
            "it": "Panettoni",
            "en": "Panettoni",
            "de": "Panettoni"
          }
        },
        {
          "k": "scaldatelli",
          "cat": "misti",
          "n": {
            "it": "Scaldatelli e bruschette",
            "en": "Scaldatelli and bruschette",
            "de": "Scaldatelli und Bruschette"
          }
        }
      ],
      "p": [
        [
          "Panettone Classico Artigianale",
          "750 g",
          "panettoni"
        ],
        [
          "Panettone Artigianale con Uvetta",
          "750 g",
          "panettoni"
        ],
        [
          "Panettone Artigianale Uvetta e Vino",
          "750 g",
          "panettoni"
        ],
        [
          "Panettone Artigianale con gocce di Cioccolato",
          "750 g",
          "panettoni"
        ],
        [
          "Panettone Artigianale al Pistacchio",
          "750 g",
          "panettoni"
        ],
        [
          "Panettone Artigianale al Caffè",
          "750 g",
          "panettoni"
        ],
        [
          "Panettone Artigianale Vegano",
          "750 g",
          "panettoni"
        ],
        [
          "Biscotti Ripieni al Caffè",
          "300 g",
          "biscotti"
        ],
        [
          "Biscotti al Caffè",
          "300 g",
          "biscotti"
        ],
        [
          "Biscotti Vegani al Grano Arso",
          "300 g",
          "biscotti"
        ],
        [
          "Biscotti Vegani con Uvetta e Vino Rosso",
          "300 g",
          "biscotti"
        ],
        [
          "Biscotti Vegani all'Orzo",
          "300 g",
          "biscotti"
        ],
        [
          "Biscotti ripieni all'Amarena (Vegani)",
          "250 g",
          "biscotti"
        ],
        [
          "Biscotti con Gocce di Cioccolato (Vegani)",
          "250 g",
          "biscotti"
        ],
        [
          "Biscotti Integrali alla Cannella",
          "300 g",
          "biscotti"
        ],
        [
          "Biscotti al Cacao",
          "250 g",
          "biscotti"
        ],
        [
          "Biscotti alle Mandorle",
          "250 g",
          "biscotti"
        ],
        [
          "Biscotti ripieni alla Nocciola",
          "250 g",
          "biscotti"
        ],
        [
          "Biscotti ripieni di Albicocca",
          "250 g",
          "biscotti"
        ],
        [
          "Biscotti Ciambelle",
          "300 g",
          "biscotti"
        ],
        [
          "Biscotti Frollini",
          "300 g",
          "biscotti"
        ],
        [
          "Scaldatelli al Finocchio Senatore Cappelli",
          "300 g",
          "scaldatelli"
        ],
        [
          "Scaldatelli al Finocchio",
          "350 g",
          "scaldatelli"
        ],
        [
          "Scaldatelli al Peperoncino",
          "350 g",
          "scaldatelli"
        ],
        [
          "Scaldatelli al Sale Marino Integrale",
          "350 g",
          "scaldatelli"
        ],
        [
          "Scaldatelli al Grano Arso",
          "300 g",
          "scaldatelli"
        ],
        [
          "Scaldatelli di Orzo",
          "300 g",
          "scaldatelli"
        ],
        [
          "Scaldatelli alla Spirulina",
          "300 g",
          "scaldatelli"
        ],
        [
          "Scaldatelli integrali",
          "300 g",
          "scaldatelli"
        ],
        [
          "Bruschette integrali Senatore Cappelli",
          "250 g",
          "scaldatelli"
        ],
        [
          "Orecchiette Senatore Cappelli",
          "500 g",
          "pasta"
        ],
        [
          "Orecchiette al Grano Arso",
          "500 g",
          "pasta"
        ],
        [
          "Cavatelli Senatore Cappelli",
          "500 g",
          "pasta"
        ],
        [
          "Cavatelli di Grano Arso",
          "500 g",
          "pasta"
        ],
        [
          "Ricce Contadine",
          "500 g",
          "pasta"
        ],
        [
          "Gemelli Senatore Cappelli",
          "500 g",
          "pasta"
        ],
        [
          "Spaghetti Spezzati Senatore Cappelli",
          "500 g",
          "pasta"
        ],
        [
          "Semolato di Grano Duro Senatore Cappelli",
          "1 kg / 5 kg",
          "farine"
        ],
        [
          "Farina Tipo 1 di Grano Tenero",
          "1 kg / 5 kg",
          "farine"
        ],
        [
          "Farina di Grano Arso",
          "500 g / 1 kg / 5 kg",
          "farine"
        ]
      ],
      "pd": {
        "V-08-0": {
          "c": [],
          "pr": "25,00 €",
          "d": {
            "it": "Panettone artigianale da 750 g con farina di grano macinato a pietra dell'azienda. La ricetta classica.",
            "en": "Artisan 750 g panettone made with the farm's own stone-ground flour. The classic recipe.",
            "de": "Handwerklicher Panettone (750 g) mit dem steingemahlenen Mehl des Betriebs. Das klassische Rezept."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-1": {
          "c": [],
          "pr": "25,00 €",
          "d": {
            "it": "Panettone artigianale da 750 g con farina di grano macinato a pietra dell'azienda. Con uvetta e senza canditi; burro di centrifuga, tuorli d'uovo da allevamento a terra, miele d'acacia e vaniglia in bacche.",
            "en": "Artisan 750 g panettone made with the farm's own stone-ground flour. With raisins and no candied fruit; centrifuged butter, barn egg yolks, acacia honey and vanilla pods.",
            "de": "Handwerklicher Panettone (750 g) mit dem steingemahlenen Mehl des Betriebs. Mit Rosinen und ohne kandierte Früchte; Zentrifugenbutter, Eigelb aus Bodenhaltung, Akazienhonig und Vanilleschoten."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-2": {
          "c": [],
          "pr": "25,00 €",
          "d": {
            "it": "Panettone artigianale da 750 g con farina di grano macinato a pietra dell'azienda. Con uvetta e vino.",
            "en": "Artisan 750 g panettone made with the farm's own stone-ground flour. With raisins and wine.",
            "de": "Handwerklicher Panettone (750 g) mit dem steingemahlenen Mehl des Betriebs. Mit Rosinen und Wein."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-3": {
          "c": [],
          "pr": "25,00 €",
          "d": {
            "it": "Panettone artigianale da 750 g con farina di grano macinato a pietra dell'azienda. Con gocce di cioccolato.",
            "en": "Artisan 750 g panettone made with the farm's own stone-ground flour. With chocolate chips.",
            "de": "Handwerklicher Panettone (750 g) mit dem steingemahlenen Mehl des Betriebs. Mit Schokoladenstückchen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-4": {
          "c": [],
          "pr": "25,00 €",
          "d": {
            "it": "Panettone artigianale da 750 g con farina di grano macinato a pietra dell'azienda. Al pistacchio; burro di centrifuga, tuorli d'uovo freschi, miele d'acacia e vaniglia in bacche.",
            "en": "Artisan 750 g panettone made with the farm's own stone-ground flour. With pistachio; centrifuged butter, fresh egg yolks, acacia honey and vanilla pods.",
            "de": "Handwerklicher Panettone (750 g) mit dem steingemahlenen Mehl des Betriebs. Mit Pistazie; Zentrifugenbutter, frisches Eigelb, Akazienhonig und Vanilleschoten."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-5": {
          "c": [],
          "pr": "25,00 €",
          "d": {
            "it": "Panettone artigianale da 750 g con farina di grano macinato a pietra dell'azienda. Al caffè.",
            "en": "Artisan 750 g panettone made with the farm's own stone-ground flour. With coffee.",
            "de": "Handwerklicher Panettone (750 g) mit dem steingemahlenen Mehl des Betriebs. Mit Kaffee."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-6": {
          "c": [],
          "pr": "25,00 €",
          "d": {
            "it": "Panettone artigianale da 750 g con farina di grano macinato a pietra dell'azienda. Ricetta 100% vegetale.",
            "en": "Artisan 750 g panettone made with the farm's own stone-ground flour. 100% plant-based recipe.",
            "de": "Handwerklicher Panettone (750 g) mit dem steingemahlenen Mehl des Betriebs. Rein pflanzliches Rezept."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-7": {
          "c": [],
          "pr": "6,00 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Frolla friabile con un ripieno morbido al caffè; uova fresche e burro italiano.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. Crumbly shortcrust with a soft coffee filling; fresh eggs and Italian butter.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mürber Teig mit weicher Kaffeefüllung; frische Eier und italienische Butter."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-8": {
          "c": [],
          "pr": "4,40 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Al caffè, con uova fresche e burro italiano.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. Coffee flavoured, with fresh eggs and Italian butter.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mit Kaffee, frischen Eiern und italienischer Butter."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-9": {
          "c": [],
          "pr": "4,40 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Con farina di grano arso. Vegani: senza uova, latte e burro.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. With burnt wheat flour (grano arso). Vegan: no eggs, milk or butter.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mit Mehl aus geröstetem Weizen (Grano Arso). Vegan: ohne Eier, Milch und Butter."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-10": {
          "c": [],
          "pr": "4,40 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Con uvetta e vino rosso. Vegani: senza uova, latte e burro.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. With raisins and red wine. Vegan: no eggs, milk or butter.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mit Rosinen und Rotwein. Vegan: ohne Eier, Milch und Butter."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-11": {
          "c": [],
          "pr": "4,40 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. All'orzo. Vegani: senza uova, latte e burro.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. With barley. Vegan: no eggs, milk or butter.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mit Gerste. Vegan: ohne Eier, Milch und Butter."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-12": {
          "c": [],
          "pr": "4,40 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Ripieni all'amarena. Vegani: senza uova, latte e burro.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. Filled with sour cherry. Vegan: no eggs, milk or butter.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mit Sauerkirschfüllung. Vegan: ohne Eier, Milch und Butter."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-13": {
          "c": [],
          "pr": "4,40 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Con gocce di cioccolato. Vegani: senza uova, latte e burro.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. With chocolate chips. Vegan: no eggs, milk or butter.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mit Schokoladenstückchen. Vegan: ohne Eier, Milch und Butter."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-14": {
          "c": [],
          "pr": "4,00 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Integrali, alla cannella. Vegani: senza uova, latte e burro.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. Wholemeal, with cinnamon. Vegan: no eggs, milk or butter.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Vollkorn, mit Zimt. Vegan: ohne Eier, Milch und Butter."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-15": {
          "c": [],
          "pr": "4,40 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Al cacao.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. With cocoa.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mit Kakao."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-16": {
          "c": [],
          "pr": "4,40 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Alle mandorle.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. With almonds.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mit Mandeln."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-17": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Ripieni alla nocciola.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. Filled with hazelnut.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mit Haselnussfüllung."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-18": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Ripieni di albicocca.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. Filled with apricot.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Mit Aprikosenfüllung."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-19": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. A forma di ciambella.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. Ring-shaped.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. In Kringelform."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-20": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Biscotti artigianali fatti con le farine macinate a pietra dell'azienda. Frollini classici.",
            "en": "Artisan biscuits made with the farm's own stone-ground flours. Classic shortbread biscuits.",
            "de": "Handwerkliche Kekse aus den steingemahlenen Mehlen des Betriebs. Klassisches Mürbegebäck."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-21": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Scaldatelli, i taralli pugliesi della tradizione dauna. Al finocchio, con semola Senatore Cappelli.",
            "en": "Scaldatelli, the traditional taralli of the Daunia area in Puglia. With fennel, made with Senatore Cappelli semolina.",
            "de": "Scaldatelli, die traditionellen Taralli aus der Daunia in Apulien. Mit Fenchel, aus Senatore-Cappelli-Grieß."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-22": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Scaldatelli, i taralli pugliesi della tradizione dauna. Al finocchio, con farina di grano tenero tipo 1.",
            "en": "Scaldatelli, the traditional taralli of the Daunia area in Puglia. With fennel, made with type 1 soft wheat flour.",
            "de": "Scaldatelli, die traditionellen Taralli aus der Daunia in Apulien. Mit Fenchel, aus Weichweizenmehl Typ 1."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-23": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Scaldatelli, i taralli pugliesi della tradizione dauna. Al peperoncino, con farina di grano tenero tipo 1.",
            "en": "Scaldatelli, the traditional taralli of the Daunia area in Puglia. With chilli, made with type 1 soft wheat flour.",
            "de": "Scaldatelli, die traditionellen Taralli aus der Daunia in Apulien. Mit Chili, aus Weichweizenmehl Typ 1."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-24": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Scaldatelli, i taralli pugliesi della tradizione dauna. Con sale marino integrale.",
            "en": "Scaldatelli, the traditional taralli of the Daunia area in Puglia. With unrefined sea salt.",
            "de": "Scaldatelli, die traditionellen Taralli aus der Daunia in Apulien. Mit naturbelassenem Meersalz."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-25": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Scaldatelli, i taralli pugliesi della tradizione dauna. Con farina di grano arso.",
            "en": "Scaldatelli, the traditional taralli of the Daunia area in Puglia. With burnt wheat flour (grano arso).",
            "de": "Scaldatelli, die traditionellen Taralli aus der Daunia in Apulien. Mit Mehl aus geröstetem Weizen (Grano Arso)."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-26": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Scaldatelli, i taralli pugliesi della tradizione dauna. All'orzo.",
            "en": "Scaldatelli, the traditional taralli of the Daunia area in Puglia. With barley.",
            "de": "Scaldatelli, die traditionellen Taralli aus der Daunia in Apulien. Mit Gerste."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-27": {
          "c": [],
          "pr": "4,80 €",
          "d": {
            "it": "Scaldatelli, i taralli pugliesi della tradizione dauna. Alla spirulina.",
            "en": "Scaldatelli, the traditional taralli of the Daunia area in Puglia. With spirulina.",
            "de": "Scaldatelli, die traditionellen Taralli aus der Daunia in Apulien. Mit Spirulina."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-28": {
          "c": [],
          "pr": "4,20 €",
          "d": {
            "it": "Scaldatelli, i taralli pugliesi della tradizione dauna. Integrali.",
            "en": "Scaldatelli, the traditional taralli of the Daunia area in Puglia. Wholemeal.",
            "de": "Scaldatelli, die traditionellen Taralli aus der Daunia in Apulien. Vollkorn."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-29": {
          "c": [],
          "pr": "3,00 €",
          "d": {
            "it": "Bruschette integrali di grano duro Senatore Cappelli.",
            "en": "Wholemeal bruschetta toasts made from Senatore Cappelli durum wheat.",
            "de": "Vollkorn-Bruschette aus Senatore-Cappelli-Hartweizen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-30": {
          "c": [],
          "pr": "3,70 €",
          "d": {
            "it": "Orecchiette di semolato di grano duro Senatore Cappelli. Il grano è coltivato dall'azienda e macinato a pietra.",
            "en": "Orecchiette made from Senatore Cappelli durum wheat semolina. The wheat is grown on the farm and stone-ground.",
            "de": "Orecchiette aus Hartweizengrieß der Sorte Senatore Cappelli. Der Weizen wird vom Betrieb angebaut und auf Stein gemahlen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-31": {
          "c": [],
          "pr": "3,80 €",
          "d": {
            "it": "Orecchiette di semolato di grano duro Senatore Cappelli e farina di grano arso. Il grano è coltivato dall'azienda e macinato a pietra.",
            "en": "Orecchiette made from Senatore Cappelli durum wheat semolina and burnt wheat flour (grano arso). The wheat is grown on the farm and stone-ground.",
            "de": "Orecchiette aus Senatore-Cappelli-Hartweizengrieß und Mehl aus geröstetem Weizen (Grano Arso). Der Weizen wird vom Betrieb angebaut und auf Stein gemahlen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-32": {
          "c": [],
          "pr": "3,20 €",
          "d": {
            "it": "Cavatelli di semolato di grano duro Senatore Cappelli. Il grano è coltivato dall'azienda e macinato a pietra.",
            "en": "Cavatelli made from Senatore Cappelli durum wheat semolina. The wheat is grown on the farm and stone-ground.",
            "de": "Cavatelli aus Hartweizengrieß der Sorte Senatore Cappelli. Der Weizen wird vom Betrieb angebaut und auf Stein gemahlen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-33": {
          "c": [],
          "pr": "3,70 €",
          "d": {
            "it": "Cavatelli di semolato di grano duro Senatore Cappelli e farina di grano arso. Il grano è coltivato dall'azienda e macinato a pietra.",
            "en": "Cavatelli made from Senatore Cappelli durum wheat semolina and burnt wheat flour (grano arso). The wheat is grown on the farm and stone-ground.",
            "de": "Cavatelli aus Senatore-Cappelli-Hartweizengrieß und Mehl aus geröstetem Weizen (Grano Arso). Der Weizen wird vom Betrieb angebaut und auf Stein gemahlen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-34": {
          "c": [],
          "pr": "3,70 €",
          "d": {
            "it": "Ricce contadine di semolato di grano duro Senatore Cappelli. Il grano è coltivato dall'azienda e macinato a pietra.",
            "en": "Ricce contadine made from Senatore Cappelli durum wheat semolina. The wheat is grown on the farm and stone-ground.",
            "de": "Ricce contadine aus Hartweizengrieß der Sorte Senatore Cappelli. Der Weizen wird vom Betrieb angebaut und auf Stein gemahlen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-35": {
          "c": [],
          "pr": "3,70 €",
          "d": {
            "it": "Gemelli di grano duro Senatore Cappelli. Il grano è coltivato dall'azienda e macinato a pietra.",
            "en": "Gemelli made from Senatore Cappelli durum wheat. The wheat is grown on the farm and stone-ground.",
            "de": "Gemelli aus Senatore-Cappelli-Hartweizen. Der Weizen wird vom Betrieb angebaut und auf Stein gemahlen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-36": {
          "c": [],
          "pr": "3,70 €",
          "d": {
            "it": "Spaghetti spezzati di semola di grano duro Senatore Cappelli. Il grano è coltivato dall'azienda e macinato a pietra.",
            "en": "Broken spaghetti made from Senatore Cappelli durum wheat semolina. The wheat is grown on the farm and stone-ground.",
            "de": "Gebrochene Spaghetti aus Senatore-Cappelli-Hartweizengrieß. Der Weizen wird vom Betrieb angebaut und auf Stein gemahlen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-37": {
          "c": [],
          "pr": "4,00 € (1 kg) · 16,00 € (5 kg)",
          "d": {
            "it": "Semolato di grano duro Senatore Cappelli, coltivato dall'azienda e macinato a pietra naturale.",
            "en": "Senatore Cappelli durum wheat semolina, grown on the farm and ground on natural stone.",
            "de": "Hartweizengrieß der Sorte Senatore Cappelli, vom Betrieb angebaut und auf Naturstein gemahlen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-38": {
          "c": [],
          "pr": "3,20 € (1 kg) · 14,40 € (5 kg)",
          "d": {
            "it": "Farina di grano tenero tipo 1, macinata a pietra naturale.",
            "en": "Type 1 soft wheat flour, ground on natural stone.",
            "de": "Weichweizenmehl Typ 1, auf Naturstein gemahlen."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-08-39": {
          "c": [],
          "pr": "3,20 € (500 g) · 5,60 € (1 kg) · 23,90 € (5 kg)",
          "d": {
            "it": "Farina di grano arso, tipica della tradizione pugliese, dal gusto tostato.",
            "en": "Burnt wheat flour (grano arso), typical of Puglia's tradition, with a toasted flavour.",
            "de": "Mehl aus geröstetem Weizen (Grano Arso), typisch für die apulische Tradition, mit Röstaroma."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        }
      },
      "fonti": [
        "https://agrigio.com/negozio/",
        "https://agrigio.com/chi-siamo/"
      ]
    },
    {
      "id": "V-09",
      "n": "Castagnini (Vini Apuani)",
      "cat": "vino",
      "reg": "Toscana",
      "city": "Carrara (MS)",
      "lat": 44.07,
      "lng": 10.1,
      "y": null,
      "certs": [
        "DOC"
      ],
      "exp": [],
      "lg": [
        "it"
      ],
      "moq": null,
      "d": {
        "it": "Azienda vitivinicola della famiglia Castagnini sulle colline di Candia, tra le cave di marmo di Carrara e il mare. Nasce negli anni 2000 da una tradizione contadina di famiglia che risale ai primi anni '50: il titolare Roberto Castagnini ha imparato a coltivare la vite dal nonno materno. Circa 5 ettari di vigneto terrazzato, esposto al sole e alle brezze marine, per circa 20.000 bottiglie l'anno di vini DOC. Produce rossi, bianchi, un frizzante, vini aromatizzati, una grappa e olio extravergine dalle proprie olive.",
        "en": "The Castagnini family winery on the Candia hills, between the Carrara marble quarries and the sea. Founded in the 2000s on a family farming tradition dating back to the early 1950s: owner Roberto Castagnini learned to grow vines from his maternal grandfather. About 5 hectares of terraced vineyards, exposed to the sun and sea breezes, produce around 20,000 bottles a year of DOC wines. It makes reds, whites, a sparkling wine, aromatised wines, a grappa and extra virgin olive oil from its own olives.",
        "de": "Weingut der Familie Castagnini auf den Hügeln von Candia, zwischen den Marmorbrüchen von Carrara und dem Meer. Gegründet in den 2000er Jahren auf einer bäuerlichen Familientradition, die bis in die frühen 1950er Jahre zurückreicht: Inhaber Roberto Castagnini hat den Weinbau von seinem Großvater mütterlicherseits gelernt. Rund 5 Hektar terrassierte Weinberge, sonnig und von Meeresbrisen umweht, ergeben etwa 20.000 Flaschen DOC-Weine im Jahr. Erzeugt werden Rot- und Weißweine, ein Perlwein, aromatisierte Weine, ein Grappa und Olivenöl extra vergine aus eigenen Oliven."
      },
      "sub": [
        {
          "k": "vini",
          "cat": "vino",
          "n": {
            "it": "Vini",
            "en": "Wines",
            "de": "Weine"
          }
        },
        {
          "k": "aromatizzati",
          "cat": "vino",
          "n": {
            "it": "Vini aromatizzati e da dessert",
            "en": "Aromatised and dessert wines",
            "de": "Aromatisierte Weine und Dessertweine"
          }
        },
        {
          "k": "grappa",
          "cat": "liquori",
          "n": {
            "it": "Grappa",
            "en": "Grappa",
            "de": "Grappa"
          }
        },
        {
          "k": "olio",
          "cat": "olio",
          "n": {
            "it": "Olio",
            "en": "Olive oil",
            "de": "Olivenöl"
          }
        }
      ],
      "p": [
        [
          "Ceccardo, Vermentino Nero",
          null,
          "vini"
        ],
        [
          "Cybo, Massaretta",
          null,
          "vini"
        ],
        [
          "Merlo, rosso",
          null,
          "vini"
        ],
        [
          "Beatrice, Vermentino",
          null,
          "vini"
        ],
        [
          "Kar Rha, bianco",
          null,
          "vini"
        ],
        [
          "La Bolla, Cuvée Extra Dry",
          null,
          "vini"
        ],
        [
          "Vermouth",
          null,
          "aromatizzati"
        ],
        [
          "Vermouth Bianco",
          null,
          "aromatizzati"
        ],
        [
          "Cherry",
          null,
          "aromatizzati"
        ],
        [
          "Lacrimae Solis, vendemmia tardiva",
          null,
          "aromatizzati"
        ],
        [
          "Grappa",
          null,
          "grappa"
        ],
        [
          "Olio extravergine di oliva",
          null,
          "olio"
        ]
      ],
      "pd": {
        "V-09-0": {
          "c": [],
          "d": {
            "it": "Vermentino Nero in purezza. Rosso rubino, fruttato, con profumi di ciliegia e frutti di bosco e un leggero sentore di legno. Macerazione sulle bucce di 20 giorni, almeno 4 mesi in bottiglia. 12,5% vol.",
            "en": "100% Vermentino Nero. Ruby red and fruity, with cherry and berry aromas and a light hint of wood. 20 days of skin maceration, at least 4 months in bottle. 12.5% vol.",
            "de": "Reinsortiger Vermentino Nero. Rubinrot und fruchtig, mit Kirsch- und Beerenduft und leichter Holznote. 20 Tage Maischestandzeit, mindestens 4 Monate auf der Flasche. 12,5% Vol."
          },
          "a": {
            "it": "Con piatti elaborati, selvaggina e formaggi semi-stagionati.",
            "en": "With rich dishes, game and semi-aged cheeses.",
            "de": "Zu aufwendigen Gerichten, Wild und halbreifem Käse."
          },
          "pr": "17,00 €"
        },
        "V-09-1": {
          "c": [],
          "d": {
            "it": "Massaretta in purezza, vitigno autoctono apuano. Rosso rubino intenso, con profumi di frutti di bosco, ribes, spezie e un leggero sentore di legno. Macerazione sulle bucce di 30 giorni, un anno in acciaio e almeno 4 mesi in bottiglia. 13% vol.",
            "en": "100% Massaretta, a native Apuan grape. Deep ruby red, with aromas of berries, redcurrant, spice and a light hint of wood. 30 days of skin maceration, one year in steel and at least 4 months in bottle. 13% vol.",
            "de": "Reinsortiger Massaretta, eine autochthone Rebsorte der Apuanischen Alpen. Intensives Rubinrot, mit Duft von Beeren, Johannisbeere, Gewürzen und leichter Holznote. 30 Tage Maischestandzeit, ein Jahr im Stahltank und mindestens 4 Monate auf der Flasche. 13% Vol."
          },
          "a": {
            "it": "Con piatti al forno, selvaggina e formaggi stagionati.",
            "en": "With oven-baked dishes, game and aged cheeses.",
            "de": "Zu Ofengerichten, Wild und gereiftem Käse."
          },
          "pr": "20,00 €"
        },
        "V-09-2": {
          "c": [],
          "d": {
            "it": "Da Sangiovese, Merlot, Canaiolo e Ciliegiolo. Rosso rubino robusto, fruttato, con profumi di ciliegia e frutti di bosco e un leggero sentore di legno. Macerazione sulle bucce di 10 giorni, almeno 4 mesi in bottiglia. 12,5% vol.",
            "en": "From Sangiovese, Merlot, Canaiolo and Ciliegiolo. Bold ruby red and fruity, with cherry and berry aromas and a light hint of wood. 10 days of skin maceration, at least 4 months in bottle. 12.5% vol.",
            "de": "Aus Sangiovese, Merlot, Canaiolo und Ciliegiolo. Kräftiges Rubinrot und fruchtig, mit Kirsch- und Beerenduft und leichter Holznote. 10 Tage Maischestandzeit, mindestens 4 Monate auf der Flasche. 12,5% Vol."
          },
          "a": {
            "it": "Con primi saporiti e carni rosse alla griglia.",
            "en": "With flavourful pasta dishes and grilled red meat.",
            "de": "Zu würzigen Nudelgerichten und gegrilltem rotem Fleisch."
          },
          "pr": "13,00 €"
        },
        "V-09-3": {
          "c": [],
          "d": {
            "it": "Vermentino. Giallo paglierino con riflessi verdolini, fruttato, con profumi di banana, ananas e fiori bianchi. Pressatura soffice e fermentazione a temperatura controllata, almeno 2 mesi in bottiglia. 12,5% vol.",
            "en": "Vermentino. Straw yellow with greenish hints, fruity, with aromas of banana, pineapple and white flowers. Soft pressing and temperature-controlled fermentation, at least 2 months in bottle. 12.5% vol.",
            "de": "Vermentino. Strohgelb mit grünlichen Reflexen, fruchtig, mit Duft von Banane, Ananas und weißen Blüten. Sanfte Pressung und temperaturkontrollierte Gärung, mindestens 2 Monate auf der Flasche. 12,5% Vol."
          },
          "a": {
            "it": "Con piatti a base di pesce.",
            "en": "With fish dishes.",
            "de": "Zu Fischgerichten."
          },
          "pr": "13,00 €"
        },
        "V-09-4": {
          "c": [],
          "d": {
            "it": "Vermentino (80%) con Albarola e Trebbiano Toscano (20%). Giallo paglierino scarico, fruttato, con profumi di mela verde e ananas. Macerazione sulle bucce di 12 ore, almeno 2 mesi in bottiglia. 12,5% vol.",
            "en": "Vermentino (80%) with Albarola and Trebbiano Toscano (20%). Pale straw yellow, fruity, with green apple and pineapple aromas. 12 hours of skin contact, at least 2 months in bottle. 12.5% vol.",
            "de": "Vermentino (80%) mit Albarola und Trebbiano Toscano (20%). Helles Strohgelb, fruchtig, mit Duft von grünem Apfel und Ananas. 12 Stunden Maischekontakt, mindestens 2 Monate auf der Flasche. 12,5% Vol."
          },
          "a": {
            "it": "Con aperitivi, verdure grigliate e piatti di pesce.",
            "en": "With aperitifs, grilled vegetables and fish dishes.",
            "de": "Zum Aperitif, zu gegrilltem Gemüse und Fischgerichten."
          },
          "pr": "13,00 €"
        },
        "V-09-5": {
          "c": [],
          "d": {
            "it": "Frizzante Extra Dry da Vermentino (80%) e Chardonnay (20%). Paglierino scarico, con note di mela. Pressatura soffice, fermentazione a bassa temperatura e rifermentazione in autoclave per 2 mesi. 11% vol.",
            "en": "Extra Dry sparkling wine from Vermentino (80%) and Chardonnay (20%). Pale straw, with notes of apple. Soft pressing, low-temperature fermentation and 2 months of secondary fermentation in tank. 11% vol.",
            "de": "Extra-Dry-Schaumwein aus Vermentino (80%) und Chardonnay (20%). Helles Stroh, mit Apfelnoten. Sanfte Pressung, Gärung bei niedriger Temperatur und 2 Monate Zweitgärung im Drucktank. 11% Vol."
          },
          "a": {
            "it": "A tutto pasto e con gli antipasti.",
            "en": "Throughout the meal and with starters.",
            "de": "Zum ganzen Menü und zu Vorspeisen."
          },
          "pr": "10,00 €"
        },
        "V-09-6": {
          "c": [],
          "d": {
            "it": "Vino aromatizzato da Vermentino (80%), alcol, zucchero caramellato, assenzio, spezie ed erbe raccolte sulle colline apuane. Color caramello, con aromi di china, chiodi di garofano, rabarbaro e cannella; corposo, dolce e amaro molto persistenti.",
            "en": "Aromatised wine from Vermentino (80%), alcohol, caramelised sugar, wormwood, spices and herbs gathered on the Apuan hills. Caramel colour, with notes of cinchona, clove, rhubarb and cinnamon; full-bodied, with long sweet and bitter notes.",
            "de": "Aromatisierter Wein aus Vermentino (80%), Alkohol, karamellisiertem Zucker, Wermut, Gewürzen und Kräutern von den Apuanischen Hügeln. Karamellfarben, mit Noten von Chinarinde, Nelke, Rhabarber und Zimt; vollmundig, lang anhaltend süß und bitter."
          },
          "a": {
            "it": "Come aperitivo servito freddo, nei cocktail o a fine pasto con i dolci.",
            "en": "As a chilled aperitif, in cocktails or after dinner with desserts.",
            "de": "Gekühlt als Aperitif, in Cocktails oder nach dem Essen zu Desserts."
          },
          "pr": "18,00 €"
        },
        "V-09-7": {
          "c": [],
          "d": {
            "it": "Vermouth bianco da Vermentino (80%), alcol, zucchero, assenzio, spezie ed erbe aromatiche delle colline apuane. Molto aromatico, con note di salvia, citronella, noce moscata, agrumi ed erbe della macchia mediterranea.",
            "en": "White vermouth from Vermentino (80%), alcohol, sugar, wormwood, spices and aromatic herbs from the Apuan hills. Very aromatic, with notes of sage, lemongrass, nutmeg, citrus and Mediterranean scrub herbs.",
            "de": "Weißer Wermut aus Vermentino (80%), Alkohol, Zucker, Wermutkraut, Gewürzen und Kräutern von den Apuanischen Hügeln. Sehr aromatisch, mit Noten von Salbei, Zitronengras, Muskat, Zitrus und Kräutern der Macchia."
          },
          "a": {
            "it": "Come aperitivo servito freddo, nei cocktail o a fine pasto con i dolci.",
            "en": "As a chilled aperitif, in cocktails or after dinner with desserts.",
            "de": "Gekühlt als Aperitif, in Cocktails oder nach dem Essen zu Desserts."
          },
          "pr": "18,00 €"
        },
        "V-09-8": {
          "c": [],
          "d": {
            "it": "Vino aromatizzato a base di vino rosso (80%) con alcol, zuccheri e sciroppo di amarene raccolte in azienda. Caldo e aromatico, con note di amarena e rosa canina, finale leggermente amarognolo e buona acidità.",
            "en": "Aromatised wine based on red wine (80%) with alcohol, sugar and syrup of sour cherries picked on the farm. Warm and aromatic, with notes of sour cherry and rosehip, a slightly bitter finish and good acidity.",
            "de": "Aromatisierter Wein auf Rotweinbasis (80%) mit Alkohol, Zucker und Sirup aus eigenen Sauerkirschen. Warm und aromatisch, mit Noten von Sauerkirsche und Hagebutte, leicht bitterem Abgang und guter Säure."
          },
          "a": {
            "it": "Con i dessert, da meditazione o per guarnire dolci e gelati.",
            "en": "With desserts, for sipping or to top cakes and ice cream.",
            "de": "Zu Desserts, pur zum Genießen oder zum Verfeinern von Kuchen und Eis."
          },
          "pr": "18,00 €"
        },
        "V-09-9": {
          "c": [],
          "d": {
            "it": "Vermentino (90%) e Trebbiano (10%) raccolti a fine ottobre e lasciati appassire. Tre giorni di macerazione sulle bucce, fermentazione in acciaio e oltre 3 anni in bottiglia. Giallo dorato, amabile, con aromi di albicocca matura, miele e fichi secchi. 13% vol.",
            "en": "Vermentino (90%) and Trebbiano (10%) picked at the end of October and left to dry. Three days of skin maceration, fermentation in steel and over 3 years in bottle. Golden yellow, medium-sweet, with aromas of ripe apricot, honey and dried figs. 13% vol.",
            "de": "Vermentino (90%) und Trebbiano (10%), Ende Oktober geerntet und angetrocknet. Drei Tage Maischestandzeit, Gärung im Stahltank und über 3 Jahre auf der Flasche. Goldgelb, lieblich, mit Aromen von reifer Aprikose, Honig und getrockneten Feigen. 13% Vol."
          },
          "a": {
            "it": "Con formaggi stagionati, piatti piccanti e dolci secchi.",
            "en": "With aged cheeses, spicy dishes and dry pastries.",
            "de": "Zu gereiftem Käse, scharfen Gerichten und trockenem Gebäck."
          },
          "pr": "15,00 €"
        },
        "V-09-10": {
          "c": [],
          "d": {
            "it": "Distillata dalle vinacce delle uve bianche dell'azienda, che non hanno fermentato con il vino: per questo è molto profumata e delicata.",
            "en": "Distilled from the pomace of the farm's white grapes, which did not ferment with the wine: this makes it very fragrant and delicate.",
            "de": "Aus dem Trester der eigenen weißen Trauben destilliert, der nicht mit dem Wein vergoren wurde: dadurch sehr duftig und fein."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          },
          "pr": "25,00 €"
        },
        "V-09-11": {
          "c": [],
          "d": {
            "it": "Da olive di produzione propria, coltivate sulle colline dell'azienda affacciate sul mare. Molto delicato e fruttato.",
            "en": "From the farm's own olives, grown on its hills overlooking the sea. Very delicate and fruity.",
            "de": "Aus eigenen Oliven von den Hügeln des Betriebs mit Blick aufs Meer. Sehr fein und fruchtig."
          },
          "a": {
            "it": "Adatto anche al pesce crudo.",
            "en": "Also suits raw fish.",
            "de": "Passt auch zu rohem Fisch."
          }
        }
      },
      "fonti": [
        "https://www.castagniniwines.it/i-vini/",
        "https://www.castagniniwines.it/azienda/",
        "https://54dcd2-ab.myshopify.com/"
      ]
    },
    {
      "id": "V-10",
      "n": "Il Casellino",
      "cat": "olio",
      "reg": "Toscana",
      "city": "Rignano sull'Arno (FI)",
      "lat": 43.72,
      "lng": 11.45,
      "y": 1586,
      "certs": [
        "Bio"
      ],
      "exp": [],
      "lg": [
        "it",
        "en"
      ],
      "moq": null,
      "d": {
        "it": "Azienda agricola in località Casellino-Torri, a Rignano sull'Arno, circa 30 km a sud di Firenze, che produce olio extravergine dal 1586. Coltiva 16 ettari di oliveto biologico con circa 6.000 ulivi di cultivar tradizionali toscane. Le olive sono raccolte a mano e spremute a freddo nel frantoio aziendale entro poche ore. L'olio, certificato biologico ICEA, porta il marchio \"Campo di Torri\"; l'azienda produce anche oli aromatizzati e spezie e ospita i visitatori in tre casali.",
        "en": "Farm at Casellino-Torri in Rignano sull'Arno, about 30 km south of Florence, producing extra virgin olive oil since 1586. It tends 16 hectares of organic olive groves with about 6,000 trees of traditional Tuscan varieties. The olives are picked by hand and cold-pressed in the farm's own mill within a few hours. The ICEA-certified organic oil carries the \"Campo di Torri\" brand; the farm also makes flavoured oils and spices and hosts guests in three farmhouses.",
        "de": "Landwirtschaftsbetrieb in Casellino-Torri bei Rignano sull'Arno, rund 30 km südlich von Florenz, der seit 1586 Olivenöl extra vergine erzeugt. Er bewirtschaftet 16 Hektar Bio-Olivenhaine mit etwa 6.000 Bäumen traditioneller toskanischer Sorten. Die Oliven werden von Hand geerntet und innerhalb weniger Stunden in der eigenen Ölmühle kalt gepresst. Das ICEA-zertifizierte Bio-Öl trägt die Marke \"Campo di Torri\"; dazu kommen aromatisierte Öle und Gewürze sowie drei Gästehäuser."
      },
      "sub": [
        {
          "k": "olio",
          "cat": "olio",
          "n": {
            "it": "Olio",
            "en": "Olive oil",
            "de": "Olivenöl"
          }
        },
        {
          "k": "altro",
          "cat": "misti",
          "n": {
            "it": "Spezie e altro",
            "en": "Spices and more",
            "de": "Gewürze und mehr"
          }
        }
      ],
      "p": [
        [
          "Olio extravergine di oliva biologico \"Campo di Torri\"",
          "bottiglia da 500 ml",
          "olio"
        ],
        [
          "Olio extravergine di oliva biologico \"Campo di Torri\", latta",
          "latta da 5 litri",
          "olio"
        ],
        [
          "Olio extravergine di oliva con peperoncino \"Campo di Torri\"",
          "bottiglia da 250 ml",
          "olio"
        ],
        [
          "Olio extravergine di oliva al tartufo \"Campo di Torri\"",
          "bottiglia da 100 ml",
          "olio"
        ],
        [
          "Box Quattro Spezie \"Campo di Torri\"",
          "4 confezioni",
          "altro"
        ],
        [
          "Saponetta ai profumi della Natura Toscana",
          null,
          "altro"
        ]
      ],
      "pd": {
        "V-10-0": {
          "c": [
            "Bio"
          ],
          "pr": "22,00 €",
          "d": {
            "it": "Olio extravergine di oliva biologico \"Campo di Torri\", certificato ICEA. Profumato, gentile ma con carattere, con sentore di erba appena tagliata.",
            "en": "Organic extra virgin olive oil \"Campo di Torri\", ICEA certified. Fragrant, gentle but with character, with notes of freshly cut grass.",
            "de": "Bio-Olivenöl extra vergine \"Campo di Torri\", ICEA-zertifiziert. Duftend, sanft und doch mit Charakter, mit Noten von frisch geschnittenem Gras."
          },
          "a": {
            "it": "Olive raccolte a mano e spremute a freddo nel frantoio aziendale entro poche ore dalla raccolta.",
            "en": "Olives picked by hand and cold-pressed in the farm's own mill within a few hours of harvest.",
            "de": "Oliven von Hand geerntet und innerhalb weniger Stunden in der eigenen Ölmühle kalt gepresst."
          }
        },
        "V-10-1": {
          "c": [
            "Bio"
          ],
          "pr": "120,00 €",
          "d": {
            "it": "Olio extravergine di oliva biologico \"Campo di Torri\", certificato ICEA. Profumato, gentile ma con carattere, con sentore di erba appena tagliata. In latta da 5 litri, con una scatola adatta alla spedizione.",
            "en": "Organic extra virgin olive oil \"Campo di Torri\", ICEA certified. Fragrant, gentle but with character, with notes of freshly cut grass. In a 5-litre tin, packed in a box suitable for shipping.",
            "de": "Bio-Olivenöl extra vergine \"Campo di Torri\", ICEA-zertifiziert. Duftend, sanft und doch mit Charakter, mit Noten von frisch geschnittenem Gras. Im 5-Liter-Kanister, in einem versandgeeigneten Karton."
          },
          "a": {
            "it": "Olive raccolte a mano e spremute a freddo nel frantoio aziendale entro poche ore dalla raccolta.",
            "en": "Olives picked by hand and cold-pressed in the farm's own mill within a few hours of harvest.",
            "de": "Oliven von Hand geerntet und innerhalb weniger Stunden in der eigenen Ölmühle kalt gepresst."
          }
        },
        "V-10-2": {
          "c": [],
          "pr": "8,00 €",
          "d": {
            "it": "Olio extravergine \"Campo di Torri\" aromatizzato al peperoncino, per dare un tocco piccante ai piatti.",
            "en": "\"Campo di Torri\" extra virgin olive oil flavoured with chilli, for a spicy touch.",
            "de": "Olivenöl extra vergine \"Campo di Torri\" mit Chili aromatisiert, für eine scharfe Note."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-10-3": {
          "c": [],
          "pr": "8,00 €",
          "d": {
            "it": "Olio extravergine \"Campo di Torri\" aromatizzato al tartufo.",
            "en": "\"Campo di Torri\" extra virgin olive oil flavoured with truffle.",
            "de": "Olivenöl extra vergine \"Campo di Torri\" mit Trüffelaroma."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-10-4": {
          "c": [],
          "pr": "14,00 €",
          "d": {
            "it": "Quattro miscele di spezie coltivate e raccolte in azienda: Giallo di Campo (finocchietto selvatico), Macchia di Campo (mirto, rosmarino, limone e finocchietto), Vento di Campo (menta, salvia e limone) e Fuoco di Campo (peperoncino, aglio e santoreggia). Nella confezione, consigli per l'uso in cucina.",
            "en": "Four spice blends grown and gathered on the farm: Giallo di Campo (wild fennel), Macchia di Campo (myrtle, rosemary, lemon and fennel), Vento di Campo (mint, sage and lemon) and Fuoco di Campo (chilli, garlic and savory). Cooking tips included.",
            "de": "Vier Gewürzmischungen aus eigenem Anbau: Giallo di Campo (wilder Fenchel), Macchia di Campo (Myrte, Rosmarin, Zitrone und Fenchel), Vento di Campo (Minze, Salbei und Zitrone) und Fuoco di Campo (Chili, Knoblauch und Bohnenkraut). Mit Küchentipps in der Packung."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-10-5": {
          "c": [],
          "pr": "3,50 €",
          "d": {
            "it": "Saponette con ingredienti naturali 100% italiani, in quattro profumazioni: olio d'oliva, limone, mandarino e lavanda.",
            "en": "Soap bars made with 100% Italian natural ingredients, in four scents: olive oil, lemon, mandarin and lavender.",
            "de": "Seifen aus 100% italienischen natürlichen Zutaten, in vier Düften: Olivenöl, Zitrone, Mandarine und Lavendel."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        }
      },
      "fonti": [
        "https://casellino.com/negozio/",
        "https://casellino.com/adotta-un-pezzo-di-toscana/",
        "https://casellino.com/contatti/"
      ]
    },
    {
      "id": "V-11",
      "n": "La Casaia",
      "cat": "vino",
      "reg": "Lombardia",
      "city": "Santa Giuletta (PV)",
      "lat": 45.03,
      "lng": 9.18,
      "y": null,
      "certs": [
        "Bio",
        "DOCG"
      ],
      "exp": [],
      "lg": [
        "it",
        "en"
      ],
      "moq": null,
      "d": {
        "it": "Cantina di Roberto e Vittorio a Santa Giuletta, nel cuore dell'Oltrepò Pavese, con le figlie coinvolte nel progetto. Il nome viene dalla casaia, il piccolo ricovero in muratura per gli attrezzi tra le vigne. I vigneti, a circa 250 metri di quota, sono lavorati in modo tradizionale secondo l'agricoltura biologica, con vendemmia solo a mano. Al centro c'è il Pinot Nero: Metodo Classico, rosso, vinificato in bianco e in rosa, insieme a Chardonnay e Bonarda.",
        "en": "Winery run by Roberto and Vittorio in Santa Giuletta, in the heart of the Oltrepò Pavese, with their daughters involved in the project. The name comes from the casaia, the small brick shelter for tools among the vines. The vineyards, at about 250 metres, are farmed traditionally following organic methods and harvested only by hand. Pinot Nero is at the centre: traditional-method sparkling, red, and vinified as a white and a rosé, alongside Chardonnay and Bonarda.",
        "de": "Weingut von Roberto und Vittorio in Santa Giuletta, im Herzen des Oltrepò Pavese, mit ihren Töchtern im Projekt. Der Name stammt von der Casaia, dem kleinen gemauerten Geräteschuppen zwischen den Reben. Die Weinberge auf rund 250 Metern werden traditionell nach ökologischen Regeln bewirtschaftet und ausschließlich von Hand gelesen. Im Mittelpunkt steht der Pinot Nero: Schaumwein nach klassischer Methode, Rotwein sowie weiß und rosé gekeltert, dazu Chardonnay und Bonarda."
      },
      "sub": [
        {
          "k": "spumanti",
          "cat": "vino",
          "n": {
            "it": "Metodo Classico",
            "en": "Traditional method",
            "de": "Klassische Methode"
          }
        },
        {
          "k": "vini",
          "cat": "vino",
          "n": {
            "it": "Vini fermi e frizzanti",
            "en": "Still and sparkling wines",
            "de": "Still- und Perlweine"
          }
        },
        {
          "k": "confezioni",
          "cat": "vino",
          "n": {
            "it": "Confezioni da 6",
            "en": "6-bottle boxes",
            "de": "6er-Kartons"
          }
        },
        {
          "k": "riso",
          "cat": "pasta",
          "n": {
            "it": "Riso",
            "en": "Rice",
            "de": "Reis"
          }
        }
      ],
      "p": [
        [
          "Oltrepò Pavese DOCG Metodo Classico Dosaggio Zero",
          null,
          "spumanti"
        ],
        [
          "Chardonnay Metodo Classico \"Passione\"",
          null,
          "spumanti"
        ],
        [
          "Spumante Metodo Classico Brut \"13 Lune\"",
          null,
          "spumanti"
        ],
        [
          "Spumante Metodo Classico Brut \"13 Lune\" Rosé",
          null,
          "spumanti"
        ],
        [
          "Pinot Nero vinificato in bianco \"La rosa bianca\"",
          null,
          "vini"
        ],
        [
          "Pinot Nero vinificato in rosa \"Una notte\"",
          null,
          "vini"
        ],
        [
          "Bonarda dell'Oltrepò Pavese \"Armonia\"",
          null,
          "vini"
        ],
        [
          "Pinot Nero \"La Quercia\"",
          null,
          "vini"
        ],
        [
          "Confezione \"Vero Oltrepò\"",
          "6 bottiglie",
          "confezioni"
        ],
        [
          "Confezione \"Per una serata importante\"",
          "6 bottiglie",
          "confezioni"
        ],
        [
          "Confezione \"Selezione Pinot\"",
          "6 bottiglie",
          "confezioni"
        ],
        [
          "Riso Carnaroli Gran Riserva Bio",
          "1 kg",
          "riso"
        ]
      ],
      "pd": {
        "V-11-0": {
          "c": [
            "DOCG"
          ],
          "pr": "37,00 €",
          "d": {
            "it": "Spumante Metodo Classico da uve Pinot Nero selezionate, 48 mesi sui lieviti e senza aggiunta di zucchero. Giallo paglierino tenue con perlage fine e persistente; note di fiori bianchi, mandorla e crosta di pane; fresco, sapido e minerale.",
            "en": "Traditional-method sparkling wine from selected Pinot Nero grapes, 48 months on the lees with no added sugar. Pale straw yellow with fine, persistent bubbles; notes of white flowers, almond and bread crust; fresh, savoury and mineral.",
            "de": "Schaumwein nach klassischer Methode aus ausgewählten Pinot-Nero-Trauben, 48 Monate auf der Hefe, ohne Zuckerzusatz. Helles Strohgelb mit feiner, anhaltender Perlage; Noten von weißen Blüten, Mandel und Brotkruste; frisch, salzig und mineralisch."
          },
          "a": {
            "it": "Servire a 4-6 °C.",
            "en": "Serve at 4-6 °C.",
            "de": "Bei 4-6 °C servieren."
          }
        },
        "V-11-1": {
          "c": [],
          "pr": "32,00 €",
          "d": {
            "it": "Spumante Metodo Classico da uve Chardonnay, 24 mesi sui lieviti. Color oro; mandorla, frutta secca, polpa esotica e crosta di pane; corpo pieno, elegante e fresco. Premiato tra i \"Top Hundred\" di Paolo Massobrio a Golosaria Milano 2022.",
            "en": "Traditional-method sparkling wine from Chardonnay grapes, 24 months on the lees. Golden; almond, dried fruit, exotic fruit and bread crust; full-bodied, elegant and fresh. Named one of Paolo Massobrio's \"Top Hundred\" at Golosaria Milano 2022.",
            "de": "Schaumwein nach klassischer Methode aus Chardonnay, 24 Monate auf der Hefe. Goldfarben; Mandel, Trockenfrüchte, exotische Früchte und Brotkruste; voll, elegant und frisch. Ausgezeichnet unter den \"Top Hundred\" von Paolo Massobrio bei Golosaria Mailand 2022."
          },
          "a": {
            "it": "Come aperitivo, con crostacei e piatti di pesce. Servire a 4-6 °C.",
            "en": "As an aperitif, with shellfish and fish dishes. Serve at 4-6 °C.",
            "de": "Als Aperitif, zu Krustentieren und Fisch. Bei 4-6 °C servieren."
          }
        },
        "V-11-2": {
          "c": [],
          "pr": "26,00 €",
          "d": {
            "it": "Metodo Classico Brut da uve Pinot Nero, 12 mesi sui lieviti. Giallo paglierino con riflessi verdognoli; sentori floreali e di albicocca con note minerali; strutturato, fresco ma morbido e pieno.",
            "en": "Traditional-method Brut from Pinot Nero grapes, 12 months on the lees. Straw yellow with greenish hints; floral and apricot aromas with mineral notes; structured, fresh yet soft and full.",
            "de": "Brut nach klassischer Methode aus Pinot Nero, 12 Monate auf der Hefe. Strohgelb mit grünlichen Reflexen; blumige Noten und Aprikose, dazu Mineralität; strukturiert, frisch und doch weich und voll."
          },
          "a": {
            "it": "Con aperitivi elaborati, antipasti delicati e piatti di pesce. Servire a 4-6 °C.",
            "en": "With elaborate aperitifs, delicate starters and fish dishes. Serve at 4-6 °C.",
            "de": "Zu raffinierten Aperitifs, feinen Vorspeisen und Fisch. Bei 4-6 °C servieren."
          }
        },
        "V-11-3": {
          "c": [],
          "pr": "26,00 €",
          "d": {
            "it": "Metodo Classico Brut rosé da uve Pinot Nero, almeno 12 mesi sui lieviti. Rosa tenue e brillante con perlage fine; profumo fragrante e floreale con delicati sentori fruttati; fresco, sapido ed equilibrato, con finale lungo.",
            "en": "Traditional-method Brut rosé from Pinot Nero grapes, at least 12 months on the lees. Pale, bright pink with fine bubbles; fragrant, floral nose with delicate fruit; fresh, savoury and balanced, with a long finish.",
            "de": "Rosé Brut nach klassischer Methode aus Pinot Nero, mindestens 12 Monate auf der Hefe. Zartes, leuchtendes Rosa mit feiner Perlage; duftig und blumig mit zarter Frucht; frisch, salzig und ausgewogen, mit langem Abgang."
          },
          "a": {
            "it": "Servire a 4-6 °C.",
            "en": "Serve at 4-6 °C.",
            "de": "Bei 4-6 °C servieren."
          }
        },
        "V-11-4": {
          "c": [],
          "pr": "16,00 €",
          "d": {
            "it": "Pinot Nero (85%) vinificato in bianco con Chardonnay (15%). Giallo paglierino con riflessi verdognoli; albicocca, frutta fresca e cenni minerali; diritto, equilibrato e morbido. Tre mesi di affinamento in bottiglia.",
            "en": "Pinot Nero (85%) vinified as a white, with Chardonnay (15%). Straw yellow with greenish hints; apricot, fresh fruit and a touch of minerality; straight, balanced and smooth. Three months of bottle ageing.",
            "de": "Weiß gekelterter Pinot Nero (85%) mit Chardonnay (15%). Strohgelb mit grünlichen Reflexen; Aprikose, frische Frucht und mineralische Anklänge; geradlinig, ausgewogen und weich. Drei Monate Flaschenreife."
          },
          "a": {
            "it": "Con aperitivi, antipasti delicati e pesce. Servire a 8-10 °C.",
            "en": "With aperitifs, delicate starters and fish. Serve at 8-10 °C.",
            "de": "Zu Aperitif, feinen Vorspeisen und Fisch. Bei 8-10 °C servieren."
          }
        },
        "V-11-5": {
          "c": [],
          "pr": "14,00 €",
          "d": {
            "it": "Pinot Nero in purezza vinificato in rosa, con una leggera rifermentazione in autoclave. Rosa brillante con riflessi rubino; note di lampone e frutta fresca; sorso ricco e persistente.",
            "en": "100% Pinot Nero vinified as a rosé, with a light secondary fermentation in tank. Bright pink with ruby hints; raspberry and fresh fruit; rich and persistent.",
            "de": "Reinsortiger Pinot Nero, rosé gekeltert, mit leichter Nachgärung im Drucktank. Leuchtendes Rosa mit rubinroten Reflexen; Himbeere und frische Frucht; reich und anhaltend."
          },
          "a": {
            "it": "Ottimo come aperitivo. Servire a 8-10 °C.",
            "en": "Great as an aperitif. Serve at 8-10 °C.",
            "de": "Ideal als Aperitif. Bei 8-10 °C servieren."
          }
        },
        "V-11-6": {
          "c": [],
          "pr": "12,00 €",
          "d": {
            "it": "Croatina (90%) e Uva Rara (10%) da vigne di circa 25 anni. Rosso rubino intenso e frizzante, con sentori di marasca e lampone; asciutto, caldo, con tannino morbido e vellutato.",
            "en": "Croatina (90%) and Uva Rara (10%) from vines about 25 years old. Deep ruby red and lightly sparkling, with notes of morello cherry and raspberry; dry and warm, with soft, velvety tannins.",
            "de": "Croatina (90%) und Uva Rara (10%) von etwa 25 Jahre alten Reben. Intensives Rubinrot, perlend, mit Noten von Sauerkirsche und Himbeere; trocken und warm, mit weichen, samtigen Tanninen."
          },
          "a": {
            "it": "Con salumi, arrosti e selvaggina. Servire a 8-10 °C.",
            "en": "With cured meats, roasts and game. Serve at 8-10 °C.",
            "de": "Zu Wurst, Braten und Wild. Bei 8-10 °C servieren."
          }
        },
        "V-11-7": {
          "c": [],
          "pr": "18,00 €",
          "d": {
            "it": "Pinot Nero rosso, affinato 8-10 mesi in vasca. Rosso porpora con riflessi granata; sottobosco, amarena e ciliegia; elegante e minerale, con tannino vellutato.",
            "en": "Red Pinot Nero, aged 8-10 months in tank. Purple with garnet hints; forest floor, sour cherry and cherry; elegant and mineral, with velvety tannins.",
            "de": "Roter Pinot Nero, 8-10 Monate im Tank ausgebaut. Purpur mit granatroten Reflexen; Waldboden, Sauerkirsche und Kirsche; elegant und mineralisch, mit samtigen Tanninen."
          },
          "a": {
            "it": "Con primi piatti, carni e formaggi di media stagionatura. Servire a 16-18 °C.",
            "en": "With pasta dishes, meat and medium-aged cheeses. Serve at 16-18 °C.",
            "de": "Zu Nudelgerichten, Fleisch und mittelalten Käsen. Bei 16-18 °C servieren."
          }
        },
        "V-11-8": {
          "c": [],
          "pr": "132,00 €",
          "d": {
            "it": "Scatola con 3 Chardonnay Metodo Classico \"Passione\" e 3 Bonarda \"Armonia\".",
            "en": "Box with 3 Chardonnay Metodo Classico \"Passione\" and 3 Bonarda \"Armonia\".",
            "de": "Karton mit 3 Chardonnay Metodo Classico \"Passione\" und 3 Bonarda \"Armonia\"."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-11-9": {
          "c": [],
          "pr": "128,00 €",
          "d": {
            "it": "Scatola con 2 Chardonnay Metodo Classico, 2 Pinot Nero e 2 Pinot Nero vinificato in rosa.",
            "en": "Box with 2 Chardonnay Metodo Classico, 2 Pinot Nero and 2 Pinot Nero rosé.",
            "de": "Karton mit 2 Chardonnay Metodo Classico, 2 Pinot Nero und 2 Pinot Nero Rosé."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-11-10": {
          "c": [],
          "pr": "96,00 €",
          "d": {
            "it": "Scatola con 2 Pinot Nero, 2 Pinot Nero vinificato in rosa e 2 Pinot Nero vinificato in bianco.",
            "en": "Box with 2 Pinot Nero, 2 Pinot Nero rosé and 2 Pinot Nero vinified as a white.",
            "de": "Karton mit 2 Pinot Nero, 2 Pinot Nero Rosé und 2 weiß gekelterten Pinot Nero."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-11-11": {
          "c": [
            "Bio"
          ],
          "pr": "7,00 €",
          "d": {
            "it": "Riso Carnaroli Gran Riserva biologico dalla bassa Lomellina, terra di risaie. Cottura 18 minuti.",
            "en": "Organic Carnaroli Gran Riserva rice from the lower Lomellina, a rice-growing area. Cooking time 18 minutes.",
            "de": "Bio-Reis Carnaroli Gran Riserva aus der unteren Lomellina, einem Reisanbaugebiet. Kochzeit 18 Minuten."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        }
      },
      "fonti": [
        "https://www.lacasaia.it/negozio/",
        "https://www.lacasaia.it/la-casaia/",
        "https://www.lacasaia.it/"
      ]
    },
    {
      "id": "V-12",
      "n": "Pasta Formia (Paone Distribuzione)",
      "cat": "pasta",
      "reg": "Lazio",
      "city": "Formia (LT)",
      "lat": 41.256,
      "lng": 13.607,
      "y": 2018,
      "certs": [],
      "exp": [],
      "lg": [
        "it",
        "en"
      ],
      "moq": null,
      "d": {
        "it": "Pastificio Pasta Formia, della Paone Distribuzione srl, con sede a Formia e stabilimento a Minturno, in provincia di Latina. Nasce nel 2018 e porta avanti l'esperienza di una famiglia attiva da oltre 145 anni nella produzione di pasta. Fa pasta secca di semola di grano duro con metodo artigianale, trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche; produce anche gnocchi, chicche di patate e una linea di pasta istantanea in cup, con il proprio marchio e per marchi privati.",
        "en": "Pasta Formia, a pasta maker owned by Paone Distribuzione srl, based in Formia with its plant in Minturno, province of Latina. Founded in 2018, it carries on the know-how of a family that has been making pasta for over 145 years. It makes durum wheat semolina pasta the artisan way, with rough extrusion and slow, low-temperature drying in static cells; it also makes potato gnocchi and chicche and a line of instant pasta in cups, under its own brand and for private labels.",
        "de": "Pasta Formia, Nudelmanufaktur der Paone Distribuzione srl mit Sitz in Formia und Werk in Minturno, Provinz Latina. Gegründet 2018, führt sie die Erfahrung einer Familie fort, die seit über 145 Jahren Pasta herstellt. Hergestellt wird Pasta aus Hartweizengrieß nach handwerklicher Methode, mit rauer Ziehung und langsamer Trocknung bei niedriger Temperatur in statischen Kammern; dazu Kartoffelgnocchi und Chicche sowie eine Linie Instant-Pasta im Becher, unter eigener Marke und als Handelsmarke."
      },
      "sub": [
        {
          "k": "lunga",
          "cat": "pasta",
          "n": {
            "it": "Pasta lunga",
            "en": "Long pasta",
            "de": "Lange Pasta"
          }
        },
        {
          "k": "corta",
          "cat": "pasta",
          "n": {
            "it": "Pasta corta",
            "en": "Short pasta",
            "de": "Kurze Pasta"
          }
        },
        {
          "k": "speciali",
          "cat": "pasta",
          "n": {
            "it": "Paste speciali",
            "en": "Special pasta",
            "de": "Spezialitäten"
          }
        },
        {
          "k": "gnocchi",
          "cat": "pasta",
          "n": {
            "it": "Gnocchi e chicche",
            "en": "Gnocchi and chicche",
            "de": "Gnocchi und Chicche"
          }
        },
        {
          "k": "cups",
          "cat": "pasta",
          "n": {
            "it": "Pasta in cup",
            "en": "Pasta in cups",
            "de": "Pasta im Becher"
          }
        }
      ],
      "p": [
        [
          "Linguine",
          "500 g · cartone da 12 pezzi",
          "lunga"
        ],
        [
          "Spaghetti",
          "500 g · cartone da 12 pezzi",
          "lunga"
        ],
        [
          "Spaghetti alla chitarra",
          "500 g · cartone da 12 pezzi",
          "lunga"
        ],
        [
          "Ziti",
          "500 g · cartone da 12 pezzi",
          "lunga"
        ],
        [
          "Penne zita rigate",
          "500 g · cartone da 12 pezzi",
          "corta"
        ],
        [
          "Ditali rigati",
          "500 g · cartone da 12 pezzi",
          "corta"
        ],
        [
          "Fusilli",
          "500 g · cartone da 12 pezzi",
          "corta"
        ],
        [
          "Mezzo rigatone",
          "500 g · cartone da 12 pezzi",
          "corta"
        ],
        [
          "Rigatoni",
          "500 g · cartone da 12 pezzi",
          "corta"
        ],
        [
          "Candele corte",
          "500 g · cartone da 12 pezzi",
          "corta"
        ],
        [
          "Scialatielli",
          "500 g · cartone da 12 pezzi",
          "corta"
        ],
        [
          "Calamarata",
          "500 g · cartone da 12 pezzi",
          "corta"
        ],
        [
          "Paccheri",
          "500 g · cartone da 12 pezzi",
          "corta"
        ],
        [
          "Lasagne di semola",
          "500 g · cartone da 12 pezzi",
          "speciali"
        ],
        [
          "Gnocchi di patate",
          "500 g · cartone da 12 pezzi",
          "gnocchi"
        ],
        [
          "Chicche di patate",
          "500 g · cartone da 12 pezzi",
          "gnocchi"
        ],
        [
          "Fusilli al pesto",
          "70 g · cartone da 8 pezzi",
          "cups"
        ],
        [
          "Fusilli pomodoro e basilico",
          "70 g · cartone da 8 pezzi",
          "cups"
        ],
        [
          "Fusilli pomodoro, basilico e mozzarella",
          "70 g · cartone da 8 pezzi",
          "cups"
        ],
        [
          "Maccheroncini al formaggio",
          "70 g · cartone da 8 pezzi",
          "cups"
        ],
        [
          "Maccheroncini alla carbonara",
          "70 g · cartone da 8 pezzi",
          "cups"
        ]
      ],
      "pd": {
        "V-12-0": {
          "c": [],
          "d": {
            "it": "Pasta lunga a sezione ovale. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Long pasta with an oval cross-section. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Lange Pasta mit ovalem Querschnitt. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 9-10 minuti. Codice articolo 210213.",
            "en": "Cooking time 9-10 minutes. Item code 210213.",
            "de": "Kochzeit 9-10 Minuten. Artikelnummer 210213."
          }
        },
        "V-12-1": {
          "c": [],
          "d": {
            "it": "Pasta lunga a sezione tonda, diametro 2,2 mm. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Long round pasta, 2.2 mm in diameter. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Lange runde Pasta, 2,2 mm Durchmesser. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 11-12 minuti. Codice articolo 210220.",
            "en": "Cooking time 11-12 minutes. Item code 210220.",
            "de": "Kochzeit 11-12 Minuten. Artikelnummer 210220."
          }
        },
        "V-12-2": {
          "c": [],
          "d": {
            "it": "Pasta lunga a sezione quadrata. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Long pasta with a square cross-section. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Lange Pasta mit quadratischem Querschnitt. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 10-11 minuti. Codice articolo 210107.",
            "en": "Cooking time 10-11 minutes. Item code 210107.",
            "de": "Kochzeit 10-11 Minuten. Artikelnummer 210107."
          }
        },
        "V-12-3": {
          "c": [],
          "d": {
            "it": "Pasta lunga e forata, a sezione tonda. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Long, hollow round pasta. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Lange, hohle runde Pasta. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 7-8 minuti. Codice articolo 210756.",
            "en": "Cooking time 7-8 minutes. Item code 210756.",
            "de": "Kochzeit 7-8 Minuten. Artikelnummer 210756."
          }
        },
        "V-12-4": {
          "c": [],
          "d": {
            "it": "Pasta corta rigata. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Ridged short pasta. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Geriffelte kurze Pasta. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 9-10 minuti. Codice articolo 210176.",
            "en": "Cooking time 9-10 minutes. Item code 210176.",
            "de": "Kochzeit 9-10 Minuten. Artikelnummer 210176."
          }
        },
        "V-12-5": {
          "c": [],
          "d": {
            "it": "Pasta corta rigata, adatta a minestre e pasta e legumi. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Small ridged short pasta, good for soups and pasta with pulses. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Kleine geriffelte Pasta, ideal für Suppen und Pasta mit Hülsenfrüchten. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 9-10 minuti. Codice articolo 210763.",
            "en": "Cooking time 9-10 minutes. Item code 210763.",
            "de": "Kochzeit 9-10 Minuten. Artikelnummer 210763."
          }
        },
        "V-12-6": {
          "c": [],
          "d": {
            "it": "Pasta corta a spirale. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Spiral short pasta. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Spiralförmige kurze Pasta. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 9-10 minuti. Codice articolo 210732.",
            "en": "Cooking time 9-10 minutes. Item code 210732.",
            "de": "Kochzeit 9-10 Minuten. Artikelnummer 210732."
          }
        },
        "V-12-7": {
          "c": [],
          "d": {
            "it": "Pasta corta rigata, versione corta del rigatone. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Ridged short pasta, a shorter version of rigatoni. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Geriffelte kurze Pasta, kürzere Variante der Rigatoni. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Codice articolo 210725.",
            "en": "Item code 210725.",
            "de": "Artikelnummer 210725."
          }
        },
        "V-12-8": {
          "c": [],
          "d": {
            "it": "Pasta corta rigata di grande diametro. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Large ridged short pasta. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Große geriffelte kurze Pasta. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Codice articolo 210152.",
            "en": "Item code 210152.",
            "de": "Artikelnummer 210152."
          }
        },
        "V-12-9": {
          "c": [],
          "d": {
            "it": "Pasta corta liscia a tubo lungo. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Smooth tube-shaped short pasta. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Glatte, röhrenförmige kurze Pasta. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Codice articolo 210237.",
            "en": "Item code 210237.",
            "de": "Artikelnummer 210237."
          }
        },
        "V-12-10": {
          "c": [],
          "d": {
            "it": "Formato tipico della costiera campana. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "A shape typical of the Campanian coast. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Ein typisches Format der kampanischen Küste. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 12-13 minuti. Codice articolo 210183.",
            "en": "Cooking time 12-13 minutes. Item code 210183.",
            "de": "Kochzeit 12-13 Minuten. Artikelnummer 210183."
          }
        },
        "V-12-11": {
          "c": [],
          "d": {
            "it": "Anelli larghi di pasta, tipici della tradizione campana. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Wide rings of pasta, typical of Campanian tradition. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Breite Pastaringe aus der kampanischen Tradition. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 12-13 minuti. Codice articolo 210190.",
            "en": "Cooking time 12-13 minutes. Item code 210190.",
            "de": "Kochzeit 12-13 Minuten. Artikelnummer 210190."
          }
        },
        "V-12-12": {
          "c": [],
          "d": {
            "it": "Grandi tubi di pasta, tipici della tradizione campana. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Large pasta tubes, typical of Campanian tradition. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Große Pastaröhren aus der kampanischen Tradition. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 12-13 minuti. Codice articolo 210206.",
            "en": "Cooking time 12-13 minutes. Item code 210206.",
            "de": "Kochzeit 12-13 Minuten. Artikelnummer 210206."
          }
        },
        "V-12-13": {
          "c": [],
          "d": {
            "it": "Sfoglie per lasagne. Pasta di semola di grano duro con lavorazione artigianale: trafilatura ruvida ed essiccazione lenta a bassa temperatura in celle statiche.",
            "en": "Lasagne sheets. Durum wheat semolina pasta made the artisan way: rough extrusion and slow, low-temperature drying in static cells.",
            "de": "Lasagneplatten. Pasta aus Hartweizengrieß in handwerklicher Herstellung: raue Ziehung und langsame Trocknung bei niedriger Temperatur in statischen Kammern."
          },
          "a": {
            "it": "Cottura 20 minuti. Codice articolo 210787.",
            "en": "Cooking time 20 minutes. Item code 210787.",
            "de": "Kochzeit 20 Minuten. Artikelnummer 210787."
          }
        },
        "V-12-14": {
          "c": [],
          "d": {
            "it": "Gnocchi di patate.",
            "en": "Potato gnocchi.",
            "de": "Kartoffelgnocchi."
          },
          "a": {
            "it": "Cottura 2 minuti. Codice articolo 210039.",
            "en": "Cooking time 2 minutes. Item code 210039.",
            "de": "Kochzeit 2 Minuten. Artikelnummer 210039."
          }
        },
        "V-12-15": {
          "c": [],
          "d": {
            "it": "Chicche di patate, gnocchetti di piccolo formato.",
            "en": "Chicche, small potato gnocchi.",
            "de": "Chicche, kleine Kartoffelgnocchi."
          },
          "a": {
            "it": "Cottura 2 minuti. Codice articolo 210046.",
            "en": "Cooking time 2 minutes. Item code 210046.",
            "de": "Kochzeit 2 Minuten. Artikelnummer 210046."
          }
        },
        "V-12-16": {
          "c": [],
          "d": {
            "it": "Pasta istantanea in cup, fusilli al pesto. Si aggiunge acqua calda fino al livello indicato, si lascia riposare 4 minuti e si mescola; in alternativa microonde a 700 W per 3-5 minuti.",
            "en": "Instant pasta in a cup, fusilli with pesto. Add hot water up to the line, leave for 4 minutes and stir; or microwave at 700 W for 3-5 minutes.",
            "de": "Instant-Pasta im Becher, Fusilli mit Pesto. Heißes Wasser bis zur Markierung einfüllen, 4 Minuten ziehen lassen und umrühren; oder 3-5 Minuten in der Mikrowelle bei 700 W."
          },
          "a": {
            "it": "Codice articolo 211364.",
            "en": "Item code 211364.",
            "de": "Artikelnummer 211364."
          }
        },
        "V-12-17": {
          "c": [],
          "d": {
            "it": "Pasta istantanea in cup, fusilli al pomodoro e basilico. Si aggiunge acqua calda fino al livello indicato, si lascia riposare 4 minuti e si mescola; in alternativa microonde a 700 W per 3-5 minuti.",
            "en": "Instant pasta in a cup, fusilli with tomato and basil. Add hot water up to the line, leave for 4 minutes and stir; or microwave at 700 W for 3-5 minutes.",
            "de": "Instant-Pasta im Becher, Fusilli mit Tomate und Basilikum. Heißes Wasser bis zur Markierung einfüllen, 4 Minuten ziehen lassen und umrühren; oder 3-5 Minuten in der Mikrowelle bei 700 W."
          },
          "a": {
            "it": "Codice articolo 211357.",
            "en": "Item code 211357.",
            "de": "Artikelnummer 211357."
          }
        },
        "V-12-18": {
          "c": [],
          "d": {
            "it": "Pasta istantanea in cup, fusilli al pomodoro, basilico e mozzarella. Si aggiunge acqua calda fino al livello indicato, si lascia riposare 4 minuti e si mescola; in alternativa microonde a 700 W per 3-5 minuti.",
            "en": "Instant pasta in a cup, fusilli with tomato, basil and mozzarella. Add hot water up to the line, leave for 4 minutes and stir; or microwave at 700 W for 3-5 minutes.",
            "de": "Instant-Pasta im Becher, Fusilli mit Tomate, Basilikum und Mozzarella. Heißes Wasser bis zur Markierung einfüllen, 4 Minuten ziehen lassen und umrühren; oder 3-5 Minuten in der Mikrowelle bei 700 W."
          },
          "a": {
            "it": "Codice articolo 211371.",
            "en": "Item code 211371.",
            "de": "Artikelnummer 211371."
          }
        },
        "V-12-19": {
          "c": [],
          "d": {
            "it": "Pasta istantanea in cup, maccheroncini al formaggio. Si aggiunge acqua calda fino al livello indicato, si lascia riposare 4 minuti e si mescola; in alternativa microonde a 700 W per 3-5 minuti.",
            "en": "Instant pasta in a cup, maccheroncini with cheese. Add hot water up to the line, leave for 4 minutes and stir; or microwave at 700 W for 3-5 minutes.",
            "de": "Instant-Pasta im Becher, Maccheroncini mit Käse. Heißes Wasser bis zur Markierung einfüllen, 4 Minuten ziehen lassen und umrühren; oder 3-5 Minuten in der Mikrowelle bei 700 W."
          },
          "a": {
            "it": "Codice articolo 211388.",
            "en": "Item code 211388.",
            "de": "Artikelnummer 211388."
          }
        },
        "V-12-20": {
          "c": [],
          "d": {
            "it": "Pasta istantanea in cup, maccheroncini alla carbonara. Si aggiunge acqua calda fino al livello indicato, si lascia riposare 4 minuti e si mescola; in alternativa microonde a 700 W per 3-5 minuti.",
            "en": "Instant pasta in a cup, maccheroncini carbonara. Add hot water up to the line, leave for 4 minutes and stir; or microwave at 700 W for 3-5 minutes.",
            "de": "Instant-Pasta im Becher, Maccheroncini Carbonara. Heißes Wasser bis zur Markierung einfüllen, 4 Minuten ziehen lassen und umrühren; oder 3-5 Minuten in der Mikrowelle bei 700 W."
          },
          "a": {
            "it": "Codice articolo 211340.",
            "en": "Item code 211340.",
            "de": "Artikelnummer 211340."
          }
        }
      },
      "fonti": [
        "https://pastaformia.it/images/PastaFormiaCatalogo2025.pdf",
        "https://pastaformia.it/en/"
      ]
    },
    {
      "id": "V-13",
      "n": "Le Ferre",
      "cat": "olio",
      "reg": "Puglia",
      "city": "Castellaneta (TA)",
      "lat": 40.629,
      "lng": 16.938,
      "y": null,
      "certs": [
        "Bio",
        "IGP",
        "DOP"
      ],
      "exp": [],
      "lg": [
        "it",
        "en"
      ],
      "moq": null,
      "d": {
        "it": "Le Ferre srl produce, confeziona e vende esclusivamente olio extravergine d'oliva a Castellaneta, in provincia di Taranto. Il nome viene dalla contrada di campagna tra il mar Ionio e le colline della Murgia dove la famiglia, nipoti di coltivatori di olive, conserva ancora alcuni ulivi secolari. Dal 1999 l'esperienza in frantoio con un mastro oleario della zona; dal 2008 un modello basato su produzione diversificata e arte del blending. Nel 2012 registra il marchio Multivarietale e nel 2018 apre la sede attuale lungo la SS 7, con showroom e sala degustazione. È stata segnalata tra i migliori oli extravergine d'Italia da Gambero Rosso, Slow Food e Bibenda. Oltre a blend, monovarietali e oli certificati Bio, IGP e DOP, produce condimenti aromatizzati e all'aceto balsamico, ceramiche fatte a mano e confezioni regalo; fa etichette personalizzate e private label.",
        "en": "Le Ferre srl produces, bottles and sells only extra virgin olive oil in Castellaneta, in the province of Taranto. The name comes from the countryside district between the Ionian Sea and the Murgia hills, where the family, grandchildren of olive growers, still keeps some centuries-old olive trees. Since 1999 it has built its milling experience alongside a local master oil maker, and since 2008 it has followed a model based on diversified production and the art of blending. It registered the Multivarietale trademark in 2012 and in 2018 opened its current headquarters on the SS 7, with a showroom and tasting room. It has been listed among Italy's best extra virgin olive oils by Gambero Rosso, Slow Food and Bibenda. Besides blends, single-variety oils and certified organic, PGI and PDO oils, it makes flavoured oils, balsamic vinegar dressings, handmade ceramics and gift boxes, and offers custom labels and private label.",
        "de": "Le Ferre srl erzeugt, füllt ab und verkauft ausschließlich natives Olivenöl extra in Castellaneta in der Provinz Tarent. Der Name stammt von dem ländlichen Gebiet zwischen dem Ionischen Meer und den Hügeln der Murgia, wo die Familie, Enkel von Olivenbauern, noch einige jahrhundertealte Olivenbäume pflegt. Seit 1999 sammelt sie Erfahrung in der Ölmühle an der Seite eines örtlichen Ölmeisters, seit 2008 verfolgt sie ein Modell aus vielfältiger Produktion und der Kunst des Blendings. 2012 ließ sie die Marke Multivarietale eintragen, 2018 eröffnete sie ihren heutigen Sitz an der SS 7 mit Showroom und Verkostungsraum. Gambero Rosso, Slow Food und Bibenda zählen sie zu den besten nativen Olivenölen Italiens. Neben Blends, sortenreinen und zertifizierten Bio-, g.g.A.- und g.U.-Ölen stellt sie Würzöle, Würzen mit Aceto Balsamico, handgefertigte Keramik und Geschenkboxen her und bietet individuelle Etiketten und Private Label an."
      },
      "sub": [
        {
          "k": "blend",
          "cat": "olio",
          "n": {
            "it": "Blend",
            "en": "Blends",
            "de": "Blends"
          }
        },
        {
          "k": "mono",
          "cat": "olio",
          "n": {
            "it": "Monovarietali",
            "en": "Single-variety oils",
            "de": "Sortenreine Öle"
          }
        },
        {
          "k": "cert",
          "cat": "olio",
          "n": {
            "it": "Certificati DOP, IGP e Bio",
            "en": "Certified PDO, PGI and organic",
            "de": "Zertifiziert g.U., g.g.A. und Bio"
          }
        },
        {
          "k": "pop",
          "cat": "olio",
          "n": {
            "it": "Aromatizzati Linea Pop",
            "en": "Flavoured oils, Pop line",
            "de": "Würzöle, Linie Pop"
          }
        },
        {
          "k": "classic",
          "cat": "olio",
          "n": {
            "it": "Aromatizzati Linea Classic",
            "en": "Flavoured oils, Classic line",
            "de": "Würzöle, Linie Classic"
          }
        },
        {
          "k": "aceti",
          "cat": "olio",
          "n": {
            "it": "Condimenti all'aceto balsamico",
            "en": "Balsamic vinegar dressings",
            "de": "Würzen mit Aceto Balsamico"
          }
        },
        {
          "k": "ceramiche",
          "cat": "olio",
          "n": {
            "it": "Ceramiche",
            "en": "Ceramics",
            "de": "Keramik"
          }
        },
        {
          "k": "regalo",
          "cat": "olio",
          "n": {
            "it": "Confezioni regalo",
            "en": "Gift boxes",
            "de": "Geschenkboxen"
          }
        }
      ],
      "p": [
        [
          "Multivarietale®",
          "0,10 · 0,25 · 0,50 · 0,75 · 1 · 3 · 5 L · bag in box da 5 L · latta da 0,10 L · latta da 1 L",
          "blend"
        ],
        [
          "Autentico",
          "0,25 L · 0,50 L · cartone da 12",
          "blend"
        ],
        [
          "Selezione",
          "0,50 L · cartone da 6",
          "blend"
        ],
        [
          "Carolea",
          "0,50 L, cartone da 12 · latta da 3 L / 5 L, cartone da 4",
          "mono"
        ],
        [
          "Leccino",
          "0,50 L, cartone da 12 · latta da 3 L / 5 L, cartone da 4",
          "mono"
        ],
        [
          "Ogliarola",
          "0,50 L, cartone da 12 · latta da 3 L / 5 L, cartone da 4",
          "mono"
        ],
        [
          "Frantoio",
          "0,50 L, cartone da 12 · latta da 3 L / 5 L, cartone da 4",
          "mono"
        ],
        [
          "Biancolilla",
          "0,50 L, cartone da 12 · latta da 3 L / 5 L, cartone da 4",
          "mono"
        ],
        [
          "Peranzana",
          "0,50 L, cartone da 12 · latta da 3 L / 5 L, cartone da 4",
          "mono"
        ],
        [
          "Nocellara",
          "0,50 L, cartone da 12 · latta da 3 L / 5 L, cartone da 4",
          "mono"
        ],
        [
          "Coratina",
          "0,50 L, cartone da 12 · latta da 3 L / 5 L, cartone da 4",
          "mono"
        ],
        [
          "Nociara",
          "0,50 L, cartone da 12 · latta da 3 L / 5 L, cartone da 4",
          "mono"
        ],
        [
          "Picholine",
          "0,50 L, cartone da 12 · latta da 3 L / 5 L, cartone da 4",
          "mono"
        ],
        [
          "BIO",
          "0,50 L, cartone da 6 · 3 L / 5 L, cartone da 4",
          "cert"
        ],
        [
          "I.G.P. Olio di Puglia",
          "0,50 L · cartone da 6",
          "cert"
        ],
        [
          "D.O.P. Terra di Bari",
          "0,50 L · cartone da 6",
          "cert"
        ],
        [
          "Affumicato (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Aglio nero (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Arancia (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Basilico (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Limone (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Peperoncino (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Pompelmo (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Salsa BBQ (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Sedano (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Tartufo (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Habanero (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Jalapeño (Linea Pop)",
          "0,25 L · cartone da 12",
          "pop"
        ],
        [
          "Acciughe",
          "0,25 L",
          "classic"
        ],
        [
          "Affumicato",
          "0,25 L",
          "classic"
        ],
        [
          "Aglio",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Aglio e peperoncino",
          "0,25 L",
          "classic"
        ],
        [
          "Alloro",
          "0,25 L",
          "classic"
        ],
        [
          "Arancia",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Basilico",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Bergamotto",
          "0,25 L",
          "classic"
        ],
        [
          "Caffè",
          "0,25 L",
          "classic"
        ],
        [
          "Cannella",
          "0,25 L",
          "classic"
        ],
        [
          "Cipolla",
          "0,25 L",
          "classic"
        ],
        [
          "Curry",
          "0,25 L",
          "classic"
        ],
        [
          "Erbe mediterranee",
          "0,25 L",
          "classic"
        ],
        [
          "Funghi porcini",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Liquirizia",
          "0,25 L",
          "classic"
        ],
        [
          "Limone",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Maggiorana",
          "0,25 L",
          "classic"
        ],
        [
          "Mandarino",
          "0,25 L",
          "classic"
        ],
        [
          "Menta",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Origano",
          "0,25 L",
          "classic"
        ],
        [
          "Pepe nero",
          "0,25 L",
          "classic"
        ],
        [
          "Peperoncino",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Pesto",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Pistacchio",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Pompelmo",
          "0,25 L",
          "classic"
        ],
        [
          "Rosmarino",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Salvia",
          "0,25 L",
          "classic"
        ],
        [
          "Scalogno",
          "0,25 L",
          "classic"
        ],
        [
          "Tartufo bianco",
          "0,10 L · 0,25 L",
          "classic"
        ],
        [
          "Timo",
          "0,25 L",
          "classic"
        ],
        [
          "Vaniglia",
          "0,25 L",
          "classic"
        ],
        [
          "Zafferano",
          "0,25 L",
          "classic"
        ],
        [
          "Zenzero",
          "0,25 L",
          "classic"
        ],
        [
          "Goccia",
          "0,25 L · 0,50 L · 5 L",
          "aceti"
        ],
        [
          "Autentico Aceto Nero",
          "0,25 L · 0,50 L · cartone da 12",
          "aceti"
        ],
        [
          "Autentico Aceto Il Denso",
          "0,25 L · 0,50 L · cartone da 12",
          "aceti"
        ],
        [
          "Selezione Aceto",
          "0,50 L · cartone da 6",
          "aceti"
        ],
        [
          "Truttulà",
          "0,10 · 0,25 · 0,50 L · cartone da 6",
          "ceramiche"
        ],
        [
          "Materico",
          "0,10 · 0,25 · 0,50 L",
          "ceramiche"
        ],
        [
          "Ceramica su olio",
          "0,50 L · cartone da 12",
          "ceramiche"
        ],
        [
          "Fiammifero M Tris mediterraneo",
          "3 × 0,25 L",
          "regalo"
        ],
        [
          "Fiammifero M Tre aromi",
          "3 × 0,25 L",
          "regalo"
        ],
        [
          "Fiammifero M Pastry",
          "3 × 0,25 L",
          "regalo"
        ],
        [
          "Fiammifero M Mari & Monti",
          "3 × 0,25 L",
          "regalo"
        ],
        [
          "Fiammifero M Gourmet",
          "3 × 0,25 L",
          "regalo"
        ],
        [
          "Fiammifero M Oriente",
          "3 × 0,25 L",
          "regalo"
        ],
        [
          "Fiammifero M Agrumato",
          "3 × 0,25 L",
          "regalo"
        ],
        [
          "Fiammifero M I Certificati",
          "2 × 0,50 L",
          "regalo"
        ],
        [
          "Fiammifero S Garden",
          "4 × 0,10 L",
          "regalo"
        ],
        [
          "Fiammifero S Degustazione di aromi",
          "4 × 0,10 L",
          "regalo"
        ],
        [
          "Puglia Monopoli Certificati",
          "2 × 0,50 L",
          "regalo"
        ],
        [
          "Puglia Ostuni Aromatizzati",
          "3 × 0,25 L",
          "regalo"
        ],
        [
          "Puglia Vieste Aromatizzati",
          "6 × 0,25 L",
          "regalo"
        ],
        [
          "Puglia Trani Aromatizzati",
          "4 × 0,10 L",
          "regalo"
        ],
        [
          "Puglia Alberobello Condimenti",
          "5 × 0,10 L",
          "regalo"
        ],
        [
          "Puglia Melpignano Degustazione",
          "3 × 0,10 L",
          "regalo"
        ],
        [
          "Dama Certificati",
          "2 × 0,50 L",
          "regalo"
        ],
        [
          "Dama Selezione",
          "2 × 0,50 L",
          "regalo"
        ],
        [
          "Dama Autentico",
          "2 × 0,50 L",
          "regalo"
        ],
        [
          "Pochette Aromatizzati",
          "5 × 0,10 L",
          "regalo"
        ],
        [
          "Scatola regalo Autentico",
          "2 × 0,25 L · 2 × 0,50 L",
          "regalo"
        ],
        [
          "Autentico ON",
          "0,50 L",
          "regalo"
        ]
      ],
      "pd": {
        "V-13-0": {
          "c": [],
          "pr": "3,30 € (0,10 L) · 4,90 € (0,25 L) · 20,20 € (0,50 L) · 29,20 € (0,75 L) · 33,00 € (1 L) · 44,50 € (3 L) · 72,50 € (5 L)",
          "d": {
            "it": "Olio extravergine d'oliva 100% italiano, estratto a freddo: il blend storico di Le Ferre, marchio registrato dal 2012. Fruttato leggero, sentori di mandorla, lievi note amare e piccante piacevole sul finale.",
            "en": "100% Italian extra virgin olive oil, cold extracted: Le Ferre's signature blend, a registered trademark since 2012. Light fruitiness, hints of almond, gentle bitterness and a pleasant peppery finish.",
            "de": "Natives Olivenöl extra, 100 % italienisch, kalt extrahiert: der klassische Blend von Le Ferre, seit 2012 eingetragene Marke. Leicht fruchtig, Mandelnoten, sanfte Bitterkeit und angenehme Schärfe im Abgang."
          },
          "a": {
            "it": "Per condire a crudo e come base di cottura: resta stabile al calore. Fa parte anche della linea Ho.Re.Ca., con formati fino a 10 L.",
            "en": "For dressing raw dishes and as a cooking base, as it stays stable under heat. Also part of the Ho.Re.Ca. line, in sizes up to 10 L.",
            "de": "Zum Verfeinern roher Speisen und als Basis zum Kochen, da es hitzestabil ist. Auch Teil der Ho.Re.Ca.-Linie, in Größen bis 10 L."
          }
        },
        "V-13-1": {
          "c": [],
          "pr": "7,50 € (0,25 L) · 23,80 € (0,50 L)",
          "d": {
            "it": "Blend di oli extravergine d'oliva 100% italiani, estratto a freddo, nella caratteristica bottiglia Autentico. Bouquet aromatico ampio, delicate note vegetali e sapore equilibrato.",
            "en": "Blend of 100% Italian extra virgin olive oils, cold extracted, in the distinctive Autentico bottle. A broad aromatic bouquet, delicate vegetal notes and a balanced flavour.",
            "de": "Blend aus 100 % italienischen nativen Olivenölen extra, kalt extrahiert, in der typischen Autentico-Flasche. Breites Aromabouquet, feine pflanzliche Noten und ausgewogener Geschmack."
          },
          "a": {
            "it": "Versatile, dà il meglio a crudo: completa ogni piatto con intensità e armonia. Si abbina ai condimenti Autentico Aceto.",
            "en": "Versatile and at its best raw, it rounds off any dish with intensity and harmony. Pairs with the Autentico vinegar dressings.",
            "de": "Vielseitig und roh am besten: rundet jedes Gericht intensiv und harmonisch ab. Passt zu den Autentico-Essigwürzen."
          }
        },
        "V-13-2": {
          "c": [],
          "pr": "50,00 €",
          "d": {
            "it": "Blend di oli extravergine d'oliva 100% italiani, scelti e dosati con cura, in bottiglia con tappo antirabbocco e astuccio singolo. Profumo intenso, ampio e avvolgente; corpo morbido e intensità bilanciata.",
            "en": "Blend of carefully selected 100% Italian extra virgin olive oils, in a bottle with a non-refillable cap and its own gift sleeve. Intense, broad and enveloping on the nose; soft body and balanced intensity.",
            "de": "Blend aus sorgfältig ausgewählten 100 % italienischen nativen Olivenölen extra, in der Flasche mit Nachfüllschutz und eigenem Etui. Intensiver, breiter, umhüllender Duft; weicher Körper und ausgewogene Intensität."
          },
          "a": {
            "it": "Per condire e rifinire con carattere qualsiasi piatto. La linea si completa con Selezione Aceto.",
            "en": "For dressing and finishing any dish with character. The line is completed by Selezione Aceto.",
            "de": "Zum Würzen und Verfeinern jedes Gerichts mit Charakter. Ergänzt wird die Linie durch Selezione Aceto."
          }
        },
        "V-13-3": {
          "c": [],
          "pr": "15,00 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Monovarietale Carolea: olio extravergine d'oliva 100% italiano da olive di origine pugliese, estratto a freddo. Fruttato verde delicato, di media intensità; armonico e leggero, con scarse note amare e piccanti.",
            "en": "Carolea single-variety extra virgin olive oil, 100% Italian, from olives of Apulian origin, cold extracted. Delicate green fruitiness of medium intensity; harmonious and light, with very little bitterness or pungency.",
            "de": "Sortenreines natives Olivenöl extra aus Carolea-Oliven, 100 % italienisch, Oliven apulischer Herkunft, kalt extrahiert. Zarte grüne Fruchtigkeit mittlerer Intensität; harmonisch und leicht, kaum bitter oder scharf."
          },
          "a": {
            "it": "Ideale con verdure e ortaggi, insalate, pappe da svezzamento, frutti di mare crudi e dolci.",
            "en": "Ideal with vegetables, salads, baby food, raw seafood and desserts.",
            "de": "Ideal zu Gemüse, Salaten, Babynahrung, rohen Meeresfrüchten und Desserts."
          }
        },
        "V-13-4": {
          "c": [],
          "pr": "26,40 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Monovarietale Leccino: olio extravergine d'oliva 100% italiano da olive di origine pugliese, estratto a freddo. Fruttato delicato con sentori di mandorla; leggero ed equilibrato, con lievi note di amaro e piccante.",
            "en": "Leccino single-variety extra virgin olive oil, 100% Italian, from olives of Apulian origin, cold extracted. Delicately fruity with hints of almond; light and balanced, with gentle bitterness and pungency.",
            "de": "Sortenreines natives Olivenöl extra aus Leccino-Oliven, 100 % italienisch, Oliven apulischer Herkunft, kalt extrahiert. Zart fruchtig mit Mandelnoten; leicht und ausgewogen, mit sanfter Bitterkeit und Schärfe."
          },
          "a": {
            "it": "Ideale con dolci, bruschette, alimentazione infantile, pinzimoni, formaggi stagionati e pollame.",
            "en": "Ideal with desserts, bruschetta, children's food, crudités with dip, aged cheeses and poultry.",
            "de": "Ideal zu Desserts, Bruschetta, Kinderernährung, Rohkost-Dips, gereiftem Käse und Geflügel."
          }
        },
        "V-13-5": {
          "c": [],
          "pr": "15,00 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Monovarietale Ogliarola: olio extravergine d'oliva 100% italiano da olive di origine pugliese, estratto a freddo. Fruttato medio con sfumature verdi; amaro e piccante lievi e in equilibrio.",
            "en": "Ogliarola single-variety extra virgin olive oil, 100% Italian, from olives of Apulian origin, cold extracted. Medium fruitiness with green nuances; light, balanced bitterness and pungency.",
            "de": "Sortenreines natives Olivenöl extra aus Ogliarola-Oliven, 100 % italienisch, Oliven apulischer Herkunft, kalt extrahiert. Mittlere Fruchtigkeit mit grünen Nuancen; leichte, ausgewogene Bitterkeit und Schärfe."
          },
          "a": {
            "it": "Ideale con legumi freschi, carni bianche, frutti di mare, pasta e vellutate di ortaggi.",
            "en": "Ideal with fresh pulses, white meat, seafood, pasta and vegetable cream soups.",
            "de": "Ideal zu frischen Hülsenfrüchten, hellem Fleisch, Meeresfrüchten, Pasta und Gemüsecremesuppen."
          }
        },
        "V-13-6": {
          "c": [],
          "pr": "15,00 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Monovarietale Frantoio: olio extravergine d'oliva 100% italiano da olive di origine pugliese, estratto a freddo. Fruttato verde di media intensità, con profumi di erba appena tagliata e cardo; fresco, con amaro e lieve piccante sul finale.",
            "en": "Frantoio single-variety extra virgin olive oil, 100% Italian, from olives of Apulian origin, cold extracted. Green fruitiness of medium intensity, with aromas of freshly cut grass and cardoon; fresh, with bitterness and a light peppery finish.",
            "de": "Sortenreines natives Olivenöl extra aus Frantoio-Oliven, 100 % italienisch, Oliven apulischer Herkunft, kalt extrahiert. Grüne Fruchtigkeit mittlerer Intensität mit Duft nach frisch gemähtem Gras und Karde; frisch, mit Bitterkeit und leichter Schärfe im Abgang."
          },
          "a": {
            "it": "Ideale con legumi secchi, risotti, pollame, minestre di verdure e crostacei.",
            "en": "Ideal with dried pulses, risotto, poultry, vegetable soups and shellfish.",
            "de": "Ideal zu getrockneten Hülsenfrüchten, Risotto, Geflügel, Gemüsesuppen und Krustentieren."
          }
        },
        "V-13-7": {
          "c": [],
          "pr": "15,00 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Monovarietale Biancolilla: olio extravergine d'oliva 100% italiano da olive di origine pugliese, estratto a freddo. Profumi vegetali delicati che ricordano la foglia di pomodoro; dolce, con amaro e piccante lievi ed equilibrati.",
            "en": "Biancolilla single-variety extra virgin olive oil, 100% Italian, from olives of Apulian origin, cold extracted. Delicate vegetal aromas reminiscent of tomato leaf; sweet, with light, balanced bitterness and pungency.",
            "de": "Sortenreines natives Olivenöl extra aus Biancolilla-Oliven, 100 % italienisch, Oliven apulischer Herkunft, kalt extrahiert. Zarte pflanzliche Aromen, die an Tomatenblatt erinnern; süß, mit leichter, ausgewogener Bitterkeit und Schärfe."
          },
          "a": {
            "it": "Ideale con antipasti di mare, carni alla griglia, gamberi, zuppe di verdure, tartare e carpacci di carne.",
            "en": "Ideal with seafood starters, grilled meat, prawns, vegetable soups, meat tartare and carpaccio.",
            "de": "Ideal zu Meeresfrüchte-Vorspeisen, Grillfleisch, Garnelen, Gemüsesuppen, Fleischtatar und Carpaccio."
          }
        },
        "V-13-8": {
          "c": [],
          "pr": "15,00 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Monovarietale Peranzana: olio extravergine d'oliva 100% italiano da olive di origine pugliese, estratto a freddo. Fruttato maturo con sfumature di erba tagliata e carciofo; armonico, con amaro e piccante in equilibrio.",
            "en": "Peranzana single-variety extra virgin olive oil, 100% Italian, from olives of Apulian origin, cold extracted. Ripe fruitiness with notes of cut grass and artichoke; harmonious, with balanced bitterness and pungency.",
            "de": "Sortenreines natives Olivenöl extra aus Peranzana-Oliven, 100 % italienisch, Oliven apulischer Herkunft, kalt extrahiert. Reife Fruchtigkeit mit Noten von geschnittenem Gras und Artischocke; harmonisch, mit ausgewogener Bitterkeit und Schärfe."
          },
          "a": {
            "it": "Ideale con pesci alla griglia, timballi, risotti, formaggi stagionati, salse bianche e zuppe di pesce.",
            "en": "Ideal with grilled fish, timbales, risotto, aged cheeses, white sauces and fish soups.",
            "de": "Ideal zu gegrilltem Fisch, Timbalen, Risotto, gereiftem Käse, hellen Saucen und Fischsuppen."
          }
        },
        "V-13-9": {
          "c": [],
          "pr": "15,00 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Monovarietale Nocellara: olio extravergine d'oliva 100% italiano da olive di origine pugliese, estratto a freddo. Fruttato verde intenso con note nette di erba fresca; amaro e piccante in equilibrio, profilo armonico.",
            "en": "Nocellara single-variety extra virgin olive oil, 100% Italian, from olives of Apulian origin, cold extracted. Intense green fruitiness with clear notes of fresh grass; balanced bitterness and pungency, a harmonious profile.",
            "de": "Sortenreines natives Olivenöl extra aus Nocellara-Oliven, 100 % italienisch, Oliven apulischer Herkunft, kalt extrahiert. Intensive grüne Fruchtigkeit mit klaren Noten von frischem Gras; ausgewogene Bitterkeit und Schärfe, harmonisches Profil."
          },
          "a": {
            "it": "Ideale con pesci al forno, seppie, calamari, sughi, pasta e tartare di pesce.",
            "en": "Ideal with baked fish, cuttlefish, squid, sauces, pasta and fish tartare.",
            "de": "Ideal zu Fisch aus dem Ofen, Sepia, Calamari, Saucen, Pasta und Fischtatar."
          }
        },
        "V-13-10": {
          "c": [],
          "pr": "26,40 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Monovarietale Coratina: olio extravergine d'oliva 100% italiano da olive di origine pugliese, estratto a freddo. Fruttato con decisi sentori di foglia d'ulivo e carciofo; sapore intenso, con piccante spiccato e amaro persistente.",
            "en": "Coratina single-variety extra virgin olive oil, 100% Italian, from olives of Apulian origin, cold extracted. Fruity, with strong notes of olive leaf and artichoke; an intense flavour with marked pungency and lingering bitterness.",
            "de": "Sortenreines natives Olivenöl extra aus Coratina-Oliven, 100 % italienisch, Oliven apulischer Herkunft, kalt extrahiert. Fruchtig, mit kräftigen Noten von Olivenblatt und Artischocke; intensiver Geschmack mit ausgeprägter Schärfe und anhaltender Bitterkeit."
          },
          "a": {
            "it": "Ideale con focacce, carni rosse, legumi, crostacei, pesci al forno, selvaggina e polpo.",
            "en": "Ideal with focaccia, red meat, pulses, shellfish, baked fish, game and octopus.",
            "de": "Ideal zu Focaccia, rotem Fleisch, Hülsenfrüchten, Krustentieren, Fisch aus dem Ofen, Wild und Oktopus."
          }
        },
        "V-13-11": {
          "c": [],
          "pr": "15,00 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Monovarietale Nociara: olio extravergine d'oliva 100% italiano da olive di origine pugliese, estratto a freddo. Profumo di foglia d'ulivo; al gusto leggere note amare e piacevoli punte piccanti.",
            "en": "Nociara single-variety extra virgin olive oil, 100% Italian, from olives of Apulian origin, cold extracted. Aroma of olive leaf; on the palate, light bitterness and pleasant peppery touches.",
            "de": "Sortenreines natives Olivenöl extra aus Nociara-Oliven, 100 % italienisch, Oliven apulischer Herkunft, kalt extrahiert. Duft nach Olivenblatt; am Gaumen leichte Bitterkeit und angenehme Schärfespitzen."
          },
          "a": {
            "it": "Ideale con carciofi, cardi, finocchi, asparagi, formaggi freschi, cereali e piatti di manzo.",
            "en": "Ideal with artichokes, cardoons, fennel, asparagus, fresh cheeses, grains and beef dishes.",
            "de": "Ideal zu Artischocken, Karden, Fenchel, Spargel, Frischkäse, Getreide und Rindfleischgerichten."
          }
        },
        "V-13-12": {
          "c": [],
          "pr": "15,00 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Monovarietale Picholine: olio extravergine d'oliva 100% italiano da olive di origine pugliese, estratto a freddo. Fruttato verde con sentori di foglia di pomodoro verde; dolce, con lievi note piccanti ed eleganti note amare.",
            "en": "Picholine single-variety extra virgin olive oil, 100% Italian, from olives of Apulian origin, cold extracted. Green fruitiness with hints of green tomato leaf; sweet, with light pungency and elegant bitterness.",
            "de": "Sortenreines natives Olivenöl extra aus Picholine-Oliven, 100 % italienisch, Oliven apulischer Herkunft, kalt extrahiert. Grüne Fruchtigkeit mit Noten von grünem Tomatenblatt; süß, mit leichter Schärfe und eleganter Bitterkeit."
          },
          "a": {
            "it": "Ideale con astice, molluschi, minestre di verdure, selvaggina e salse agrodolci.",
            "en": "Ideal with lobster, shellfish, vegetable soups, game and sweet and sour sauces.",
            "de": "Ideal zu Hummer, Muscheln, Gemüsesuppen, Wild und süßsauren Saucen."
          }
        },
        "V-13-13": {
          "c": [
            "Bio"
          ],
          "pr": "30,30 € (0,50 L) · 49,50 € (3 L) · 79,50 € (5 L)",
          "d": {
            "it": "Olio extravergine d'oliva da agricoltura biologica, 100% italiano, blend di filiera certificata. Fruttato leggero, lievi note amare e piccante accennato sul finale.",
            "en": "Organic extra virgin olive oil, 100% Italian, a blend from a certified supply chain. Light fruitiness, gentle bitterness and a hint of pungency on the finish.",
            "de": "Natives Olivenöl extra aus biologischem Anbau, 100 % italienisch, Blend aus zertifizierter Lieferkette. Leicht fruchtig, sanfte Bitterkeit und ein Hauch Schärfe im Abgang."
          },
          "a": {
            "it": "Equilibrato, adatto alla cottura di ogni preparazione e a condire a crudo.",
            "en": "Balanced, suitable for cooking any dish and for dressing raw food.",
            "de": "Ausgewogen, zum Kochen aller Gerichte und zum Verfeinern roher Speisen geeignet."
          }
        },
        "V-13-14": {
          "c": [
            "IGP"
          ],
          "pr": "29,90 €",
          "d": {
            "it": "Olio extravergine d'oliva a Indicazione Geografica Protetta, 100% pugliese, di filiera certificata. Fruttato intenso, con profumi di erba appena falciata, mandorla fresca e carciofo; amaro e piccante in armonia.",
            "en": "Extra virgin olive oil with Protected Geographical Indication, 100% from Apulia, from a certified supply chain. Intensely fruity, with aromas of freshly mown grass, fresh almond and artichoke; harmonious bitterness and pungency.",
            "de": "Natives Olivenöl extra mit geschützter geografischer Angabe, 100 % aus Apulien, aus zertifizierter Lieferkette. Intensiv fruchtig, mit Duft nach frisch gemähtem Gras, frischer Mandel und Artischocke; harmonische Bitterkeit und Schärfe."
          },
          "a": {
            "it": "Per completare primi piatti e rifinire bruschette gourmet.",
            "en": "For finishing pasta and rice dishes and gourmet bruschetta.",
            "de": "Zum Vollenden von Pasta- und Reisgerichten und Gourmet-Bruschetta."
          }
        },
        "V-13-15": {
          "c": [
            "DOP"
          ],
          "pr": "31,00 €",
          "d": {
            "it": "Olio extravergine d'oliva a Denominazione di Origine Protetta Terra di Bari, sottozona Castel del Monte, 100% pugliese. Fruttato intenso, leggere note amare e pizzicore nel retrogusto.",
            "en": "Extra virgin olive oil with Protected Designation of Origin Terra di Bari, Castel del Monte subzone, 100% from Apulia. Intensely fruity, with light bitterness and a peppery aftertaste.",
            "de": "Natives Olivenöl extra mit geschützter Ursprungsbezeichnung Terra di Bari, Unterzone Castel del Monte, 100 % aus Apulien. Intensiv fruchtig, mit leichter Bitterkeit und pfeffrigem Nachgeschmack."
          },
          "a": {
            "it": "Dà gusto e struttura a carni e zuppe; ottimo per rifinire piatti elaborati.",
            "en": "Adds flavour and structure to meat and soups; excellent for finishing elaborate dishes.",
            "de": "Gibt Fleisch und Suppen Geschmack und Struktur; ideal zum Vollenden aufwendiger Gerichte."
          }
        },
        "V-13-16": {
          "c": [],
          "pr": "12,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, con note di affumicatura: pensato per carni a cottura lenta, a fuoco indiretto.",
            "en": "Extra virgin olive oil dressing from the Pop line, with smoky notes: made for slow-cooked meat over indirect heat.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Rauchnoten: gedacht für langsam gegartes Fleisch bei indirekter Hitze."
          },
          "a": {
            "it": "Suggerito con alette di pollo e stinco di maiale.",
            "en": "Suggested with chicken wings and pork shank.",
            "de": "Empfohlen zu Chicken Wings und Schweinshaxe."
          }
        },
        "V-13-17": {
          "c": [],
          "pr": "12,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, all'aglio nero: dona ai piatti una dolcezza originale.",
            "en": "Extra virgin olive oil dressing from the Pop line, with black garlic: gives dishes an unusual sweetness.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit schwarzem Knoblauch: verleiht Gerichten eine besondere Süße."
          },
          "a": {
            "it": "Suggerito con spaghetti con acciughe e crostone con burrata.",
            "en": "Suggested with spaghetti with anchovies and toasted bread with burrata.",
            "de": "Empfohlen zu Spaghetti mit Sardellen und geröstetem Brot mit Burrata."
          }
        },
        "V-13-18": {
          "c": [],
          "pr": "10,00 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, all'arancia: pensato per tartare raffinate.",
            "en": "Extra virgin olive oil dressing from the Pop line, with orange: made for refined tartare.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Orange: gedacht für feine Tatars."
          },
          "a": {
            "it": "Suggerito con pesce spada e tartare di gambero rosso.",
            "en": "Suggested with swordfish and red prawn tartare.",
            "de": "Empfohlen zu Schwertfisch und Tatar von roten Garnelen."
          }
        },
        "V-13-19": {
          "c": [],
          "pr": "10,00 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, al basilico: insaporisce i piatti con i sapori dell'orto.",
            "en": "Extra virgin olive oil dressing from the Pop line, with basil: brings garden flavours to any dish.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Basilikum: bringt Gartenaromen in jedes Gericht."
          },
          "a": {
            "it": "Suggerito con caponata di verdure.",
            "en": "Suggested with vegetable caponata.",
            "de": "Empfohlen zu Gemüse-Caponata."
          }
        },
        "V-13-20": {
          "c": [],
          "pr": "10,00 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, al limone: pensato per tartare fresche.",
            "en": "Extra virgin olive oil dressing from the Pop line, with lemon: made for fresh tartare.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Zitrone: gedacht für frische Tatars."
          },
          "a": {
            "it": "Suggerito con tartare di manzo, salmone o branzino.",
            "en": "Suggested with beef, salmon or sea bass tartare.",
            "de": "Empfohlen zu Tatar von Rind, Lachs oder Wolfsbarsch."
          }
        },
        "V-13-21": {
          "c": [],
          "pr": "10,00 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, al peperoncino, di piccantezza media.",
            "en": "Extra virgin olive oil dressing from the Pop line, with chilli, medium heat.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Chili, mittlere Schärfe."
          },
          "a": {
            "it": "Suggerito con pizze, fagioli e frutti di mare.",
            "en": "Suggested with pizza, beans and seafood.",
            "de": "Empfohlen zu Pizza, Bohnen und Meeresfrüchten."
          }
        },
        "V-13-22": {
          "c": [],
          "pr": "12,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, al pompelmo: pensato per tartare aromatiche.",
            "en": "Extra virgin olive oil dressing from the Pop line, with grapefruit: made for aromatic tartare.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Grapefruit: gedacht für aromatische Tatars."
          },
          "a": {
            "it": "Suggerito con tonno a dadini e tartare di ricciola.",
            "en": "Suggested with diced tuna and amberjack tartare.",
            "de": "Empfohlen zu Thunfischwürfeln und Tatar von Bernsteinmakrele."
          }
        },
        "V-13-23": {
          "c": [],
          "pr": "12,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, al gusto di salsa barbecue: pensato per carni a cottura lenta, a fuoco indiretto.",
            "en": "Extra virgin olive oil dressing from the Pop line, with a barbecue sauce flavour: made for slow-cooked meat over indirect heat.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Barbecue-Sauce-Geschmack: gedacht für langsam gegartes Fleisch bei indirekter Hitze."
          },
          "a": {
            "it": "Suggerito con costine di maiale e beef brisket.",
            "en": "Suggested with pork ribs and beef brisket.",
            "de": "Empfohlen zu Schweinerippchen und Beef Brisket."
          }
        },
        "V-13-24": {
          "c": [],
          "pr": "12,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, al sedano: dona un tocco di freschezza.",
            "en": "Extra virgin olive oil dressing from the Pop line, with celery: adds a touch of freshness.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Sellerie: sorgt für eine frische Note."
          },
          "a": {
            "it": "Suggerito con gazpacho, crema di carote e insalate con noci.",
            "en": "Suggested with gazpacho, carrot soup and salads with walnuts.",
            "de": "Empfohlen zu Gazpacho, Karottencremesuppe und Salaten mit Walnüssen."
          }
        },
        "V-13-25": {
          "c": [],
          "pr": "12,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, al tartufo: pensato per carni alla griglia.",
            "en": "Extra virgin olive oil dressing from the Pop line, with truffle: made for grilled meat.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Trüffel: gedacht für gegrilltes Fleisch."
          },
          "a": {
            "it": "Suggerito con filetto di manzo e tagliata di Chianina.",
            "en": "Suggested with beef fillet and sliced Chianina steak.",
            "de": "Empfohlen zu Rinderfilet und Tagliata vom Chianina-Rind."
          }
        },
        "V-13-26": {
          "c": [],
          "pr": "12,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, al peperoncino habanero, di piccantezza intensa.",
            "en": "Extra virgin olive oil dressing from the Pop line, with habanero chilli, very hot.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Habanero-Chili, sehr scharf."
          },
          "a": {
            "it": "Suggerito con patate in insalata, carni bianche e zuppe di verdure.",
            "en": "Suggested with potato salad, white meat and vegetable soups.",
            "de": "Empfohlen zu Kartoffelsalat, hellem Fleisch und Gemüsesuppen."
          }
        },
        "V-13-27": {
          "c": [],
          "pr": "12,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva della Linea Pop, al jalapeño, di piccantezza moderata.",
            "en": "Extra virgin olive oil dressing from the Pop line, with jalapeño, moderate heat.",
            "de": "Würzöl aus nativem Olivenöl extra der Linie Pop, mit Jalapeño, mäßige Schärfe."
          },
          "a": {
            "it": "Suggerito con ostriche, braciole di maiale e zuppe di pesce.",
            "en": "Suggested with oysters, pork chops and fish soups.",
            "de": "Empfohlen zu Austern, Schweinekoteletts und Fischsuppen."
          }
        },
        "V-13-28": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato alle acciughe, Linea Classic. Spiccata sapidità e profumo piacevole.",
            "en": "Extra virgin olive oil dressing flavoured with anchovies, Classic line. Distinctly savoury, with a pleasant aroma.",
            "de": "Würzöl aus nativem Olivenöl extra mit Sardellen, Linie Classic. Ausgeprägt würzig, mit angenehmem Duft."
          },
          "a": {
            "it": "Ideale a crudo con insalate, bruschette, pizza, broccoli e orecchiette con cime di rapa.",
            "en": "Best used raw with salads, bruschetta, pizza, broccoli and orecchiette with turnip tops.",
            "de": "Ideal roh zu Salaten, Bruschetta, Pizza, Brokkoli und Orecchiette mit Stängelkohl."
          }
        },
        "V-13-29": {
          "c": [],
          "pr": "9,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato affumicato, Linea Classic. Profumo di legni arsi, nato dall'antica arte nordica di affumicare gli alimenti.",
            "en": "Extra virgin olive oil dressing flavoured with smoke, Classic line. Aroma of burnt wood, inspired by the old Nordic art of smoking food.",
            "de": "Würzöl aus nativem Olivenöl extra mit Raucharoma, Linie Classic. Duft nach verbranntem Holz, inspiriert von der alten nordischen Kunst des Räucherns."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-13-30": {
          "c": [],
          "pr": "4,50 € (0,10 L) · 15,00 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato all'aglio, Linea Classic. Profilo intenso, con toni dolci e pungenti in equilibrio.",
            "en": "Extra virgin olive oil dressing flavoured with garlic, Classic line. An intense profile, with sweet and pungent tones in balance.",
            "de": "Würzöl aus nativem Olivenöl extra mit Knoblauch, Linie Classic. Intensives Profil, süße und scharfe Töne im Gleichgewicht."
          },
          "a": {
            "it": "Ideale a crudo con salse, insalate di pasta, legumi, pomodori e bruschette.",
            "en": "Best used raw with sauces, pasta salads, pulses, tomatoes and bruschetta.",
            "de": "Ideal roh zu Saucen, Nudelsalaten, Hülsenfrüchten, Tomaten und Bruschetta."
          }
        },
        "V-13-31": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato ad aglio e peperoncino, Linea Classic. L'intensità dell'aglio e il piccante del peperoncino in un olio vigoroso e fresco.",
            "en": "Extra virgin olive oil dressing flavoured with garlic and chilli, Classic line. The intensity of garlic and the heat of chilli in a vigorous, fresh oil.",
            "de": "Würzöl aus nativem Olivenöl extra mit Knoblauch und Chili, Linie Classic. Die Intensität von Knoblauch und die Schärfe von Chili in einem kräftigen, frischen Öl."
          },
          "a": {
            "it": "Ideale a crudo con fagioli, cous cous e spaghetti.",
            "en": "Best used raw with beans, couscous and spaghetti.",
            "de": "Ideal roh zu Bohnen, Couscous und Spaghetti."
          }
        },
        "V-13-32": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato all'alloro, Linea Classic. Fragranza vigorosa e pungente, gusto intenso con toni piacevolmente amari.",
            "en": "Extra virgin olive oil dressing flavoured with bay leaf, Classic line. A vigorous, pungent fragrance and an intense taste with pleasantly bitter tones.",
            "de": "Würzöl aus nativem Olivenöl extra mit Lorbeer, Linie Classic. Kräftiger, stechender Duft und intensiver Geschmack mit angenehm bitteren Tönen."
          },
          "a": {
            "it": "Ideale a crudo con legumi e stufati, selvaggina, salse e zuppe.",
            "en": "Best used raw with pulses and stews, game, sauces and soups.",
            "de": "Ideal roh zu Hülsenfrüchten und Schmorgerichten, Wild, Saucen und Suppen."
          }
        },
        "V-13-33": {
          "c": [],
          "pr": "4,50 € (0,10 L) · 15,00 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato all'arancia, Linea Classic. Aroma persistente e gusto delicato, con i toni aciduli dell'agrume.",
            "en": "Extra virgin olive oil dressing flavoured with orange, Classic line. A lasting aroma and delicate taste, with the citrus fruit's tangy tones.",
            "de": "Würzöl aus nativem Olivenöl extra mit Orange, Linie Classic. Anhaltendes Aroma und zarter Geschmack mit den säuerlichen Tönen der Zitrusfrucht."
          },
          "a": {
            "it": "Ideale a crudo con crostacei, tartare di tonno, insalate, dolci e cioccolato.",
            "en": "Best used raw with shellfish, tuna tartare, salads, desserts and chocolate.",
            "de": "Ideal roh zu Krustentieren, Thunfischtatar, Salaten, Desserts und Schokolade."
          }
        },
        "V-13-34": {
          "c": [],
          "pr": "7,30 € (0,10 L) · 15,00 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al basilico, Linea Classic. Aroma fresco, sapore dolcemente sapido.",
            "en": "Extra virgin olive oil dressing flavoured with basil, Classic line. A fresh aroma and a gently savoury taste.",
            "de": "Würzöl aus nativem Olivenöl extra mit Basilikum, Linie Classic. Frisches Aroma, sanft würziger Geschmack."
          },
          "a": {
            "it": "Ideale a crudo con pasta, mozzarella, bruschette, carni bianche e pomodori.",
            "en": "Best used raw with pasta, mozzarella, bruschetta, white meat and tomatoes.",
            "de": "Ideal roh zu Pasta, Mozzarella, Bruschetta, hellem Fleisch und Tomaten."
          }
        },
        "V-13-35": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al bergamotto, Linea Classic. Aroma fruttato e sapore dolce, con sfumature amarognole appena accennate.",
            "en": "Extra virgin olive oil dressing flavoured with bergamot, Classic line. A fruity aroma and sweet taste, with just a hint of bitterness.",
            "de": "Würzöl aus nativem Olivenöl extra mit Bergamotte, Linie Classic. Fruchtiges Aroma und süßer Geschmack mit einem Hauch Bitterkeit."
          },
          "a": {
            "it": "Ideale a crudo con pesce spada, tartare di salmone, trota, madeleine e tartellette.",
            "en": "Best used raw with swordfish, salmon tartare, trout, madeleines and tartlets.",
            "de": "Ideal roh zu Schwertfisch, Lachstatar, Forelle, Madeleines und Törtchen."
          }
        },
        "V-13-36": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al caffè, Linea Classic. Aromatico e tostato, di intenso apporto gustativo.",
            "en": "Extra virgin olive oil dressing flavoured with coffee, Classic line. Aromatic and roasted, with an intense flavour.",
            "de": "Würzöl aus nativem Olivenöl extra mit Kaffee, Linie Classic. Aromatisch und geröstet, mit intensivem Geschmack."
          },
          "a": {
            "it": "Ideale a crudo con marinature, salse per arrosti e cipolle.",
            "en": "Best used raw with marinades, sauces for roasts and onions.",
            "de": "Ideal roh zu Marinaden, Saucen für Braten und Zwiebeln."
          }
        },
        "V-13-37": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato alla cannella, Linea Classic. Profumo speziato, secco e pungente, con sfumature dolci.",
            "en": "Extra virgin olive oil dressing flavoured with cinnamon, Classic line. A spicy, dry and pungent aroma with sweet nuances.",
            "de": "Würzöl aus nativem Olivenöl extra mit Zimt, Linie Classic. Würziger, trockener und stechender Duft mit süßen Nuancen."
          },
          "a": {
            "it": "Ideale a crudo con frollini e muffin al cacao o alle mele; poche gocce in besciamella, purè, ragù di selvaggina e polpettoni.",
            "en": "Best used raw with shortbread and cocoa or apple muffins; a few drops in béchamel, mashed potatoes, game ragù and meatloaf.",
            "de": "Ideal roh zu Mürbeteiggebäck und Kakao- oder Apfelmuffins; wenige Tropfen in Béchamel, Kartoffelpüree, Wildragout und Hackbraten."
          }
        },
        "V-13-38": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato alla cipolla, Linea Classic. Fragranza vivace, sapore intenso con piacevoli note dolci.",
            "en": "Extra virgin olive oil dressing flavoured with onion, Classic line. A lively fragrance and an intense taste with pleasant sweet notes.",
            "de": "Würzöl aus nativem Olivenöl extra mit Zwiebel, Linie Classic. Lebhafter Duft, intensiver Geschmack mit angenehm süßen Noten."
          },
          "a": {
            "it": "Ideale a crudo con patate, fagiolini, fave, merluzzo, insalate e bruschette.",
            "en": "Best used raw with potatoes, green beans, broad beans, cod, salads and bruschetta.",
            "de": "Ideal roh zu Kartoffeln, grünen Bohnen, Saubohnen, Kabeljau, Salaten und Bruschetta."
          }
        },
        "V-13-39": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al curry, Linea Classic. Note intense e speziate, lievemente piccanti.",
            "en": "Extra virgin olive oil dressing flavoured with curry, Classic line. Intense, spicy notes with a light heat.",
            "de": "Würzöl aus nativem Olivenöl extra mit Curry, Linie Classic. Intensive, würzige Noten, leicht scharf."
          },
          "a": {
            "it": "Ideale a crudo con carni bianche, crostacei, verdure e riso.",
            "en": "Best used raw with white meat, shellfish, vegetables and rice.",
            "de": "Ideal roh zu hellem Fleisch, Krustentieren, Gemüse und Reis."
          }
        },
        "V-13-40": {
          "c": [],
          "pr": "15,80 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato alle erbe mediterranee, Linea Classic. Il profumo fresco e armonioso di un mazzetto di erbe aromatiche, il bouquet garni.",
            "en": "Extra virgin olive oil dressing flavoured with Mediterranean herbs, Classic line. The fresh, harmonious scent of a bunch of aromatic herbs, the bouquet garni.",
            "de": "Würzöl aus nativem Olivenöl extra mit mediterranen Kräutern, Linie Classic. Der frische, harmonische Duft eines Kräuterbündels, des Bouquet garni."
          },
          "a": {
            "it": "Ideale a crudo con zuppe, stufati, salse, quiche e torte salate di verdure.",
            "en": "Best used raw with soups, stews, sauces, quiches and vegetable pies.",
            "de": "Ideal roh zu Suppen, Schmorgerichten, Saucen, Quiches und Gemüsetartes."
          }
        },
        "V-13-41": {
          "c": [],
          "pr": "4,90 € (0,10 L) · 15,00 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato ai funghi porcini, Linea Classic. Aroma avvolgente e persistente, gusto intenso e pieno.",
            "en": "Extra virgin olive oil dressing flavoured with porcini mushrooms, Classic line. An enveloping, lasting aroma and a full, intense taste.",
            "de": "Würzöl aus nativem Olivenöl extra mit Steinpilzen, Linie Classic. Umhüllendes, anhaltendes Aroma, voller und intensiver Geschmack."
          },
          "a": {
            "it": "Ideale a crudo con risotti, fonduta, sughi e carni arrosto.",
            "en": "Best used raw with risotto, fondue, sauces and roast meat.",
            "de": "Ideal roh zu Risotto, Fondue, Saucen und Braten."
          }
        },
        "V-13-42": {
          "c": [],
          "pr": "8,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato alla liquirizia, Linea Classic. Sapore dolce, lievemente affumicato e balsamico.",
            "en": "Extra virgin olive oil dressing flavoured with liquorice, Classic line. A sweet taste, slightly smoky and balsamic.",
            "de": "Würzöl aus nativem Olivenöl extra mit Lakritz, Linie Classic. Süßer Geschmack, leicht rauchig und balsamisch."
          },
          "a": {
            "it": "Ideale a crudo con torte al cacao e al cioccolato, ricotta con lamponi, risotto allo zafferano, carni rosse e funghi cardoncelli.",
            "en": "Best used raw with cocoa and chocolate cakes, ricotta with raspberries, saffron risotto, red meat and king oyster mushrooms.",
            "de": "Ideal roh zu Kakao- und Schokoladenkuchen, Ricotta mit Himbeeren, Safranrisotto, rotem Fleisch und Kräuterseitlingen."
          }
        },
        "V-13-43": {
          "c": [],
          "pr": "7,30 € (0,10 L) · 15,00 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al limone, Linea Classic. Aroma delicato e persistente, gusto fresco e leggero.",
            "en": "Extra virgin olive oil dressing flavoured with lemon, Classic line. A delicate, lasting aroma and a fresh, light taste.",
            "de": "Würzöl aus nativem Olivenöl extra mit Zitrone, Linie Classic. Zartes, anhaltendes Aroma, frischer und leichter Geschmack."
          },
          "a": {
            "it": "Ideale a crudo con insalate, tartare, pesce alla griglia, arrosti e verdure.",
            "en": "Best used raw with salads, tartare, grilled fish, roasts and vegetables.",
            "de": "Ideal roh zu Salaten, Tatar, gegrilltem Fisch, Braten und Gemüse."
          }
        },
        "V-13-44": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato alla maggiorana, Linea Classic. Profumato e delicato, con toni lievemente speziati.",
            "en": "Extra virgin olive oil dressing flavoured with marjoram, Classic line. Fragrant and delicate, with lightly spicy tones.",
            "de": "Würzöl aus nativem Olivenöl extra mit Majoran, Linie Classic. Duftend und zart, mit leicht würzigen Tönen."
          },
          "a": {
            "it": "Ideale a crudo con arrosti, melanzane, pesce e insalate.",
            "en": "Best used raw with roasts, aubergines, fish and salads.",
            "de": "Ideal roh zu Braten, Auberginen, Fisch und Salaten."
          }
        },
        "V-13-45": {
          "c": [],
          "pr": "9,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al mandarino, Linea Classic. Note dolci e profumate.",
            "en": "Extra virgin olive oil dressing flavoured with mandarin, Classic line. Sweet, fragrant notes.",
            "de": "Würzöl aus nativem Olivenöl extra mit Mandarine, Linie Classic. Süße, duftende Noten."
          },
          "a": {
            "it": "Ideale a crudo con scaloppine di vitello, branzino al forno, triglie al cartoccio, tartare di gamberi, torte al cioccolato e pasta frolla.",
            "en": "Best used raw with veal escalopes, baked sea bass, red mullet en papillote, prawn tartare, chocolate cakes and shortcrust pastry.",
            "de": "Ideal roh zu Kalbsschnitzel, Wolfsbarsch aus dem Ofen, Rotbarben in Papillote, Garnelentatar, Schokoladenkuchen und Mürbeteig."
          }
        },
        "V-13-46": {
          "c": [],
          "pr": "4,50 € (0,10 L) · 7,50 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato alla menta, Linea Classic. Note frizzanti, sapore deciso e piacevolmente fresco.",
            "en": "Extra virgin olive oil dressing flavoured with mint, Classic line. Lively notes and a bold, pleasantly fresh taste.",
            "de": "Würzöl aus nativem Olivenöl extra mit Minze, Linie Classic. Prickelnde Noten, kräftiger und angenehm frischer Geschmack."
          },
          "a": {
            "it": "Ideale a crudo con zucchine, cetrioli, agnello, piselli e patate.",
            "en": "Best used raw with courgettes, cucumbers, lamb, peas and potatoes.",
            "de": "Ideal roh zu Zucchini, Gurken, Lamm, Erbsen und Kartoffeln."
          }
        },
        "V-13-47": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato all'origano, Linea Classic. Sentori pungenti alternati a sfumature dolci.",
            "en": "Extra virgin olive oil dressing flavoured with oregano, Classic line. Pungent hints alternating with sweet nuances.",
            "de": "Würzöl aus nativem Olivenöl extra mit Oregano, Linie Classic. Stechende Noten im Wechsel mit süßen Nuancen."
          },
          "a": {
            "it": "Ideale a crudo con pizza, insalate, pomodoro, pollo e tacchino.",
            "en": "Best used raw with pizza, salads, tomato, chicken and turkey.",
            "de": "Ideal roh zu Pizza, Salaten, Tomaten, Huhn und Pute."
          }
        },
        "V-13-48": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al pepe nero, Linea Classic. Speziato, con note pungenti e un vivace profilo olfattivo.",
            "en": "Extra virgin olive oil dressing flavoured with black pepper, Classic line. Spicy, with pungent notes and a lively aroma.",
            "de": "Würzöl aus nativem Olivenöl extra mit schwarzem Pfeffer, Linie Classic. Würzig, mit stechenden Noten und lebhaftem Duft."
          },
          "a": {
            "it": "Ideale a crudo con carpacci di pesce, formaggi, pinzimoni e zuppe di pesce.",
            "en": "Best used raw with fish carpaccio, cheeses, crudités with dip and fish soups.",
            "de": "Ideal roh zu Fischcarpaccio, Käse, Rohkost-Dips und Fischsuppen."
          }
        },
        "V-13-49": {
          "c": [],
          "pr": "7,30 € (0,10 L) · 15,00 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al peperoncino, Linea Classic. Piccante, dal sapore intenso e duraturo.",
            "en": "Extra virgin olive oil dressing flavoured with chilli, Classic line. Hot, with an intense, lasting flavour.",
            "de": "Würzöl aus nativem Olivenöl extra mit Chili, Linie Classic. Scharf, mit intensivem, anhaltendem Geschmack."
          },
          "a": {
            "it": "Ideale a crudo con zuppe di legumi, pasta, pizza, carne e ortaggi.",
            "en": "Best used raw with pulse soups, pasta, pizza, meat and vegetables.",
            "de": "Ideal roh zu Hülsenfruchtsuppen, Pasta, Pizza, Fleisch und Gemüse."
          }
        },
        "V-13-50": {
          "c": [],
          "pr": "4,50 € (0,10 L) · 7,50 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al pesto, Linea Classic. Aroma intenso, sapore fresco e caratteristico.",
            "en": "Extra virgin olive oil dressing flavoured with pesto, Classic line. An intense aroma and a fresh, distinctive taste.",
            "de": "Würzöl aus nativem Olivenöl extra mit Pesto, Linie Classic. Intensives Aroma, frischer und charakteristischer Geschmack."
          },
          "a": {
            "it": "Ideale a crudo con pasta, pane, pomodori e formaggi freschi.",
            "en": "Best used raw with pasta, bread, tomatoes and fresh cheeses.",
            "de": "Ideal roh zu Pasta, Brot, Tomaten und Frischkäse."
          }
        },
        "V-13-51": {
          "c": [],
          "pr": "7,30 € (0,10 L) · 12,50 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al pistacchio, Linea Classic. Sapore pieno e fragranza delicata, leggermente tostata.",
            "en": "Extra virgin olive oil dressing flavoured with pistachio, Classic line. A full taste and a delicate, lightly toasted fragrance.",
            "de": "Würzöl aus nativem Olivenöl extra mit Pistazie, Linie Classic. Voller Geschmack und zarter, leicht gerösteter Duft."
          },
          "a": {
            "it": "Ideale a crudo con formaggi erborinati, salmone, crostacei, torte e biscotti.",
            "en": "Best used raw with blue cheeses, salmon, shellfish, cakes and biscuits.",
            "de": "Ideal roh zu Blauschimmelkäse, Lachs, Krustentieren, Kuchen und Keksen."
          }
        },
        "V-13-52": {
          "c": [],
          "pr": "9,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al pompelmo, Linea Classic. La nota amarognola e lievemente acidula del pompelmo.",
            "en": "Extra virgin olive oil dressing flavoured with grapefruit, Classic line. The slightly bitter, lightly tangy note of grapefruit.",
            "de": "Würzöl aus nativem Olivenöl extra mit Grapefruit, Linie Classic. Die leicht bittere, leicht säuerliche Note der Grapefruit."
          },
          "a": {
            "it": "Ideale a crudo con insalate con grana e rucola, bresaola, carpacci di carne e pesce, pesce spada affumicato, gamberoni e broccoli.",
            "en": "Best used raw with salads with grana and rocket, bresaola, meat and fish carpaccio, smoked swordfish, king prawns and broccoli.",
            "de": "Ideal roh zu Salaten mit Grana und Rucola, Bresaola, Fleisch- und Fischcarpaccio, geräuchertem Schwertfisch, Riesengarnelen und Brokkoli."
          }
        },
        "V-13-53": {
          "c": [],
          "pr": "7,30 € (0,10 L) · 12,50 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al rosmarino, Linea Classic. Gusto aromatico e pieno, profumo pungente con sfumature amarognole.",
            "en": "Extra virgin olive oil dressing flavoured with rosemary, Classic line. A full, aromatic taste and a pungent scent with slightly bitter nuances.",
            "de": "Würzöl aus nativem Olivenöl extra mit Rosmarin, Linie Classic. Voller, aromatischer Geschmack, stechender Duft mit leicht bitteren Nuancen."
          },
          "a": {
            "it": "Ideale a crudo con pane e focaccia, agnello, pollo, maiale, ceci e patate.",
            "en": "Best used raw with bread and focaccia, lamb, chicken, pork, chickpeas and potatoes.",
            "de": "Ideal roh zu Brot und Focaccia, Lamm, Huhn, Schwein, Kichererbsen und Kartoffeln."
          }
        },
        "V-13-54": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato alla salvia, Linea Classic. Fragranza aromatica con cenni gradevolmente amari.",
            "en": "Extra virgin olive oil dressing flavoured with sage, Classic line. An aromatic fragrance with pleasantly bitter hints.",
            "de": "Würzöl aus nativem Olivenöl extra mit Salbei, Linie Classic. Aromatischer Duft mit angenehm bitteren Anklängen."
          },
          "a": {
            "it": "Ideale a crudo con formaggi stagionati, vitello, tacchino, uova e risotti.",
            "en": "Best used raw with aged cheeses, veal, turkey, eggs and risotto.",
            "de": "Ideal roh zu gereiftem Käse, Kalb, Pute, Eiern und Risotto."
          }
        },
        "V-13-55": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato allo scalogno, Linea Classic. Sapore delicato e fragranza intensa.",
            "en": "Extra virgin olive oil dressing flavoured with shallot, Classic line. A delicate taste and an intense fragrance.",
            "de": "Würzöl aus nativem Olivenöl extra mit Schalotte, Linie Classic. Zarter Geschmack und intensiver Duft."
          },
          "a": {
            "it": "Ideale a crudo con insalate di pesce, verdure, vellutate e arrosti.",
            "en": "Best used raw with seafood salads, vegetables, cream soups and roasts.",
            "de": "Ideal roh zu Meeresfrüchtesalaten, Gemüse, Cremesuppen und Braten."
          }
        },
        "V-13-56": {
          "c": [],
          "pr": "5,90 € (0,10 L) · 9,50 € (0,25 L)",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al tartufo bianco, Linea Classic. Profumo persistente, note forti e aromatiche.",
            "en": "Extra virgin olive oil dressing flavoured with white truffle, Classic line. A lasting scent with strong, aromatic notes.",
            "de": "Würzöl aus nativem Olivenöl extra mit weißem Trüffel, Linie Classic. Anhaltender Duft, kräftige und aromatische Noten."
          },
          "a": {
            "it": "Ideale a crudo con risotti, uova, carne e carpacci.",
            "en": "Best used raw with risotto, eggs, meat and carpaccio.",
            "de": "Ideal roh zu Risotto, Eiern, Fleisch und Carpaccio."
          }
        },
        "V-13-57": {
          "c": [],
          "pr": "7,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato al timo, Linea Classic. Fresco e odoroso, profumo intenso e gusto speziato persistente.",
            "en": "Extra virgin olive oil dressing flavoured with thyme, Classic line. Fresh and fragrant, with an intense scent and a lasting spicy taste.",
            "de": "Würzöl aus nativem Olivenöl extra mit Thymian, Linie Classic. Frisch und duftend, intensiver Duft und anhaltend würziger Geschmack."
          },
          "a": {
            "it": "Ideale a crudo con pollame, maiale, branzino e sgombro.",
            "en": "Best used raw with poultry, pork, sea bass and mackerel.",
            "de": "Ideal roh zu Geflügel, Schwein, Wolfsbarsch und Makrele."
          }
        },
        "V-13-58": {
          "c": [],
          "pr": "8,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato alla vaniglia, Linea Classic. Aroma dolce e delicato.",
            "en": "Extra virgin olive oil dressing flavoured with vanilla, Classic line. A sweet, delicate aroma.",
            "de": "Würzöl aus nativem Olivenöl extra mit Vanille, Linie Classic. Süßes, zartes Aroma."
          },
          "a": {
            "it": "Ideale a crudo con biscotti, crostate, impasti lievitati e carni bianche.",
            "en": "Best used raw with biscuits, tarts, leavened doughs and white meat.",
            "de": "Ideal roh zu Keksen, Tartes, Hefeteigen und hellem Fleisch."
          }
        },
        "V-13-59": {
          "c": [],
          "pr": "9,50 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato allo zafferano, Linea Classic. Spezia pregiata dal colore intenso: aroma floreale ed elegante, colora naturalmente i piatti.",
            "en": "Extra virgin olive oil dressing flavoured with saffron, Classic line. A precious, deeply coloured spice: a floral, elegant aroma that colours dishes naturally.",
            "de": "Würzöl aus nativem Olivenöl extra mit Safran, Linie Classic. Ein edles, farbintensives Gewürz: blumiges, elegantes Aroma, das Gerichte natürlich färbt."
          },
          "a": {
            "it": "Ideale a crudo con risotti, zuppe di pesce, crostacei e salse delicate.",
            "en": "Best used raw with risotto, fish soups, shellfish and delicate sauces.",
            "de": "Ideal roh zu Risotto, Fischsuppen, Krustentieren und feinen Saucen."
          }
        },
        "V-13-60": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Condimento in olio extravergine d'oliva aromatizzato allo zenzero, Linea Classic. Aroma speziato ed esotico, gusto leggermente piccante.",
            "en": "Extra virgin olive oil dressing flavoured with ginger, Classic line. A spicy, exotic aroma and a slightly hot taste.",
            "de": "Würzöl aus nativem Olivenöl extra mit Ingwer, Linie Classic. Würziges, exotisches Aroma, leicht scharfer Geschmack."
          },
          "a": {
            "it": "Ideale a crudo con broccoli, zucca, carote, salsa di soia, cacao e dolci.",
            "en": "Best used raw with broccoli, pumpkin, carrots, soy sauce, cocoa and desserts.",
            "de": "Ideal roh zu Brokkoli, Kürbis, Karotten, Sojasauce, Kakao und Desserts."
          }
        },
        "V-13-61": {
          "c": [],
          "pr": "5,00 € (0,25 L) · 7,00 € (0,50 L)",
          "d": {
            "it": "Condimento con Aceto Balsamico di Modena IGP, densità 1,07. Fresco, equilibrato e acidulo, con lievi sentori di barrique.",
            "en": "Dressing made with Balsamic Vinegar of Modena PGI, density 1.07. Fresh, balanced and tangy, with light hints of barrique.",
            "de": "Würze mit Aceto Balsamico di Modena g.g.A., Dichte 1,07. Frisch, ausgewogen und säuerlich, mit leichten Barrique-Noten."
          },
          "a": {
            "it": "Per condire insalate e piatti estivi, preferibilmente crudi.",
            "en": "For dressing salads and summer dishes, preferably raw.",
            "de": "Für Salate und Sommergerichte, vorzugsweise roh."
          }
        },
        "V-13-62": {
          "c": [],
          "pr": "6,00 € (0,25 L) · 16,00 € (0,50 L)",
          "d": {
            "it": "Condimento con Aceto Balsamico di Modena IGP nella bottiglia Autentico. Fresco, equilibrato e acidulo, con lievi sentori di barrique.",
            "en": "Dressing made with Balsamic Vinegar of Modena PGI, in the Autentico bottle. Fresh, balanced and tangy, with light hints of barrique.",
            "de": "Würze mit Aceto Balsamico di Modena g.g.A. in der Autentico-Flasche. Frisch, ausgewogen und säuerlich, mit leichten Barrique-Noten."
          },
          "a": {
            "it": "Per condire insalate e piatti estivi, preferibilmente crudi.",
            "en": "For dressing salads and summer dishes, preferably raw.",
            "de": "Für Salate und Sommergerichte, vorzugsweise roh."
          }
        },
        "V-13-63": {
          "c": [],
          "pr": "7,50 € (0,25 L) · 10,50 € (0,50 L)",
          "d": {
            "it": "Condimento con Aceto Balsamico di Modena IGP nella bottiglia Autentico. Vellutato e consistente, con profumo complesso e spiccate note di barrique.",
            "en": "Dressing made with Balsamic Vinegar of Modena PGI, in the Autentico bottle. Velvety and full-bodied, with a complex aroma and marked barrique notes.",
            "de": "Würze mit Aceto Balsamico di Modena g.g.A. in der Autentico-Flasche. Samtig und dicht, mit komplexem Duft und ausgeprägten Barrique-Noten."
          },
          "a": {
            "it": "Per insalate e verdure lesse; adatto anche a carni bianche e formaggi freschi o semistagionati.",
            "en": "For salads and boiled vegetables; also suits white meat and fresh or semi-aged cheeses.",
            "de": "Für Salate und gekochtes Gemüse; passt auch zu hellem Fleisch und frischem oder halbgereiftem Käse."
          }
        },
        "V-13-64": {
          "c": [],
          "pr": "25,00 €",
          "d": {
            "it": "Condimento con Aceto Balsamico di Modena IGP, densità 1,24, in astuccio singolo. Vellutato, con spiccate note di barrique.",
            "en": "Dressing made with Balsamic Vinegar of Modena PGI, density 1.24, in its own gift sleeve. Velvety, with marked barrique notes.",
            "de": "Würze mit Aceto Balsamico di Modena g.g.A., Dichte 1,24, im eigenen Etui. Samtig, mit ausgeprägten Barrique-Noten."
          },
          "a": {
            "it": "Per insalate e verdure lesse, carni bianche e formaggi freschi o semistagionati. Completa la linea Selezione.",
            "en": "For salads and boiled vegetables, white meat and fresh or semi-aged cheeses. Completes the Selezione line.",
            "de": "Für Salate und gekochtes Gemüse, helles Fleisch und frischen oder halbgereiften Käse. Ergänzt die Linie Selezione."
          }
        },
        "V-13-65": {
          "c": [],
          "pr": "38,40 € (0,10 L) · 49,70 € (0,25 L) · 63,70 € (0,50 L)",
          "d": {
            "it": "Contenitore in ceramica lavorato e dipinto a mano in Puglia, modello registrato, con l'olio extravergine Multivarietale®. Tre abbinamenti di colore: giallo e blu, rosso e azzurro, verde e giallo.",
            "en": "A ceramic container shaped and hand-painted in Apulia, a registered design, filled with Multivarietale® extra virgin olive oil. Three colour combinations: yellow and blue, red and light blue, green and yellow.",
            "de": "Keramikgefäß, in Apulien von Hand geformt und bemalt, eingetragenes Design, gefüllt mit nativem Olivenöl extra Multivarietale®. Drei Farbkombinationen: Gelb-Blau, Rot-Hellblau, Grün-Gelb."
          },
          "a": {
            "it": "Un oggetto da regalo e da tavola: il Multivarietale dentro è adatto sia a crudo sia in cottura.",
            "en": "A gift and a table piece: the Multivarietale inside works both raw and for cooking.",
            "de": "Geschenk und Tischobjekt zugleich: Das Multivarietale darin eignet sich roh und zum Kochen."
          }
        },
        "V-13-66": {
          "c": [],
          "pr": "20,90 € (0,10 L) · 25,90 € (0,25 L) · 34,90 € (0,50 L)",
          "d": {
            "it": "Bottiglia in ceramica lavorata e dipinta a mano con un decoro geometrico colorato, modello registrato, con l'olio extravergine Multivarietale® e collarino multilingue. Colori: rosso, verde, arancio, azzurro, blu e rosa.",
            "en": "A ceramic bottle shaped and hand-painted with a colourful geometric pattern, a registered design, filled with Multivarietale® extra virgin olive oil and with a multilingual neck label. Colours: red, green, orange, light blue, blue and pink.",
            "de": "Keramikflasche, von Hand geformt und mit buntem geometrischem Dekor bemalt, eingetragenes Design, gefüllt mit nativem Olivenöl extra Multivarietale®, mit mehrsprachigem Halsetikett. Farben: Rot, Grün, Orange, Hellblau, Blau und Rosa."
          },
          "a": {
            "it": "Un oggetto da regalo e da tavola: il Multivarietale dentro è adatto sia a crudo sia in cottura.",
            "en": "A gift and a table piece: the Multivarietale inside works both raw and for cooking.",
            "de": "Geschenk und Tischobjekt zugleich: Das Multivarietale darin eignet sich roh und zum Kochen."
          }
        },
        "V-13-67": {
          "c": [],
          "pr": "18,50 €",
          "d": {
            "it": "Bottiglia di olio extravergine Multivarietale® con etichetta in ceramica fatta a mano da artigiani pugliesi. Colori: verde, bianco e rosso.",
            "en": "A bottle of Multivarietale® extra virgin olive oil with a ceramic label handmade by Apulian craftspeople. Colours: green, white and red.",
            "de": "Flasche natives Olivenöl extra Multivarietale® mit handgefertigtem Keramiketikett apulischer Kunsthandwerker. Farben: Grün, Weiß und Rot."
          },
          "a": {
            "it": "Un oggetto da regalo e da tavola: il Multivarietale dentro è adatto sia a crudo sia in cottura.",
            "en": "A gift and a table piece: the Multivarietale inside works both raw and for cooking.",
            "de": "Geschenk und Tischobjekt zugleich: Das Multivarietale darin eignet sich roh und zum Kochen."
          }
        },
        "V-13-68": {
          "c": [],
          "pr": "27,50 €",
          "d": {
            "it": "Confezione con tre condimenti aromatizzati in olio extravergine d'oliva da 0,25 L: rosmarino, basilico e limone.",
            "en": "Box with three flavoured extra virgin olive oil dressings, 0.25 L each: rosemary, basil and lemon.",
            "de": "Box mit drei Würzölen aus nativem Olivenöl extra zu je 0,25 L: Rosmarin, Basilikum und Zitrone."
          },
          "a": {
            "it": "Fa parte delle scatole Fiammifero, disponibili in quattro misure (XS, S, M, L).",
            "en": "Part of the Fiammifero box range, available in four sizes (XS, S, M, L).",
            "de": "Teil der Fiammifero-Schachteln, erhältlich in vier Größen (XS, S, M, L)."
          }
        },
        "V-13-69": {
          "c": [],
          "pr": "28,50 €",
          "d": {
            "it": "Confezione con tre condimenti aromatizzati in olio extravergine d'oliva da 0,25 L: peperoncino, tartufo e origano.",
            "en": "Box with three flavoured extra virgin olive oil dressings, 0.25 L each: chilli, truffle and oregano.",
            "de": "Box mit drei Würzölen aus nativem Olivenöl extra zu je 0,25 L: Chili, Trüffel und Oregano."
          },
          "a": {
            "it": "Fa parte delle scatole Fiammifero, disponibili in quattro misure (XS, S, M, L).",
            "en": "Part of the Fiammifero box range, available in four sizes (XS, S, M, L).",
            "de": "Teil der Fiammifero-Schachteln, erhältlich in vier Größen (XS, S, M, L)."
          }
        },
        "V-13-70": {
          "c": [],
          "pr": "27,50 €",
          "d": {
            "it": "Confezione con tre condimenti aromatizzati in olio extravergine d'oliva da 0,25 L: bergamotto, cannella e limone, pensati per la pasticceria.",
            "en": "Box with three flavoured extra virgin olive oil dressings, 0.25 L each: bergamot, cinnamon and lemon, meant for baking.",
            "de": "Box mit drei Würzölen aus nativem Olivenöl extra zu je 0,25 L: Bergamotte, Zimt und Zitrone, gedacht fürs Backen."
          },
          "a": {
            "it": "Fa parte delle scatole Fiammifero, disponibili in quattro misure (XS, S, M, L).",
            "en": "Part of the Fiammifero box range, available in four sizes (XS, S, M, L).",
            "de": "Teil der Fiammifero-Schachteln, erhältlich in vier Größen (XS, S, M, L)."
          }
        },
        "V-13-71": {
          "c": [],
          "pr": "28,30 €",
          "d": {
            "it": "Confezione con tre condimenti aromatizzati in olio extravergine d'oliva da 0,25 L: acciughe, funghi porcini ed erbe mediterranee.",
            "en": "Box with three flavoured extra virgin olive oil dressings, 0.25 L each: anchovies, porcini mushrooms and Mediterranean herbs.",
            "de": "Box mit drei Würzölen aus nativem Olivenöl extra zu je 0,25 L: Sardellen, Steinpilze und mediterrane Kräuter."
          },
          "a": {
            "it": "Fa parte delle scatole Fiammifero, disponibili in quattro misure (XS, S, M, L).",
            "en": "Part of the Fiammifero box range, available in four sizes (XS, S, M, L).",
            "de": "Teil der Fiammifero-Schachteln, erhältlich in vier Größen (XS, S, M, L)."
          }
        },
        "V-13-72": {
          "c": [],
          "pr": "29,50 €",
          "d": {
            "it": "Confezione con tre condimenti aromatizzati in olio extravergine d'oliva da 0,25 L: vaniglia, liquirizia e caffè.",
            "en": "Box with three flavoured extra virgin olive oil dressings, 0.25 L each: vanilla, liquorice and coffee.",
            "de": "Box mit drei Würzölen aus nativem Olivenöl extra zu je 0,25 L: Vanille, Lakritz und Kaffee."
          },
          "a": {
            "it": "Fa parte delle scatole Fiammifero, disponibili in quattro misure (XS, S, M, L).",
            "en": "Part of the Fiammifero box range, available in four sizes (XS, S, M, L).",
            "de": "Teil der Fiammifero-Schachteln, erhältlich in vier Größen (XS, S, M, L)."
          }
        },
        "V-13-73": {
          "c": [],
          "pr": "29,90 €",
          "d": {
            "it": "Confezione con tre condimenti aromatizzati in olio extravergine d'oliva da 0,25 L: curry, zenzero e zafferano.",
            "en": "Box with three flavoured extra virgin olive oil dressings, 0.25 L each: curry, ginger and saffron.",
            "de": "Box mit drei Würzölen aus nativem Olivenöl extra zu je 0,25 L: Curry, Ingwer und Safran."
          },
          "a": {
            "it": "Fa parte delle scatole Fiammifero, disponibili in quattro misure (XS, S, M, L).",
            "en": "Part of the Fiammifero box range, available in four sizes (XS, S, M, L).",
            "de": "Teil der Fiammifero-Schachteln, erhältlich in vier Größen (XS, S, M, L)."
          }
        },
        "V-13-74": {
          "c": [],
          "pr": "31,50 €",
          "d": {
            "it": "Confezione con tre condimenti aromatizzati in olio extravergine d'oliva da 0,25 L: pompelmo, limone e mandarino.",
            "en": "Box with three flavoured extra virgin olive oil dressings, 0.25 L each: grapefruit, lemon and mandarin.",
            "de": "Box mit drei Würzölen aus nativem Olivenöl extra zu je 0,25 L: Grapefruit, Zitrone und Mandarine."
          },
          "a": {
            "it": "Fa parte delle scatole Fiammifero, disponibili in quattro misure (XS, S, M, L).",
            "en": "Part of the Fiammifero box range, available in four sizes (XS, S, M, L).",
            "de": "Teil der Fiammifero-Schachteln, erhältlich in vier Größen (XS, S, M, L)."
          }
        },
        "V-13-75": {
          "c": [],
          "pr": "34,90 €",
          "d": {
            "it": "Confezione con due oli extravergine d'oliva certificati da 0,50 L: I.G.P. Olio di Puglia e BIO.",
            "en": "Box with two certified extra virgin olive oils, 0.50 L each: PGI Olio di Puglia and organic BIO.",
            "de": "Box mit zwei zertifizierten nativen Olivenölen extra zu je 0,50 L: g.g.A. Olio di Puglia und BIO."
          },
          "a": {
            "it": "Fa parte delle scatole Fiammifero, disponibili in quattro misure (XS, S, M, L).",
            "en": "Part of the Fiammifero box range, available in four sizes (XS, S, M, L).",
            "de": "Teil der Fiammifero-Schachteln, erhältlich in vier Größen (XS, S, M, L)."
          }
        },
        "V-13-76": {
          "c": [],
          "pr": "23,00 €",
          "d": {
            "it": "Confezione con quattro condimenti aromatizzati in olio extravergine d'oliva da 0,10 L: basilico, limone, menta e rosmarino.",
            "en": "Box with four flavoured extra virgin olive oil dressings, 0.10 L each: basil, lemon, mint and rosemary.",
            "de": "Box mit vier Würzölen aus nativem Olivenöl extra zu je 0,10 L: Basilikum, Zitrone, Minze und Rosmarin."
          },
          "a": {
            "it": "Fa parte delle scatole Fiammifero, disponibili in quattro misure (XS, S, M, L).",
            "en": "Part of the Fiammifero box range, available in four sizes (XS, S, M, L).",
            "de": "Teil der Fiammifero-Schachteln, erhältlich in vier Größen (XS, S, M, L)."
          }
        },
        "V-13-77": {
          "c": [],
          "pr": "23,80 €",
          "d": {
            "it": "Confezione con quattro condimenti aromatizzati in olio extravergine d'oliva da 0,10 L: peperoncino, tartufo, arancia e aglio.",
            "en": "Box with four flavoured extra virgin olive oil dressings, 0.10 L each: chilli, truffle, orange and garlic.",
            "de": "Box mit vier Würzölen aus nativem Olivenöl extra zu je 0,10 L: Chili, Trüffel, Orange und Knoblauch."
          },
          "a": {
            "it": "Fa parte delle scatole Fiammifero, disponibili in quattro misure (XS, S, M, L).",
            "en": "Part of the Fiammifero box range, available in four sizes (XS, S, M, L).",
            "de": "Teil der Fiammifero-Schachteln, erhältlich in vier Größen (XS, S, M, L)."
          }
        },
        "V-13-78": {
          "c": [],
          "pr": "34,40 €",
          "d": {
            "it": "Confezione con due oli extravergine d'oliva certificati da 0,50 L: I.G.P. Olio di Puglia e BIO.",
            "en": "Box with two certified extra virgin olive oils, 0.50 L each: PGI Olio di Puglia and organic BIO.",
            "de": "Box mit zwei zertifizierten nativen Olivenölen extra zu je 0,50 L: g.g.A. Olio di Puglia und BIO."
          },
          "a": {
            "it": "Linea Puglia: ogni scatola è illustrata con un luogo pugliese e una citazione, pensata anche come ricordo di viaggio.",
            "en": "Puglia line: each box is illustrated with an Apulian place and a quote, also designed as a travel souvenir.",
            "de": "Linie Puglia: Jede Schachtel zeigt einen Ort in Apulien und ein Zitat, auch als Reiseandenken gedacht."
          }
        },
        "V-13-79": {
          "c": [],
          "pr": "28,50 €",
          "d": {
            "it": "Confezione con tre condimenti aromatizzati in olio extravergine d'oliva da 0,25 L: aglio e peperoncino, timo e affumicato.",
            "en": "Box with three flavoured extra virgin olive oil dressings, 0.25 L each: garlic and chilli, thyme and smoke.",
            "de": "Box mit drei Würzölen aus nativem Olivenöl extra zu je 0,25 L: Knoblauch-Chili, Thymian und Raucharoma."
          },
          "a": {
            "it": "Linea Puglia: ogni scatola è illustrata con un luogo pugliese e una citazione, pensata anche come ricordo di viaggio.",
            "en": "Puglia line: each box is illustrated with an Apulian place and a quote, also designed as a travel souvenir.",
            "de": "Linie Puglia: Jede Schachtel zeigt einen Ort in Apulien und ein Zitat, auch als Reiseandenken gedacht."
          }
        },
        "V-13-80": {
          "c": [],
          "pr": "52,00 €",
          "d": {
            "it": "Confezione con sei condimenti aromatizzati in olio extravergine d'oliva da 0,25 L: arancia, mandarino, alloro, rosmarino, timo e origano.",
            "en": "Box with six flavoured extra virgin olive oil dressings, 0.25 L each: orange, mandarin, bay leaf, rosemary, thyme and oregano.",
            "de": "Box mit sechs Würzölen aus nativem Olivenöl extra zu je 0,25 L: Orange, Mandarine, Lorbeer, Rosmarin, Thymian und Oregano."
          },
          "a": {
            "it": "Linea Puglia: ogni scatola è illustrata con un luogo pugliese e una citazione, pensata anche come ricordo di viaggio.",
            "en": "Puglia line: each box is illustrated with an Apulian place and a quote, also designed as a travel souvenir.",
            "de": "Linie Puglia: Jede Schachtel zeigt einen Ort in Apulien und ein Zitat, auch als Reiseandenken gedacht."
          }
        },
        "V-13-81": {
          "c": [],
          "pr": "23,80 €",
          "d": {
            "it": "Confezione con quattro condimenti aromatizzati in olio extravergine d'oliva da 0,10 L: limone, basilico, tartufo e peperoncino.",
            "en": "Box with four flavoured extra virgin olive oil dressings, 0.10 L each: lemon, basil, truffle and chilli.",
            "de": "Box mit vier Würzölen aus nativem Olivenöl extra zu je 0,10 L: Zitrone, Basilikum, Trüffel und Chili."
          },
          "a": {
            "it": "Linea Puglia: ogni scatola è illustrata con un luogo pugliese e una citazione, pensata anche come ricordo di viaggio.",
            "en": "Puglia line: each box is illustrated with an Apulian place and a quote, also designed as a travel souvenir.",
            "de": "Linie Puglia: Jede Schachtel zeigt einen Ort in Apulien und ein Zitat, auch als Reiseandenken gedacht."
          }
        },
        "V-13-82": {
          "c": [],
          "pr": "26,50 €",
          "d": {
            "it": "Confezione con cinque condimenti aromatizzati in olio extravergine d'oliva da 0,10 L: rosmarino, arancia, menta, basilico e limone.",
            "en": "Box with five flavoured extra virgin olive oil dressings, 0.10 L each: rosemary, orange, mint, basil and lemon.",
            "de": "Box mit fünf Würzölen aus nativem Olivenöl extra zu je 0,10 L: Rosmarin, Orange, Minze, Basilikum und Zitrone."
          },
          "a": {
            "it": "Linea Puglia: ogni scatola è illustrata con un luogo pugliese e una citazione, pensata anche come ricordo di viaggio.",
            "en": "Puglia line: each box is illustrated with an Apulian place and a quote, also designed as a travel souvenir.",
            "de": "Linie Puglia: Jede Schachtel zeigt einen Ort in Apulien und ein Zitat, auch als Reiseandenken gedacht."
          }
        },
        "V-13-83": {
          "c": [],
          "pr": "15,20 €",
          "d": {
            "it": "Confezione con tre oli extravergine d'oliva da 0,10 L, monovarietali e Multivarietale, in scala di intensità. I monovarietali cambiano secondo disponibilità, ma la differenza di intensità tra i tre è sempre garantita.",
            "en": "Box with three extra virgin olive oils, 0.10 L each, single-variety and Multivarietale, in increasing intensity. The single-variety oils change with availability, but the difference in intensity is always kept.",
            "de": "Box mit drei nativen Olivenölen extra zu je 0,10 L, sortenrein und Multivarietale, nach Intensität gestaffelt. Die sortenreinen Öle wechseln je nach Verfügbarkeit, der Intensitätsunterschied bleibt immer erhalten."
          },
          "a": {
            "it": "Linea Puglia: ogni scatola è illustrata con un luogo pugliese e una citazione, pensata anche come ricordo di viaggio.",
            "en": "Puglia line: each box is illustrated with an Apulian place and a quote, also designed as a travel souvenir.",
            "de": "Linie Puglia: Jede Schachtel zeigt einen Ort in Apulien und ein Zitat, auch als Reiseandenken gedacht."
          }
        },
        "V-13-84": {
          "c": [],
          "pr": "49,90 €",
          "d": {
            "it": "Scatola Dama con due oli extravergine d'oliva certificati da 0,50 L: I.G.P. Olio di Puglia e BIO.",
            "en": "Dama box with two certified extra virgin olive oils, 0.50 L each: PGI Olio di Puglia and organic BIO.",
            "de": "Dama-Schachtel mit zwei zertifizierten nativen Olivenölen extra zu je 0,50 L: g.g.A. Olio di Puglia und BIO."
          },
          "a": {
            "it": "Scatola in cartone ondulato decorato, con una damiera e le pedine per giocare a dama all'interno. In viola o verde.",
            "en": "A decorated corrugated cardboard box with a draughts board and pieces inside. In purple or green.",
            "de": "Dekorierte Wellpappschachtel mit Damebrett und Spielsteinen im Inneren. In Lila oder Grün."
          }
        },
        "V-13-85": {
          "c": [],
          "pr": "63,00 €",
          "d": {
            "it": "Scatola Dama con Selezione olio extravergine d'oliva e Selezione condimento all'Aceto Balsamico di Modena IGP, da 0,50 L.",
            "en": "Dama box with Selezione extra virgin olive oil and Selezione dressing made with Balsamic Vinegar of Modena PGI, 0.50 L each.",
            "de": "Dama-Schachtel mit Selezione nativem Olivenöl extra und Selezione Würze mit Aceto Balsamico di Modena g.g.A., je 0,50 L."
          },
          "a": {
            "it": "Scatola in cartone ondulato decorato, con una damiera e le pedine per giocare a dama all'interno. In viola o verde.",
            "en": "A decorated corrugated cardboard box with a draughts board and pieces inside. In purple or green.",
            "de": "Dekorierte Wellpappschachtel mit Damebrett und Spielsteinen im Inneren. In Lila oder Grün."
          }
        },
        "V-13-86": {
          "c": [],
          "pr": "41,40 € (con Nero) · 43,40 € (con Il Denso)",
          "d": {
            "it": "Scatola Dama con Autentico olio extravergine d'oliva e un condimento Autentico all'Aceto Balsamico di Modena IGP, a scelta Nero o Il Denso, da 0,50 L.",
            "en": "Dama box with Autentico extra virgin olive oil and an Autentico dressing made with Balsamic Vinegar of Modena PGI, either Nero or Il Denso, 0.50 L each.",
            "de": "Dama-Schachtel mit Autentico nativem Olivenöl extra und einer Autentico-Würze mit Aceto Balsamico di Modena g.g.A., wahlweise Nero oder Il Denso, je 0,50 L."
          },
          "a": {
            "it": "Scatola in cartone ondulato decorato, con una damiera e le pedine per giocare a dama all'interno. In viola o verde.",
            "en": "A decorated corrugated cardboard box with a draughts board and pieces inside. In purple or green.",
            "de": "Dekorierte Wellpappschachtel mit Damebrett und Spielsteinen im Inneren. In Lila oder Grün."
          }
        },
        "V-13-87": {
          "c": [],
          "pr": "30,30 €",
          "d": {
            "it": "Borsa regalo con cinque condimenti aromatizzati in olio extravergine d'oliva da 0,10 L: limone, basilico, tartufo, arancia e peperoncino.",
            "en": "Gift bag with five flavoured extra virgin olive oil dressings, 0.10 L each: lemon, basil, truffle, orange and chilli.",
            "de": "Geschenktasche mit fünf Würzölen aus nativem Olivenöl extra zu je 0,10 L: Zitrone, Basilikum, Trüffel, Orange und Chili."
          },
          "a": {
            "it": "Borsa in cartone ondulato con un motivo ispirato ai simboli del territorio, in blu o verde.",
            "en": "A corrugated cardboard bag with a pattern inspired by local symbols, in blue or green.",
            "de": "Tasche aus Wellpappe mit einem von regionalen Symbolen inspirierten Muster, in Blau oder Grün."
          }
        },
        "V-13-88": {
          "c": [],
          "pr": "17,50 € (0,25 L, Nero) · 19,00 € (0,25 L, Il Denso) · 25,40 € (0,50 L, Nero) · 27,40 € (0,50 L, Il Denso)",
          "d": {
            "it": "Kit Autentico con olio extravergine d'oliva, condimento all'Aceto Balsamico di Modena IGP (Nero o Il Denso) e portabottiglie.",
            "en": "Autentico kit with extra virgin olive oil, a dressing made with Balsamic Vinegar of Modena PGI (Nero or Il Denso) and a bottle holder.",
            "de": "Autentico-Set mit nativem Olivenöl extra, einer Würze mit Aceto Balsamico di Modena g.g.A. (Nero oder Il Denso) und Flaschenhalter."
          },
          "a": {
            "it": "Disponibile con bottiglie da 0,25 L o da 0,50 L.",
            "en": "Available with 0.25 L or 0.50 L bottles.",
            "de": "Erhältlich mit Flaschen zu 0,25 L oder 0,50 L."
          }
        },
        "V-13-89": {
          "c": [],
          "pr": "55,00 €",
          "d": {
            "it": "La bottiglia Autentico trasformata in lampada: confezione con la lampada-bottiglia Autentico ON, una bottiglia di Autentico olio extravergine d'oliva da 0,50 L e il cavo di alimentazione e ricarica.",
            "en": "The Autentico bottle turned into a lamp: box with the Autentico ON bottle lamp, a 0.50 L bottle of Autentico extra virgin olive oil and the power and charging cable.",
            "de": "Die Autentico-Flasche als Lampe: Box mit der Flaschenlampe Autentico ON, einer Flasche Autentico natives Olivenöl extra (0,50 L) und dem Strom- und Ladekabel."
          },
          "a": {
            "it": "Luce dimmerabile su tre intensità; i colori del paralume possono variare secondo disponibilità.",
            "en": "Dimmable light with three settings; lampshade colours may vary with availability.",
            "de": "Dimmbares Licht mit drei Stufen; die Farben des Lampenschirms können je nach Verfügbarkeit variieren."
          }
        }
      },
      "fonti": [
        "https://shopleferre.com/shop-2/",
        "https://olioleferre.com/azienda/",
        "https://olioleferre.com/wp-content/uploads/2026/10/LE_FERRE_2027_CATALOGO_.pdf"
      ]
    },
    {
      "id": "V-14",
      "n": "Cascina Cipressa",
      "cat": "vino",
      "reg": "Toscana",
      "city": "San Miniato (PI)",
      "lat": 43.675,
      "lng": 10.773,
      "y": null,
      "certs": [
        "DOCG",
        "IGT"
      ],
      "exp": [],
      "lg": [
        "it",
        "en"
      ],
      "moq": null,
      "d": {
        "it": "Azienda agricola e agriturismo sulla collina di Montalto, vicino a San Romano, la più alta tra quelle che circondano San Miniato, in provincia di Pisa. Su 22 ettari tra uliveti, vigneti e campagna produce vino e olio extravergine dalle proprie olive. I 3,3 ettari di vigneto, piantati circa 35 anni fa, sono i più alti della zona: argilla, sassi e minerali antichi nel suolo e il vento dal mare, che porta notti tiepide, danno complessità ai vini. È una piccola cantina che segue da vicino ogni fase: concima solo con prodotti organici e lascia lavorare la natura senza forzarla, con la tradizione toscana come guida. Dal 2022, con la nuova proprietà, la struttura è stata restaurata e oggi ospita anche camere, il ristorante Cipressino e una piscina, con energia solare e colonnine per auto elettriche.",
        "en": "A farm and agriturismo on Montalto hill near San Romano, the highest of the hills around San Miniato, in the province of Pisa. On 22 hectares of olive groves, vineyards and countryside it makes wine and extra virgin olive oil from its own olives. Its 3.3 hectares of vines, planted about 35 years ago, are the highest in the area: clay, stones and ancient minerals in the soil and the sea wind, which brings warm nights, give the wines complexity. It is a small winery that follows every step closely: it fertilises only with organic products and lets nature work without forcing it, guided by Tuscan tradition. Since 2022, under new ownership, the property has been restored and now also has rooms, the Cipressino restaurant and a pool, with solar power and EV charging.",
        "de": "Landgut und Agriturismo auf dem Hügel Montalto bei San Romano, dem höchsten rund um San Miniato in der Provinz Pisa. Auf 22 Hektar mit Olivenhainen, Weinbergen und Landschaft entstehen Wein und natives Olivenöl extra aus eigenen Oliven. Die 3,3 Hektar Reben, vor rund 35 Jahren gepflanzt, sind die höchstgelegenen der Gegend: Ton, Steine und alte Mineralien im Boden und der Meereswind, der warme Nächte bringt, verleihen den Weinen Komplexität. Ein kleines Weingut, das jeden Schritt eng begleitet: gedüngt wird nur mit organischen Mitteln, die Natur wird nicht gedrängt, die toskanische Tradition ist der Leitfaden. Seit 2022 ist das Anwesen unter neuen Eigentümern restauriert und bietet auch Zimmer, das Restaurant Cipressino und einen Pool, mit Solarstrom und Ladestationen für E-Autos."
      },
      "p": [
        [
          "Aurea, IGT Toscana Bianco",
          ""
        ],
        [
          "Serenitas, IGT Toscana Rosato",
          ""
        ],
        [
          "Eredità, Chianti DOCG",
          ""
        ],
        [
          "Colle dell'Assedio, Merlot IGT",
          ""
        ],
        [
          "Concordia, IGT Toscana Rosso",
          ""
        ]
      ],
      "pd": {
        "V-14-0": {
          "c": [
            "IGT"
          ],
          "d": {
            "it": "Bianco da uve bianche tradizionali toscane e Sauvignon blanc, fresco, intrigante e ricco. Vigneto a cordone speronato, fermentazione e affinamento in acciaio; circa 1.000 bottiglie l'anno. Giallo intenso; al naso fiori bianchi, peperone verde e pesca; in bocca minerale, con pesca matura e sapori ben bilanciati.",
            "en": "A white from traditional Tuscan white grapes and Sauvignon Blanc: fresh, intriguing and rich. Spur-pruned vineyard, fermented and aged in steel; about 1,000 bottles a year. Deep yellow; white flowers, green pepper and peach on the nose; mineral on the palate, with ripe peach and well-balanced flavours.",
            "de": "Weißwein aus traditionellen toskanischen weißen Rebsorten und Sauvignon Blanc: frisch, spannend und reichhaltig. Zapfenschnitt, Gärung und Ausbau im Stahltank; rund 1.000 Flaschen im Jahr. Kräftiges Gelb; in der Nase weiße Blüten, grüne Paprika und Pfirsich; am Gaumen mineralisch, mit reifem Pfirsich und ausgewogenen Aromen."
          },
          "a": {
            "it": "Perfetto con ogni preparazione di pesce e come aperitivo.",
            "en": "Perfect with any fish dish and as an aperitif.",
            "de": "Passt zu allen Fischgerichten und als Aperitif."
          }
        },
        "V-14-1": {
          "c": [
            "IGT"
          ],
          "d": {
            "it": "Rosato ottenuto per salasso: subito dopo pigiatura e diraspatura si preleva una parte del mosto, lasciandolo a contatto con le bucce quanto basta per un leggero colore. Nasce dalle uve rosse dell'annata e ne è una sintesi. Cordone speronato, fermentazione e affinamento in acciaio; circa 1.000 bottiglie l'anno. Rosso rubino tenue; al naso fiori, ciliegia selvatica e pesca; in bocca frutti di bosco, ciliegia selvatica e pesca in equilibrio.",
            "en": "A rosé made by saignée: right after crushing and destemming, part of the juice is drawn off, left on the skins just long enough for a light colour. It comes from the year's red grapes and sums them up. Spur-pruned vineyard, fermented and aged in steel; about 1,000 bottles a year. Pale ruby; flowers, wild cherry and peach on the nose; berries, wild cherry and peach in balance on the palate.",
            "de": "Rosé nach der Saignée-Methode: Direkt nach dem Quetschen und Entrappen wird ein Teil des Mosts abgezogen und nur so lange auf den Schalen gelassen, bis er leicht Farbe annimmt. Er stammt aus den roten Trauben des Jahrgangs und fasst sie zusammen. Zapfenschnitt, Gärung und Ausbau im Stahltank; rund 1.000 Flaschen im Jahr. Helles Rubinrot; in der Nase Blüten, Wildkirsche und Pfirsich; am Gaumen Beeren, Wildkirsche und Pfirsich im Gleichgewicht."
          },
          "a": {
            "it": "Perfetto con ogni piatto di pesce, anche il cacciucco, e come aperitivo.",
            "en": "Perfect with any fish dish, even cacciucco fish stew, and as an aperitif.",
            "de": "Passt zu allen Fischgerichten, auch zu Cacciucco, der toskanischen Fischsuppe, und als Aperitif."
          }
        },
        "V-14-2": {
          "c": [
            "DOCG"
          ],
          "d": {
            "it": "Il Chianti della casa, tra tradizione e un vino moderno, ricco e di corpo. Cordone speronato, fermentazione in acciaio e affinamento in tonneaux di rovere francese da 500 litri; circa 13.000 bottiglie l'anno. Rosso con riflessi violacei; al naso elegante, con sentori di rosa e viola; in bocca complesso, con frutto, vaniglia e cuoio dati dal legno.",
            "en": "The estate's Chianti, combining tradition with a modern, rich, full-bodied style. Spur-pruned vineyard, fermented in steel and aged in 500-litre French oak tonneaux; about 13,000 bottles a year. Red with violet hues; elegant nose of rose and violet; complex on the palate, with fruit, vanilla and leather from the oak.",
            "de": "Der Chianti des Hauses: Tradition trifft auf einen modernen, reichhaltigen, körperreichen Stil. Zapfenschnitt, Gärung im Stahltank, Ausbau in 500-Liter-Tonneaux aus französischer Eiche; rund 13.000 Flaschen im Jahr. Rot mit violetten Reflexen; elegante Nase mit Rose und Veilchen; am Gaumen komplex, mit Frucht, Vanille und Leder aus dem Holz."
          },
          "a": {
            "it": "Ideale con le ricette tradizionali toscane e con ogni arrosto.",
            "en": "Ideal with traditional Tuscan recipes and any roast.",
            "de": "Ideal zu traditionellen toskanischen Gerichten und jedem Braten."
          }
        },
        "V-14-3": {
          "c": [
            "IGT"
          ],
          "d": {
            "it": "Merlot in purezza. Il nome ricorda l'assedio di San Miniato del 1370, durante la guerra tra Firenze e Pisa: secondo ricerche storiche, sulla collina dove sorge oggi la cascina furono piazzate delle catapulte. Sole toscano e vento dal mare o dalle colline lucchesi portano il Merlot a maturazione a fine agosto. Cordone speronato, fermentazione in acciaio e affinamento in tonneaux da 500 litri; circa 2.500 bottiglie l'anno. Rosso intenso; al naso ciliegia, mora, vaniglia e tabacco; in bocca morbido e lungo, con tannini fini, cuoio e frutta rossa matura.",
            "en": "A pure Merlot. The name recalls the 1370 siege of San Miniato in the war between Florence and Pisa: historical research suggests catapults were placed on the hill where the farmhouse now stands. Tuscan sun and winds from the sea or the hills near Lucca ripen the Merlot by late August. Spur-pruned vineyard, fermented in steel and aged in 500-litre tonneaux; about 2,500 bottles a year. Deep red; cherry, blackberry, vanilla and tobacco on the nose; soft and long on the palate, with fine tannins, leather and ripe red fruit.",
            "de": "Reinsortiger Merlot. Der Name erinnert an die Belagerung von San Miniato 1370 im Krieg zwischen Florenz und Pisa: Historischen Forschungen zufolge standen auf dem Hügel, auf dem heute das Gut liegt, Katapulte. Toskanische Sonne und Wind vom Meer oder von den Hügeln bei Lucca lassen den Merlot bis Ende August reifen. Zapfenschnitt, Gärung im Stahltank, Ausbau in 500-Liter-Tonneaux; rund 2.500 Flaschen im Jahr. Tiefes Rot; in der Nase Kirsche, Brombeere, Vanille und Tabak; am Gaumen weich und lang, mit feinen Tanninen, Leder und reifer roter Frucht."
          },
          "a": {
            "it": "Perfetto con ogni piatto di carne e per le lunghe chiacchierate d'inverno tra amici.",
            "en": "Perfect with any meat dish and for long winter conversations with friends.",
            "de": "Passt zu allen Fleischgerichten und zu langen Winterabenden mit Freunden."
          }
        },
        "V-14-4": {
          "c": [
            "IGT"
          ],
          "d": {
            "it": "Taglio di Sangiovese (80%) e Cabernet Sauvignon (20%), lo stile diventato un classico toscano dagli anni Ottanta. È l'ultimo nato della cantina, alla prima imbottigliatura, arrivato dopo molte prove. Cordone speronato, fermentazione in acciaio e affinamento in tonneaux da 500 litri; circa 2.500 bottiglie l'anno. Rosso intenso; al naso profondo, con frutti di bosco, menta e la tipica nota di foglia di pomodoro; in bocca ricco, profondo e lungo, con frutti di bosco, vaniglia, pepe nero, tabacco e cacao.",
            "en": "A blend of Sangiovese (80%) and Cabernet Sauvignon (20%), a style that has been a Tuscan classic since the 1980s. It is the winery's newest wine, at its first bottling, reached after many trials. Spur-pruned vineyard, fermented in steel and aged in 500-litre tonneaux; about 2,500 bottles a year. Deep red; a deep nose of berries and mint with the typical hint of tomato leaf; rich, deep and long on the palate, with berries, vanilla, black pepper, tobacco and cocoa.",
            "de": "Cuvée aus Sangiovese (80 %) und Cabernet Sauvignon (20 %), ein Stil, der seit den 1980er-Jahren ein toskanischer Klassiker ist. Der jüngste Wein des Hauses, erste Abfüllung, nach vielen Versuchen entstanden. Zapfenschnitt, Gärung im Stahltank, Ausbau in 500-Liter-Tonneaux; rund 2.500 Flaschen im Jahr. Tiefes Rot; tiefe Nase mit Waldbeeren, Minze und der typischen Note von Tomatenblatt; am Gaumen reich, tief und lang, mit Beeren, Vanille, schwarzem Pfeffer, Tabak und Kakao."
          },
          "a": {
            "it": "Ideale con arrosti e brasati di vitello a lunga cottura, e per ogni momento speciale.",
            "en": "Ideal with roasts and slow-braised veal, and for every special moment.",
            "de": "Ideal zu Braten und lange geschmortem Kalb, und für jeden besonderen Moment."
          }
        }
      },
      "fonti": [
        "https://www.cascinacipressa.com/products",
        "https://www.cascinacipressa.com/about"
      ]
    },
    {
      "id": "V-15",
      "n": "Vozzi Vini",
      "cat": "vino",
      "reg": "Basilicata",
      "city": "Chiaromonte (PZ)",
      "lat": 40.124,
      "lng": 16.214,
      "y": 1940,
      "certs": [
        "Bio",
        "IGP",
        "Prodotto di montagna"
      ],
      "exp": [],
      "lg": [
        "it"
      ],
      "moq": null,
      "logoBg": "#2b2b2b",
      "d": {
        "it": "Azienda vitivinicola fondata nel 1940 a Chiaromonte, in provincia di Potenza, da Pasquale Vozzi, nel cuore della terra che i Greci chiamavano Enotria, \"terra del vino\". Negli anni Novanta il Senatore Antonio Vozzi l'ha ampliata, ha piantato i vigneti di Sangiovese e Merlot e ha lavorato sui vitigni antichi del posto, portando all'identificazione del Guarnaccino, di cui restavano poche piante sparse. Oggi in azienda lavorano i figli Ermelinda e Pasquale, terza generazione. I vigneti, nel Parco Nazionale del Pollino lungo la valle del Sinni, stanno a circa 550 metri, esposti a sud-est su terreni pleistocenici argillosi e ricchi di minerali, con pendenze forti e grandi escursioni tra giorno e notte; le uve sono certificate biologiche e i vini sono IGP e Prodotto di montagna. Nella nuova cantina in contrada Armirosse, accanto alle vigne e alimentata a energia solare, si vinifica in vasche di cemento armato, che non cedono aromi al vino. Collabora con l'agronomo ed enologo Alfredo Tocchini. Il nome Kouros viene dalla statua in bronzo ritrovata sull'acropoli di Chiaromonte, simbolo del paese. Visite e degustazioni su prenotazione.",
        "en": "A winery founded in 1940 in Chiaromonte, province of Potenza, by Pasquale Vozzi, in the heart of the land the Greeks called Enotria, \"land of wine\". In the 1990s Senator Antonio Vozzi expanded it, planted the Sangiovese and Merlot vineyards and worked on the area's old grape varieties, leading to the identification of Guarnaccino, of which only a few scattered vines remained. Today his children Ermelinda and Pasquale, the third generation, run the estate. The vineyards, in the Pollino National Park along the Sinni valley, lie at about 550 metres, facing south-east on Pleistocene clay soils rich in minerals, with steep slopes and wide day-night temperature swings; the grapes are certified organic and the wines are PGI and certified mountain products. In the new winery in the Armirosse district, next to the vines and powered by solar energy, the wines are made in reinforced concrete tanks, which add no aromas. The estate works with agronomist and oenologist Alfredo Tocchini. The name Kouros comes from the bronze statue found on Chiaromonte's acropolis, the town's symbol. Visits and tastings by appointment.",
        "de": "Weingut, 1940 in Chiaromonte in der Provinz Potenza von Pasquale Vozzi gegründet, im Herzen des Landes, das die Griechen Enotria nannten, \"Land des Weins\". In den 1990er-Jahren erweiterte Senator Antonio Vozzi den Betrieb, pflanzte die Weinberge mit Sangiovese und Merlot und arbeitete an den alten Rebsorten der Gegend, was zur Bestimmung des Guarnaccino führte, von dem nur noch wenige verstreute Stöcke übrig waren. Heute führen seine Kinder Ermelinda und Pasquale, die dritte Generation, das Gut. Die Weinberge im Nationalpark Pollino entlang des Sinni-Tals liegen auf rund 550 Metern, nach Südosten ausgerichtet, auf pleistozänen, mineralreichen Lehmböden, mit steilen Hängen und großen Temperaturunterschieden zwischen Tag und Nacht; die Trauben sind biologisch zertifiziert, die Weine g.g.A. und als Bergprodukt zertifiziert. In der neuen Kellerei im Ortsteil Armirosse, direkt an den Reben und mit Solarstrom betrieben, wird in Stahlbetontanks ausgebaut, die keine Aromen abgeben. Das Gut arbeitet mit dem Agronomen und Önologen Alfredo Tocchini zusammen. Der Name Kouros stammt von der Bronzestatue, die auf der Akropolis von Chiaromonte gefunden wurde und Symbol des Ortes ist. Besuche und Verkostungen nach Voranmeldung."
      },
      "p": [
        [
          "Guarnaccino, Basilicata Rosso IGP",
          "bottiglia da 75 cl"
        ],
        [
          "Kouros Rosso, Basilicata Rosso IGP",
          "bottiglia da 75 cl"
        ],
        [
          "Kouros Bianco, Basilicata Bianco IGP",
          "bottiglia da 75 cl"
        ],
        [
          "Kouros Rosè, Basilicata Rosato IGP",
          "bottiglia da 75 cl"
        ],
        [
          "Vino Basilicata Rosso (sfuso)",
          "3 litri · 5 litri"
        ],
        [
          "Tris Vini: Assaggio Tutto",
          "3 × bottiglia da 75 cl"
        ]
      ],
      "pd": {
        "V-15-0": {
          "c": [
            "IGP",
            "Bio",
            "Prodotto di montagna"
          ],
          "pr": "15,60 €",
          "d": {
            "it": "Rosso da Guarnaccino in purezza, vitigno autoctono a bacca nera di Chiaromonte, dimenticato per anni e salvato dalla scomparsa: oggi è iscritto nel registro nazionale delle varietà di vite. Le uve crescono su antichi strati alternati di sabbie, ghiaie e argille, che danno complessità e struttura. Rosso rubino intenso con riflessi violacei; al naso frutti rossi intensi, a cui con l'invecchiamento si uniscono spezie; in bocca caldo, armonico, delicato e setoso, intenso e persistente, con una nota tannica che lo rende adatto all'invecchiamento. Annata 2024, alcol 14%, servizio a 12-14 °C.",
            "en": "A pure Guarnaccino red, from a black-berried grape native to Chiaromonte that was forgotten for years and saved from extinction; it is now listed in Italy's national register of vine varieties. The grapes grow on ancient alternating layers of sand, gravel and clay, which give complexity and structure. Deep ruby with violet hints; intense red fruit on the nose, joined by spice as it ages; warm, harmonious, delicate and silky on the palate, intense and persistent, with a tannic note that suits ageing. 2024 vintage, 14% ABV, serve at 12-14 °C.",
            "de": "Reinsortiger Rotwein aus Guarnaccino, einer autochthonen roten Rebsorte aus Chiaromonte, die jahrelang vergessen war und vor dem Verschwinden gerettet wurde; heute ist sie im nationalen Rebsortenregister eingetragen. Die Trauben wachsen auf uralten, abwechselnden Schichten aus Sand, Kies und Ton, die Komplexität und Struktur verleihen. Tiefes Rubinrot mit violetten Reflexen; in der Nase intensive rote Früchte, mit der Reifung kommen Gewürze hinzu; am Gaumen warm, harmonisch, zart und seidig, intensiv und anhaltend, mit einer Tanninnote, die ihn lagerfähig macht. Jahrgang 2024, 14 % Vol., Serviertemperatur 12-14 °C."
          },
          "a": {
            "it": "Perfetto con piatti di carne o di verdure, piacevole anche fuori pasto.",
            "en": "Perfect with meat or vegetable dishes, and enjoyable on its own too.",
            "de": "Passt zu Fleisch- und Gemüsegerichten und schmeckt auch solo."
          }
        },
        "V-15-1": {
          "c": [
            "IGP",
            "Bio",
            "Prodotto di montagna"
          ],
          "pr": "8,00 €",
          "d": {
            "it": "Rosso da uve biologiche Sangiovese (60%) e Merlot (40%) coltivate nel Parco Nazionale del Pollino, su suoli argillo-ciottolosi di una collina assolata, con forti escursioni termiche che danno profumi intensi. Vinificato in vasche di cemento armato. Rosso rubino intenso con velature violacee; al naso prugna, lampone e ciliegia, confettura di frutti rossi e spezie di sottobosco mediterraneo; in bocca rotondo e armonico, tannini morbidi e setosi, buona acidità e grande persistenza. Nel 2021 è stato selezionato alla 3ª Rassegna Degustazione Nazionale dei Vini dei Parchi e delle Aree Protette. Alcol 14%, servizio a 15-18 °C.",
            "en": "A red from organic Sangiovese (60%) and Merlot (40%) grown in the Pollino National Park, on clay and pebble soils of a sunny hill whose wide day-night temperature swings give intense aromas. Vinified in reinforced concrete tanks. Deep ruby with violet tints; plum, raspberry and cherry on the nose, with red fruit jam and Mediterranean undergrowth spices; round and harmonious on the palate, with soft, silky tannins, good acidity and great length. In 2021 it was selected at the 3rd National Tasting of Wines from Parks and Protected Areas. 14% ABV, serve at 15-18 °C.",
            "de": "Rotwein aus biologischem Sangiovese (60 %) und Merlot (40 %) aus dem Nationalpark Pollino, auf lehmig-steinigen Böden eines sonnigen Hügels, dessen starke Temperaturschwankungen intensive Aromen bringen. Vinifiziert in Stahlbetontanks. Tiefes Rubinrot mit violetten Tönen; in der Nase Pflaume, Himbeere und Kirsche, Konfitüre roter Früchte und Gewürze des mediterranen Unterholzes; am Gaumen rund und harmonisch, weiche, seidige Tannine, gute Säure und große Länge. 2021 wurde er bei der 3. Nationalen Verkostung der Weine aus Parks und Schutzgebieten ausgewählt. 14 % Vol., Serviertemperatur 15-18 °C."
          },
          "a": {
            "it": "Ideale con formaggi stagionati, carni rosse e cacciagione, alla griglia o in altre cotture, zuppe saporite e verdure grigliate.",
            "en": "Ideal with aged cheeses, red meat and game, grilled or cooked other ways, hearty soups and grilled vegetables.",
            "de": "Ideal zu gereiftem Käse, rotem Fleisch und Wild, gegrillt oder anders zubereitet, kräftigen Suppen und gegrilltem Gemüse."
          }
        },
        "V-15-2": {
          "c": [
            "IGP",
            "Bio",
            "Prodotto di montagna"
          ],
          "pr": "9,00 €",
          "d": {
            "it": "Bianco da uve biologiche Viognier e Trebbiano Toscano coltivate a 550 metri a Chiaromonte, nel Parco Nazionale del Pollino, su terreni a strati alternati di sabbie, ghiaie e argille esposti a sud-est. Vinificato in vasche di cemento armato. Giallo paglierino con riflessi verdognoli; al naso fiori di agrumi e di acacia con note di pesca e albicocca; in bocca fresco e piacevolmente intenso, con note agrumate e floreali, sapidità e persistenza. Alcol 12%, servizio a 8-10 °C.",
            "en": "A white from organic Viognier and Trebbiano Toscano grown at 550 metres in Chiaromonte, in the Pollino National Park, on south-east facing soils of alternating sand, gravel and clay. Vinified in reinforced concrete tanks. Straw yellow with greenish hints; citrus and acacia blossom with peach and apricot on the nose; fresh and pleasantly intense on the palate, with citrus and floral notes, savouriness and length. 12% ABV, serve at 8-10 °C.",
            "de": "Weißwein aus biologischem Viognier und Trebbiano Toscano aus Chiaromonte auf 550 Metern, im Nationalpark Pollino, auf südöstlich ausgerichteten Böden aus abwechselnden Schichten von Sand, Kies und Ton. Vinifiziert in Stahlbetontanks. Strohgelb mit grünlichen Reflexen; in der Nase Zitrus- und Akazienblüten mit Pfirsich und Aprikose; am Gaumen frisch und angenehm intensiv, mit Zitrus- und Blütennoten, Mineralität und Länge. 12 % Vol., Serviertemperatur 8-10 °C."
          },
          "a": {
            "it": "Perfetto come aperitivo e con piatti di pesce e crudi di mare; accompagna anche carni bianche, verdure, formaggi morbidi e il baccalà con peperoni cruschi.",
            "en": "Perfect as an aperitif and with fish dishes and raw seafood; also good with white meat, vegetables, soft cheeses and salt cod with crusco peppers.",
            "de": "Ideal als Aperitif und zu Fischgerichten und rohen Meeresfrüchten; passt auch zu hellem Fleisch, Gemüse, Weichkäse und Stockfisch mit Peperoni cruschi."
          }
        },
        "V-15-3": {
          "c": [
            "IGP",
            "Bio",
            "Prodotto di montagna"
          ],
          "pr": "9,00 €",
          "d": {
            "it": "Rosato da uve Sangiovese biologiche coltivate a 600 metri sulle colline di Chiaromonte. Dopo una breve macerazione sulle bucce, il mosto fermenta lentamente a temperatura controllata e il vino affina alcuni mesi in acciaio inox; si imbottiglia a inizio primavera. Suoli di sabbie, ghiaie e argille e forti escursioni tra giorno e notte gli danno freschezza e un profilo aromatico vivace. Rosa tenue e brillante con riflessi ramati; al naso melograno, fragolina di bosco, petali di rosa e agrumi; in bocca fresco, succoso e sapido, con finale fruttato e persistenza minerale. Alcol 12,5%, servizio a 8-10 °C.",
            "en": "A rosé from organic Sangiovese grown at 600 metres on the hills of Chiaromonte. After a short maceration on the skins, the must ferments slowly at controlled temperature and the wine rests for a few months in stainless steel; it is bottled in early spring. Sand, gravel and clay soils and wide day-night temperature swings give it freshness and a lively aromatic profile. Pale, bright pink with copper hints; pomegranate, wild strawberry, rose petals and citrus on the nose; fresh, juicy and savoury on the palate, with a fruity finish and mineral length. 12.5% ABV, serve at 8-10 °C.",
            "de": "Rosé aus biologischem Sangiovese von den Hügeln von Chiaromonte auf 600 Metern. Nach kurzer Mazeration auf den Schalen gärt der Most langsam bei kontrollierter Temperatur, der Wein reift einige Monate im Edelstahl und wird im Frühjahr abgefüllt. Böden aus Sand, Kies und Ton und starke Temperaturunterschiede zwischen Tag und Nacht geben ihm Frische und ein lebendiges Aromaprofil. Zartes, leuchtendes Rosa mit kupfernen Reflexen; in der Nase Granatapfel, Walderdbeere, Rosenblätter und Zitrus; am Gaumen frisch, saftig und mineralisch, mit fruchtigem Abgang. 12,5 % Vol., Serviertemperatur 8-10 °C."
          },
          "a": {
            "it": "Perfetto come aperitivo estivo, con antipasti di mare, tartare di pesce e sushi; sorprende anche con cucina vegetariana, piatti etnici leggeri e carni bianche alla griglia.",
            "en": "Perfect as a summer aperitif, with seafood starters, fish tartare and sushi; also surprising with vegetarian food, light ethnic dishes and grilled white meat.",
            "de": "Ideal als Sommeraperitif, zu Meeresfrüchte-Vorspeisen, Fischtatar und Sushi; überrascht auch zu vegetarischer Küche, leichten internationalen Gerichten und gegrilltem hellem Fleisch."
          }
        },
        "V-15-4": {
          "c": [
            "Bio"
          ],
          "pr": "10,50 € (3 L) · 17,50 € (5 L)",
          "d": {
            "it": "Vino rosso da tavola da bere tutti i giorni, da vigneti biologici nel Parco del Pollino. Nasce da più varietà dei vigneti di famiglia: Cabernet Franc, Cabernet Sauvignon, Montepulciano, Merlot e un tocco di Guarnaccino, l'uva autoctona di Chiaromonte. Rosso rubino intenso con velature violacee; rotondo e armonico, con tannini morbidi e setosi e una buona acidità che lo rende piacevole e persistente. Alcol 13%, servizio a 15-18 °C.",
            "en": "An everyday red table wine from organic vineyards in the Pollino Park. It is made from several varieties grown by the family: Cabernet Franc, Cabernet Sauvignon, Montepulciano, Merlot and a touch of Guarnaccino, Chiaromonte's native grape. Deep ruby with violet tints; round and harmonious, with soft, silky tannins and good acidity that make it pleasant and persistent. 13% ABV, serve at 15-18 °C.",
            "de": "Roter Tafelwein für jeden Tag aus biologischen Weinbergen im Pollino-Park. Er entsteht aus mehreren Rebsorten der Familie: Cabernet Franc, Cabernet Sauvignon, Montepulciano, Merlot und einem Hauch Guarnaccino, der autochthonen Traube aus Chiaromonte. Tiefes Rubinrot mit violetten Tönen; rund und harmonisch, mit weichen, seidigen Tanninen und guter Säure, angenehm und anhaltend. 13 % Vol., Serviertemperatur 15-18 °C."
          },
          "a": {
            "it": "Con salumi stagionati, carni rosse alla griglia e primi elaborati come lasagne o pasta al forno; in generale con molti piatti diversi.",
            "en": "With cured meats, grilled red meat and rich pasta dishes such as lasagne or baked pasta; in general, with many different dishes.",
            "de": "Zu luftgetrockneter Wurst, gegrilltem rotem Fleisch und üppigen Pastagerichten wie Lasagne oder Nudelauflauf; allgemein zu vielen Gerichten."
          }
        },
        "V-15-5": {
          "c": [
            "IGP",
            "Bio",
            "Prodotto di montagna"
          ],
          "pr": "30,00 € (in offerta, prezzo pieno 32,00 €)",
          "d": {
            "it": "Confezione con tre bottiglie da 75 cl: Kouros Rosso (Merlot e Sangiovese), Kouros Bianco (Viognier e Trebbiano Toscano) e Guarnaccino. Per assaggiare i vini della cantina in una volta sola.",
            "en": "A box of three 75 cl bottles: Kouros Rosso (Merlot and Sangiovese), Kouros Bianco (Viognier and Trebbiano Toscano) and Guarnaccino. A way to taste the winery's range in one go.",
            "de": "Box mit drei Flaschen zu 75 cl: Kouros Rosso (Merlot und Sangiovese), Kouros Bianco (Viognier und Trebbiano Toscano) und Guarnaccino. So lässt sich das Sortiment auf einmal probieren."
          },
          "a": {
            "it": "Pensata anche come idea regalo.",
            "en": "Also designed as a gift.",
            "de": "Auch als Geschenk gedacht."
          }
        }
      },
      "fonti": [
        "https://www.vozzivini.it/vini/",
        "https://www.vozzivini.it/web/shop/",
        "https://www.vozzivini.it/web/storia-vozzi/",
        "https://www.vozzivini.it/web/vigneti/",
        "https://www.vozzivini.it/cantina/",
        "https://www.vozzivini.it/web/territorio/"
      ]
    },
    {
      "id": "V-16",
      "n": "Nepos Villae",
      "cat": "vino",
      "reg": "Veneto",
      "city": "Negrar di Valpolicella (VR)",
      "lat": 45.528,
      "lng": 10.938,
      "y": 2017,
      "certs": [
        "DOCG",
        "DOC"
      ],
      "exp": [],
      "lg": [
        "it",
        "en"
      ],
      "moq": null,
      "logoBg": "#2b2b2b",
      "d": {
        "it": "Cantina della famiglia Ruffo a Villa Quintarelli Ruffo, nella Valle di Negrar, cuore della Valpolicella Classica. L'ala più antica della villa risale al 1510; nell'Ottocento passò alla famiglia Quintarelli e ai primi del Novecento, per eredità, ai Ruffo. Sulle botti più antiche della cantina è incisa la data 1875; il progetto Nepos Villae nasce nel 2017, con Gianfranco Ruffo e i figli Anna, Francesco e Lucia. La vigna di famiglia, allevata a doppia pergola veronese dietro la villa, cresce su suoli marnosi bianchi tra calcare e arenarie, nella valle più fresca della Valpolicella. Le uve sono Corvina gentile, Corvina grossa, Rondinella e Molinara, da cui nascono Amarone, Ripasso, Valpolicella Classico Superiore, Recioto e Recioto spumante, oltre a due grappe dalle vinacce di Recioto e Amarone. La cantina offre anche degustazioni.",
        "en": "The Ruffo family winery at Villa Quintarelli Ruffo, in the Negrar valley, the heart of Valpolicella Classica. The oldest wing of the villa dates from 1510; in the 19th century it passed to the Quintarelli family and, in the early 20th century, by inheritance to the Ruffos. The oldest casks in the cellar bear the date 1875; the Nepos Villae project began in 2017, with Gianfranco Ruffo and his children Anna, Francesco and Lucia. The family vineyard, trained on the double Veronese pergola behind the villa, grows on white marl soils of limestone and sandstone, in the coolest valley of Valpolicella. The grapes are Corvina Gentile, Corvina Grossa, Rondinella and Molinara, which go into Amarone, Ripasso, Valpolicella Classico Superiore, Recioto and sparkling Recioto, plus two grappas from Recioto and Amarone pomace. The winery also offers tastings.",
        "de": "Weingut der Familie Ruffo in der Villa Quintarelli Ruffo im Negrar-Tal, dem Herzen des Valpolicella Classico. Der älteste Flügel der Villa stammt von 1510; im 19. Jahrhundert ging sie an die Familie Quintarelli und Anfang des 20. Jahrhunderts durch Erbschaft an die Familie Ruffo. Auf den ältesten Fässern im Keller steht die Jahreszahl 1875; das Projekt Nepos Villae begann 2017 mit Gianfranco Ruffo und seinen Kindern Anna, Francesco und Lucia. Der Familienweinberg hinter der Villa, an doppelter Veroneser Pergola erzogen, wächst auf weißen Mergelböden aus Kalk und Sandstein, im kühlsten Tal des Valpolicella. Die Rebsorten Corvina Gentile, Corvina Grossa, Rondinella und Molinara ergeben Amarone, Ripasso, Valpolicella Classico Superiore, Recioto und Recioto-Schaumwein, dazu zwei Grappe aus Recioto- und Amarone-Trester. Das Weingut bietet auch Verkostungen an."
      },
      "sub": [
        {
          "k": "vini",
          "cat": "vino",
          "n": {
            "it": "Vini della Valpolicella",
            "en": "Valpolicella wines",
            "de": "Weine aus dem Valpolicella"
          }
        },
        {
          "k": "distillati",
          "cat": "liquori",
          "n": {
            "it": "Distillati",
            "en": "Spirits",
            "de": "Spirituosen"
          }
        }
      ],
      "p": [
        [
          "Campo di Villa, Amarone della Valpolicella Classico DOCG",
          "",
          "vini"
        ],
        [
          "Strada Campiona, Valpolicella Ripasso Classico Superiore DOC",
          "",
          "vini"
        ],
        [
          "Contrà del Tono, Valpolicella Classico Superiore DOC",
          "",
          "vini"
        ],
        [
          "La Tesa, Recioto della Valpolicella DOCG",
          "bottiglia da 500 ml",
          "vini"
        ],
        [
          "Recioto Spumante della Valpolicella DOCG",
          "",
          "vini"
        ],
        [
          "Grappa di Recioto della Valpolicella",
          "",
          "distillati"
        ],
        [
          "Grappa di Amarone della Valpolicella",
          "",
          "distillati"
        ]
      ],
      "pd": {
        "V-16-0": {
          "c": [
            "DOCG"
          ],
          "pr": "50,00 €",
          "d": {
            "it": "Il cru della cantina, dalla vigna storica tra le marne dell'antica contrada di Villa, che domina la Valle di Negrar. Annata 2016-2017. Corvina gentile, Corvina grossa, Rondinella e Molinara vendemmiate a mano nella seconda metà di settembre e messe ad appassire in cassetta fino a metà gennaio: servono 2,5 kg di uva per una bottiglia. Pigiatura soffice, vinificazione in acciaio con circa 40 giorni sulle bucce e follature a mano; un anno sulle fecce fini, almeno 60 mesi in botti grandi di rovere di Slavonia e 14-18 mesi in bottiglia. Rosso granato intenso; al naso ciliegia e mora nel cioccolato, cacao, frutti di bosco neri, tabacco e miele di castagno; in bocca fresco e sapido, tannino rotondo, liquirizia, pepe nero e spezie, finale ammandorlato molto lungo. Alcol 15,5%, servizio a 18-20 °C.",
            "en": "The estate's cru, from the historic vineyard on the marl of the old Villa district, overlooking the Negrar valley. 2016-2017 vintage. Corvina Gentile, Corvina Grossa, Rondinella and Molinara are hand-picked in the second half of September and dried in crates until mid-January: 2.5 kg of grapes go into one bottle. Soft pressing, fermentation in steel with about 40 days on the skins and hand punch-downs; one year on the fine lees, at least 60 months in large Slavonian oak casks and 14-18 months in bottle. Deep garnet; cherry and blackberry dipped in chocolate, cocoa, dark berries, tobacco and chestnut honey on the nose; fresh and savoury on the palate, round tannins, liquorice, black pepper and spice, with a very long almond finish. 15.5% ABV, serve at 18-20 °C.",
            "de": "Die Einzellage des Hauses, aus dem historischen Weinberg auf dem Mergel des alten Ortsteils Villa über dem Negrar-Tal. Jahrgang 2016-2017. Corvina Gentile, Corvina Grossa, Rondinella und Molinara werden in der zweiten Septemberhälfte von Hand gelesen und bis Mitte Januar in Kisten getrocknet: Für eine Flasche braucht es 2,5 kg Trauben. Sanftes Pressen, Gärung im Stahl mit rund 40 Tagen auf den Schalen und Unterstoßen von Hand; ein Jahr auf der Feinhefe, mindestens 60 Monate in großen Fässern aus slawonischer Eiche und 14-18 Monate auf der Flasche. Tiefes Granatrot; in der Nase Kirsche und Brombeere in Schokolade, Kakao, dunkle Beeren, Tabak und Kastanienhonig; am Gaumen frisch und mineralisch, runde Tannine, Lakritz, schwarzer Pfeffer und Gewürze, sehr langer Mandelabgang. 15,5 % Vol., Serviertemperatur 18-20 °C."
          },
          "a": {
            "it": "Con salumi speziati e molto stagionati, brasati di Chianina, selvaggina e filetto di Vitellone Bianco dell'Appennino; con formaggi a lunga stagionatura come Castelmagno, Bitto, Bagoss, Monte Veronese stravecchio e Ragusano; da provare con cioccolato fondente all'80%.",
            "en": "With spiced, long-aged cured meats, braised Chianina beef, game and fillet of Apennine white veal; with long-aged cheeses such as Castelmagno, Bitto, Bagoss, extra-aged Monte Veronese and Ragusano; worth trying with 80% dark chocolate.",
            "de": "Zu würziger, lange gereifter Wurst, geschmortem Chianina-Rind, Wild und Filet vom weißen Apennin-Kalb; zu lange gereiftem Käse wie Castelmagno, Bitto, Bagoss, altem Monte Veronese und Ragusano; probieren Sie ihn zu 80-prozentiger Zartbitterschokolade."
          }
        },
        "V-16-1": {
          "c": [
            "DOC"
          ],
          "pr": "25,00 €",
          "d": {
            "it": "Dedicato alla Strada Campiona, tracciata dai Romani, che per secoli ha collegato Villa Quintarelli Ruffo alle proprietà di famiglia tra le valli di Negrar e della Valpantena. Annata 2018. Corvina gentile, Corvina grossa, Rondinella e Molinara vendemmiate a mano con un leggero appassimento di 35-45 giorni; pigiatura soffice, vinificazione in acciaio con leggera criomacerazione e follature a mano. Un anno in acciaio, 24-36 mesi in botti grandi di rovere di Slavonia e almeno 12 mesi in bottiglia. Rosso rubino intenso con riflessi violacei; ciliegia matura e frutti di bosco, note di appassimento; tannino corposo ma rotondo, pepe nero e noce moscata, finale di ciliegia e mandorla con un tocco balsamico e mentolato. Alcol 14%, servizio a 16-18 °C.",
            "en": "Dedicated to the Strada Campiona, a road laid by the Romans that for centuries linked Villa Quintarelli Ruffo to the family's land between the Negrar and Valpantena valleys. 2018 vintage. Corvina Gentile, Corvina Grossa, Rondinella and Molinara, hand-picked and lightly dried for 35-45 days; soft pressing, fermentation in steel with a light cold maceration and hand punch-downs. One year in steel, 24-36 months in large Slavonian oak casks and at least 12 months in bottle. Deep ruby with violet hints; ripe cherry and berries with notes of dried grapes; full but round tannins, black pepper and nutmeg, and a cherry and almond finish with a balsamic, minty touch. 14% ABV, serve at 16-18 °C.",
            "de": "Gewidmet der Strada Campiona, einer Römerstraße, die jahrhundertelang die Villa Quintarelli Ruffo mit den Familiengütern zwischen dem Negrar- und dem Valpantena-Tal verband. Jahrgang 2018. Corvina Gentile, Corvina Grossa, Rondinella und Molinara, von Hand gelesen und 35-45 Tage leicht getrocknet; sanftes Pressen, Gärung im Stahl mit leichter Kaltmazeration und Unterstoßen von Hand. Ein Jahr im Stahl, 24-36 Monate in großen Fässern aus slawonischer Eiche und mindestens 12 Monate auf der Flasche. Tiefes Rubinrot mit violetten Reflexen; reife Kirsche und Waldbeeren, Noten getrockneter Trauben; kräftige, aber runde Tannine, schwarzer Pfeffer und Muskatnuss, Abgang mit Kirsche und Mandel und einem balsamisch-minzigen Hauch. 14 % Vol., Serviertemperatur 16-18 °C."
          },
          "a": {
            "it": "Molto versatile: con aperitivi di salumi e formaggi, soppressa e salame, formaggi alpini come Monte Veronese mezzano, Asiago stagionato e Vezzena; con primi al sugo di carne, battute di Chianina o di razza romagnola, crostini toscani e fassona piemontese.",
            "en": "Very versatile: with cured meat and cheese appetisers, soppressa and salami, Alpine cheeses such as medium-aged Monte Veronese, aged Asiago and Vezzena; with pasta in meat sauce, Chianina or Romagnola beef tartare, Tuscan crostini and Piedmontese Fassona beef.",
            "de": "Sehr vielseitig: zu Aperitifs mit Wurst und Käse, Soppressa und Salami, Alpenkäse wie mittelaltem Monte Veronese, gereiftem Asiago und Vezzena; zu Pasta mit Fleischsauce, Tatar vom Chianina- oder Romagnola-Rind, toskanischen Crostini und piemontesischem Fassona-Rind."
          }
        },
        "V-16-2": {
          "c": [
            "DOC"
          ],
          "pr": "15,00 €",
          "d": {
            "it": "Prende il nome dalla Contrà del Tono, contrada scomparsa lungo l'antica strada da Villa a Quena, ancora segnata sulla mappa di famiglia del 1746. Annata 2019-2020. Corvina gentile, Corvina grossa, Rondinella e Molinara vendemmiate a mano con un leggero appassimento di 20-30 giorni; pigiatura soffice, vinificazione in acciaio con leggera criomacerazione e follature a mano. Un anno in acciaio, 12-18 mesi in botti grandi di rovere di Slavonia e almeno 12 mesi in bottiglia. Rosso rubino; ciliegia matura e frutti di bosco, pepe nero, chiodi di garofano e un tocco balsamico di rosmarino e timo; in bocca elegante, tannino schietto, sapido e fresco, finale ammandorlato. Alcol 13,5%, servizio a 14-16 °C.",
            "en": "Named after the Contrà del Tono, a vanished hamlet on the old road from Villa to Quena, still drawn on the family's 1746 map. 2019-2020 vintage. Corvina Gentile, Corvina Grossa, Rondinella and Molinara, hand-picked and lightly dried for 20-30 days; soft pressing, fermentation in steel with a light cold maceration and hand punch-downs. One year in steel, 12-18 months in large Slavonian oak casks and at least 12 months in bottle. Ruby red; ripe cherry and berries, black pepper, cloves and a balsamic hint of rosemary and thyme; elegant on the palate, with frank tannins, savouriness, freshness and an almond finish. 13.5% ABV, serve at 14-16 °C.",
            "de": "Benannt nach der Contrà del Tono, einem verschwundenen Weiler an der alten Straße von Villa nach Quena, der noch auf der Familienkarte von 1746 verzeichnet ist. Jahrgang 2019-2020. Corvina Gentile, Corvina Grossa, Rondinella und Molinara, von Hand gelesen und 20-30 Tage leicht getrocknet; sanftes Pressen, Gärung im Stahl mit leichter Kaltmazeration und Unterstoßen von Hand. Ein Jahr im Stahl, 12-18 Monate in großen Fässern aus slawonischer Eiche und mindestens 12 Monate auf der Flasche. Rubinrot; reife Kirsche und Waldbeeren, schwarzer Pfeffer, Nelke und ein balsamischer Hauch von Rosmarin und Thymian; am Gaumen elegant, mit geradlinigen Tanninen, Mineralität, Frische und Mandelabgang. 13,5 % Vol., Serviertemperatur 14-16 °C."
          },
          "a": {
            "it": "Con salumi speziati veneti e formaggi vaccini di media stagionatura; con primi a base di carni bianche e sughi rossi e con zuppe venete e toscane di cereali e legumi.",
            "en": "With spiced Venetian cured meats and medium-aged cow's milk cheeses; with pasta dishes based on white meat or tomato sauces, and with Venetian and Tuscan grain and pulse soups.",
            "de": "Zu würziger venezianischer Wurst und mittelaltem Kuhmilchkäse; zu Pasta mit hellem Fleisch oder Tomatensauce und zu venezianischen und toskanischen Suppen mit Getreide und Hülsenfrüchten."
          }
        },
        "V-16-3": {
          "c": [
            "DOCG"
          ],
          "pr": "28,00 €",
          "d": {
            "it": "Il Recioto, l'antico vino dolce della Valpolicella: il nome viene da \"recia\", orecchia in dialetto veronese, cioè la parte alta del grappolo con gli acini più ricchi di zucchero. Annata 2022. Corvina gentile, Corvina grossa, Rondinella e Molinara vendemmiate a mano e messe ad appassire in cassetta fino a metà gennaio (2,5 kg di uva per bottiglia); pigiatura soffice, vinificazione in acciaio con circa 40 giorni sulle bucce, poi 18-24 mesi in grandi botti di rovere di Slavonia e almeno 12 mesi in bottiglia. Rosso porpora molto carico; ciliegia sotto spirito, frutti di bosco e lampone; in bocca vellutato con una nota sapida, pepe nero, noce moscata, frutti neri e prugna secca, lunga persistenza. Alcol 12,5%, servizio a 14-16 °C.",
            "en": "Recioto, the old sweet wine of Valpolicella: the name comes from \"recia\", Veronese dialect for ear, meaning the top of the bunch where the berries are richest in sugar. 2022 vintage. Corvina Gentile, Corvina Grossa, Rondinella and Molinara, hand-picked and dried in crates until mid-January (2.5 kg of grapes per bottle); soft pressing, fermentation in steel with about 40 days on the skins, then 18-24 months in large Slavonian oak casks and at least 12 months in bottle. Deep purple; cherry in spirit, berries and raspberry; velvety on the palate with a savoury note, black pepper, nutmeg, dark fruit and dried plum, and great length. 12.5% ABV, serve at 14-16 °C.",
            "de": "Recioto, der alte Süßwein des Valpolicella: Der Name kommt von \"recia\", veronesisch für Ohr, also den oberen Teil der Traube mit den zuckerreichsten Beeren. Jahrgang 2022. Corvina Gentile, Corvina Grossa, Rondinella und Molinara, von Hand gelesen und bis Mitte Januar in Kisten getrocknet (2,5 kg Trauben pro Flasche); sanftes Pressen, Gärung im Stahl mit rund 40 Tagen auf den Schalen, dann 18-24 Monate in großen Fässern aus slawonischer Eiche und mindestens 12 Monate auf der Flasche. Tiefes Purpurrot; Kirsche in Alkohol, Waldbeeren und Himbeere; am Gaumen samtig mit salziger Note, schwarzem Pfeffer, Muskatnuss, dunklen Früchten und Trockenpflaume, sehr anhaltend. 12,5 % Vol., Serviertemperatur 14-16 °C."
          },
          "a": {
            "it": "Con pandoro e panettone, cantucci, dolci secchi, mousse di cioccolato e frutti di bosco, cheesecake; da provare con formaggi semistagionati ed erborinati.",
            "en": "With pandoro and panettone, cantucci, dry pastries, chocolate and berry mousse, cheesecake; worth trying with semi-aged and blue cheeses.",
            "de": "Zu Pandoro und Panettone, Cantucci, trockenem Gebäck, Schokoladen- und Beerenmousse, Käsekuchen; probieren Sie ihn zu halbgereiftem Käse und Blauschimmelkäse."
          }
        },
        "V-16-4": {
          "c": [
            "DOCG"
          ],
          "pr": "30,00 €",
          "d": {
            "it": "Recioto spumante dolce della Valle di Negrar. Annata 2022. Corvina, Corvina grossa, Rondinella e Molinara vendemmiate a mano e appassite in cassetta fino a metà gennaio; pigiatura soffice, vinificazione in acciaio con circa 40 giorni sulle bucce e follature a mano, 18-24 mesi in botti grandi di rovere, poi spumantizzazione con metodo Charmat in autoclave per 4-6 mesi. Rosso porpora molto carico; ciliegia sotto spirito, frutti di bosco e lampone; in bocca dolce, setoso, fresco ed elegante, con perlage fine e morbido. Alcol 12%, servizio a 14-16 °C.",
            "en": "A sweet sparkling Recioto from the Negrar valley. 2022 vintage. Corvina, Corvina Grossa, Rondinella and Molinara, hand-picked and dried in crates until mid-January; soft pressing, fermentation in steel with about 40 days on the skins and hand punch-downs, 18-24 months in large oak casks, then made sparkling by the Charmat method in pressure tanks for 4-6 months. Deep purple; cherry in spirit, berries and raspberry; sweet, silky, fresh and elegant on the palate, with fine, soft bubbles. 12% ABV, serve at 14-16 °C.",
            "de": "Süßer Recioto-Schaumwein aus dem Negrar-Tal. Jahrgang 2022. Corvina, Corvina Grossa, Rondinella und Molinara, von Hand gelesen und bis Mitte Januar in Kisten getrocknet; sanftes Pressen, Gärung im Stahl mit rund 40 Tagen auf den Schalen und Unterstoßen von Hand, 18-24 Monate in großen Eichenfässern, dann Versektung nach der Charmat-Methode im Drucktank für 4-6 Monate. Tiefes Purpurrot; Kirsche in Alkohol, Waldbeeren und Himbeere; am Gaumen süß, seidig, frisch und elegant, mit feiner, weicher Perlage. 12 % Vol., Serviertemperatur 14-16 °C."
          },
          "a": {
            "it": "Con pandoro e panettone, cantucci, dolci secchi, mousse di cioccolato e frutti di bosco, cheesecake e dessert di alta pasticceria.",
            "en": "With pandoro and panettone, cantucci, dry pastries, chocolate and berry mousse, cheesecake and fine patisserie.",
            "de": "Zu Pandoro und Panettone, Cantucci, trockenem Gebäck, Schokoladen- und Beerenmousse, Käsekuchen und feiner Patisserie."
          }
        },
        "V-16-5": {
          "c": [],
          "pr": "25,00 €",
          "d": {
            "it": "Dalle vinacce del Recioto: dopo l'appassimento le uve vengono torchiate con l'antico metodo a pressione verticale, le vinacce ancora umide fermentano leggermente in distilleria e vengono distillate in modo discontinuo in alambicco di rame. Limpida, brillante e incolore. Al naso delicata e piacevole, con miele di acacia e mughetto, pesca noce, albicocca passita, frutta esotica e pera Williams; nel retrogusto pepe bianco e anice stellato. In bocca calda ma non pungente, avvolgente e rotonda, secca con una piacevole morbidezza.",
            "en": "Made from Recioto pomace: after drying, the grapes are pressed with the old vertical press, and the still-moist pomace ferments lightly at the distillery before batch distillation in copper stills. Clear, bright and colourless. Delicate and pleasant on the nose, with acacia honey and lily of the valley, nectarine, dried apricot, tropical fruit and Williams pear; white pepper and star anise on the finish. Warm but not harsh on the palate, enveloping and round, dry with a pleasant softness.",
            "de": "Aus dem Trester des Recioto: Nach dem Trocknen werden die Trauben mit der alten vertikalen Presse gepresst, der noch feuchte Trester gärt in der Brennerei leicht an und wird diskontinuierlich in kupfernen Brennblasen destilliert. Klar, brillant und farblos. In der Nase zart und angenehm, mit Akazienhonig und Maiglöckchen, Nektarine, getrockneter Aprikose, exotischen Früchten und Williamsbirne; im Abgang weißer Pfeffer und Sternanis. Am Gaumen warm, aber nicht scharf, umhüllend und rund, trocken mit angenehmer Weichheit."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-16-6": {
          "c": [],
          "pr": "30,00 €",
          "d": {
            "it": "Dalle vinacce dell'Amarone, ottenute torchiando grappoli appassiti: fermentano in modo controllato in distilleria e vengono distillate in alambicco di rame, poi affinate in botte. Limpida e brillante, color ambra con tonalità caramello, di bel corpo. Al naso complessa e persistente, con le tostature del legno: vaniglia, caramello e caffè, liquirizia, biscotti al burro, cannella e pepe nero, poi miele di castagno, muschio e sottobosco. In bocca franca e pulita, morbida e di ampia complessità aromatica, con una leggera pungenza nel retrogusto.",
            "en": "Made from Amarone pomace, obtained by pressing dried grapes: it ferments under control at the distillery, is distilled in copper stills and then aged in cask. Clear and bright, amber with caramel tones and good body. Complex and persistent on the nose, with toasty wood notes: vanilla, caramel and coffee, liquorice, butter biscuits, cinnamon and black pepper, then chestnut honey, moss and undergrowth. Clean and frank on the palate, soft and aromatically complex, with a slight warmth on the finish.",
            "de": "Aus dem Trester des Amarone, gewonnen durch Pressen getrockneter Trauben: Er gärt kontrolliert in der Brennerei, wird in kupfernen Brennblasen destilliert und im Fass gereift. Klar und brillant, bernsteinfarben mit Karamelltönen und schönem Körper. In der Nase komplex und anhaltend, mit Röstnoten vom Holz: Vanille, Karamell und Kaffee, Lakritz, Butterkekse, Zimt und schwarzer Pfeffer, dann Kastanienhonig, Moos und Unterholz. Am Gaumen klar und sauber, weich und aromatisch vielschichtig, mit leichter Schärfe im Abgang."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        }
      },
      "fonti": [
        "https://neposvillae.it/vini-valpolicella/",
        "https://neposvillae.it/distillati/",
        "https://neposvillae.it/cantina-valpolicella/",
        "https://neposvillae.it/vigneto/"
      ]
    },
    {
      "id": "V-17",
      "n": "Cantine Gerardo Perillo",
      "cat": "vino",
      "reg": "Campania",
      "city": "Castelfranci (AV)",
      "lat": 40.931,
      "lng": 15.044,
      "y": 1997,
      "certs": [
        "DOCG",
        "DOC"
      ],
      "exp": [],
      "lg": [
        "it",
        "en"
      ],
      "moq": null,
      "d": {
        "it": "Cantina fondata nel 1997 a Castelfranci, nel cuore dell'Irpinia, da Gerardo Perillo, figlio di Salvatore, storico viticoltore del paese. Ha sette ettari di vigna, quasi tutti ad Aglianico, tra Castelfranci, Montemarano e Paternopoli, nell'area del Taurasi DOCG, più una piccola parte di Coda di Volpe; dal 2014 produce anche a Capri il Capri DOC Bianco. Le vigne stanno a 400-600 metri, con clima continentale, forti escursioni termiche e suoli vulcanici e argillosi; sono allevate a raggiera avellinese e a Guyot. In cantina fermentazioni controllate, attenzione all'ossigeno e, per il Taurasi, un lungo affinamento, con un'esperienza maturata tra Toscana, Australia e Irpinia. Il motto della famiglia: se un vino non convince prima loro, non esce sul mercato. Visite in cantina su prenotazione e listino dedicato per ristoratori e rivenditori.",
        "en": "A winery founded in 1997 in Castelfranci, in the heart of Irpinia, by Gerardo Perillo, son of Salvatore, a long-standing local grape grower. It has seven hectares of vines, almost all Aglianico, across Castelfranci, Montemarano and Paternopoli, within the Taurasi DOCG area, plus a little Coda di Volpe; since 2014 it has also made Capri DOC Bianco on Capri. The vineyards lie at 400-600 metres, with a continental climate, wide temperature swings and volcanic and clay soils; they are trained on the traditional Avellino raggiera and Guyot. In the cellar: controlled fermentations, close attention to oxygen and, for the Taurasi, long ageing, drawing on experience gained in Tuscany, Australia and Irpinia. The family motto: if a wine does not convince them first, it never reaches the market. Cellar visits by appointment and a dedicated price list for restaurants and retailers.",
        "de": "Weingut, 1997 in Castelfranci im Herzen Irpiniens von Gerardo Perillo gegründet, Sohn von Salvatore, einem langjährigen Winzer des Ortes. Es bewirtschaftet sieben Hektar Reben, fast ausschließlich Aglianico, in Castelfranci, Montemarano und Paternopoli im Gebiet des Taurasi DOCG, dazu etwas Coda di Volpe; seit 2014 entsteht auf Capri auch der Capri DOC Bianco. Die Weinberge liegen auf 400-600 Metern, mit kontinentalem Klima, starken Temperaturschwankungen und vulkanischen und lehmigen Böden; erzogen wird in der traditionellen Raggiera avellinese und im Guyot. Im Keller: kontrollierte Gärung, große Sorgfalt beim Sauerstoff und für den Taurasi eine lange Reifung, mit Erfahrung aus der Toskana, Australien und Irpinien. Das Familienmotto: Was sie nicht selbst überzeugt, kommt nicht auf den Markt. Kellerbesuche nach Voranmeldung und eine eigene Preisliste für Gastronomie und Handel."
      },
      "sub": [
        {
          "k": "bianchi",
          "cat": "vino",
          "n": {
            "it": "Vini bianchi",
            "en": "White wines",
            "de": "Weißweine"
          }
        },
        {
          "k": "rossi",
          "cat": "vino",
          "n": {
            "it": "Vini rossi",
            "en": "Red wines",
            "de": "Rotweine"
          }
        }
      ],
      "p": [
        [
          "Volpone, vino bianco",
          "",
          "bianchi"
        ],
        [
          "Fiano di Avellino DOCG",
          "",
          "bianchi"
        ],
        [
          "Capri DOC Bianco",
          "",
          "bianchi"
        ],
        [
          "Irpinia DOC Coda di Volpe",
          "",
          "bianchi"
        ],
        [
          "Taurasi DOCG",
          "",
          "rossi"
        ],
        [
          "Campi Taurasini, Irpinia DOC",
          "",
          "rossi"
        ],
        [
          "Irpinia DOC Aglianico",
          "",
          "rossi"
        ]
      ],
      "pd": {
        "V-17-0": {
          "c": [],
          "pr": "20,00 €",
          "d": {
            "it": "Bianco da Coda di Volpe (70%) e Fiano (30%); una parte della Coda di Volpe affina 6-8 mesi in botti di legno di acacia. In etichetta: Natù Volpone. Vino da tavola.",
            "en": "A white from Coda di Volpe (70%) and Fiano (30%); part of the Coda di Volpe is aged for 6-8 months in acacia wood casks. Label name: Natù Volpone. Table wine.",
            "de": "Weißwein aus Coda di Volpe (70 %) und Fiano (30 %); ein Teil der Coda di Volpe reift 6-8 Monate in Fässern aus Akazienholz. Etikett: Natù Volpone. Tafelwein."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-17-1": {
          "c": [
            "DOCG"
          ],
          "pr": "19,00 €",
          "d": {
            "it": "Fiano di Avellino DOCG da vigne a Lapio, su terreno sabbioso-argilloso. Annata 2023. Giallo paglierino intenso e brillante; al naso intenso e caratteristico, con note di fiori bianchi; in bocca equilibrato e persistente, con un retrogusto intenso che ricorda la nocciola.",
            "en": "Fiano di Avellino DOCG from vineyards in Lapio, on sandy-clay soil. 2023 vintage. Deep, bright straw yellow; intense and typical on the nose, with notes of white flowers; balanced and persistent on the palate, with an intense finish recalling hazelnut.",
            "de": "Fiano di Avellino DOCG aus Weinbergen in Lapio auf sandig-lehmigem Boden. Jahrgang 2023. Intensives, leuchtendes Strohgelb; in der Nase intensiv und typisch, mit Noten weißer Blüten; am Gaumen ausgewogen und anhaltend, mit intensivem Nachklang, der an Haselnuss erinnert."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-17-2": {
          "c": [
            "DOC"
          ],
          "pr": "25,00 € · 45,00 € (magnum 1,5 L)",
          "d": {
            "it": "Bianco dell'isola di Capri, dove la cantina produce dal 2014, da terreno sabbioso-argilloso. Annata 2020. Giallo paglierino intenso e brillante; al naso intenso e caratteristico, con note di fiori bianchi e agrumi; in bocca equilibrato e persistente, con un retrogusto intenso.",
            "en": "A white from the island of Capri, where the winery has produced since 2014, on sandy-clay soil. 2020 vintage. Deep, bright straw yellow; intense and typical on the nose, with notes of white flowers and citrus; balanced and persistent on the palate, with an intense finish.",
            "de": "Weißwein von der Insel Capri, wo das Weingut seit 2014 produziert, auf sandig-lehmigem Boden. Jahrgang 2020. Intensives, leuchtendes Strohgelb; in der Nase intensiv und typisch, mit Noten weißer Blüten und Zitrus; am Gaumen ausgewogen und anhaltend, mit intensivem Nachklang."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-17-3": {
          "c": [
            "DOC"
          ],
          "pr": "20,00 €",
          "d": {
            "it": "Coda di Volpe dai vigneti di famiglia a Castelfranci, su terreno sabbioso-argilloso. Annata 2023. Paglierino carico; al naso intenso e caratteristico, con note sulfuree; in bocca equilibrato e persistente.",
            "en": "Coda di Volpe from the family vineyards in Castelfranci, on sandy-clay soil. 2023 vintage. Deep straw yellow; intense and typical on the nose, with sulphurous, flinty notes; balanced and persistent on the palate.",
            "de": "Coda di Volpe aus den Familienweinbergen in Castelfranci auf sandig-lehmigem Boden. Jahrgang 2023. Kräftiges Strohgelb; in der Nase intensiv und typisch, mit schwefligen, feuersteinartigen Noten; am Gaumen ausgewogen und anhaltend."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-17-4": {
          "c": [
            "DOCG"
          ],
          "pr": "60,00 € · 45,00 € (magnum 1,5 L)",
          "d": {
            "it": "Taurasi DOCG da Aglianico dei vigneti di Castelfranci, su terreno sabbioso-argilloso, con un lungo affinamento. In etichetta: Don Salvatore, dal nome del padre del fondatore. Annata 2015. Rosso rubino tendente al granato; al naso intenso e caratteristico, con note di frutta rossa e legno; in bocca equilibrato, con un retrogusto intenso e persistente.",
            "en": "Taurasi DOCG from Aglianico grown in Castelfranci, on sandy-clay soil, with long ageing. Label name: Don Salvatore, after the founder's father. 2015 vintage. Ruby red turning garnet; intense and typical on the nose, with red fruit and oak notes; balanced on the palate, with an intense, lasting finish.",
            "de": "Taurasi DOCG aus Aglianico aus Castelfranci, auf sandig-lehmigem Boden, mit langer Reifung. Etikett: Don Salvatore, nach dem Vater des Gründers. Jahrgang 2015. Rubinrot mit Granatreflexen; in der Nase intensiv und typisch, mit Noten roter Früchte und Holz; am Gaumen ausgewogen, mit intensivem, anhaltendem Abgang."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-17-5": {
          "c": [
            "DOC"
          ],
          "pr": "25,00 €",
          "d": {
            "it": "Irpinia DOC Campi Taurasini da vigne tra Castelfranci e Montemarano, su terreno argilloso, affinato in legno. In etichetta: Rubbino. Rosso rubino intenso; al naso intenso e caratteristico, con profumi terziari; in bocca equilibrato e persistente, con un tannino elegante dato dal vitigno e dai legni.",
            "en": "Irpinia DOC Campi Taurasini from vineyards between Castelfranci and Montemarano, on clay soil, aged in wood. Label name: Rubbino. Deep ruby; intense and typical on the nose, with tertiary aromas; balanced and persistent on the palate, with elegant tannins from the grape and the oak.",
            "de": "Irpinia DOC Campi Taurasini aus Weinbergen zwischen Castelfranci und Montemarano, auf Lehmboden, im Holz gereift. Etikett: Rubbino. Tiefes Rubinrot; in der Nase intensiv und typisch, mit tertiären Aromen; am Gaumen ausgewogen und anhaltend, mit eleganten Tanninen von Rebsorte und Holz."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        },
        "V-17-6": {
          "c": [
            "DOC"
          ],
          "pr": "18,00 €",
          "d": {
            "it": "Aglianico da vigne tra Castelfranci e Montemarano, su terreno argilloso. Rosso rubino intenso; al naso complesso, intenso e caratteristico, con note di frutti rossi; in bocca equilibrato e persistente, con un tannino elegante tipico del vitigno.",
            "en": "Aglianico from vineyards between Castelfranci and Montemarano, on clay soil. Deep ruby; complex, intense and typical on the nose, with red fruit notes; balanced and persistent on the palate, with the elegant tannins typical of the grape.",
            "de": "Aglianico aus Weinbergen zwischen Castelfranci und Montemarano, auf Lehmboden. Tiefes Rubinrot; in der Nase komplex, intensiv und typisch, mit Noten roter Früchte; am Gaumen ausgewogen und anhaltend, mit den eleganten Tanninen der Rebsorte."
          },
          "a": {
            "it": "",
            "en": "",
            "de": ""
          }
        }
      },
      "fonti": [
        "https://www.cantinegerardoperillo.it/prodotti",
        "https://www.cantinegerardoperillo.it/chi-siamo",
        "https://www.cantinegerardoperillo.it/la-cantina"
      ]
    },
    {
      "id": "V-18",
      "n": "Giolì dolci di Siena (Forno Ravacciano)",
      "cat": "dolci",
      "reg": "Toscana",
      "city": "Siena (SI)",
      "lat": 43.318,
      "lng": 11.331,
      "y": null,
      "certs": [],
      "exp": [],
      "lg": [
        "it",
        "en"
      ],
      "moq": null,
      "d": {
        "it": "Forno artigianale a conduzione familiare a Siena, fondato dai fratelli Gianfranco e Daniele Brogi e oggi portato avanti dalle famiglie Brogi e Panichi. Da decenni è un punto di riferimento per il pane toscano: usa materie prime selezionate, privilegia ingredienti italiani e del commercio equo e solidale e rispetta tempi di lavorazione lunghi e lenti. Oltre al pane e a prodotti salati come il ciaccino senese, prepara biscotti da colazione e i dolci tipici di Siena secondo le ricette tradizionali: ricciarelli, panforte, panpepato, cavallucci, cantucci e ciambellini, insieme a nuove ricette come castagnucci e pescarelli. I prodotti si vendono anche nella Bottega di Ravacciano, in via Maitani a Siena.",
        "en": "A family-run artisan bakery in Siena, founded by brothers Gianfranco and Daniele Brogi and now run by the Brogi and Panichi families. For decades it has been a reference point for Tuscan bread: it uses selected raw materials, favours Italian and fair-trade ingredients and respects long, slow working times. Besides bread and savoury products such as Sienese ciaccino flatbread, it makes breakfast biscuits and Siena's traditional sweets to the original recipes: ricciarelli, panforte, panpepato, cavallucci, cantucci and ciambellini, along with new recipes such as castagnucci and pescarelli. Its products are also sold at the Bottega di Ravacciano, on Via Maitani in Siena.",
        "de": "Familiengeführte Handwerksbäckerei in Siena, gegründet von den Brüdern Gianfranco und Daniele Brogi und heute von den Familien Brogi und Panichi geführt. Seit Jahrzehnten ist sie eine Adresse für toskanisches Brot: Sie verwendet ausgewählte Rohstoffe, bevorzugt italienische und fair gehandelte Zutaten und lässt dem Teig lange, langsame Ruhezeiten. Neben Brot und herzhaften Produkten wie dem Sieneser Fladenbrot Ciaccino backt sie Frühstückskekse und die typischen Süßigkeiten Sienas nach überlieferten Rezepten: Ricciarelli, Panforte, Panpepato, Cavallucci, Cantucci und Ciambellini, dazu neue Rezepte wie Castagnucci und Pescarelli. Die Produkte gibt es auch in der Bottega di Ravacciano in der Via Maitani in Siena."
      },
      "sub": [
        {
          "k": "biscotti",
          "cat": "dolci",
          "n": {
            "it": "Biscotti e cantucci",
            "en": "Biscuits and cantucci",
            "de": "Kekse und Cantucci"
          }
        },
        {
          "k": "ricciarelli",
          "cat": "dolci",
          "n": {
            "it": "Ricciarelli",
            "en": "Ricciarelli",
            "de": "Ricciarelli"
          }
        },
        {
          "k": "panforte",
          "cat": "dolci",
          "n": {
            "it": "Panforte e panpepato",
            "en": "Panforte and panpepato",
            "de": "Panforte und Panpepato"
          }
        }
      ],
      "p": [
        [
          "Cantucci classici",
          "200 g",
          "biscotti"
        ],
        [
          "Cantucci golosi",
          "200 g",
          "biscotti"
        ],
        [
          "Castagnucci",
          "200 g · 600 g",
          "biscotti"
        ],
        [
          "Ciambellini senesi",
          "200 g · 600 g",
          "biscotti"
        ],
        [
          "Cavallucci mignon",
          "200 g",
          "biscotti"
        ],
        [
          "Ricciarelli classici",
          "200 g",
          "ricciarelli"
        ],
        [
          "Ricciarelli ghiotti",
          "200 g",
          "ricciarelli"
        ],
        [
          "Ricciarelli neri",
          "200 g",
          "ricciarelli"
        ],
        [
          "Pescarelli",
          "200 g",
          "ricciarelli"
        ],
        [
          "Panforte Margherita",
          "300 g",
          "panforte"
        ],
        [
          "Panpepato",
          "300 g",
          "panforte"
        ]
      ],
      "pd": {
        "V-18-0": {
          "c": [],
          "pr": "13,20 €",
          "d": {
            "it": "Biscotti toscani alle mandorle tostate, cotti due volte per la loro croccantezza; nati per durare a lungo, erano il biscotto dei viaggiatori. Ingredienti: farina di grano tenero, mandorle tostate, zucchero, uova, burro, latte, bicarbonato di ammonio. Confezione 8 × 8 × 13 cm. Si conserva 3-4 mesi.",
            "en": "Tuscan biscuits with toasted almonds, baked twice for their crunch; made to keep, they were once the travellers' biscuit. Ingredients: soft wheat flour, toasted almonds, sugar, eggs, butter, milk, ammonium bicarbonate. Box 8 × 8 × 13 cm. Shelf life 3-4 months.",
            "de": "Toskanische Kekse mit gerösteten Mandeln, zweimal gebacken für ihren Biss; lange haltbar, waren sie einst das Gebäck der Reisenden. Zutaten: Weichweizenmehl, geröstete Mandeln, Zucker, Eier, Butter, Milch, Ammoniumhydrogencarbonat. Packung 8 × 8 × 13 cm. Haltbarkeit 3-4 Monate."
          },
          "a": {
            "it": "Tradizionalmente da intingere nel Vin Santo.",
            "en": "Traditionally dipped in Vin Santo.",
            "de": "Traditionell in Vin Santo getunkt."
          }
        },
        "V-18-1": {
          "c": [],
          "pr": "9,90 €",
          "d": {
            "it": "Cantucci con gocce di cioccolato al posto delle mandorle: stessa croccantezza della ricetta classica, con un gusto più goloso. Ingredienti: farina di grano tenero, cioccolato (zucchero, massa e burro di cacao, latte scremato in polvere, destrosio, lecitina di girasole), zucchero, uova, burro, latte, bicarbonato di ammonio. Confezione 8 × 8 × 13 cm. Si conserva 3-4 mesi.",
            "en": "Cantucci with chocolate chips instead of almonds: the same crunch as the classic recipe, with a richer taste. Ingredients: soft wheat flour, chocolate (sugar, cocoa mass and butter, skimmed milk powder, dextrose, sunflower lecithin), sugar, eggs, butter, milk, ammonium bicarbonate. Box 8 × 8 × 13 cm. Shelf life 3-4 months.",
            "de": "Cantucci mit Schokotropfen statt Mandeln: derselbe Biss wie im klassischen Rezept, mit vollerem Geschmack. Zutaten: Weichweizenmehl, Schokolade (Zucker, Kakaomasse und -butter, Magermilchpulver, Dextrose, Sonnenblumenlecithin), Zucker, Eier, Butter, Milch, Ammoniumhydrogencarbonat. Packung 8 × 8 × 13 cm. Haltbarkeit 3-4 Monate."
          },
          "a": {
            "it": "Da gustare con il Vin Santo o altri vini dolci, oppure con tè e caffè.",
            "en": "Enjoy with Vin Santo or other sweet wines, or with tea and coffee.",
            "de": "Passt zu Vin Santo oder anderen Süßweinen sowie zu Tee und Kaffee."
          }
        },
        "V-18-2": {
          "c": [],
          "pr": "13,20 € (200 g)",
          "d": {
            "it": "Cantucci con farina di castagne e noci, dal gusto ricco e rustico: una ricetta nuova del forno che riprende un ingrediente un tempo molto usato. Ingredienti: farina di castagne, farina di farro, noci, burro, uovo, zucchero, bicarbonato di ammonio, vaniglia. Confezione da 200 g: 8 × 8 × 13 cm. Si conserva 3-4 mesi.",
            "en": "Cantucci made with chestnut flour and walnuts, with a rich, rustic taste: a new recipe from the bakery that revives a once common ingredient. Ingredients: chestnut flour, spelt flour, walnuts, butter, egg, sugar, ammonium bicarbonate, vanilla. 200 g box: 8 × 8 × 13 cm. Shelf life 3-4 months.",
            "de": "Cantucci mit Kastanienmehl und Walnüssen, kräftig und rustikal im Geschmack: ein neues Rezept der Bäckerei mit einer einst weit verbreiteten Zutat. Zutaten: Kastanienmehl, Dinkelmehl, Walnüsse, Butter, Ei, Zucker, Ammoniumhydrogencarbonat, Vanille. 200-g-Packung: 8 × 8 × 13 cm. Haltbarkeit 3-4 Monate."
          },
          "a": {
            "it": "Con un bicchiere di Vin Santo o, nei giorni freddi, con tè o caffè.",
            "en": "With a glass of Vin Santo or, on cold days, with tea or coffee.",
            "de": "Zu einem Glas Vin Santo oder an kalten Tagen zu Tee oder Kaffee."
          }
        },
        "V-18-3": {
          "c": [],
          "pr": "13,20 € (200 g)",
          "d": {
            "it": "Biscotti a ciambella tipici di Siena, detti anche ciambellini degli sposi e preparati soprattutto a Pasqua; croccanti e leggeri, con un tocco di anice. Ingredienti: farina di grano tenero tipo 0, uova, acqua, zucchero a velo, margarina, burro, latte, soia, olio di mais, sale, bicarbonato di ammonio. Confezione da 200 g: 8 × 8 × 13 cm. Si conserva 3-4 mesi.",
            "en": "Ring-shaped biscuits typical of Siena, also called wedding ciambellini and made mainly at Easter; crisp and light, with a hint of aniseed. Ingredients: type 0 soft wheat flour, eggs, water, icing sugar, margarine, butter, milk, soy, corn oil, salt, ammonium bicarbonate. 200 g box: 8 × 8 × 13 cm. Shelf life 3-4 months.",
            "de": "Ringförmige Kekse aus Siena, auch Hochzeits-Ciambellini genannt und vor allem zu Ostern gebacken; knusprig und leicht, mit einem Hauch Anis. Zutaten: Weichweizenmehl Type 0, Eier, Wasser, Puderzucker, Margarine, Butter, Milch, Soja, Maiskeimöl, Salz, Ammoniumhydrogencarbonat. 200-g-Packung: 8 × 8 × 13 cm. Haltbarkeit 3-4 Monate."
          },
          "a": {
            "it": "Da gustare con il Vin Santo o altri vini dolci, oppure con tè e caffè.",
            "en": "Enjoy with Vin Santo or other sweet wines, or with tea and coffee.",
            "de": "Passt zu Vin Santo oder anderen Süßweinen sowie zu Tee und Kaffee."
          }
        },
        "V-18-4": {
          "c": [],
          "pr": "10,00 €",
          "d": {
            "it": "Dolce tradizionale senese con noci, scorza d'arancia candita e anice, senza grassi; il nome viene dai cavalieri e dai corrieri che lo mangiavano nelle soste lungo le strade. Ingredienti: farina di grano tenero, zucchero, scorza d'arancia, noci, bicarbonato di ammonio, semi di anice, coriandolo, amido di mais, acido citrico. Confezione 8 × 8 × 13 cm. Si conserva 3-4 mesi.",
            "en": "A traditional Sienese sweet with walnuts, candied orange peel and aniseed, made without fat; the name comes from the riders and couriers who ate it at roadside stops. Ingredients: soft wheat flour, sugar, orange peel, walnuts, ammonium bicarbonate, aniseed, coriander, corn starch, citric acid. Box 8 × 8 × 13 cm. Shelf life 3-4 months.",
            "de": "Traditionelles Gebäck aus Siena mit Walnüssen, kandierter Orangenschale und Anis, ohne Fett; der Name erinnert an die Reiter und Kuriere, die es bei ihren Rasten aßen. Zutaten: Weichweizenmehl, Zucker, Orangenschale, Walnüsse, Ammoniumhydrogencarbonat, Anissamen, Koriander, Maisstärke, Zitronensäure. Packung 8 × 8 × 13 cm. Haltbarkeit 3-4 Monate."
          },
          "a": {
            "it": "Tipico delle feste, ma buono tutto l'anno.",
            "en": "Typical of the holidays, but good all year round.",
            "de": "Typisch für die Festtage, aber das ganze Jahr über beliebt."
          }
        },
        "V-18-5": {
          "c": [],
          "pr": "15,40 €",
          "d": {
            "it": "Il tradizionale dolce senese di pasta di mandorle, di origine medievale, con interno morbido e crosta sottile spolverata di zucchero a velo. Ingredienti: mandorle, zucchero, albume, scorza d'arancia, sciroppo di glucosio-fruttosio, saccarosio, armelline, fecola di patate, amido di mais, acido citrico. Può contenere frutta a guscio, latte, glutine e soia. Confezione 8 × 8 × 13 cm. Si conserva 3-4 mesi.",
            "en": "The traditional Sienese almond-paste sweet, of medieval origin, with a soft centre and a thin crust dusted with icing sugar. Ingredients: almonds, sugar, egg white, orange peel, glucose-fructose syrup, sucrose, apricot kernels, potato starch, corn starch, citric acid. May contain nuts, milk, gluten and soy. Box 8 × 8 × 13 cm. Shelf life 3-4 months.",
            "de": "Das traditionelle Mandelgebäck aus Siena, mittelalterlichen Ursprungs, mit weichem Kern und dünner, puderzuckerbestäubter Kruste. Zutaten: Mandeln, Zucker, Eiweiß, Orangenschale, Glukose-Fruktose-Sirup, Saccharose, Aprikosenkerne, Kartoffelstärke, Maisstärke, Zitronensäure. Kann Schalenfrüchte, Milch, Gluten und Soja enthalten. Packung 8 × 8 × 13 cm. Haltbarkeit 3-4 Monate."
          },
          "a": {
            "it": "A Siena si servono con un bicchiere di Vin Santo, oppure con caffè o tè, soprattutto a Natale.",
            "en": "In Siena they are served with a glass of Vin Santo, or with coffee or tea, especially at Christmas.",
            "de": "In Siena serviert man sie zu einem Glas Vin Santo oder zu Kaffee und Tee, besonders an Weihnachten."
          }
        },
        "V-18-6": {
          "c": [],
          "pr": "15,40 €",
          "d": {
            "it": "Il tradizionale dolce senese di pasta di mandorle, di origine medievale, con interno morbido e crosta sottile spolverata di zucchero a velo. In questa versione con gocce di cioccolato fondente. Ingredienti: mandorle, zucchero semolato, albume, pasta di arancia candita, zucchero a velo, gocce di cioccolato fondente. Confezione 8 × 8 × 13 cm. Si conserva 3-4 mesi.",
            "en": "The traditional Sienese almond-paste sweet, of medieval origin, with a soft centre and a thin crust dusted with icing sugar. This version has dark chocolate chips. Ingredients: almonds, granulated sugar, egg white, candied orange paste, icing sugar, dark chocolate chips. Box 8 × 8 × 13 cm. Shelf life 3-4 months.",
            "de": "Das traditionelle Mandelgebäck aus Siena, mittelalterlichen Ursprungs, mit weichem Kern und dünner, puderzuckerbestäubter Kruste. Diese Variante enthält Zartbitterschokoladentropfen. Zutaten: Mandeln, Kristallzucker, Eiweiß, kandierte Orangenpaste, Puderzucker, Zartbitterschokoladentropfen. Packung 8 × 8 × 13 cm. Haltbarkeit 3-4 Monate."
          },
          "a": {
            "it": "Da gustare con il Vin Santo o altri vini dolci, oppure con tè e caffè.",
            "en": "Enjoy with Vin Santo or other sweet wines, or with tea and coffee.",
            "de": "Passt zu Vin Santo oder anderen Süßweinen sowie zu Tee und Kaffee."
          }
        },
        "V-18-7": {
          "c": [],
          "pr": "15,40 €",
          "d": {
            "it": "Il tradizionale dolce senese di pasta di mandorle, di origine medievale, con interno morbido e crosta sottile spolverata di zucchero a velo. In questa versione con cacao amaro, che dà profondità e bilancia la dolcezza. Ingredienti: mandorle, zucchero semolato, albume, pasta di arancia candita, zucchero a velo, cacao amaro in polvere. Confezione 8 × 8 × 13 cm. Si conserva 3-4 mesi.",
            "en": "The traditional Sienese almond-paste sweet, of medieval origin, with a soft centre and a thin crust dusted with icing sugar. This version has bitter cocoa, which adds depth and balances the sweetness. Ingredients: almonds, granulated sugar, egg white, candied orange paste, icing sugar, bitter cocoa powder. Box 8 × 8 × 13 cm. Shelf life 3-4 months.",
            "de": "Das traditionelle Mandelgebäck aus Siena, mittelalterlichen Ursprungs, mit weichem Kern und dünner, puderzuckerbestäubter Kruste. Diese Variante enthält Kakao, der Tiefe gibt und die Süße ausgleicht. Zutaten: Mandeln, Kristallzucker, Eiweiß, kandierte Orangenpaste, Puderzucker, Kakaopulver. Packung 8 × 8 × 13 cm. Haltbarkeit 3-4 Monate."
          },
          "a": {
            "it": "Da gustare con il Vin Santo o altri vini dolci, oppure con tè e caffè.",
            "en": "Enjoy with Vin Santo or other sweet wines, or with tea and coffee.",
            "de": "Passt zu Vin Santo oder anderen Süßweinen sowie zu Tee und Kaffee."
          }
        },
        "V-18-8": {
          "c": [],
          "pr": "15,40 €",
          "d": {
            "it": "Una versione nuova dei ricciarelli, con pesca candita: interno morbido, crosta zuccherata e un delicato aroma di pesca. Ingredienti: mandorle, zucchero, albume, scorza d'arancia candita, pesca candita (purea di pesca e mela, zucchero, farina di riso, burro di cacao, pectina, acido citrico), zucchero a velo, bicarbonato di ammonio. Confezione 8 × 8 × 13 cm. Si conserva 3-4 mesi.",
            "en": "A new take on ricciarelli with candied peach: soft centre, sugary crust and a delicate peach aroma. Ingredients: almonds, sugar, egg white, candied orange peel, candied peach (peach and apple purée, sugar, rice flour, cocoa butter, pectin, citric acid), icing sugar, ammonium bicarbonate. Box 8 × 8 × 13 cm. Shelf life 3-4 months.",
            "de": "Eine neue Variante der Ricciarelli mit kandiertem Pfirsich: weicher Kern, zuckrige Kruste und ein zartes Pfirsicharoma. Zutaten: Mandeln, Zucker, Eiweiß, kandierte Orangenschale, kandierter Pfirsich (Pfirsich- und Apfelpüree, Zucker, Reismehl, Kakaobutter, Pektin, Zitronensäure), Puderzucker, Ammoniumhydrogencarbonat. Packung 8 × 8 × 13 cm. Haltbarkeit 3-4 Monate."
          },
          "a": {
            "it": "Con Vin Santo o tè, oppure con dolci al cucchiaio e gelato; ideali in primavera e in estate.",
            "en": "With Vin Santo or tea, or with creamy desserts and ice cream; ideal in spring and summer.",
            "de": "Zu Vin Santo oder Tee, zu cremigen Desserts und Eis; ideal im Frühling und Sommer."
          }
        },
        "V-18-9": {
          "c": [],
          "pr": "19,00 €",
          "d": {
            "it": "Dolce tipico senese di frutta secca, zucchero e spezie, compatto e profumato. Le origini sono medievali; la versione Margherita sarebbe stata creata nel 1879 per la visita a Siena della regina Margherita di Savoia. Ingredienti: mandorle, zucchero, acqua, scorza di cedro, arancia candita, farina di grano tenero, spezie (cannella, chiodi di garofano, noce moscata, pimento, anice stellato, coriandolo), aroma di vaniglia. Confezione 5 × 9 × 12 cm. Si conserva 6 mesi.",
            "en": "A typical Sienese cake of nuts, sugar and spices, dense and fragrant. Its origins are medieval; the Margherita version is said to have been created in 1879 for Queen Margherita of Savoy's visit to Siena. Ingredients: almonds, sugar, water, citron peel, candied orange, soft wheat flour, spices (cinnamon, cloves, nutmeg, allspice, star anise, coriander), vanilla flavouring. Box 5 × 9 × 12 cm. Shelf life 6 months.",
            "de": "Typischer Kuchen aus Siena mit Nüssen, Zucker und Gewürzen, kompakt und duftend. Er stammt aus dem Mittelalter; die Variante Margherita soll 1879 zum Besuch von Königin Margherita von Savoyen in Siena entstanden sein. Zutaten: Mandeln, Zucker, Wasser, Zitronatschale, kandierte Orange, Weichweizenmehl, Gewürze (Zimt, Nelken, Muskatnuss, Piment, Sternanis, Koriander), Vanillearoma. Packung 5 × 9 × 12 cm. Haltbarkeit 6 Monate."
          },
          "a": {
            "it": "Ideale per le feste e come dessert, con vini da dessert come il Vin Santo; anche come snack energetico.",
            "en": "Ideal for the holidays and as a dessert, with dessert wines such as Vin Santo; also an energy snack.",
            "de": "Ideal für Festtage und als Dessert, zu Dessertweinen wie Vin Santo; auch als Energiesnack."
          }
        },
        "V-18-10": {
          "c": [],
          "pr": "18,00 €",
          "d": {
            "it": "Dolce senese di origine medievale con frutta secca, canditi, cacao e spezie, tra cui il pepe che gli dà il nome; tradizionale a Natale. Ingredienti: farina di grano tenero, mandorle, nocciole, zucchero, acqua, scorze candite di arancia e melone, cannella, noce moscata, pepe, cacao. Confezione 5 × 9 × 12 cm. Si conserva 6 mesi.",
            "en": "A Sienese cake of medieval origin with nuts, candied peel, cocoa and spices, including the pepper that gives it its name; a Christmas tradition. Ingredients: soft wheat flour, almonds, hazelnuts, sugar, water, candied orange and melon peel, cinnamon, nutmeg, pepper, cocoa. Box 5 × 9 × 12 cm. Shelf life 6 months.",
            "de": "Kuchen aus Siena mittelalterlichen Ursprungs mit Nüssen, kandierten Früchten, Kakao und Gewürzen, darunter der namensgebende Pfeffer; eine Weihnachtstradition. Zutaten: Weichweizenmehl, Mandeln, Haselnüsse, Zucker, Wasser, kandierte Orangen- und Melonenschale, Zimt, Muskatnuss, Pfeffer, Kakao. Packung 5 × 9 × 12 cm. Haltbarkeit 6 Monate."
          },
          "a": {
            "it": "Perfetto con un bicchiere di Vin Santo.",
            "en": "Perfect with a glass of Vin Santo.",
            "de": "Perfekt zu einem Glas Vin Santo."
          }
        }
      },
      "fonti": [
        "https://labottegadiravacciano.it/prodotti-dolciari/",
        "https://labottegadiravacciano.it/prodotti-tipici-senesi/",
        "https://labottegadiravacciano.it/prodotti-salati/",
        "https://labottegadiravacciano.it/chi-siamo/"
      ]
    },
    {
      "id": "V-19",
      "n": "Minnelea",
      "cat": "conserve",
      "reg": "Campania",
      "city": "Moio della Civitella (SA)",
      "lat": 40.247,
      "lng": 15.27,
      "y": 2023,
      "certs": [],
      "exp": [],
      "lg": [
        "it",
        "en",
        "de"
      ],
      "moq": null,
      "d": {
        "it": "Azienda agricola di famiglia nel Cilento, nata nel 2023 quando Carmine Rizzo ha lasciato Roma per tornare nella sua terra e trasformare i campi di famiglia in un laboratorio di confetture e conserve. Frutta e verdura del territorio, lavorate al picco della maturazione in piccoli lotti seguiti a mano; confetture e sughi sono cotti sottovuoto a bassa temperatura per preservare colore, profumo e dolcezza, senza conservanti, coloranti né aromi artificiali. In pochi anni i vasetti Minnelea sono arrivati a chef, gastronomie e clienti gourmet in Italia e in Europa, con 10 riconoscimenti: Great Taste 2025 (Londra) per la confettura di fichi e premi WineHunter Gold e Rosso del Merano WineFestival nel 2024 e nel 2026. Oltre ai formati retail producono formati professionali per ristoranti, hotel e pasticcerie, una linea di confetture da forno su richiesta e kit regalo, anche personalizzati.",
        "en": "A family farm in Cilento, founded in 2023 when Carmine Rizzo left Rome to return home and turn the family land into a jam and preserves workshop. Local fruit and vegetables, processed at peak ripeness in small, hand-monitored batches; jams and sauces are vacuum-cooked at low temperature to keep their colour, aroma and sweetness, with no preservatives, colourings or artificial flavourings. Within a few years Minnelea jars have reached chefs, delicatessens and gourmet customers in Italy and Europe, with 10 awards: Great Taste 2025 (London) for the fig jam and WineHunter Gold and Rosso awards from the Merano WineFestival in 2024 and 2026. Besides retail sizes they make professional formats for restaurants, hotels and pastry shops, a baking jam line on request and gift kits, including custom ones.",
        "de": "Familienbetrieb im Cilento, 2023 gegründet, als Carmine Rizzo Rom verließ, in seine Heimat zurückkehrte und das Familienland in eine Manufaktur für Konfitüren und Konserven verwandelte. Obst und Gemüse aus der Region, in voller Reife in kleinen, von Hand begleiteten Chargen verarbeitet; Konfitüren und Saucen werden bei niedriger Temperatur im Vakuum gekocht, damit Farbe, Duft und Süße erhalten bleiben, ohne Konservierungs-, Farb- oder künstliche Aromastoffe. In wenigen Jahren haben Minnelea-Gläser Köche, Feinkostläden und Gourmetkunden in Italien und Europa erreicht, mit 10 Auszeichnungen: Great Taste 2025 (London) für die Feigenkonfitüre sowie WineHunter Gold und Rosso des Merano WineFestival 2024 und 2026. Neben Einzelhandelsgrößen gibt es Profiformate für Restaurants, Hotels und Konditoreien, eine Backkonfitüren-Linie auf Anfrage sowie Geschenkkits, auch individuell zusammengestellt."
      },
      "sub": [
        {
          "k": "confetture",
          "cat": "conserve",
          "n": {
            "it": "Confetture extra",
            "en": "Extra jams",
            "de": "Extra-Konfitüren"
          }
        },
        {
          "k": "marmellate",
          "cat": "conserve",
          "n": {
            "it": "Marmellate extra",
            "en": "Extra marmalades",
            "de": "Extra-Marmeladen"
          }
        },
        {
          "k": "sottoli",
          "cat": "conserve",
          "n": {
            "it": "Sott'oli",
            "en": "Preserves in oil",
            "de": "In Öl eingelegt"
          }
        },
        {
          "k": "creme",
          "cat": "conserve",
          "n": {
            "it": "Creme e paté",
            "en": "Creams and pâtés",
            "de": "Cremes und Pasteten"
          }
        },
        {
          "k": "sughi",
          "cat": "conserve",
          "n": {
            "it": "Sughi pronti",
            "en": "Ready sauces",
            "de": "Fertigsaucen"
          }
        },
        {
          "k": "kit",
          "cat": "misti",
          "n": {
            "it": "Kit e confezioni regalo",
            "en": "Kits and gift boxes",
            "de": "Kits und Geschenkboxen"
          }
        }
      ],
      "p": [
        [
          "Confettura extra di albicocche",
          "vasetto da 212 g",
          "confetture"
        ],
        [
          "Confettura extra di fichi bianchi dottati",
          "vasetto da 212 g",
          "confetture"
        ],
        [
          "Confettura extra di fragole",
          "vasetto da 212 g",
          "confetture"
        ],
        [
          "Confettura extra di frutti di bosco",
          "vasetto da 212 g",
          "confetture"
        ],
        [
          "Confettura extra di mele rosse",
          "vasetto da 212 g",
          "confetture"
        ],
        [
          "Confettura extra di mirtillo nero",
          "vasetto da 212 g",
          "confetture"
        ],
        [
          "Marmellata extra di arance",
          "vasetto da 212 g",
          "marmellate"
        ],
        [
          "Marmellata extra di arance e limoni",
          "vasetto da 212 g",
          "marmellate"
        ],
        [
          "Marmellata extra di limoni",
          "vasetto da 212 g",
          "marmellate"
        ],
        [
          "Melanzane sott'olio EVO",
          "vasetto da 200 g",
          "sottoli"
        ],
        [
          "Peperoni sott'olio EVO",
          "vasetto da 200 g",
          "sottoli"
        ],
        [
          "Pomodori secchi sott'olio EVO",
          "vasetto da 200 g",
          "sottoli"
        ],
        [
          "Paté di pomodori secchi",
          "vasetto da 200 g",
          "creme"
        ],
        [
          "Crema di zucca con olio EVO",
          "vasetto da 200 g",
          "creme"
        ],
        [
          "Sugo al basilico",
          "vasetto da 270 g",
          "sughi"
        ],
        [
          "Sugo cilentano",
          "vasetto da 270 g",
          "sughi"
        ],
        [
          "Sugo all'arrabbiata",
          "vasetto da 270 g",
          "sughi"
        ],
        [
          "Sugo ai pomodori secchi",
          "vasetto da 270 g",
          "sughi"
        ],
        [
          "Kit Benvenuto",
          "6 vasetti",
          "kit"
        ],
        [
          "Kit Benvenuto salato",
          "6 vasetti",
          "kit"
        ],
        [
          "Kit Confetture e marmellata",
          "6 vasetti · 12 vasetti",
          "kit"
        ],
        [
          "Kit Misto dolce e salato",
          "6 vasetti · 12 vasetti",
          "kit"
        ],
        [
          "Kit Salato",
          "6 vasetti · 12 vasetti",
          "kit"
        ],
        [
          "Kit Sughi",
          "6 vasetti · 12 vasetti",
          "kit"
        ],
        [
          "Kit Assaggio sughi",
          "6 vasetti",
          "kit"
        ],
        [
          "Kit Pasta della tradizione",
          "5 vasetti",
          "kit"
        ],
        [
          "Kit Aperitivo",
          "4 vasetti",
          "kit"
        ],
        [
          "Kit Tagliere formaggi e confetture",
          "4 vasetti",
          "kit"
        ],
        [
          "Kit Crostate e dolci",
          "4 vasetti",
          "kit"
        ],
        [
          "Kit Coppia, cena per due",
          "4 vasetti",
          "kit"
        ],
        [
          "Kit Gran Riserva",
          "12 vasetti",
          "kit"
        ],
        [
          "Kit Regalo Premium",
          "18 vasetti",
          "kit"
        ]
      ],
      "pd": {
        "V-19-0": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Albicocche del Sud Italia raccolte a piena maturazione: 130 g di frutta per 100 g di confettura (70% albicocche, 29% zucchero di canna, 1% succo di limone). Cotta sottovuoto a bassa temperatura, senza pectine, addensanti, conservanti né coloranti. Colore arancio dorato, consistenza vellutata. Premio WineHunter Rosso 2026 (Merano WineFestival). Ingredienti: albicocche italiane, zucchero di canna, succo di limone. Disponibile anche nel formato professionale da 580 g.",
            "en": "Southern Italian apricots picked fully ripe: 130 g of fruit per 100 g of jam (70% apricots, 29% cane sugar, 1% lemon juice). Cooked under vacuum at low temperature, with no pectin, thickeners, preservatives or colourings. Golden orange colour, velvety texture. WineHunter Rosso 2026 award (Merano WineFestival). Ingredients: Italian apricots, cane sugar, lemon juice. Also available in a 580 g professional format.",
            "de": "Vollreif geerntete Aprikosen aus Süditalien: 130 g Frucht für 100 g Konfitüre (70% Aprikosen, 29% Rohrzucker, 1% Zitronensaft). Bei niedriger Temperatur im Vakuum gekocht, ohne Pektin, Verdickungsmittel, Konservierungs- oder Farbstoffe. Goldorange Farbe, samtige Konsistenz. Auszeichnung WineHunter Rosso 2026 (Merano WineFestival). Zutaten: italienische Aprikosen, Rohrzucker, Zitronensaft. Auch im 580-g-Profiformat erhältlich."
          },
          "a": {
            "it": "Su pane integrale e nello yogurt greco, con ricotta fresca e formaggi morbidi, in crostate e biscotti farciti. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "On wholemeal bread and in Greek yoghurt, with fresh ricotta and soft cheeses, in tarts and filled biscuits. Once opened keep refrigerated and eat within 7 days.",
            "de": "Auf Vollkornbrot und in griechischem Joghurt, zu frischem Ricotta und Weichkäse, in Crostate und gefüllten Keksen. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-1": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Fichi Bianchi dottati, varietà tradizionale dalla polpa dolce e profumata, raccolti tra fine luglio e agosto nelle prime ore del mattino: 88 g di frutta per 100 g di confettura. Solo fichi, zucchero di canna, succo di limone e un'infusione di vaniglia in cottura; la densità viene dalla cottura e dalle bucce. Cotta sottovuoto a bassa temperatura, senza pectine, addensanti, conservanti né coloranti. Premiata Great Taste 2025 (Londra) e WineHunter Award Gold 2024 (Merano WineFestival).",
            "en": "Bianchi dottati figs, a traditional variety with sweet, fragrant flesh, picked from late July to August in the early morning: 88 g of fruit per 100 g of jam. Only figs, cane sugar, lemon juice and a vanilla infusion during cooking; the body comes from the cooking and the skins. Cooked under vacuum at low temperature, with no pectin, thickeners, preservatives or colourings. Awarded Great Taste 2025 (London) and WineHunter Award Gold 2024 (Merano WineFestival).",
            "de": "Feigen der Sorte Bianco dottato mit süßem, duftendem Fruchtfleisch, Ende Juli bis August in den frühen Morgenstunden geerntet: 88 g Frucht für 100 g Konfitüre. Nur Feigen, Rohrzucker, Zitronensaft und ein Vanilleaufguss beim Kochen; die Festigkeit entsteht durch das Kochen und die Schalen. Bei niedriger Temperatur im Vakuum gekocht, ohne Pektin, Verdickungsmittel, Konservierungs- oder Farbstoffe. Ausgezeichnet mit Great Taste 2025 (London) und WineHunter Award Gold 2024 (Merano WineFestival)."
          },
          "a": {
            "it": "Con pecorino stagionato o gorgonzola dolce, su fette biscottate e pane tostato, in crostate, biscotti farciti e dolci al cucchiaio. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "With aged pecorino or mild gorgonzola, on rusks and toast, in tarts, filled biscuits and spoon desserts. Once opened keep refrigerated and eat within 7 days.",
            "de": "Zu gereiftem Pecorino oder mildem Gorgonzola, auf Zwieback und Toast, in Crostate, gefüllten Keksen und Löffeldesserts. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-2": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Fragole raccolte a mano da una piccola realtà agricola italiana: 130 g di frutta per 100 g di confettura. Ricetta: 74% fragole, 25% zucchero di canna, 0,99% succo di limone, 0,01% vaniglia. Cotta sottovuoto a bassa temperatura, senza pectine, addensanti, conservanti né coloranti. Rosso intenso, vellutata, dolce con acidità naturale.",
            "en": "Strawberries hand-picked by a small Italian farm: 130 g of fruit per 100 g of jam. Recipe: 74% strawberries, 25% cane sugar, 0.99% lemon juice, 0.01% vanilla. Cooked under vacuum at low temperature, with no pectin, thickeners, preservatives or colourings. Deep red, velvety, sweet with natural acidity.",
            "de": "Von Hand gepflückte Erdbeeren eines kleinen italienischen Betriebs: 130 g Frucht für 100 g Konfitüre. Rezept: 74% Erdbeeren, 25% Rohrzucker, 0,99% Zitronensaft, 0,01% Vanille. Bei niedriger Temperatur im Vakuum gekocht, ohne Pektin, Verdickungsmittel, Konservierungs- oder Farbstoffe. Tiefrot, samtig, süß mit natürlicher Säure."
          },
          "a": {
            "it": "Su pane tostato, fette biscottate, pancake e crêpes; in crostate, cheesecake e dolci al cucchiaio; con yogurt bianco, gelato alla crema e panna cotta. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "On toast, rusks, pancakes and crêpes; in tarts, cheesecakes and spoon desserts; with plain yoghurt, custard ice cream and panna cotta. Once opened keep refrigerated and eat within 7 days.",
            "de": "Auf Toast, Zwieback, Pancakes und Crêpes; in Crostate, Cheesecake und Löffeldesserts; zu Naturjoghurt, Vanilleeis und Panna cotta. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-3": {
          "c": [],
          "pr": "8,90 €",
          "d": {
            "it": "Mix di mirtilli, lamponi, more e ribes: il mirtillo dà profondità, il lampone freschezza, la mora corpo, il ribes una nota acidula. 130 g di frutta per 100 g di confettura (75% frutti di bosco, 25% zucchero di canna). Cotta sottovuoto a bassa temperatura, senza pectine, addensanti, conservanti né coloranti. Scura, ricca di pezzetti di frutta, dolce-acidula. Ingredienti: frutti di bosco (mirtilli, more, lamponi, ribes), zucchero di canna, succo di limone.",
            "en": "A mix of blueberries, raspberries, blackberries and redcurrants: blueberry gives depth, raspberry freshness, blackberry body and redcurrant a tart note. 130 g of fruit per 100 g of jam (75% berries, 25% cane sugar). Cooked under vacuum at low temperature, with no pectin, thickeners, preservatives or colourings. Dark, full of fruit pieces, sweet and tart. Ingredients: berries (blueberries, blackberries, raspberries, redcurrants), cane sugar, lemon juice.",
            "de": "Mischung aus Heidelbeeren, Himbeeren, Brombeeren und Johannisbeeren: Heidelbeere gibt Tiefe, Himbeere Frische, Brombeere Fülle, Johannisbeere eine säuerliche Note. 130 g Frucht für 100 g Konfitüre (75% Beeren, 25% Rohrzucker). Bei niedriger Temperatur im Vakuum gekocht, ohne Pektin, Verdickungsmittel, Konservierungs- oder Farbstoffe. Dunkel, mit vielen Fruchtstücken, süß-säuerlich. Zutaten: Waldbeeren (Heidelbeeren, Brombeeren, Himbeeren, Johannisbeeren), Rohrzucker, Zitronensaft."
          },
          "a": {
            "it": "Su pane caldo, fette biscottate e pancake; in crostate, cheesecake e tiramisù; con yogurt greco e formaggi freschi. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "On warm bread, rusks and pancakes; in tarts, cheesecakes and tiramisu; with Greek yoghurt and fresh cheeses. Once opened keep refrigerated and eat within 7 days.",
            "de": "Auf warmem Brot, Zwieback und Pancakes; in Crostate, Cheesecake und Tiramisu; zu griechischem Joghurt und Frischkäse. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-4": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Mele rosse italiane raccolte a mano al massimo della maturazione: 130 g di frutta per 100 g di confettura (75% mele, 25% zucchero di canna). La tenuta viene dalla pectina naturale della mela e dal tempo di cottura. Cotta sottovuoto a bassa temperatura, senza pectine, addensanti, conservanti né coloranti. Ambrata, vellutata, dolce e delicata. Ingredienti: mele rosse italiane, zucchero di canna, succo di limone.",
            "en": "Italian red apples hand-picked at full ripeness: 130 g of fruit per 100 g of jam (75% apples, 25% cane sugar). The set comes from the apple's natural pectin and the cooking time. Cooked under vacuum at low temperature, with no pectin, thickeners, preservatives or colourings. Amber, velvety, sweet and delicate. Ingredients: Italian red apples, cane sugar, lemon juice.",
            "de": "Von Hand vollreif geerntete italienische rote Äpfel: 130 g Frucht für 100 g Konfitüre (75% Äpfel, 25% Rohrzucker). Die Festigkeit entsteht durch das natürliche Pektin des Apfels und die Kochzeit. Bei niedriger Temperatur im Vakuum gekocht, ohne Pektin, Verdickungsmittel, Konservierungs- oder Farbstoffe. Bernsteinfarben, samtig, süß und zart. Zutaten: italienische rote Äpfel, Rohrzucker, Zitronensaft."
          },
          "a": {
            "it": "Su pane tostato, fette biscottate e pancake; in crostate, strudel e dolci autunnali; con formaggi stagionati e arrosti. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "On toast, rusks and pancakes; in tarts, strudel and autumn cakes; with aged cheeses and roasts. Once opened keep refrigerated and eat within 7 days.",
            "de": "Auf Toast, Zwieback und Pancakes; in Crostate, Strudel und Herbstgebäck; zu gereiftem Käse und Braten. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-5": {
          "c": [],
          "pr": "8,90 €",
          "d": {
            "it": "Mirtillo nero raccolto a giugno, quando colore e gusto sono pieni: una confettura centrata su un solo frutto, intensa e leggermente acidula. 130 g di frutta per 100 g di confettura. Cotta sottovuoto a bassa temperatura, senza pectine, addensanti, conservanti né coloranti. Scura e vellutata. Premio WineHunter Rosso 2024 (Merano WineFestival). Ingredienti: mirtilli neri, zucchero di canna, succo di limone.",
            "en": "Black blueberries picked in June, when colour and flavour are at their fullest: a single-fruit jam, intense and slightly tart. 130 g of fruit per 100 g of jam. Cooked under vacuum at low temperature, with no pectin, thickeners, preservatives or colourings. Dark and velvety. WineHunter Rosso 2024 award (Merano WineFestival). Ingredients: black blueberries, cane sugar, lemon juice.",
            "de": "Im Juni geerntete Heidelbeeren, wenn Farbe und Geschmack am vollsten sind: eine sortenreine, intensive und leicht säuerliche Konfitüre. 130 g Frucht für 100 g Konfitüre. Bei niedriger Temperatur im Vakuum gekocht, ohne Pektin, Verdickungsmittel, Konservierungs- oder Farbstoffe. Dunkel und samtig. Auszeichnung WineHunter Rosso 2024 (Merano WineFestival). Zutaten: Heidelbeeren, Rohrzucker, Zitronensaft."
          },
          "a": {
            "it": "Su pane tostato con burro, nello yogurt bianco, sulla ricotta fresca, in crostate e cheesecake; nei taglieri con formaggi freschi e cremosi. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "On buttered toast, in plain yoghurt, on fresh ricotta, in tarts and cheesecakes; on cheese boards with fresh, creamy cheeses. Once opened keep refrigerated and eat within 7 days.",
            "de": "Auf Butterbrot, in Naturjoghurt, auf frischem Ricotta, in Crostate und Cheesecake; auf Käseplatten zu frischen, cremigen Käsen. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-6": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Solo arance Washington, dolci, succose e senza semi, lavorate con succo e buccia: 66 g di frutta per 100 g di marmellata, con zucchero di canna e una punta di succo di limone. La struttura viene dalla pectina naturale degli agrumi; la cottura sottovuoto a bassa temperatura preserva gli oli essenziali della buccia. Arancio brillante, con pezzetti di buccia, gusto pieno ma mai amaro. Ingredienti: arance Washington (succo e buccia), zucchero di canna, succo di limone.",
            "en": "Washington oranges only, sweet, juicy and seedless, used with juice and peel: 66 g of fruit per 100 g of marmalade, with cane sugar and a touch of lemon juice. The set comes from the citrus's natural pectin; low-temperature vacuum cooking preserves the essential oils of the peel. Bright orange with pieces of peel, full-flavoured but never bitter. Ingredients: Washington oranges (juice and peel), cane sugar, lemon juice.",
            "de": "Nur Washington-Orangen, süß, saftig und kernlos, mit Saft und Schale verarbeitet: 66 g Frucht für 100 g Marmelade, mit Rohrzucker und etwas Zitronensaft. Die Festigkeit entsteht durch das natürliche Pektin der Zitrusfrüchte; das Vakuumkochen bei niedriger Temperatur bewahrt die ätherischen Öle der Schale. Leuchtend orange mit Schalenstückchen, vollmundig und nie bitter. Zutaten: Washington-Orangen (Saft und Schale), Rohrzucker, Zitronensaft."
          },
          "a": {
            "it": "Su pane tostato, brioche e fette biscottate; in crostate, ciambelloni e biscotti; con formaggi stagionati a pasta dura. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "On toast, brioche and rusks; in tarts, ring cakes and biscuits; with aged hard cheeses. Once opened keep refrigerated and eat within 7 days.",
            "de": "Auf Toast, Brioche und Zwieback; in Crostate, Napfkuchen und Keksen; zu gereiftem Hartkäse. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-7": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Arance Washington e limoni dei loro agrumeti, raccolti a piena maturazione: l'arancia porta dolcezza e corpo, il limone una nota viva e fresca. Succo e buccia di entrambi, solo zucchero di canna: 86 g di frutta per 100 g di marmellata, gusto dolce-acidulo. Cottura sottovuoto a bassa temperatura, senza pectine, addensanti, conservanti né coloranti. Premio WineHunter Award Gold 2026 (Merano WineFestival). Ingredienti: arance (succo e buccia), limoni (succo e buccia), zucchero di canna.",
            "en": "Washington oranges and lemons from their own groves, picked fully ripe: orange brings sweetness and body, lemon a lively, fresh note. Juice and peel of both, cane sugar only: 86 g of fruit per 100 g of marmalade, sweet and tart. Low-temperature vacuum cooking, with no pectin, thickeners, preservatives or colourings. WineHunter Award Gold 2026 (Merano WineFestival). Ingredients: oranges (juice and peel), lemons (juice and peel), cane sugar.",
            "de": "Washington-Orangen und Zitronen aus den eigenen Hainen, vollreif geerntet: die Orange bringt Süße und Fülle, die Zitrone eine lebendige, frische Note. Saft und Schale beider Früchte, nur Rohrzucker: 86 g Frucht für 100 g Marmelade, süß-säuerlich. Vakuumgekocht bei niedriger Temperatur, ohne Pektin, Verdickungs-, Konservierungs- oder Farbstoffe. WineHunter Award Gold 2026 (Merano WineFestival). Zutaten: Orangen (Saft und Schale), Zitronen (Saft und Schale), Rohrzucker."
          },
          "a": {
            "it": "Su pane tostato, brioche e fette biscottate; in crostate e dolci della tradizione; con formaggi stagionati. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "On toast, brioche and rusks; in tarts and traditional cakes; with aged cheeses. Once opened keep refrigerated and eat within 7 days.",
            "de": "Auf Toast, Brioche und Zwieback; in Crostate und traditionellem Gebäck; zu gereiftem Käse. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-8": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Limoni di una varietà locale coltivati nei loro agrumeti, scelti per gli oli essenziali della buccia: freschezza piena e vibrante, senza note amare dure. Limone intero (succo e buccia) e solo zucchero di canna: 86 g di frutta per 100 g di marmellata. La cottura lenta sottovuoto preserva gli oli essenziali. Premio WineHunter Award Gold 2024 (Merano WineFestival). Ingredienti: limoni (succo e buccia), zucchero di canna.",
            "en": "Lemons of a local variety grown in their own groves, chosen for the essential oils in the peel: full, vibrant freshness with no harsh bitterness. Whole lemon (juice and peel) and cane sugar only: 86 g of fruit per 100 g of marmalade. Slow vacuum cooking preserves the essential oils. WineHunter Award Gold 2024 (Merano WineFestival). Ingredients: lemons (juice and peel), cane sugar.",
            "de": "Zitronen einer lokalen Sorte aus den eigenen Hainen, ausgewählt wegen der ätherischen Öle der Schale: volle, lebendige Frische ohne harte Bitterkeit. Ganze Zitrone (Saft und Schale) und nur Rohrzucker: 86 g Frucht für 100 g Marmelade. Langsames Vakuumkochen bewahrt die ätherischen Öle. WineHunter Award Gold 2024 (Merano WineFestival). Zutaten: Zitronen (Saft und Schale), Rohrzucker."
          },
          "a": {
            "it": "Su pane tostato e brioche, in crostate e biscotti farciti, con formaggi erborinati o ricotta fresca. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "On toast and brioche, in tarts and filled biscuits, with blue cheeses or fresh ricotta. Once opened keep refrigerated and eat within 7 days.",
            "de": "Auf Toast und Brioche, in Crostate und gefüllten Keksen, zu Blauschimmelkäse oder frischem Ricotta. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-9": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Melanzane mature lavorate a mano e conservate in olio extravergine di oliva con aglio, aceto di vino bianco e, al posto del peperoncino, il peperone crusco essiccato, che dà una nota aromatica e dolce, meno pungente. Peso sgocciolato 190 g. Niente conservanti, coloranti né esaltatori di sapidità. Premio WineHunter Rosso 2026 (Merano WineFestival). Ingredienti: melanzane, olio extravergine di oliva, peperone crusco essiccato, aglio, aceto di vino bianco (contiene solfiti), sale. Per ristorazione e negozi c'è il formato professionale da 580 g.",
            "en": "Ripe aubergines prepared by hand and preserved in extra virgin olive oil with garlic, white wine vinegar and, instead of chilli, dried crusco pepper, which gives a sweeter, more aromatic and less pungent note. Drained weight 190 g. No preservatives, colourings or flavour enhancers. WineHunter Rosso 2026 award (Merano WineFestival). Ingredients: aubergines, extra virgin olive oil, dried crusco pepper, garlic, white wine vinegar (contains sulphites), salt. A 580 g professional format is available for food service and shops.",
            "de": "Reife Auberginen, von Hand verarbeitet und in nativem Olivenöl extra eingelegt, mit Knoblauch, Weißweinessig und statt Chili getrocknetem Peperone crusco, der eine süßere, aromatische und weniger scharfe Note gibt. Abtropfgewicht 190 g. Ohne Konservierungs-, Farbstoffe und Geschmacksverstärker. Auszeichnung WineHunter Rosso 2026 (Merano WineFestival). Zutaten: Auberginen, natives Olivenöl extra, getrockneter Peperone crusco, Knoblauch, Weißweinessig (enthält Sulfite), Salz. Für Gastronomie und Handel gibt es ein 580-g-Profiformat."
          },
          "a": {
            "it": "Come antipasto con salumi e formaggi, sulle bruschette, con la mozzarella di bufala. Dopo l'apertura in frigorifero, sempre coperti dal loro olio, entro 7 giorni. L'olio del vasetto è un condimento da usare.",
            "en": "As a starter with cured meats and cheeses, on bruschetta, with buffalo mozzarella. Once opened keep refrigerated, covered by their oil, and eat within 7 days. The oil in the jar makes a good dressing.",
            "de": "Als Vorspeise zu Wurst und Käse, auf Bruschetta, zu Büffelmozzarella. Nach dem Öffnen gekühlt und mit Öl bedeckt lagern, innerhalb von 7 Tagen verzehren. Das Öl im Glas eignet sich als Würze."
          }
        },
        "V-19-10": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Peperoni rossi maturi lavorati a mano e conservati in olio extravergine di oliva con aglio, pepe nero, origano e una nota di aceto di vino bianco. Sette ingredienti, niente conservanti, coloranti né esaltatori di sapidità. Ingredienti: peperoni, olio extravergine di oliva, aceto di vino bianco (contiene solfiti), aglio, pepe nero, origano, sale.",
            "en": "Ripe red peppers prepared by hand and preserved in extra virgin olive oil with garlic, black pepper, oregano and a touch of white wine vinegar. Seven ingredients, no preservatives, colourings or flavour enhancers. Ingredients: peppers, extra virgin olive oil, white wine vinegar (contains sulphites), garlic, black pepper, oregano, salt.",
            "de": "Reife rote Paprika, von Hand verarbeitet und in nativem Olivenöl extra eingelegt, mit Knoblauch, schwarzem Pfeffer, Oregano und etwas Weißweinessig. Sieben Zutaten, ohne Konservierungs-, Farbstoffe und Geschmacksverstärker. Zutaten: Paprika, natives Olivenöl extra, Weißweinessig (enthält Sulfite), Knoblauch, schwarzer Pfeffer, Oregano, Salz."
          },
          "a": {
            "it": "Su crostini di pane casereccio, in insalate di riso, pasta fredda e friselle, con caciocavallo o carni bianche grigliate. Dopo l'apertura in frigorifero, sempre coperti dal loro olio, entro 7 giorni. L'olio del vasetto è un condimento da usare.",
            "en": "On rustic bread crostini, in rice salads, cold pasta and friselle, with caciocavallo or grilled white meat. Once opened keep refrigerated, covered by their oil, and eat within 7 days. The oil in the jar makes a good dressing.",
            "de": "Auf Crostini aus Landbrot, in Reissalat, kalter Pasta und Friselle, zu Caciocavallo oder gegrilltem hellem Fleisch. Nach dem Öffnen gekühlt und mit Öl bedeckt lagern, innerhalb von 7 Tagen verzehren. Das Öl im Glas eignet sich als Würze."
          }
        },
        "V-19-11": {
          "c": [],
          "pr": "7,90 €",
          "d": {
            "it": "Pomodori raccolti maturi ed essiccati al sole su graticci di legno, senza forni né ventilatori, poi lasciati interi in olio extravergine di oliva con capperi, aglio, aceto di vino bianco e sale. Peso sgocciolato 150 g. Sei ingredienti, niente conservanti, coloranti né esaltatori di sapidità. Ingredienti: pomodori secchi, olio extravergine di oliva, aceto di vino bianco (contiene solfiti), capperi, aglio, sale. Per ristorazione e negozi c'è il formato professionale da 580 g.",
            "en": "Tomatoes picked ripe and sun-dried on wooden racks, with no ovens or fans, then kept whole in extra virgin olive oil with capers, garlic, white wine vinegar and salt. Drained weight 150 g. Six ingredients, no preservatives, colourings or flavour enhancers. Ingredients: sun-dried tomatoes, extra virgin olive oil, white wine vinegar (contains sulphites), capers, garlic, salt. A 580 g professional format is available for food service and shops.",
            "de": "Reif geerntete, auf Holzgestellen sonnengetrocknete Tomaten, ohne Ofen oder Gebläse, ganz in nativem Olivenöl extra eingelegt, mit Kapern, Knoblauch, Weißweinessig und Salz. Abtropfgewicht 150 g. Sechs Zutaten, ohne Konservierungs-, Farbstoffe und Geschmacksverstärker. Zutaten: getrocknete Tomaten, natives Olivenöl extra, Weißweinessig (enthält Sulfite), Kapern, Knoblauch, Salz. Für Gastronomie und Handel gibt es ein 580-g-Profiformat."
          },
          "a": {
            "it": "Sul tagliere con salumi e formaggi stagionati, per condire pasta e risotti, con carni grigliate, su bruschette e focacce. Dopo l'apertura in frigorifero, sempre coperti dal loro olio, entro 7 giorni. L'olio del vasetto è un condimento da usare.",
            "en": "On a board with cured meats and aged cheeses, to dress pasta and risotto, with grilled meat, on bruschetta and focaccia. Once opened keep refrigerated, covered by their oil, and eat within 7 days. The oil in the jar makes a good dressing.",
            "de": "Auf der Platte zu Wurst und gereiftem Käse, für Pasta und Risotto, zu gegrilltem Fleisch, auf Bruschetta und Focaccia. Nach dem Öffnen gekühlt und mit Öl bedeckt lagern, innerhalb von 7 Tagen verzehren. Das Öl im Glas eignet sich als Würze."
          }
        },
        "V-19-12": {
          "c": [],
          "pr": "8,69 €",
          "d": {
            "it": "Crema spalmabile di pomodori essiccati al sole su graticci di legno, reidratati e lavorati a freddo con olio extravergine di oliva, aceto di vino bianco, aglio fresco e capperi, in piccoli lotti. Consistenza morbida con pezzi di pomodoro visibili. Niente conservanti, coloranti né esaltatori di sapidità. Premio WineHunter Award Gold 2024 (Merano WineFestival). Ingredienti: pomodori secchi, olio extravergine di oliva, aceto di vino bianco (contiene solfiti), aglio, capperi, sale.",
            "en": "A spread of tomatoes sun-dried on wooden racks, rehydrated and cold-processed with extra virgin olive oil, white wine vinegar, fresh garlic and capers, in small batches. Soft texture with visible tomato pieces. No preservatives, colourings or flavour enhancers. WineHunter Award Gold 2024 (Merano WineFestival). Ingredients: sun-dried tomatoes, extra virgin olive oil, white wine vinegar (contains sulphites), garlic, capers, salt.",
            "de": "Aufstrich aus auf Holzgestellen sonnengetrockneten Tomaten, rehydriert und kalt verarbeitet mit nativem Olivenöl extra, Weißweinessig, frischem Knoblauch und Kapern, in kleinen Chargen. Weiche Konsistenz mit sichtbaren Tomatenstücken. Ohne Konservierungs-, Farbstoffe und Geschmacksverstärker. WineHunter Award Gold 2024 (Merano WineFestival). Zutaten: getrocknete Tomaten, natives Olivenöl extra, Weißweinessig (enthält Sulfite), Knoblauch, Kapern, Salz."
          },
          "a": {
            "it": "Su crostini e bruschette, per condire pasta e risotti, con carni bianche e grigliate, sulla pizza bianca, con formaggi freschi e stagionati. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "On crostini and bruschetta, to dress pasta and risotto, with white and grilled meat, on white pizza, with fresh and aged cheeses. Once opened keep refrigerated and eat within 7 days.",
            "de": "Auf Crostini und Bruschetta, für Pasta und Risotto, zu hellem und gegrilltem Fleisch, auf Pizza bianca, zu frischem und gereiftem Käse. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-13": {
          "c": [],
          "pr": "6,70 €",
          "d": {
            "it": "Zucca tonda napoletana, varietà tradizionale del Sud raccolta a fine estate, con il 16% di olio extravergine di oliva prodotto dai loro ulivi, cipolla dorata, una punta di succo di limone e sale. Cottura lenta in piccoli lotti, senza conservanti né addensanti: la densità viene dalla zucca stessa. Premio WineHunter Rosso 2024 (Merano WineFestival). Ingredienti: zucca tonda napoletana (75%), olio extravergine di oliva (16%), cipolla, succo di limone, sale.",
            "en": "Neapolitan round pumpkin, a traditional southern variety harvested in late summer, with 16% extra virgin olive oil from their own olive trees, golden onion, a touch of lemon juice and salt. Slow-cooked in small batches, with no preservatives or thickeners: the body comes from the pumpkin itself. WineHunter Rosso 2024 award (Merano WineFestival). Ingredients: Neapolitan round pumpkin (75%), extra virgin olive oil (16%), onion, lemon juice, salt.",
            "de": "Neapolitanischer Rundkürbis, eine traditionelle süditalienische Sorte aus der Spätsommerernte, mit 16% nativem Olivenöl extra aus den eigenen Olivenbäumen, Zwiebel, etwas Zitronensaft und Salz. Langsam in kleinen Chargen gekocht, ohne Konservierungs- und Verdickungsmittel: die Festigkeit kommt vom Kürbis selbst. Auszeichnung WineHunter Rosso 2024 (Merano WineFestival). Zutaten: neapolitanischer Rundkürbis (75%), natives Olivenöl extra (16%), Zwiebel, Zitronensaft, Salz."
          },
          "a": {
            "it": "Su crostini di pane casereccio, per condire pasta corta e risotti, in vellutate e minestre, come base per la pizza bianca. Dopo l'apertura in frigorifero, da consumare entro 7 giorni.",
            "en": "On rustic bread crostini, to dress short pasta and risotto, in soups and broths, as a base for white pizza. Once opened keep refrigerated and eat within 7 days.",
            "de": "Auf Crostini aus Landbrot, für kurze Pasta und Risotto, in Cremesuppen und Eintöpfen, als Basis für Pizza bianca. Nach dem Öffnen gekühlt lagern und innerhalb von 7 Tagen verzehren."
          }
        },
        "V-19-14": {
          "c": [],
          "pr": "4,00 €",
          "d": {
            "it": "Il classico della domenica: passata di pomodoro italiana, olio extravergine di oliva, basilico fresco, cipolla fresca e sale integrale. Cotto sottovuoto a bassa temperatura, senza il calore aggressivo della pastorizzazione tradizionale: il pomodoro non si scurisce e l'olio extravergine mantiene profumo. Niente conservanti, coloranti né esaltatori di sapidità. Gusto delicato e rotondo. Premio WineHunter Award Gold 2026 (Merano WineFestival). Ingredienti: passata di pomodoro (94%), olio extravergine di oliva (5%), basilico fresco (0,2%), cipolla fresca, sale integrale. Per 100 g: 91 kcal, grassi 6,8 g, carboidrati 5,3 g, sale 1,3 g.",
            "en": "The Sunday classic: Italian tomato passata, extra virgin olive oil, fresh basil, fresh onion and wholegrain salt. Cooked under vacuum at low temperature, without the harsh heat of traditional pasteurisation: the tomato keeps its colour and the extra virgin olive oil its aroma. No preservatives, colourings or flavour enhancers. Delicate, rounded flavour. WineHunter Award Gold 2026 (Merano WineFestival). Ingredients: tomato passata (94%), extra virgin olive oil (5%), fresh basil (0.2%), fresh onion, wholegrain salt. Per 100 g: 91 kcal, fat 6.8 g, carbohydrates 5.3 g, salt 1.3 g.",
            "de": "Der Sonntagsklassiker: italienische Tomatenpassata, natives Olivenöl extra, frisches Basilikum, frische Zwiebel und Vollsalz. Im Vakuum bei niedriger Temperatur gekocht, ohne die starke Hitze herkömmlicher Pasteurisierung: die Tomate bleibt hell und das Olivenöl behält sein Aroma. Ohne Konservierungs-, Farbstoffe und Geschmacksverstärker. Zarter, runder Geschmack. WineHunter Award Gold 2026 (Merano WineFestival). Zutaten: Tomatenpassata (94%), natives Olivenöl extra (5%), frisches Basilikum (0,2%), frische Zwiebel, Vollsalz. Pro 100 g: 91 kcal, Fett 6,8 g, Kohlenhydrate 5,3 g, Salz 1,3 g."
          },
          "a": {
            "it": "Su spaghetti e pasta corta, per la pizza margherita fatta in casa; finire con basilico fresco e un filo d'olio a crudo. Dopo l'apertura in frigorifero, da consumare entro 4-5 giorni.",
            "en": "On spaghetti and short pasta, for homemade pizza margherita; finish with fresh basil and a drizzle of raw oil. Once opened keep refrigerated and use within 4-5 days.",
            "de": "Zu Spaghetti und kurzer Pasta, für hausgemachte Pizza Margherita; mit frischem Basilikum und einem Schuss Öl vollenden. Nach dem Öffnen gekühlt lagern und innerhalb von 4-5 Tagen verbrauchen."
          }
        },
        "V-19-15": {
          "c": [],
          "pr": "4,00 €",
          "d": {
            "it": "La ricetta di casa del Cilento in cinque ingredienti: pomodori pelati in succo, olio extravergine di oliva, aglio, sale e origano. Cotto sottovuoto a bassa temperatura, senza il calore aggressivo della pastorizzazione tradizionale: il pomodoro non si scurisce e l'olio extravergine mantiene profumo. Niente conservanti, coloranti né esaltatori di sapidità. Gli oli essenziali dell'origano restano vivi; il sugo è denso e rotondo. Ingredienti: pomodori pelati italiani in succo (93%), olio extravergine di oliva, aglio, sale, origano.",
            "en": "The Cilento home recipe in five ingredients: peeled tomatoes in juice, extra virgin olive oil, garlic, salt and oregano. Cooked under vacuum at low temperature, without the harsh heat of traditional pasteurisation: the tomato keeps its colour and the extra virgin olive oil its aroma. No preservatives, colourings or flavour enhancers. The oregano keeps its essential oils; the sauce is thick and rounded. Ingredients: Italian peeled tomatoes in juice (93%), extra virgin olive oil, garlic, salt, oregano.",
            "de": "Das Hausrezept aus dem Cilento mit fünf Zutaten: geschälte Tomaten im Saft, natives Olivenöl extra, Knoblauch, Salz und Oregano. Im Vakuum bei niedriger Temperatur gekocht, ohne die starke Hitze herkömmlicher Pasteurisierung: die Tomate bleibt hell und das Olivenöl behält sein Aroma. Ohne Konservierungs-, Farbstoffe und Geschmacksverstärker. Die ätherischen Öle des Oreganos bleiben erhalten; die Sauce ist dick und rund. Zutaten: geschälte italienische Tomaten im Saft (93%), natives Olivenöl extra, Knoblauch, Salz, Oregano."
          },
          "a": {
            "it": "Su spaghetti, penne e pasta corta, come base per la pizza tradizionale; con cacioricotta fresca grattugiata. Dopo l'apertura in frigorifero, da consumare entro 4-5 giorni.",
            "en": "On spaghetti, penne and short pasta, as a base for traditional pizza; with freshly grated cacioricotta. Once opened keep refrigerated and use within 4-5 days.",
            "de": "Zu Spaghetti, Penne und kurzer Pasta, als Basis für traditionelle Pizza; mit frisch geriebenem Cacioricotta. Nach dem Öffnen gekühlt lagern und innerhalb von 4-5 Tagen verbrauchen."
          }
        },
        "V-19-16": {
          "c": [],
          "pr": "4,00 €",
          "d": {
            "it": "La versione piccante del sugo cilentano: stessi ingredienti e stessa lavorazione, con il peperoncino al posto dell'origano. Una piccantezza bilanciata che non copre la dolcezza del pomodoro. Cotto sottovuoto a bassa temperatura, senza il calore aggressivo della pastorizzazione tradizionale: il pomodoro non si scurisce e l'olio extravergine mantiene profumo. Niente conservanti, coloranti né esaltatori di sapidità. Ingredienti: pomodori pelati italiani in succo (93%), olio extravergine di oliva, aglio, sale, peperoncino.",
            "en": "The spicy version of the Cilento sauce: same ingredients and same method, with chilli instead of oregano. A balanced heat that does not mask the sweetness of the tomato. Cooked under vacuum at low temperature, without the harsh heat of traditional pasteurisation: the tomato keeps its colour and the extra virgin olive oil its aroma. No preservatives, colourings or flavour enhancers. Ingredients: Italian peeled tomatoes in juice (93%), extra virgin olive oil, garlic, salt, chilli.",
            "de": "Die scharfe Variante der Cilento-Sauce: dieselben Zutaten und dieselbe Verarbeitung, mit Chili statt Oregano. Eine ausgewogene Schärfe, die die Süße der Tomate nicht überdeckt. Im Vakuum bei niedriger Temperatur gekocht, ohne die starke Hitze herkömmlicher Pasteurisierung: die Tomate bleibt hell und das Olivenöl behält sein Aroma. Ohne Konservierungs-, Farbstoffe und Geschmacksverstärker. Zutaten: geschälte italienische Tomaten im Saft (93%), natives Olivenöl extra, Knoblauch, Salz, Chili."
          },
          "a": {
            "it": "Per penne all'arrabbiata, spaghetti e rigatoni, come base per pizza piccante e focaccia, sulle bruschette. Dopo l'apertura in frigorifero, da consumare entro 4-5 giorni.",
            "en": "For penne all'arrabbiata, spaghetti and rigatoni, as a base for spicy pizza and focaccia, on bruschetta. Once opened keep refrigerated and use within 4-5 days.",
            "de": "Für Penne all'arrabbiata, Spaghetti und Rigatoni, als Basis für scharfe Pizza und Focaccia, auf Bruschetta. Nach dem Öffnen gekühlt lagern und innerhalb von 4-5 Tagen verbrauchen."
          }
        },
        "V-19-17": {
          "c": [],
          "pr": "4,00 €",
          "d": {
            "it": "Passata di pomodoro e pomodori essiccati per un sugo pieno e deciso, con la nota dolce-sapida del pomodoro secco in primo piano. Cotto sottovuoto a bassa temperatura, senza il calore aggressivo della pastorizzazione tradizionale: il pomodoro non si scurisce e l'olio extravergine mantiene profumo. Niente conservanti, coloranti né esaltatori di sapidità. Ingredienti: passata di pomodoro (82%), pomodori essiccati (13%), olio extravergine di oliva (4%), aglio, sale integrale; pomodoro di origine italiana. Per 100 g: 94 kcal, grassi 4,6 g, carboidrati 11,1 g, fibre 2,6 g, sale 1,6 g.",
            "en": "Tomato passata and sun-dried tomatoes for a full, bold sauce, with the sweet and savoury note of dried tomato to the fore. Cooked under vacuum at low temperature, without the harsh heat of traditional pasteurisation: the tomato keeps its colour and the extra virgin olive oil its aroma. No preservatives, colourings or flavour enhancers. Ingredients: tomato passata (82%), dried tomatoes (13%), extra virgin olive oil (4%), garlic, wholegrain salt; tomatoes of Italian origin. Per 100 g: 94 kcal, fat 4.6 g, carbohydrates 11.1 g, fibre 2.6 g, salt 1.6 g.",
            "de": "Tomatenpassata und getrocknete Tomaten für eine volle, kräftige Sauce, mit der süß-würzigen Note der Trockentomate im Vordergrund. Im Vakuum bei niedriger Temperatur gekocht, ohne die starke Hitze herkömmlicher Pasteurisierung: die Tomate bleibt hell und das Olivenöl behält sein Aroma. Ohne Konservierungs-, Farbstoffe und Geschmacksverstärker. Zutaten: Tomatenpassata (82%), getrocknete Tomaten (13%), natives Olivenöl extra (4%), Knoblauch, Vollsalz; Tomaten italienischer Herkunft. Pro 100 g: 94 kcal, Fett 4,6 g, Kohlenhydrate 11,1 g, Ballaststoffe 2,6 g, Salz 1,6 g."
          },
          "a": {
            "it": "Su spaghetti, penne e pasta corta, su bruschette e pizze gourmet, come base per piatti al forno; con ricotta salata o cacioricotta. Dopo l'apertura in frigorifero, da consumare entro 4-5 giorni.",
            "en": "On spaghetti, penne and short pasta, on bruschetta and gourmet pizza, as a base for baked dishes; with ricotta salata or cacioricotta. Once opened keep refrigerated and use within 4-5 days.",
            "de": "Zu Spaghetti, Penne und kurzer Pasta, auf Bruschetta und Gourmet-Pizza, als Basis für Ofengerichte; mit Ricotta salata oder Cacioricotta. Nach dem Öffnen gekühlt lagern und innerhalb von 4-5 Tagen verbrauchen."
          }
        },
        "V-19-18": {
          "c": [],
          "pr": "34,90 €",
          "d": {
            "it": "Un primo assaggio di Minnelea, dolce e salato: 2 Sugo cilentano, 1 Paté di pomodori secchi, 1 Confettura di fichi, 1 Confettura di frutti di bosco, 1 Confettura di mirtillo nero. Tre confetture da 212 g, un paté da 200 g e due sughi da 270 g, confezione regalo inclusa.",
            "en": "A first taste of Minnelea, sweet and savoury: 2 Cilento sauce, 1 sun-dried tomato pâté, 1 fig jam, 1 mixed berry jam, 1 black blueberry jam. Three 212 g jams, one 200 g pâté and two 270 g sauces, gift box included.",
            "de": "Ein erster Eindruck von Minnelea, süß und herzhaft: 2 Sugo cilentano, 1 Pastete aus getrockneten Tomaten, 1 Feigenkonfitüre, 1 Waldbeerenkonfitüre, 1 Heidelbeerkonfitüre. Drei Konfitüren à 212 g, eine Pastete à 200 g und zwei Saucen à 270 g, mit Geschenkbox."
          },
          "a": {
            "it": "Confezione regalo; adatto anche a regali aziendali e cesti natalizi. Ingredienti e conservazione sulle etichette dei singoli vasetti.",
            "en": "Gift packaging; also suited to corporate gifts and Christmas hampers. Ingredients and storage on each jar's label.",
            "de": "Geschenkverpackung; auch für Firmengeschenke und Weihnachtskörbe geeignet. Zutaten und Lagerung auf dem Etikett jedes Glases."
          }
        },
        "V-19-19": {
          "c": [],
          "pr": "40,00 €",
          "d": {
            "it": "Cinque specialità salate e una confettura per bruschette, antipasti e taglieri di formaggi: Paté di pomodori secchi, Pomodori secchi sott'olio, Crema di zucca, Peperoni sott'olio, Melanzane sott'olio (200 g) e Confettura di fichi (212 g). Scatole regalo con paglia incluse.",
            "en": "Five savoury specialities and one jam for bruschetta, starters and cheese boards: sun-dried tomato pâté, sun-dried tomatoes in oil, pumpkin cream, peppers in oil, aubergines in oil (200 g) and fig jam (212 g). Gift boxes with straw included.",
            "de": "Fünf herzhafte Spezialitäten und eine Konfitüre für Bruschetta, Vorspeisen und Käseplatten: Pastete aus getrockneten Tomaten, getrocknete Tomaten in Öl, Kürbiscreme, Paprika in Öl, Auberginen in Öl (200 g) und Feigenkonfitüre (212 g). Geschenkschachteln mit Stroh inklusive."
          },
          "a": {
            "it": "Confezione regalo; adatto anche a regali aziendali e cesti natalizi. Ingredienti e conservazione sulle etichette dei singoli vasetti.",
            "en": "Gift packaging; also suited to corporate gifts and Christmas hampers. Ingredients and storage on each jar's label.",
            "de": "Geschenkverpackung; auch für Firmengeschenke und Weihnachtskörbe geeignet. Zutaten und Lagerung auf dem Etikett jedes Glases."
          }
        },
        "V-19-20": {
          "c": [],
          "pr": "6 vasetti 49,40 € · 12 vasetti 88,92 €",
          "d": {
            "it": "Un vasetto da 212 g per ognuno dei sei gusti dolci (due per gusto nel kit da 12): confettura di fichi (Great Taste 2025, WineHunter Gold 2024), albicocche (WineHunter Rosso 2026), fragole, mirtillo nero (WineHunter Rosso 2024), frutti di bosco e marmellata di arance. Frutta cotta sottovuoto sotto i 60 °C con zucchero di canna e succo di limone, senza pectine né addensanti.",
            "en": "One 212 g jar of each of the six sweet flavours (two of each in the 12-jar kit): fig jam (Great Taste 2025, WineHunter Gold 2024), apricot (WineHunter Rosso 2026), strawberry, black blueberry (WineHunter Rosso 2024), mixed berry and orange marmalade. Fruit vacuum-cooked below 60 °C with cane sugar and lemon juice, with no pectin or thickeners.",
            "de": "Je ein Glas à 212 g der sechs süßen Sorten (im 12er-Kit je zwei): Feigenkonfitüre (Great Taste 2025, WineHunter Gold 2024), Aprikose (WineHunter Rosso 2026), Erdbeere, Heidelbeere (WineHunter Rosso 2024), Waldbeeren und Orangenmarmelade. Früchte unter 60 °C im Vakuum mit Rohrzucker und Zitronensaft gekocht, ohne Pektin und Verdickungsmittel."
          },
          "a": {
            "it": "Confezione regalo; adatto anche a regali aziendali e cesti natalizi. Ingredienti e conservazione sulle etichette dei singoli vasetti.",
            "en": "Gift packaging; also suited to corporate gifts and Christmas hampers. Ingredients and storage on each jar's label.",
            "de": "Geschenkverpackung; auch für Firmengeschenke und Weihnachtskörbe geeignet. Zutaten und Lagerung auf dem Etikett jedes Glases."
          }
        },
        "V-19-21": {
          "c": [],
          "pr": "6 vasetti 39,40 € · 12 vasetti 70,02 €",
          "d": {
            "it": "Kit da 6: confettura di fichi, di albicocche e di mirtillo nero (212 g), crema di zucca (200 g), Sugo al basilico e Sugo cilentano (270 g). Kit da 12: 2 confetture di fichi, 2 di albicocche, 1 di fragole, 1 di mirtillo nero, 2 creme di zucca, 2 Sugo al basilico, 1 Sugo cilentano e 1 Sugo ai pomodori secchi. Contiene vasetti premiati Great Taste e WineHunter.",
            "en": "6-jar kit: fig, apricot and black blueberry jam (212 g), pumpkin cream (200 g), basil sauce and Cilento sauce (270 g). 12-jar kit: 2 fig jams, 2 apricot, 1 strawberry, 1 black blueberry, 2 pumpkin creams, 2 basil sauces, 1 Cilento sauce and 1 sun-dried tomato sauce. Includes Great Taste and WineHunter award-winning jars.",
            "de": "6er-Kit: Feigen-, Aprikosen- und Heidelbeerkonfitüre (212 g), Kürbiscreme (200 g), Basilikumsauce und Sugo cilentano (270 g). 12er-Kit: 2 Feigen-, 2 Aprikosen-, 1 Erdbeer-, 1 Heidelbeerkonfitüre, 2 Kürbiscremes, 2 Basilikumsaucen, 1 Sugo cilentano und 1 Sauce mit getrockneten Tomaten. Enthält mit Great Taste und WineHunter ausgezeichnete Gläser."
          },
          "a": {
            "it": "Confezione regalo; adatto anche a regali aziendali e cesti natalizi. Ingredienti e conservazione sulle etichette dei singoli vasetti.",
            "en": "Gift packaging; also suited to corporate gifts and Christmas hampers. Ingredients and storage on each jar's label.",
            "de": "Geschenkverpackung; auch für Firmengeschenke und Weihnachtskörbe geeignet. Zutaten und Lagerung auf dem Etikett jedes Glases."
          }
        },
        "V-19-22": {
          "c": [],
          "pr": "6 vasetti 42,30 € · 12 vasetti 76,14 €",
          "d": {
            "it": "Kit da 6: crema di zucca, pomodori secchi sott'olio, peperoni sott'olio (200 g), Sugo al basilico (270 g), confettura di fichi e confettura di albicocche (212 g). Kit da 12: 2 creme di zucca, 2 pomodori secchi sott'olio, 2 peperoni sott'olio, 2 paté di pomodori secchi, 1 Sugo al basilico, 1 Sugo ai pomodori secchi, 1 confettura di fichi e 1 di albicocche. I sott'oli sono in olio extravergine di oliva e contengono solfiti (dall'aceto).",
            "en": "6-jar kit: pumpkin cream, sun-dried tomatoes in oil, peppers in oil (200 g), basil sauce (270 g), fig jam and apricot jam (212 g). 12-jar kit: 2 pumpkin creams, 2 sun-dried tomatoes in oil, 2 peppers in oil, 2 sun-dried tomato pâtés, 1 basil sauce, 1 sun-dried tomato sauce, 1 fig jam and 1 apricot jam. The preserves are in extra virgin olive oil and contain sulphites (from the vinegar).",
            "de": "6er-Kit: Kürbiscreme, getrocknete Tomaten in Öl, Paprika in Öl (200 g), Basilikumsauce (270 g), Feigen- und Aprikosenkonfitüre (212 g). 12er-Kit: 2 Kürbiscremes, 2 getrocknete Tomaten in Öl, 2 Paprika in Öl, 2 Tomatenpasteten, 1 Basilikumsauce, 1 Sauce mit getrockneten Tomaten, 1 Feigen- und 1 Aprikosenkonfitüre. Das Eingelegte ist in nativem Olivenöl extra und enthält Sulfite (aus dem Essig)."
          },
          "a": {
            "it": "Confezione regalo; adatto anche a regali aziendali e cesti natalizi. Ingredienti e conservazione sulle etichette dei singoli vasetti.",
            "en": "Gift packaging; also suited to corporate gifts and Christmas hampers. Ingredients and storage on each jar's label.",
            "de": "Geschenkverpackung; auch für Firmengeschenke und Weihnachtskörbe geeignet. Zutaten und Lagerung auf dem Etikett jedes Glases."
          }
        },
        "V-19-23": {
          "c": [],
          "pr": "6 vasetti 27,90 € · 12 vasetti 46,71 €",
          "d": {
            "it": "Kit da 6: 2 Sugo al basilico, 1 Sugo cilentano, 1 Sugo all'arrabbiata, 1 Sugo ai pomodori secchi (270 g) e 1 Paté di pomodori secchi (200 g). Kit da 12: 4 Sugo al basilico, 4 Sugo cilentano, 2 Sugo ai pomodori secchi, 1 Sugo all'arrabbiata e 1 Paté di pomodori secchi. Sugo al basilico WineHunter Gold 2026, paté WineHunter Gold 2024.",
            "en": "6-jar kit: 2 basil sauce, 1 Cilento sauce, 1 arrabbiata sauce, 1 sun-dried tomato sauce (270 g) and 1 sun-dried tomato pâté (200 g). 12-jar kit: 4 basil sauce, 4 Cilento sauce, 2 sun-dried tomato sauce, 1 arrabbiata sauce and 1 sun-dried tomato pâté. Basil sauce WineHunter Gold 2026, pâté WineHunter Gold 2024.",
            "de": "6er-Kit: 2 Basilikumsauce, 1 Sugo cilentano, 1 Arrabbiata, 1 Sauce mit getrockneten Tomaten (270 g) und 1 Tomatenpastete (200 g). 12er-Kit: 4 Basilikumsauce, 4 Sugo cilentano, 2 Sauce mit getrockneten Tomaten, 1 Arrabbiata und 1 Tomatenpastete. Basilikumsauce WineHunter Gold 2026, Pastete WineHunter Gold 2024."
          },
          "a": {
            "it": "Scaldare il sugo in padella e condire la pasta; il paté va su crostini o nella pasta.",
            "en": "Warm the sauce in a pan and toss with pasta; spread the pâté on crostini or stir it into pasta.",
            "de": "Sauce in der Pfanne erwärmen und mit Pasta vermengen; die Pastete auf Crostini streichen oder unter Pasta mischen."
          }
        },
        "V-19-24": {
          "c": [],
          "pr": "24,00 €",
          "d": {
            "it": "Tre gusti, sei vasetti da 270 g per la pasta di tutti i giorni: 3 Sugo cilentano, 2 Sugo al basilico, 1 Sugo ai pomodori secchi. Peso netto totale 1,62 kg, assortimento fisso.",
            "en": "Three flavours, six 270 g jars for everyday pasta: 3 Cilento sauce, 2 basil sauce, 1 sun-dried tomato sauce. Total net weight 1.62 kg, fixed assortment.",
            "de": "Drei Sorten, sechs Gläser à 270 g für die Pasta im Alltag: 3 Sugo cilentano, 2 Basilikumsauce, 1 Sauce mit getrockneten Tomaten. Nettogewicht 1,62 kg, feste Zusammenstellung."
          },
          "a": {
            "it": "Pasta pronta in dieci minuti: scaldare il sugo mentre cuoce la pasta. Conservazione sulle etichette dei singoli vasetti.",
            "en": "Pasta ready in ten minutes: heat the sauce while the pasta cooks. Storage on each jar's label.",
            "de": "Pasta in zehn Minuten: Sauce erwärmen, während die Pasta kocht. Lagerung auf dem Etikett jedes Glases."
          }
        },
        "V-19-25": {
          "c": [],
          "pr": "29,90 €",
          "d": {
            "it": "Tutto per i primi della tradizione italiana: 2 Sugo cilentano, 2 Sugo all'arrabbiata e 1 vasetto di Pomodori secchi sott'olio EVO da mantecare.",
            "en": "Everything for traditional Italian pasta dishes: 2 Cilento sauce, 2 arrabbiata sauce and 1 jar of sun-dried tomatoes in extra virgin olive oil to stir through.",
            "de": "Alles für traditionelle italienische Pastagerichte: 2 Sugo cilentano, 2 Arrabbiata und 1 Glas getrocknete Tomaten in nativem Olivenöl extra zum Unterrühren."
          },
          "a": {
            "it": "Confezione regalo; adatto anche a regali aziendali e cesti natalizi. Ingredienti e conservazione sulle etichette dei singoli vasetti.",
            "en": "Gift packaging; also suited to corporate gifts and Christmas hampers. Ingredients and storage on each jar's label.",
            "de": "Geschenkverpackung; auch für Firmengeschenke und Weihnachtskörbe geeignet. Zutaten und Lagerung auf dem Etikett jedes Glases."
          }
        },
        "V-19-26": {
          "c": [],
          "pr": "27,90 €",
          "d": {
            "it": "L'aperitivo mediterraneo pronto in tavola, quattro antipasti in olio extravergine di oliva: Pomodori secchi sott'olio, Melanzane sott'olio, Peperoni sott'olio e Paté di pomodori secchi.",
            "en": "A Mediterranean aperitivo ready to serve, four starters in extra virgin olive oil: sun-dried tomatoes in oil, aubergines in oil, peppers in oil and sun-dried tomato pâté.",
            "de": "Mediterraner Aperitivo, fertig zum Servieren, vier Vorspeisen in nativem Olivenöl extra: getrocknete Tomaten in Öl, Auberginen in Öl, Paprika in Öl und Tomatenpastete."
          },
          "a": {
            "it": "Confezione regalo; adatto anche a regali aziendali e cesti natalizi. Ingredienti e conservazione sulle etichette dei singoli vasetti.",
            "en": "Gift packaging; also suited to corporate gifts and Christmas hampers. Ingredients and storage on each jar's label.",
            "de": "Geschenkverpackung; auch für Firmengeschenke und Weihnachtskörbe geeignet. Zutaten und Lagerung auf dem Etikett jedes Glases."
          }
        },
        "V-19-27": {
          "c": [],
          "pr": "28,90 €",
          "d": {
            "it": "Tre confetture per formaggi e un tocco salato: confettura di fichi bianchi dottati, di mirtillo nero e di albicocche, più peperoni sott'olio EVO.",
            "en": "Three jams for cheese and a savoury touch: Bianchi dottati fig, black blueberry and apricot jam, plus peppers in extra virgin olive oil.",
            "de": "Drei Konfitüren zu Käse und eine herzhafte Note: Feige Bianco dottato, Heidelbeere und Aprikose, dazu Paprika in nativem Olivenöl extra."
          },
          "a": {
            "it": "Con formaggi freschi e stagionati, pane e focaccia.",
            "en": "With fresh and aged cheeses, bread and focaccia.",
            "de": "Zu frischem und gereiftem Käse, Brot und Focaccia."
          }
        },
        "V-19-28": {
          "c": [],
          "pr": "28,90 €",
          "d": {
            "it": "Quattro confetture extra per crostate e dolci fatti in casa: fichi bianchi dottati, fragole, albicocche e frutti di bosco.",
            "en": "Four extra jams for tarts and homemade cakes: Bianchi dottati fig, strawberry, apricot and mixed berry.",
            "de": "Vier Extra-Konfitüren für Crostate und hausgemachtes Gebäck: Feige Bianco dottato, Erdbeere, Aprikose und Waldbeeren."
          },
          "a": {
            "it": "Confezione regalo; adatto anche a regali aziendali e cesti natalizi. Ingredienti e conservazione sulle etichette dei singoli vasetti.",
            "en": "Gift packaging; also suited to corporate gifts and Christmas hampers. Ingredients and storage on each jar's label.",
            "de": "Geschenkverpackung; auch für Firmengeschenke und Weihnachtskörbe geeignet. Zutaten und Lagerung auf dem Etikett jedes Glases."
          }
        },
        "V-19-29": {
          "c": [],
          "pr": "27,90 €",
          "d": {
            "it": "Una cena per due in quattro vasetti: Paté di pomodori secchi (200 g) per l'antipasto, Sugo cilentano (270 g) e Crema di zucca (200 g) per la pasta, Confettura di fichi bianchi dottati (212 g) per i formaggi. Peso netto totale 882 g; tre vasetti premiati (Great Taste, WineHunter Gold e Rosso).",
            "en": "Dinner for two in four jars: sun-dried tomato pâté (200 g) for the starter, Cilento sauce (270 g) and pumpkin cream (200 g) for the pasta, Bianchi dottati fig jam (212 g) for the cheese. Total net weight 882 g; three award-winning jars (Great Taste, WineHunter Gold and Rosso).",
            "de": "Ein Abendessen für zwei in vier Gläsern: Tomatenpastete (200 g) als Vorspeise, Sugo cilentano (270 g) und Kürbiscreme (200 g) für die Pasta, Feigenkonfitüre Bianco dottato (212 g) zum Käse. Nettogewicht 882 g; drei ausgezeichnete Gläser (Great Taste, WineHunter Gold und Rosso)."
          },
          "a": {
            "it": "Paté sul pane tostato, sugo e crema di zucca sulla pasta, confettura con pecorino o formaggi stagionati. Per anniversari e San Valentino.",
            "en": "Pâté on toast, sauce and pumpkin cream on pasta, jam with pecorino or aged cheeses. For anniversaries and Valentine's Day.",
            "de": "Pastete auf Toast, Sauce und Kürbiscreme zur Pasta, Konfitüre zu Pecorino oder gereiftem Käse. Für Jahrestage und Valentinstag."
          }
        },
        "V-19-30": {
          "c": [],
          "pr": "80,00 €",
          "d": {
            "it": "Dodici vasetti per una dispensa intera, dieci salati e due dolci: 2 Sugo cilentano, 2 Sugo ai pomodori secchi, 2 Paté di pomodori secchi, 1 Pomodori secchi sott'olio, 1 Peperoni sott'olio, 2 Crema di zucca, 1 Confettura di fichi e 1 Confettura di fragole. Confezione elegante, pensata per regali aziendali di prestigio e cesti natalizi.",
            "en": "Twelve jars for a whole pantry, ten savoury and two sweet: 2 Cilento sauce, 2 sun-dried tomato sauce, 2 sun-dried tomato pâté, 1 sun-dried tomatoes in oil, 1 peppers in oil, 2 pumpkin cream, 1 fig jam and 1 strawberry jam. Elegant packaging, designed for premium corporate gifts and Christmas hampers.",
            "de": "Zwölf Gläser für eine ganze Vorratskammer, zehn herzhafte und zwei süße: 2 Sugo cilentano, 2 Sauce mit getrockneten Tomaten, 2 Tomatenpastete, 1 getrocknete Tomaten in Öl, 1 Paprika in Öl, 2 Kürbiscreme, 1 Feigen- und 1 Erdbeerkonfitüre. Elegante Verpackung für hochwertige Firmengeschenke und Weihnachtskörbe."
          },
          "a": {
            "it": "Confezione regalo; adatto anche a regali aziendali e cesti natalizi. Ingredienti e conservazione sulle etichette dei singoli vasetti.",
            "en": "Gift packaging; also suited to corporate gifts and Christmas hampers. Ingredients and storage on each jar's label.",
            "de": "Geschenkverpackung; auch für Firmengeschenke und Weihnachtskörbe geeignet. Zutaten und Lagerung auf dem Etikett jedes Glases."
          }
        },
        "V-19-31": {
          "c": [],
          "pr": "99,00 €",
          "d": {
            "it": "Il kit più grande del catalogo, nove vasetti dolci e nove salati: 3 Confettura di fichi, 3 di fragole, 1 di albicocche, 2 di frutti di bosco (212 g); 1 Pomodori secchi sott'olio, 2 Paté di pomodori secchi, 2 Melanzane sott'olio, 2 Peperoni sott'olio, 2 Crema di zucca (200 g). Confezione regalo inclusa, per grandi clienti, matrimoni e Natale aziendale.",
            "en": "The largest kit in the range, nine sweet and nine savoury jars: 3 fig jam, 3 strawberry, 1 apricot, 2 mixed berry (212 g); 1 sun-dried tomatoes in oil, 2 sun-dried tomato pâté, 2 aubergines in oil, 2 peppers in oil, 2 pumpkin cream (200 g). Gift box included, for key clients, weddings and corporate Christmas.",
            "de": "Das größte Kit des Sortiments, neun süße und neun herzhafte Gläser: 3 Feigen-, 3 Erdbeer-, 1 Aprikosen-, 2 Waldbeerenkonfitüre (212 g); 1 getrocknete Tomaten in Öl, 2 Tomatenpastete, 2 Auberginen in Öl, 2 Paprika in Öl, 2 Kürbiscreme (200 g). Mit Geschenkbox, für wichtige Kunden, Hochzeiten und Firmen-Weihnachten."
          },
          "a": {
            "it": "Confezione regalo; adatto anche a regali aziendali e cesti natalizi. Ingredienti e conservazione sulle etichette dei singoli vasetti.",
            "en": "Gift packaging; also suited to corporate gifts and Christmas hampers. Ingredients and storage on each jar's label.",
            "de": "Geschenkverpackung; auch für Firmengeschenke und Weihnachtskörbe geeignet. Zutaten und Lagerung auf dem Etikett jedes Glases."
          }
        }
      },
      "fonti": [
        "https://minnelea.com/collections/all",
        "https://minnelea.com/collections/kit-regalo",
        "https://minnelea.com/pages/chi-siamo",
        "https://minnelea.com/pages/premi",
        "https://minnelea.com/pages/contatti"
      ]
    },
    {
      "id": "V-20",
      "n": "LiquorAlba (Nocciolino Langhe)",
      "cat": "liquori",
      "reg": "Piemonte",
      "city": "La Morra (CN)",
      "lat": 44.638,
      "lng": 7.934,
      "y": null,
      "certs": [],
      "exp": [],
      "lg": [
        "it"
      ],
      "moq": null,
      "logoBg": "#fdf6ee",
      "d": {
        "it": "Liquorificio artigianale di La Morra, borgo medievale nel cuore delle Langhe, patrimonio UNESCO dal 2014 e terra del Barolo. Qui nasce il Nocciolino Langhe, un liquore che vuole valorizzare la nocciola più celebre del Piemonte: solo Nocciola Piemonte IGP della varietà Tonda Gentile Trilobata, scelta tra le migliori coltivazioni delle Langhe e tostata con cura. Ogni bottiglia è il frutto di un'infusione lenta e di una macerazione tradizionale, seguendo ricette tramandate da generazioni, per unire tradizione e innovazione e far conoscere le eccellenze di questo territorio.",
        "en": "An artisan liqueur maker in La Morra, a medieval village in the heart of the Langhe, a UNESCO World Heritage site since 2014 and home of Barolo. This is where Nocciolino Langhe is made, a liqueur that showcases Piedmont's most famous hazelnut: only Nocciola Piemonte IGP of the Tonda Gentile Trilobata variety, chosen from the best Langhe orchards and carefully toasted. Every bottle comes from slow infusion and traditional maceration, following recipes handed down through generations, combining tradition and innovation to promote the excellence of this land.",
        "de": "Handwerkliche Likörmanufaktur in La Morra, einem mittelalterlichen Dorf im Herzen der Langhe, seit 2014 UNESCO-Welterbe und Heimat des Barolo. Hier entsteht der Nocciolino Langhe, ein Likör, der die berühmteste Haselnuss des Piemont in den Mittelpunkt stellt: ausschließlich Nocciola Piemonte IGP der Sorte Tonda Gentile Trilobata, aus den besten Anlagen der Langhe ausgewählt und sorgfältig geröstet. Jede Flasche entsteht durch langsame Infusion und traditionelle Mazeration nach über Generationen weitergegebenen Rezepten, als Verbindung von Tradition und Innovation und als Botschafter dieses Gebiets."
      },
      "p": [
        [
          "Nocciolino Langhe, liquore di nocciola",
          "bottiglia da 700 ml"
        ]
      ],
      "pd": {
        "V-20-0": {
          "c": [],
          "d": {
            "it": "Liquore artigianale di nocciola, 28% vol. Prodotto con Nocciole Piemonte IGP delle Langhe (Tonda Gentile Trilobata), tostate e lasciate in infusione lenta con macerazione tradizionale, e alcool di altissima qualità. Gusto intenso e avvolgente di nocciola tostata. Ingredienti dichiarati: nocciole IGP, alcool di altissima qualità.",
            "en": "Artisan hazelnut liqueur, 28% ABV. Made with Nocciola Piemonte IGP hazelnuts from the Langhe (Tonda Gentile Trilobata), toasted and slowly infused with traditional maceration, and top-quality alcohol. Intense, enveloping flavour of toasted hazelnut. Stated ingredients: IGP hazelnuts, top-quality alcohol.",
            "de": "Handwerklicher Haselnusslikör, 28% Vol. Hergestellt aus Nocciola Piemonte IGP aus den Langhe (Tonda Gentile Trilobata), geröstet und langsam mit traditioneller Mazeration angesetzt, und Alkohol höchster Qualität. Intensiver, umhüllender Geschmack nach gerösteter Haselnuss. Angegebene Zutaten: IGP-Haselnüsse, Alkohol höchster Qualität."
          },
          "a": {
            "it": "Servire a temperatura ambiente o leggermente fresco (12-14 °C). Perfetto liscio o con ghiaccio, nel caffè e sul gelato, come base per cocktail; ideale anche in pasticceria.",
            "en": "Serve at room temperature or lightly chilled (12-14 °C). Perfect neat or on ice, in coffee and over ice cream, as a cocktail base; also ideal for pastry making.",
            "de": "Bei Raumtemperatur oder leicht gekühlt (12-14 °C) servieren. Pur oder auf Eis, im Kaffee und über Eis, als Cocktailbasis; auch ideal für Gebäck und Desserts."
          }
        }
      },
      "fonti": [
        "https://nocciolinolanghe.com/"
      ]
    }
  ],
  "IMG": {
    "logo-V-01": "https://www.agricolacasagarello.it/wp-content/uploads/2022/07/casa_garello_logo.jpg",
    "prod-V-01-0": "https://www.agricolacasagarello.it/wp-content/uploads/2023/02/bosco_delle_gazze_in_rovere_casa_garello_salice_terme-553x800.jpg",
    "prod-V-01-1": "https://www.agricolacasagarello.it/wp-content/uploads/2023/02/barbera_casa_garello_salice_terme-553x800.jpg",
    "prod-V-01-2": "https://www.agricolacasagarello.it/wp-content/uploads/2023/02/sabbione_vino_rosso_affinato_in_rovere_casa_garello_salice_terme-553x800.jpg",
    "prod-V-01-3": "https://www.agricolacasagarello.it/wp-content/uploads/2023/02/degustazione_mista-3-rossi-3-bianchi-553x800.jpg",
    "logo-V-02": "https://poderelucano.com/wp-content/uploads/2020/09/logo-podere-lucano-300x98.png.webp",
    "prod-V-02-0": "https://poderelucano.com/wp-content/uploads/2026/07/mastantuono-img.jpg.webp",
    "prod-V-02-1": "https://poderelucano.com/wp-content/uploads/2020/09/ee274288-6a00-45c0-9ba8-96faebc9a948.jpg.webp",
    "prod-V-02-2": "https://poderelucano.com/wp-content/uploads/2020/09/symposium-2.jpg.webp",
    "prod-V-02-3": "https://poderelucano.com/wp-content/uploads/2020/09/111.png.webp",
    "prod-V-02-4": "https://poderelucano.com/wp-content/uploads/2020/09/rosato_.png.webp",
    "prod-V-02-5": "https://poderelucano.com/wp-content/uploads/2020/09/greco.jpg.webp",
    "prod-V-02-6": "https://poderelucano.com/wp-content/uploads/2020/11/Senza-titolo-1.png.webp",
    "prod-V-02-7": "https://poderelucano.com/wp-content/uploads/2025/12/DARIA.jpg.webp",
    "prod-V-02-8": "https://poderelucano.com/wp-content/uploads/2026/11/terra-dei-lupi-bag-in-box-1-fronte-v3-300x300.jpg",
    "prod-V-02-9": "https://poderelucano.com/wp-content/uploads/2020/09/grappa.jpg.webp",
    "prod-V-02-10": "https://poderelucano.com/wp-content/uploads/2020/09/123er-300x700.png.webp",
    "prod-V-02-11": "https://poderelucano.com/wp-content/uploads/2020/09/olio_latta.jpg.webp",
    "logo-V-03": "https://static.wixstatic.com/media/ce12c7_b48d8bc273da4811916d0ab83108cfa7~mv2.jpg",
    "logo-V-04": "https://agricolasannunzio.it/assets/img/logo-marchio.webp",
    "prod-V-04-0": "https://agricolasannunzio.it/assets/img/bottiglia-fondo.webp",
    "prod-V-04-1": "https://agricolasannunzio.it/assets/img/mini-latta.webp",
    "prod-V-04-2": "https://agricolasannunzio.it/assets/img/mini-latta.webp",
    "prod-V-04-3": "https://agricolasannunzio.it/assets/img/bottiglia-fondo.webp",
    "prod-V-04-4": "https://agricolasannunzio.it/assets/img/mini-latta.webp",
    "logo-V-05": "https://www.pastaromeo.com/wp-content/uploads/2022/03/pastaromeo-logo.png",
    "prod-V-05-0": "https://shop.sicilianstories.eu/2555-thickbox_default/busiata-tricolore.jpg",
    "prod-V-05-1": "https://shop.sicilianstories.eu/2551-thickbox_default/busiata-al-pistacchio.jpg",
    "prod-V-05-2": "https://shop.sicilianstories.eu/2547-thickbox_default/busiata-classica-.jpg",
    "prod-V-05-3": "https://shop.sicilianstories.eu/2563-thickbox_default/anelletti-siciliani.jpg",
    "prod-V-05-4": "https://shop.sicilianstories.eu/2559-thickbox_default/conchiglioni-giganti.jpg",
    "prod-V-05-5": "https://shop.sicilianstories.eu/2543-thickbox_default/spaghetti-alla-chitarra-al-limone-e-pepe-nero.jpg",
    "prod-V-05-6": "https://shop.sicilianstories.eu/2531-thickbox_default/spaghetti-alla-chitarra-all-uovo.jpg",
    "prod-V-05-7": "https://shop.sicilianstories.eu/2539-thickbox_default/spaghetti-alla-chitarra-al-pistacchio.jpg",
    "prod-V-05-8": "https://shop.sicilianstories.eu/2535-thickbox_default/spaghetti-alla-chitarra-al-peperoncino.jpg",
    "prod-V-05-9": "https://shop.sicilianstories.eu/2527-thickbox_default/tagliolini-all-arancia.jpg",
    "prod-V-05-10": "https://shop.sicilianstories.eu/2523-thickbox_default/tagliolini-al-limone.jpg",
    "prod-V-05-11": "https://shop.sicilianstories.eu/2515-thickbox_default/tagliolini-all-uovo.jpg",
    "prod-V-05-12": "https://shop.sicilianstories.eu/2519-thickbox_default/tagliolini-al-nero-di-seppia.jpg",
    "logo-V-06": "https://static.wixstatic.com/media/5ae127_9d6e1a9447544d8590b9711251c79032~mv2.png",
    "prod-V-06-0": "https://static.wixstatic.com/media/5ae127_fbc9ac03fc5d4dda905674e1e99f438f~mv2.jpg",
    "prod-V-06-1": "https://www.diegale.it/wp-content/uploads/2026/01/diegale-ciarlibo-2026-1.jpg",
    "prod-V-06-2": "https://static.wixstatic.com/media/5ae127_abb39bd697b349bc979ffeefc8f965ad~mv2.jpg",
    "prod-V-06-3": "https://static.wixstatic.com/media/5ae127_d82e050c2f454bf89d62456c53993b06~mv2.jpg",
    "prod-V-06-4": "https://static.wixstatic.com/media/5ae127_fb5e2f125d8343469531eb59c2c4b22e~mv2.jpg",
    "logo-V-07": "https://www.cadecartocci.it/wp-content/uploads/2022/12/logo-cadecartocci.png",
    "prod-V-07-0": "https://www.cadecartocci.it/wp-content/uploads/2024/11/100ml-new.png",
    "prod-V-07-1": "https://www.cadecartocci.it/wp-content/uploads/2025/06/2-1.jpg",
    "prod-V-07-2": "https://www.cadecartocci.it/wp-content/uploads/2026/11/1.jpg",
    "prod-V-07-3": "https://www.cadecartocci.it/wp-content/uploads/2024/11/500ml-new.png",
    "prod-V-07-4": "https://www.cadecartocci.it/wp-content/uploads/2024/11/500-ml-lat-new.png",
    "prod-V-07-5": "https://www.cadecartocci.it/wp-content/uploads/2024/11/750ml-new.png",
    "prod-V-07-6": "https://www.cadecartocci.it/wp-content/uploads/2024/11/3l-new.png",
    "prod-V-07-7": "https://www.cadecartocci.it/wp-content/uploads/2024/11/5l-new.png",
    "prod-V-07-8": "https://www.cadecartocci.it/wp-content/uploads/2024/11/Fotografia-editoriale-dellaglione-della-Valdichiana.jpg",
    "prod-V-07-9": "https://www.cadecartocci.it/wp-content/uploads/2026/07/crema-aglione-1.png",
    "prod-V-07-10": "https://www.cadecartocci.it/wp-content/uploads/2026/07/sugo-aglione-1.png",
    "prod-V-07-11": "https://www.cadecartocci.it/wp-content/uploads/2026/07/zucchine-sottolio-1.png",
    "prod-V-07-12": "https://www.cadecartocci.it/wp-content/uploads/2026/07/zucchine-pomodoro-1.png",
    "logo-V-08": "https://agrigio.com/wp-content/uploads/2024/03/Logo-AgriGio.png",
    "prod-V-08-0": "https://agrigio.com/wp-content/uploads/2026/11/natale_panettone-classico.jpeg",
    "prod-V-08-1": "https://agrigio.com/wp-content/uploads/2026/11/natale_panettone-Uvetta-stiker.jpg",
    "prod-V-08-2": "https://agrigio.com/wp-content/uploads/2026/11/natale_panettone-Uvetta-e-Vino-stiker.jpg",
    "prod-V-08-3": "https://agrigio.com/wp-content/uploads/2026/11/natale_panettone-cioccolato.jpeg",
    "prod-V-08-4": "https://agrigio.com/wp-content/uploads/2026/11/natale_panettone_pistacchio.jpeg",
    "prod-V-08-5": "https://agrigio.com/wp-content/uploads/2026/11/natale_panettone-caffe.jpg",
    "prod-V-08-6": "https://agrigio.com/wp-content/uploads/2026/11/natale_panettone-vegano-stiker.jpg",
    "prod-V-08-7": "https://agrigio.com/wp-content/uploads/2025/03/biscotti-caffe-1.jpg",
    "prod-V-08-8": "https://agrigio.com/wp-content/uploads/2025/03/biscotti-al-caffe.jpg",
    "prod-V-08-9": "https://agrigio.com/wp-content/uploads/2025/03/biscotti-vegani-grano-arso.jpg",
    "prod-V-08-10": "https://agrigio.com/wp-content/uploads/2025/03/biscotti-vegani-uvetta-vino-rosso.jpg",
    "prod-V-08-11": "https://agrigio.com/wp-content/uploads/2025/03/biiscotti-vegani-orzo.jpg",
    "prod-V-08-12": "https://agrigio.com/wp-content/uploads/2024/05/biscotti-ripieni-amarena.jpeg",
    "prod-V-08-13": "https://agrigio.com/wp-content/uploads/2024/05/biscotti-gocce-cioccolato-vegani.jpg",
    "prod-V-08-14": "https://agrigio.com/wp-content/uploads/2024/05/biscotti-cannella.jpg",
    "prod-V-08-15": "https://agrigio.com/wp-content/uploads/2024/05/biscotti-vegani-al-cacao.jpeg",
    "prod-V-08-16": "https://agrigio.com/wp-content/uploads/2024/03/biscotti-alle-mandorle.jpeg",
    "prod-V-08-17": "https://agrigio.com/wp-content/uploads/2024/03/biscotti-ripieni-nocciola-1.jpeg",
    "prod-V-08-18": "https://agrigio.com/wp-content/uploads/2024/03/biscotti-ripieni-albicocca.jpeg",
    "prod-V-08-19": "https://agrigio.com/wp-content/uploads/2024/03/biscotti-ciambelle.jpeg",
    "prod-V-08-20": "https://agrigio.com/wp-content/uploads/2024/03/biscotti-frollini.jpeg",
    "prod-V-08-21": "https://agrigio.com/wp-content/uploads/2024/04/scaldatelli-finocchio-senatore-cappelli.jpg",
    "prod-V-08-22": "https://agrigio.com/wp-content/uploads/2024/04/scaldatelli-finocchio.jpg",
    "prod-V-08-23": "https://agrigio.com/wp-content/uploads/2024/04/scaldatelli-peperoncino.jpg",
    "prod-V-08-24": "https://agrigio.com/wp-content/uploads/2024/04/scaldatelli-sale-marino-integrale.jpg",
    "prod-V-08-25": "https://agrigio.com/wp-content/uploads/2024/04/scaldatelli-grano-arso.jpg",
    "prod-V-08-26": "https://agrigio.com/wp-content/uploads/2024/04/scaldatelli-allorzo.jpg",
    "prod-V-08-27": "https://agrigio.com/wp-content/uploads/2024/10/scaldatelli-spirulina.jpg",
    "prod-V-08-28": "https://agrigio.com/wp-content/uploads/2024/04/scaldatelli-integrali-2.jpg",
    "prod-V-08-29": "https://agrigio.com/wp-content/uploads/2024/05/bruschette-integrali-senatore-Cappelli.jpeg",
    "prod-V-08-30": "https://agrigio.com/wp-content/uploads/2024/04/orecchiette-senatore-cappelli.jpg",
    "prod-V-08-31": "https://agrigio.com/wp-content/uploads/2024/04/orecchiette-grano-arso.jpg",
    "prod-V-08-32": "https://agrigio.com/wp-content/uploads/2024/04/cavatelli-senatore-cappelli.jpg",
    "prod-V-08-33": "https://agrigio.com/wp-content/uploads/2024/04/cavatelli-grano-arso.jpg",
    "prod-V-08-34": "https://agrigio.com/wp-content/uploads/2024/04/ricce-senatore-cappelli.jpg",
    "prod-V-08-35": "https://agrigio.com/wp-content/uploads/2024/05/gemelli-senatore-cappelli.jpg",
    "prod-V-08-36": "https://agrigio.com/wp-content/uploads/2024/05/spaghetti-spezzati-senatore-cappelli.jpg",
    "prod-V-08-37": "https://agrigio.com/wp-content/uploads/2024/05/Semolato-di-Grano-Duro-Senatore-Cappelli.jpg",
    "prod-V-08-38": "https://agrigio.com/wp-content/uploads/2024/05/Farina-tipo-1.jpg",
    "prod-V-08-39": "https://agrigio.com/wp-content/uploads/2024/05/Farina-Grano-Arso.jpg",
    "logo-V-09": "img/v09-logo.png",
    "prod-V-09-0": "img/v09-0.jpg",
    "prod-V-09-1": "img/v09-1.jpg",
    "prod-V-09-2": "img/v09-2.jpg",
    "prod-V-09-3": "img/v09-3.jpg",
    "prod-V-09-4": "img/v09-4.jpg",
    "prod-V-09-5": "img/v09-5.jpg",
    "prod-V-09-6": "img/v09-6.jpg",
    "prod-V-09-7": "img/v09-7.jpg",
    "prod-V-09-8": "img/v09-8.jpg",
    "prod-V-09-9": "img/v09-9.jpg",
    "prod-V-09-10": "img/v09-10.jpg",
    "prod-V-09-11": "img/v09-11.jpg",
    "logo-V-10": "https://casellino.com/wp-content/uploads/2021/02/Tavola-disegno-12@0.5x.png",
    "prod-V-10-0": "https://casellino.com/wp-content/uploads/2020/08/olio-1.png",
    "prod-V-10-1": "https://casellino.com/wp-content/uploads/2021/05/G9T4818-Modifica.jpg",
    "prod-V-10-2": "https://casellino.com/wp-content/uploads/2021/05/G9T4815-Modifica.jpg",
    "prod-V-10-3": "https://casellino.com/wp-content/uploads/2020/08/olio-tartufo.png",
    "prod-V-10-4": "https://casellino.com/wp-content/uploads/2020/08/spezie-1.png",
    "prod-V-10-5": "https://casellino.com/wp-content/uploads/2020/08/saponette.png",
    "logo-V-11": "https://www.lacasaia.it/wp-content/uploads/2022/09/logo-web.png",
    "prod-V-11-0": "https://www.lacasaia.it/wp-content/uploads/2025/02/pinot_nero_zero.jpg",
    "prod-V-11-1": "https://www.lacasaia.it/wp-content/uploads/2021/07/chardonnay_metodo_classico_tophundred.jpg",
    "prod-V-11-2": "https://www.lacasaia.it/wp-content/uploads/2022/09/spumante_metodo_classico.jpg",
    "prod-V-11-3": "https://www.lacasaia.it/wp-content/uploads/2024/04/spumante_rose_tredici_lune.jpg",
    "prod-V-11-4": "https://www.lacasaia.it/wp-content/uploads/2021/10/pinot_nero_bianco-1.jpg",
    "prod-V-11-5": "https://www.lacasaia.it/wp-content/uploads/2021/10/pinot_nero_rosa-1.jpg",
    "prod-V-11-6": "https://www.lacasaia.it/wp-content/uploads/2021/10/bonarda-1.jpg",
    "prod-V-11-7": "https://www.lacasaia.it/wp-content/uploads/2021/10/pinot_nero-1.jpg",
    "prod-V-11-8": "https://www.lacasaia.it/wp-content/uploads/2021/10/gruppo_vero_oltrepo.jpg",
    "prod-V-11-9": "https://www.lacasaia.it/wp-content/uploads/2021/10/gruppo_serata_importante.jpg",
    "prod-V-11-10": "https://www.lacasaia.it/wp-content/uploads/2021/10/gruppo_pinot.jpg",
    "prod-V-11-11": "https://www.lacasaia.it/wp-content/uploads/2021/11/riso_carnaroli-scaled.jpg",
    "logo-V-12": "https://pastaformia.it/images/pasta-formia-logo.svg",
    "prod-V-12-0": "https://pastaformia.it/media/yootheme/cache/e0/e06b3692.jpg",
    "prod-V-12-1": "https://pastaformia.it/media/yootheme/cache/21/21c1eb46.jpg",
    "prod-V-12-2": "https://pastaformia.it/media/yootheme/cache/dd/dda7fe26.jpg",
    "prod-V-12-3": "https://pastaformia.it/media/yootheme/cache/67/6711f39f.jpg",
    "prod-V-12-4": "https://pastaformia.it/media/yootheme/cache/c5/c59b6d84.jpg",
    "prod-V-12-6": "https://pastaformia.it/media/yootheme/cache/f0/f0adcb00.jpg",
    "prod-V-12-7": "https://pastaformia.it/media/yootheme/cache/24/24eb2034.jpg",
    "prod-V-12-8": "https://pastaformia.it/media/yootheme/cache/29/29fa73a4.jpg",
    "prod-V-12-9": "https://pastaformia.it/media/yootheme/cache/b6/b67d919a.jpg",
    "prod-V-12-10": "https://pastaformia.it/media/yootheme/cache/3d/3db00ae9.jpg",
    "prod-V-12-11": "https://pastaformia.it/media/yootheme/cache/02/0263e63f.jpg",
    "prod-V-12-12": "https://pastaformia.it/media/yootheme/cache/48/48c89a94.jpg",
    "prod-V-12-13": "https://pastaformia.it/media/yootheme/cache/ee/ee4aa24d.jpg",
    "prod-V-12-14": "https://pastaformia.it/media/yootheme/cache/73/730db7c1.jpg",
    "prod-V-12-15": "https://pastaformia.it/media/yootheme/cache/74/746d0a9c.jpg",
    "prod-V-12-16": "https://pastaformia.it/media/yootheme/cache/74/74639afe.jpg",
    "prod-V-12-17": "https://pastaformia.it/media/yootheme/cache/36/3626c082.jpg",
    "prod-V-12-18": "https://pastaformia.it/media/yootheme/cache/62/6227a13f.jpg",
    "prod-V-12-19": "https://pastaformia.it/media/yootheme/cache/1f/1f7c22f5.jpg",
    "prod-V-12-20": "https://pastaformia.it/media/yootheme/cache/65/652d5920.jpg",
    "logo-V-13": "https://olioleferre.com/wp-content/uploads/2022/06/logo_black.svg",
    "prod-V-13-0": "https://shopleferre.com/wp-content/uploads/2022/08/1_-02.png",
    "prod-V-13-1": "https://shopleferre.com/wp-content/uploads/2022/07/1_-01.png",
    "prod-V-13-2": "https://shopleferre.com/wp-content/uploads/2022/07/1_-24.png",
    "prod-V-13-3": "https://shopleferre.com/wp-content/uploads/2022/07/BOTT-0_50_CAROLEA.png",
    "prod-V-13-4": "https://shopleferre.com/wp-content/uploads/2022/07/BOTT-0_50_LECCINO.png",
    "prod-V-13-5": "https://shopleferre.com/wp-content/uploads/2022/07/BOTT-0_50_OGLIAROLA.png",
    "prod-V-13-6": "https://shopleferre.com/wp-content/uploads/2022/07/BOTT-0_50_FRANTOIO.png",
    "prod-V-13-7": "https://shopleferre.com/wp-content/uploads/2022/07/BOTT-0_50_BIANCOLILLA.png",
    "prod-V-13-8": "https://shopleferre.com/wp-content/uploads/2022/07/BOTT-0_50_PERANZANA.png",
    "prod-V-13-9": "https://shopleferre.com/wp-content/uploads/2022/07/BOTT-0_50_NOCELLARA.png",
    "prod-V-13-10": "https://shopleferre.com/wp-content/uploads/2022/07/BOTT-0_50_CORATINA.png",
    "prod-V-13-11": "https://shopleferre.com/wp-content/uploads/2022/07/BOTT-0_50_NOCIARA.png",
    "prod-V-13-12": "https://shopleferre.com/wp-content/uploads/2022/07/BOTT-0_50_PICHOLINE.png",
    "prod-V-13-13": "https://shopleferre.com/wp-content/uploads/2022/07/1_-13.png",
    "prod-V-13-14": "https://shopleferre.com/wp-content/uploads/2022/07/1_-15.png",
    "prod-V-13-15": "https://shopleferre.com/wp-content/uploads/2025/03/1_-14.png",
    "prod-V-13-16": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OASFVGLIAROLA.png",
    "prod-V-13-17": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OGLghyh8ouIAROLA.png",
    "prod-V-13-18": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OGLvugIAROLA.png",
    "prod-V-13-19": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OddGLIAROLA.png",
    "prod-V-13-20": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OGtc8tLIAROLA.png",
    "prod-V-13-21": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OGLIAROLAs.png",
    "prod-V-13-22": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OGLIAROLA-1.png",
    "prod-V-13-23": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OGLIVSVVAROLA.png",
    "prod-V-13-24": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_1b-hk0_OGLIAROLA.png",
    "prod-V-13-25": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OGLIAROLvhhhA.png",
    "prod-V-13-26": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OGLIAROLA.png",
    "prod-V-13-27": "https://shopleferre.com/wp-content/uploads/2026/03/BOTT-0_10_OGLIgfgAROLA.png",
    "prod-V-13-28": "https://shopleferre.com/wp-content/uploads/2022/07/acc.png",
    "prod-V-13-29": "https://shopleferre.com/wp-content/uploads/2022/07/add.png",
    "prod-V-13-30": "https://shopleferre.com/wp-content/uploads/2022/07/aglio.png",
    "prod-V-13-31": "https://shopleferre.com/wp-content/uploads/2022/07/agl.png",
    "prod-V-13-32": "https://shopleferre.com/wp-content/uploads/2022/07/alloro.png",
    "prod-V-13-33": "https://shopleferre.com/wp-content/uploads/2022/07/arancia025-1.png",
    "prod-V-13-34": "https://shopleferre.com/wp-content/uploads/2022/07/basilic025.png",
    "prod-V-13-35": "https://shopleferre.com/wp-content/uploads/2022/07/bergamotto.png",
    "prod-V-13-36": "https://shopleferre.com/wp-content/uploads/2022/07/caff.png",
    "prod-V-13-37": "https://shopleferre.com/wp-content/uploads/2022/07/cann.png",
    "prod-V-13-38": "https://shopleferre.com/wp-content/uploads/2022/07/cipolla.png",
    "prod-V-13-39": "https://shopleferre.com/wp-content/uploads/2022/07/curry.png",
    "prod-V-13-40": "https://shopleferre.com/wp-content/uploads/2022/07/erbe.png",
    "prod-V-13-41": "https://shopleferre.com/wp-content/uploads/2022/07/gunghi025.png",
    "prod-V-13-42": "https://shopleferre.com/wp-content/uploads/2022/07/liq.png",
    "prod-V-13-43": "https://shopleferre.com/wp-content/uploads/2022/07/liomne.png",
    "prod-V-13-44": "https://shopleferre.com/wp-content/uploads/2022/07/magg.png",
    "prod-V-13-45": "https://shopleferre.com/wp-content/uploads/2022/07/mandarino.png",
    "prod-V-13-46": "https://shopleferre.com/wp-content/uploads/2022/07/menta.png",
    "prod-V-13-47": "https://shopleferre.com/wp-content/uploads/2022/07/orig.png",
    "prod-V-13-48": "https://shopleferre.com/wp-content/uploads/2022/07/pepenero.png",
    "prod-V-13-49": "https://shopleferre.com/wp-content/uploads/2022/07/pep.png",
    "prod-V-13-50": "https://shopleferre.com/wp-content/uploads/2022/07/pesto025.png",
    "prod-V-13-51": "https://shopleferre.com/wp-content/uploads/2022/07/pistacchio010.png",
    "prod-V-13-52": "https://shopleferre.com/wp-content/uploads/2022/07/pomplemo.png",
    "prod-V-13-53": "https://shopleferre.com/wp-content/uploads/2022/07/rosm025.png",
    "prod-V-13-54": "https://shopleferre.com/wp-content/uploads/2022/07/salvia.png",
    "prod-V-13-55": "https://shopleferre.com/wp-content/uploads/2022/07/scalgono.png",
    "prod-V-13-56": "https://shopleferre.com/wp-content/uploads/2022/07/tart025.png",
    "prod-V-13-57": "https://shopleferre.com/wp-content/uploads/2022/07/timo.png",
    "prod-V-13-58": "https://shopleferre.com/wp-content/uploads/2022/07/vanig.png",
    "prod-V-13-59": "https://shopleferre.com/wp-content/uploads/2022/07/zafferano.png",
    "prod-V-13-60": "https://shopleferre.com/wp-content/uploads/2022/07/zenzero.png",
    "prod-V-13-61": "https://shopleferre.com/wp-content/uploads/2022/07/gocc.png",
    "prod-V-13-62": "https://shopleferre.com/wp-content/uploads/2022/07/aut-1.png",
    "prod-V-13-63": "https://shopleferre.com/wp-content/uploads/2022/07/denso.png",
    "prod-V-13-64": "https://shopleferre.com/wp-content/uploads/2022/07/1_-11.png",
    "prod-V-13-65": "https://shopleferre.com/wp-content/uploads/2022/07/truttula_imag_.jpg",
    "prod-V-13-66": "https://shopleferre.com/wp-content/uploads/2026/05/immag_2.png",
    "prod-V-13-67": "https://shopleferre.com/wp-content/uploads/2022/07/1_-16.png",
    "prod-V-13-68": "https://shopleferre.com/wp-content/uploads/2024/11/tris-mediterraneo_grafica.png",
    "prod-V-13-69": "https://shopleferre.com/wp-content/uploads/2024/11/tre-aromi_grafica.png",
    "prod-V-13-70": "https://shopleferre.com/wp-content/uploads/2024/11/pastry_grafica.png",
    "prod-V-13-71": "https://shopleferre.com/wp-content/uploads/2024/11/mari_monti_grafica.png",
    "prod-V-13-72": "https://shopleferre.com/wp-content/uploads/2024/11/gourmet_grafica.png",
    "prod-V-13-73": "https://shopleferre.com/wp-content/uploads/2024/11/oriente_grafica.png",
    "prod-V-13-74": "https://shopleferre.com/wp-content/uploads/2024/11/agrumato_grafica.png",
    "prod-V-13-75": "https://shopleferre.com/wp-content/uploads/2024/11/1_-22.png",
    "prod-V-13-76": "https://shopleferre.com/wp-content/uploads/2024/11/garden-800x471-1.png",
    "prod-V-13-77": "https://shopleferre.com/wp-content/uploads/2024/11/degustazione-di-aromi-800x471-1.png",
    "prod-V-13-78": "https://shopleferre.com/wp-content/uploads/2023/11/1_-19.png",
    "prod-V-13-79": "https://shopleferre.com/wp-content/uploads/2024/11/ostuni_aromatizzati.png",
    "prod-V-13-80": "https://shopleferre.com/wp-content/uploads/2023/11/025aro.png",
    "prod-V-13-81": "https://shopleferre.com/wp-content/uploads/2024/11/trani_composizione.png",
    "prod-V-13-82": "https://shopleferre.com/wp-content/uploads/2023/11/010cond-1.png",
    "prod-V-13-83": "https://shopleferre.com/wp-content/uploads/2024/11/melpignano_composizione.png",
    "prod-V-13-84": "https://shopleferre.com/wp-content/uploads/2022/11/1_-27.png",
    "prod-V-13-85": "https://shopleferre.com/wp-content/uploads/2022/11/1_-26.png",
    "prod-V-13-86": "https://shopleferre.com/wp-content/uploads/2022/11/1_-25.png",
    "prod-V-13-87": "https://shopleferre.com/wp-content/uploads/2022/11/pochette_LF_verde_open_aromatizzati-1024x1024.png",
    "prod-V-13-88": "https://shopleferre.com/wp-content/uploads/2022/07/1_-21.png",
    "prod-V-13-89": "https://shopleferre.com/wp-content/uploads/2024/11/autentico_lamp_composizione.png",
    "logo-V-14": "https://images.squarespace-cdn.com/content/v1/67cab5e8b8138e14a93fc10f/1741338114036-P3OP500H6ZUSGE5SS1GO/Kopie+van+full_trimmed_white_base.png",
    "prod-V-14-0": "img/v14-aurea.jpg",
    "prod-V-14-1": "img/v14-serenitas.jpg",
    "prod-V-14-2": "img/v14-eredita.jpg",
    "prod-V-14-3": "img/v14-colle-dell-assedio.jpg",
    "prod-V-14-4": "img/v14-concordia.jpg",
    "logo-V-15": "https://www.vozzivini.it/web/wp-content/uploads/2023/09/log-vozz.png",
    "prod-V-15-0": "https://www.vozzivini.it/web/wp-content/uploads/2024/09/acquista-guarnaccino-di-chiaromonte-vozzi-vini-shop-online-uva-autoctona-basilicata.jpg",
    "prod-V-15-1": "https://www.vozzivini.it/web/wp-content/uploads/2023/10/bbbbbb-1.jpg",
    "prod-V-15-2": "https://www.vozzivini.it/web/wp-content/uploads/2023/09/bianco.jpg",
    "prod-V-15-3": "https://www.vozzivini.it/web/wp-content/uploads/2025/05/vino-rose-vozzi-vini-lucano-basilicata-sangiovese-uve-bio-made-in-italy-online-acquista.jpg",
    "prod-V-15-4": "https://www.vozzivini.it/web/wp-content/uploads/2023/10/vino-rosso-tavola.jpg",
    "prod-V-15-5": "https://www.vozzivini.it/web/wp-content/uploads/2024/11/box-tris-vino-biologico-guarnaccino-merlot-sangiovese-rosso-Viognier-e-Trebbiano-bianco-vozzi-vini-lucani-basilicata-italia-made-in-italy-wine.jpg",
    "logo-V-16": "https://neposvillae.it/wp-content/uploads/2021/06/Logo-Nepos-VIllae-bianco.png",
    "prod-V-16-0": "https://neposvillae.it/wp-content/uploads/2020/08/Amarone-della-Valpolicella-Classsico-DOCG.jpg",
    "prod-V-16-1": "https://neposvillae.it/wp-content/uploads/2021/06/Valpolicella-Classico-Superiore-DOC.jpg",
    "prod-V-16-2": "https://neposvillae.it/wp-content/uploads/2021/06/Valpolicella-Classico-Superiore-Ripasso-DOC.jpg",
    "prod-V-16-3": "https://neposvillae.it/wp-content/uploads/2023/02/RECIOTO-LA-TESA.jpg",
    "prod-V-16-4": "https://neposvillae.it/wp-content/uploads/2026/02/recioto-della-valpolicella-new.png",
    "prod-V-16-5": "https://neposvillae.it/wp-content/uploads/2026/02/grappa-al-recioto-new.png",
    "prod-V-16-6": "https://neposvillae.it/wp-content/uploads/2026/02/grappa-di-amarone-della-valpolicella-new.png",
    "logo-V-17": "https://www.cantinegerardoperillo.it/assets/ChatGPT_Image_7_feb_2026__09_26_28_1770454396371-a6Cnl2XY.png",
    "prod-V-17-0": "https://www.cantinegerardoperillo.it/objects/product-images/0135fa38-f46a-4f34-a414-bbf98c32338b",
    "prod-V-17-1": "https://www.cantinegerardoperillo.it/objects/product-images/45417ff9-7cfc-454e-b314-b99153b7feb1",
    "prod-V-17-2": "https://www.cantinegerardoperillo.it/objects/product-images/18577801-798e-4751-9c94-a835b52ccddf",
    "prod-V-17-3": "https://www.cantinegerardoperillo.it/objects/product-images/a55c7c3b-8089-44cc-948a-b32f368eb448",
    "prod-V-17-4": "https://www.cantinegerardoperillo.it/objects/product-images/4ff779e0-d1d1-4566-b9dc-fac5b4ee93fa",
    "prod-V-17-5": "https://www.cantinegerardoperillo.it/objects/product-images/833af5e8-dd6d-4578-902b-1147e5353d8e",
    "prod-V-17-6": "https://www.cantinegerardoperillo.it/objects/product-images/8e3f1e1e-a85c-48f8-a620-bc8a68e5025e",
    "logo-V-18": "https://labottegadiravacciano.it/wp-content/uploads/2021/01/logo-bottega-ravacciano-siena.png",
    "prod-V-18-0": "https://labottegadiravacciano.it/wp-content/uploads/2021/01/cantuccini-2.png",
    "prod-V-18-1": "https://labottegadiravacciano.it/wp-content/uploads/2025/03/Golosi-3.png",
    "prod-V-18-2": "https://labottegadiravacciano.it/wp-content/uploads/2025/03/Castagnucci-1.png",
    "prod-V-18-3": "https://labottegadiravacciano.it/wp-content/uploads/2025/03/Ciambellini-1.png",
    "prod-V-18-4": "https://labottegadiravacciano.it/wp-content/uploads/2021/02/cavallucci-2.png",
    "prod-V-18-5": "https://labottegadiravacciano.it/wp-content/uploads/2021/01/ricciarelli1.png",
    "prod-V-18-6": "https://labottegadiravacciano.it/wp-content/uploads/2021/12/ricciarelli-ghiotti.png",
    "prod-V-18-7": "https://labottegadiravacciano.it/wp-content/uploads/2025/03/Neri-1.png",
    "prod-V-18-8": "https://labottegadiravacciano.it/wp-content/uploads/2025/03/Pescarelli-1.png",
    "prod-V-18-9": "https://labottegadiravacciano.it/wp-content/uploads/2021/02/PANFORTE.png",
    "prod-V-18-10": "https://labottegadiravacciano.it/wp-content/uploads/2021/02/PANPEPATO.png",
    "logo-V-19": "https://minnelea.com/cdn/shop/files/logodefinitivo-removebg-preview_a4cd08ad-d91c-43ee-aa50-a6759807b314.png",
    "prod-V-19-0": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/albicocche-minnelea-vasetto.jpg?width=900",
    "prod-V-19-1": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/fichi-minnelea-vasetto.jpg?width=900",
    "prod-V-19-2": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/fragole-minnelea-vasetto.jpg?width=900",
    "prod-V-19-3": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/frutti-di-bosco-minnelea-vasetto.jpg?width=900",
    "prod-V-19-4": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/mele-rosse-minnelea-vasetto.jpg?width=900",
    "prod-V-19-5": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/mirtillo-nero-minnelea-vasetto.jpg?width=900",
    "prod-V-19-6": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/arance-minnelea-vasetto.jpg?width=900",
    "prod-V-19-7": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/arance-limoni-minnelea-vasetto.jpg?width=900",
    "prod-V-19-8": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/limoni-minnelea-vasetto.jpg?width=900",
    "prod-V-19-9": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/melanzane-sottolio-minnelea-vasetto.jpg?width=900",
    "prod-V-19-10": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/peperoni-sottolio-minnelea-tappo-nero.jpg?width=900",
    "prod-V-19-11": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/pomodori-secchi-sottolio-minnelea-tappo-nero.jpg?width=900",
    "prod-V-19-12": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/pate-pomodori-secchi-minnelea-tappo-nero.jpg?width=900",
    "prod-V-19-13": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/crema-zucca-minnelea-vasetto.jpg?width=900",
    "prod-V-19-14": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/sugo-basilico-minnelea-vasetto-winehunter.jpg?width=900",
    "prod-V-19-15": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/sugo-cilentano-minnelea-vasetto.jpg?width=900",
    "prod-V-19-16": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/sugo-piccante-minnelea-vasetto-v2.jpg?width=900",
    "prod-V-19-17": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/sugo-pomodori-secchi-minnelea-vasetto-v2.jpg?width=900",
    "prod-V-19-18": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/kit-confetture-sugo-crema-pomodori-secchi_2ef279cc-e513-4fe8-9bfc-072b3cb9e2e2.jpg?width=900",
    "prod-V-19-19": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/kit-benvenuto-salato-pomodori-secchi-minnelea.jpg?width=900",
    "prod-V-19-20": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/confetture-minnelea-scatole-regalo-natale-albicocche.jpg?width=900",
    "prod-V-19-21": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/kit-regalo-gourmet-12-vasetti-minnelea.png?width=900",
    "prod-V-19-22": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/pomodori-secchi-sottolio-minnelea-tappo-nero_fd19221e-1fcc-4d71-a904-7bf1fa025731.jpg?width=900",
    "prod-V-19-23": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/hf_20260722_113000_f5372938-ec75-4257-adf3-ee6575cf7a17.png?width=900",
    "prod-V-19-24": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/sugo-cilentano-olio-evo-minnelea_02694cba-3d64-4e0a-b80b-6f2c74d9caaa.jpg?width=900",
    "prod-V-19-25": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/kit-pasta-tradizione-sughi-minnelea.jpg?width=900",
    "prod-V-19-26": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/kit-aperitivo-cilentano-4-vasetti-sottolio-minnelea.jpg?width=900",
    "prod-V-19-27": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/confettura-fichi-bianchi-dottati-minnelea_3d095b6e-449e-4d48-acc8-6728ff9481b7.jpg?width=900",
    "prod-V-19-28": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/kit-crostate-dolci-4-confetture-minnelea.jpg?width=900",
    "prod-V-19-29": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/pate-pomodori-secchi-olio-evo-minnelea_0ff9b345-ced6-4ca3-a41d-cfbf235809b2.jpg?width=900",
    "prod-V-19-30": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/kit-gran-riserva-cilento-12-vasetti-minnelea.jpg?width=900",
    "prod-V-19-31": "https://cdn.shopify.com/s/files/1/0574/3732/3315/files/kit-regalo-premium-18-vasetti-natale-minnelea.jpg?width=900",
    "logo-V-20": "img/v20-logo.png",
    "prod-V-20-0": "https://nocciolinolanghe.com/assets/nocciolino-bottle.jpg"
  }
};
