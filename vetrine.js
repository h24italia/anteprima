/* Mercatale, anteprima vetrine.
   Un'azienda per blocco dentro EX. Modificate solo questo file per correggere i dati.
   Campi: id, n (nome), cat (vino, olio, pasta, formaggi, salumi, dolci, conserve, caffe, liquori, misti),
   reg (regione), city, lat, lng, y (anno di fondazione o null), certs (DOP, DOCG, IGP, Bio),
   exp (Paesi in cui esporta: DE AT CH NL BE FR DK SE PL ES), lg (lingue: it en de fr es), moq (cartoni o null),
   d (storia in it, en, de), p (prodotti: [nome, formato]), pd (schede prodotto, facoltative), fonti (link usati).
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
      "certs": [],
      "exp": [],
      "lg": ["it", "en"],
      "moq": null,
      "d": {
        "it": "Cantina di famiglia sulle colline di Salice Terme, nell'Oltrepò Pavese, nata nella prima metà del Novecento. Pasquale Manganaro, perito agrario, segue i vigneti; il figlio Federico, enologo, la cantina. Vitigni: Pinot, Barbera, Croatina, Uva rara, Vespolina e Chardonnay.",
        "en": "Family winery in the hills of Salice Terme, Oltrepò Pavese, founded in the first half of the 20th century. Pasquale Manganaro, an agronomist, runs the vineyards; his son Federico, a winemaker, runs the cellar. Grapes: Pinot, Barbera, Croatina, Uva rara, Vespolina and Chardonnay.",
        "de": "Familienweingut in den Hügeln von Salice Terme im Oltrepò Pavese, gegründet in der ersten Hälfte des 20. Jahrhunderts. Pasquale Manganaro, Agrartechniker, betreut die Weinberge; sein Sohn Federico, Önologe, den Keller. Rebsorten: Pinot, Barbera, Croatina, Uva rara, Vespolina und Chardonnay."
      },
      "p": [
        ["Vini rossi", ""],
        ["Vini bianchi", ""],
        ["Vini frizzanti", ""],
        ["Vini dolci", ""]
      ],
      "pd": {},
      "fonti": ["https://www.winetourism.com/it/azienda-vinicola/azienda-agricola-vitivinicola-casa-garello/"]
    }
  ],
  "IMG": {}
};
