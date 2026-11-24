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
    "logo-V-09": "https://www.castagniniwines.it/wp-content/uploads/2020/12/logo-castagnini-lineare-dorato.png",
    "prod-V-09-0": "https://www.castagniniwines.it/wp-content/uploads/2020/12/prodotto-castagnini-vino-ceccardo.jpg.webp",
    "prod-V-09-1": "https://www.castagniniwines.it/wp-content/uploads/2020/12/prodotto-castagnini-vino-cybo.jpg.webp",
    "prod-V-09-2": "https://www.castagniniwines.it/wp-content/uploads/2020/12/prodotto-castagnini-vino-merlo.jpg.webp",
    "prod-V-09-3": "https://www.castagniniwines.it/wp-content/uploads/2020/12/prodotto-castagnini-vino-beatrice.jpg.webp",
    "prod-V-09-4": "https://www.castagniniwines.it/wp-content/uploads/2020/12/prodotto-castagnini-vino-kar-rha.jpg.webp",
    "prod-V-09-5": "https://www.castagniniwines.it/wp-content/uploads/2020/12/prodotto-castagnini-vino-la-bolla-2.jpg.webp",
    "prod-V-09-6": "https://www.castagniniwines.it/wp-content/uploads/2020/12/castagnini-vermouth-scuro1.jpg.webp",
    "prod-V-09-7": "https://www.castagniniwines.it/wp-content/uploads/2020/12/castagnini-vermouth-chiaro.jpg.webp",
    "prod-V-09-8": "https://www.castagniniwines.it/wp-content/uploads/2020/12/castagnini-cherry.jpg.webp",
    "prod-V-09-9": "https://www.castagniniwines.it/wp-content/uploads/2022/01/prodotto-castagnini-lacrimae-solis.png.webp",
    "prod-V-09-10": "https://www.castagniniwines.it/wp-content/uploads/2022/01/prodotto-castagnini-grappa.png.webp",
    "prod-V-09-11": "https://www.castagniniwines.it/wp-content/uploads/2022/01/prodotto-castagnini-olio-evo.png.webp",
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
    "prod-V-11-11": "https://www.lacasaia.it/wp-content/uploads/2021/11/riso_carnaroli-scaled.jpg"
  }
};
