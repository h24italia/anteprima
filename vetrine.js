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
    "prod-V-04-4": "https://agricolasannunzio.it/assets/img/mini-latta.webp"
  }
};
