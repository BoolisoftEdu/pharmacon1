const assets={};
const QUESTIONS=[
  {
    "id": 1,
    "type": "QCS",
    "text": "Quel est l'objectif principal de la prophylaxie pré-exposition (PrEP) ?",
    "options": [
      {
        "key": "A",
        "text": "Guérir le VIH chez une personne infectée"
      },
      {
        "key": "B",
        "text": "Réduire le risque d'infection par le VIH chez une personne non infectée"
      },
      {
        "key": "C",
        "text": "Prévenir toutes les infections sexuellement transmissibles (IST)"
      },
      {
        "key": "D",
        "text": "Remplacer l'utilisation du préservatif"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Réduire le risque d'infection par le VIH chez une personne non infectée"
  },
  {
    "id": 2,
    "type": "QCS",
    "text": "Avant de débuter la PrEP par Truvada®, quel doit être le statut VIH de la personne ?",
    "options": [
      {
        "key": "A",
        "text": "Positif au VIH"
      },
      {
        "key": "B",
        "text": "En attente des résultats"
      },
      {
        "key": "C",
        "text": "Négatif au VIH selon un test ELISA de 4e génération"
      },
      {
        "key": "D",
        "text": "Le statut sérologique n'a pas d'importance"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Négatif au VIH selon un test ELISA de 4e génération"
  },
  {
    "id": 3,
    "type": "QCS",
    "text": "Dans quelle situation le TPE est-il indiqué ?",
    "options": [
      {
        "key": "A",
        "text": "Après une rupture ou un oubli de préservatif lors d'un rapport à risque"
      },
      {
        "key": "B",
        "text": "Pour traiter définitivement une infection par le VIH"
      },
      {
        "key": "C",
        "text": "Pour prévenir toutes les IST après un rapport sexuel"
      },
      {
        "key": "D",
        "text": "Chez toute personne souhaitant éviter le VIH à long terme"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Après une rupture ou un oubli de préservatif lors d'un rapport à risque"
  },
  {
    "id": 4,
    "type": "QCS",
    "text": "Les bêtabloquants ont pour principal effet de :",
    "options": [
      {
        "key": "A",
        "text": "Augmenter la fréquence cardiaque"
      },
      {
        "key": "B",
        "text": "Diminuer la fréquence cardiaque"
      },
      {
        "key": "C",
        "text": "Augmenter la glycémie"
      },
      {
        "key": "D",
        "text": "Dilater les bronches"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Diminuer la fréquence cardiaque"
  },
  {
    "id": 5,
    "type": "QCS",
    "text": "Parmi les indications suivantes, laquelle correspond aux bêtabloquants ?",
    "options": [
      {
        "key": "A",
        "text": "Crise d'asthme aiguë"
      },
      {
        "key": "B",
        "text": "Angor (angine de poitrine)"
      },
      {
        "key": "C",
        "text": "Infection urinaire"
      },
      {
        "key": "D",
        "text": "Anémie"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Angor (angine de poitrine)"
  },
  {
    "id": 6,
    "type": "QCS",
    "text": "Quel médicament appartient à la famille des dérivés nitrés ?",
    "options": [
      {
        "key": "A",
        "text": "Amlodipine"
      },
      {
        "key": "B",
        "text": "Bisoprolol"
      },
      {
        "key": "C",
        "text": "Trinitrine"
      },
      {
        "key": "D",
        "text": "Vérapamil"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Trinitrine"
  },
  {
    "id": 7,
    "type": "QCS",
    "text": "Les dérivés nitrés agissent principalement en provoquant :",
    "options": [
      {
        "key": "A",
        "text": "Une vasodilatation"
      },
      {
        "key": "B",
        "text": "Une augmentation de la coagulation"
      },
      {
        "key": "C",
        "text": "Une augmentation de la glycémie"
      },
      {
        "key": "D",
        "text": "Une contraction des vaisseaux"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Une vasodilatation"
  },
  {
    "id": 8,
    "type": "QCS",
    "text": "Quel est le principal mécanisme d'action des neuroleptiques (antipsychotiques) ?",
    "options": [
      {
        "key": "A",
        "text": "Ils augmentent la production d'insuline"
      },
      {
        "key": "B",
        "text": "Ils bloquent les récepteurs dopaminergiques D2"
      },
      {
        "key": "C",
        "text": "Ils stimulent les récepteurs de la sérotonine"
      },
      {
        "key": "D",
        "text": "Ils augmentent la fréquence cardiaque"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Ils bloquent les récepteurs dopaminergiques D2"
  },
  {
    "id": 9,
    "type": "QCS",
    "text": "Parmi les propositions suivantes, quelle est une indication des neuroleptiques ?",
    "options": [
      {
        "key": "A",
        "text": "Le traitement de la schizophrénie"
      },
      {
        "key": "B",
        "text": "Le traitement du diabète"
      },
      {
        "key": "C",
        "text": "Le traitement de l'asthme"
      },
      {
        "key": "D",
        "text": "Le traitement de l'insuffisance cardiaque"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Le traitement de la schizophrénie"
  },
  {
    "id": 10,
    "type": "QCS",
    "text": "Quel médicament est recommandé en cas de fièvre lors d'une varicelle ?",
    "options": [
      {
        "key": "A",
        "text": "Aspirine"
      },
      {
        "key": "B",
        "text": "Ibuprofène"
      },
      {
        "key": "C",
        "text": "Paracétamol"
      },
      {
        "key": "D",
        "text": "Diclofénac"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Paracétamol"
  },
  {
    "id": 11,
    "type": "QCS",
    "text": "Pourquoi faut-il éviter les pommades, crèmes, gels et talc sur les lésions de varicelle ?",
    "options": [
      {
        "key": "A",
        "text": "Ils augmentent la fièvre."
      },
      {
        "key": "B",
        "text": "Ils risquent de provoquer une macération et une surinfection."
      },
      {
        "key": "C",
        "text": "Ils empêchent la vaccination."
      },
      {
        "key": "D",
        "text": "Ils rendent le vaccin inefficace."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Ils risquent de provoquer une macération et une surinfection."
  },
  {
    "id": 12,
    "type": "QCS",
    "text": "Dans quelle situation le TPE est-il indiqué ?",
    "options": [
      {
        "key": "A",
        "text": "Après une rupture ou un oubli de préservatif lors d'un rapport à risque"
      },
      {
        "key": "B",
        "text": "Pour traiter définitivement une infection par le VIH"
      },
      {
        "key": "C",
        "text": "Pour prévenir toutes les IST après un rapport sexuel"
      },
      {
        "key": "D",
        "text": "Chez toute personne souhaitant éviter le VIH à long terme"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Après une rupture ou un oubli de préservatif lors d'un rapport à risque"
  },
  {
    "id": 13,
    "type": "QCS",
    "text": "Pour quelle catégorie de personnes la vaccination contre la varicelle est-elle recommandée si elles n'ont jamais eu la maladie ?",
    "options": [
      {
        "key": "A",
        "text": "Les adolescents de 12 à 18 ans et les adultes."
      },
      {
        "key": "B",
        "text": "Les nourrissons de moins de 6 mois."
      },
      {
        "key": "C",
        "text": "Les personnes déjà immunisées."
      },
      {
        "key": "D",
        "text": "Toutes les personnes âgées de plus de 65 ans"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Les adolescents de 12 à 18 ans et les adultes."
  },
  {
    "id": 14,
    "type": "QCS",
    "text": "Quelle affirmation concernant la vaccination contre la varicelle et la grossesse est correcte ?",
    "options": [
      {
        "key": "A",
        "text": "Le vaccin est recommandé pendant la grossesse."
      },
      {
        "key": "B",
        "text": "Aucun test n'est nécessaire avant la vaccination."
      },
      {
        "key": "C",
        "text": "Une grossesse peut être envisagée immédiatement après la vaccination."
      },
      {
        "key": "D",
        "text": "Le vaccin est contre-indiqué pendant la grossesse."
      }
    ],
    "correct": [
      "D"
    ],
    "feedback": "Selon le corrigé fourni : D. Le vaccin est contre-indiqué pendant la grossesse."
  },
  {
    "id": 15,
    "type": "QCS",
    "text": "Parmi les propositions suivantes, laquelle est vraie ? L’abacavir, inhibiteur nucléosidique de la transcriptase inverse du VIH, est un antirétroviral",
    "options": [
      {
        "key": "A",
        "text": "Qui nécessite la détection de l'allèle HLA-B*5701 avant son administration"
      },
      {
        "key": "B",
        "text": "Qui peut provoquer une hyperbilirubinémie"
      },
      {
        "key": "C",
        "text": "Qui provoque de nombreuses interactions médicamenteuses"
      },
      {
        "key": "D",
        "text": "Administré par voie intraveineuse"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Qui nécessite la détection de l'allèle HLA-B*5701 avant son administration"
  },
  {
    "id": 16,
    "type": "QCS",
    "text": "Parmi les affirmations suivantes concernant les inhibiteurs nucléosidiques de la transcriptase inverse (INTI) utilisés dans le traitement de l'infection par le VIH, laquelle est correcte ?",
    "options": [
      {
        "key": "A",
        "text": "Ils sont à l'origine de nombreuses interactions médicamenteuses via le cytochrome P450."
      },
      {
        "key": "B",
        "text": "Ils nécessitent une activation intracellulaire par phosphorylation avant d'exercer leur activité antivirale."
      },
      {
        "key": "C",
        "text": "Ils agissent principalement comme inducteurs enzymatiques."
      },
      {
        "key": "D",
        "text": "Ils exercent leur activité en inhibant directement les enzymes hépatiques du métabolisme."
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Ils nécessitent une activation intracellulaire par phosphorylation avant d'exercer leur activité antivirale."
  },
  {
    "id": 17,
    "type": "QCS",
    "text": "Quelle est la première anomalie du diabète de type 2 ?",
    "options": [
      {
        "key": "A",
        "text": "Hypoinsulinémie"
      },
      {
        "key": "B",
        "text": "Résistance à l'insuline"
      },
      {
        "key": "C",
        "text": "Absence de glucagon"
      },
      {
        "key": "D",
        "text": "Destruction des cellules β"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Résistance à l'insuline"
  },
  {
    "id": 18,
    "type": "QCS",
    "text": "Au début du diabète de type 2, le pancréas répond à la résistance à l'insuline en :",
    "options": [
      {
        "key": "A",
        "text": "Produisant moins d'insuline"
      },
      {
        "key": "B",
        "text": "Produisant plus d'insuline"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Produisant plus d'insuline"
  },
  {
    "id": 19,
    "type": "QCS",
    "text": "L'hyperinsulinémie correspond à :",
    "options": [
      {
        "key": "A",
        "text": "Une diminution d'insuline"
      },
      {
        "key": "B",
        "text": "Une absence d'insuline"
      },
      {
        "key": "C",
        "text": "Une augmentation d'insuline dans le sang"
      },
      {
        "key": "D",
        "text": "Une baisse de glycémie"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. Une augmentation d'insuline dans le sang"
  },
  {
    "id": 20,
    "type": "QCS",
    "text": "Après plusieurs années d'évolution du diabète de type 2 :",
    "options": [
      {
        "key": "A",
        "text": "Les cellules β s'épuisent"
      },
      {
        "key": "B",
        "text": "L'insuline augmente indéfiniment"
      },
      {
        "key": "C",
        "text": "Le pancréas grossit"
      },
      {
        "key": "D",
        "text": "Le diabète guérit"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Les cellules β s'épuisent"
  },
  {
    "id": 21,
    "type": "QCS",
    "text": "Le GLP-1 stimule :",
    "options": [
      {
        "key": "A",
        "text": "La sécrétion d'insuline"
      },
      {
        "key": "B",
        "text": "La sécrétion de cortisol"
      },
      {
        "key": "C",
        "text": "La sécrétion d'adrénaline"
      },
      {
        "key": "D",
        "text": "La sécrétion de TSH"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. La sécrétion d'insuline"
  },
  {
    "id": 22,
    "type": "QCS",
    "text": "Les inhibiteurs de DPP-4 :",
    "options": [
      {
        "key": "A",
        "text": "Détruisent le GLP-1"
      },
      {
        "key": "B",
        "text": "Empêchent sa dégradation"
      },
      {
        "key": "C",
        "text": "Bloquent l'insuline"
      },
      {
        "key": "D",
        "text": "Augmentent le glucagon"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. Empêchent sa dégradation"
  },
  {
    "id": 23,
    "type": "QCS",
    "text": "Quel médicament est un analogue du GLP-1 ?",
    "options": [
      {
        "key": "A",
        "text": "Sémaglutide (Ozempic®)"
      },
      {
        "key": "B",
        "text": "Carbimazole"
      },
      {
        "key": "C",
        "text": "Lévothyrox"
      },
      {
        "key": "D",
        "text": "Cynomel"
      }
    ],
    "correct": [
      "A"
    ],
    "feedback": "Selon le corrigé fourni : A. Sémaglutide (Ozempic®)"
  },
  {
    "id": 24,
    "type": "QCS",
    "text": "La thyroïde est située :",
    "options": [
      {
        "key": "A",
        "text": "Dans le cerveau"
      },
      {
        "key": "B",
        "text": "Dans le thorax"
      },
      {
        "key": "C",
        "text": "À la base du cou"
      },
      {
        "key": "D",
        "text": "Dans l'abdomen"
      }
    ],
    "correct": [
      "C"
    ],
    "feedback": "Selon le corrigé fourni : C. À la base du cou"
  },
  {
    "id": 25,
    "type": "QCS",
    "text": "Les principales hormones thyroïdiennes sont :",
    "options": [
      {
        "key": "A",
        "text": "TSH et TRH"
      },
      {
        "key": "B",
        "text": "T3 et T4"
      },
      {
        "key": "C",
        "text": "FSH et LH"
      },
      {
        "key": "D",
        "text": "Insuline et glucagon"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. T3 et T4"
  },
  {
    "id": 26,
    "type": "QCS",
    "text": "La TSH est produite par :",
    "options": [
      {
        "key": "A",
        "text": "La thyroïde"
      },
      {
        "key": "B",
        "text": "L'hypophyse"
      },
      {
        "key": "C",
        "text": "Le pancréas"
      },
      {
        "key": "D",
        "text": "Le foie"
      }
    ],
    "correct": [
      "B"
    ],
    "feedback": "Selon le corrigé fourni : B. L'hypophyse"
  },
  {
    "id": 27,
    "type": "QCM",
    "text": "Parmi les affirmations suivantes, lesquelles sont vraies ? L’Herpès simplex virus de type 2 (HSV-2) se transmet par :",
    "options": [
      {
        "key": "A",
        "text": "la salive"
      },
      {
        "key": "B",
        "text": "voie respiratoire"
      },
      {
        "key": "C",
        "text": "voie sexuelle"
      },
      {
        "key": "D",
        "text": "voie sanguin"
      }
    ],
    "correct": [
      "A",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. la salive / C. voie sexuelle"
  },
  {
    "id": 28,
    "type": "QCM",
    "text": "Quels sont les 2 principaux traitements de l’herpes virus ?",
    "options": [
      {
        "key": "A",
        "text": "Zovirax"
      },
      {
        "key": "B",
        "text": "Valaciclovir"
      },
      {
        "key": "C",
        "text": "Diprosone"
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Zovirax / B. Valaciclovir"
  },
  {
    "id": 29,
    "type": "QCM",
    "text": "Dans quelles situations l'éducation thérapeutique du patient (ETP) vivant avec le VIH doit-elle être proposée?",
    "options": [
      {
        "key": "A",
        "text": "Dès l'annonce du diagnostic."
      },
      {
        "key": "B",
        "text": "Lors de l'instauration d'un traitement antirétroviral"
      },
      {
        "key": "C",
        "text": "En cas de difficultés d'observance ou d'adhésion thérapeutique."
      },
      {
        "key": "D",
        "text": "Lors d'un échec thérapeutique nécessitant une réévaluation de la prise en charge."
      }
    ],
    "correct": [
      "A",
      "B",
      "C",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : A. Dès l'annonce du diagnostic. / B. Lors de l'instauration d'un traitement antirétroviral / C. En cas de difficultés d'observance ou d'adhésion thérapeutique. / D. Lors d'un échec thérapeutique nécessitant une réévaluation de la prise en charge."
  },
  {
    "id": 30,
    "type": "QCM",
    "text": "Quels sont les rôles des Béta bloquant",
    "options": [
      {
        "key": "A",
        "text": "Ils participent à la prise en charge de l'infarctus du myocarde."
      },
      {
        "key": "B",
        "text": "Ils stimulent les récepteurs β1 et β2 adrénergiques."
      },
      {
        "key": "C",
        "text": "Ils augmentent la vitesse de conduction auriculo-ventriculaire (effet dromotrope positif)"
      },
      {
        "key": "D",
        "text": "Certains bêta-bloquants sont indiqués dans le traitement de l'insuffisance cardiaque chronique stable non décompensée."
      }
    ],
    "correct": [
      "A",
      "D"
    ],
    "feedback": "Selon le corrigé fourni : A. Ils participent à la prise en charge de l'infarctus du myocarde. / D. Certains bêta-bloquants sont indiqués dans le traitement de l'insuffisance cardiaque chronique stable non décompensée."
  },
  {
    "id": 31,
    "type": "QCM",
    "text": "Concernant la dépression et les neurotransmetteurs, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "La dépression peut être associée à une diminution de la sérotonine."
      },
      {
        "key": "B",
        "text": "La noradrénaline est un neurotransmetteur impliqué dans la dépression."
      },
      {
        "key": "C",
        "text": "La dopamine peut également être impliquée dans certains cas de dépression."
      },
      {
        "key": "D",
        "text": "La dépression est due uniquement à un excès de dopamine."
      },
      {
        "key": "E",
        "text": "Les neurotransmetteurs n'interviennent pas dans la régulation de l'humeur."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. La dépression peut être associée à une diminution de la sérotonine. / B. La noradrénaline est un neurotransmetteur impliqué dans la dépression. / C. La dopamine peut également être impliquée dans certains cas de dépression."
  },
  {
    "id": 32,
    "type": "QCM",
    "text": "Concernant les antidépresseurs, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Les antidépresseurs augmentent la quantité de certains neurotransmetteurs dans le cerveau."
      },
      {
        "key": "B",
        "text": "Ils agissent notamment en bloquant la recapture de certains neurotransmetteurs."
      },
      {
        "key": "C",
        "text": "Ils peuvent provoquer des effets indésirables digestifs ou sexuels."
      },
      {
        "key": "D",
        "text": "Leur effet sur l'humeur est immédiat dès la première prise."
      },
      {
        "key": "E",
        "text": "Ils diminuent la quantité de sérotonine disponible dans le cerveau."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Les antidépresseurs augmentent la quantité de certains neurotransmetteurs dans le cerveau. / B. Ils agissent notamment en bloquant la recapture de certains neurotransmetteurs. / C. Ils peuvent provoquer des effets indésirables digestifs ou sexuels."
  },
  {
    "id": 33,
    "type": "QCM",
    "text": "Concernant les corticoïdes dans l’asthme, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Ils diminuent l’inflammation des bronches."
      },
      {
        "key": "B",
        "text": "Ils sont utilisés comme traitement anti-inflammatoire de fond de l’asthme persistant."
      },
      {
        "key": "C",
        "text": "Ils provoquent une bronchodilatation immédiate."
      },
      {
        "key": "D",
        "text": "Ils sont contre-indiqués dans l’asthme."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Ils diminuent l’inflammation des bronches. / B. Ils sont utilisés comme traitement anti-inflammatoire de fond de l’asthme persistant."
  },
  {
    "id": 34,
    "type": "QCM",
    "text": "Concernant l’utilisation des corticoïdes chez le patient asthmatique, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Ils peuvent être administrés par voie inhalée."
      },
      {
        "key": "B",
        "text": "Ils peuvent être prescrits par voie orale lors d’une exacerbation."
      },
      {
        "key": "C",
        "text": "Ils remplacent toujours les bronchodilatateurs."
      },
      {
        "key": "D",
        "text": "Ils sont indiqués uniquement en cas de crise sévère."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Ils peuvent être administrés par voie inhalée. / B. Ils peuvent être prescrits par voie orale lors d’une exacerbation."
  },
  {
    "id": 35,
    "type": "QCM",
    "text": "Quels effets indésirables peuvent être observés avec les corticoïdes inhalés ?",
    "options": [
      {
        "key": "A",
        "text": "Candidose oropharyngée."
      },
      {
        "key": "B",
        "text": "Raucité de la voix."
      },
      {
        "key": "C",
        "text": "Insuffisance rénale aiguë."
      },
      {
        "key": "D",
        "text": "Hypoglycémie sévère."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Candidose oropharyngée. / B. Raucité de la voix."
  },
  {
    "id": 36,
    "type": "QCM",
    "text": "Concernant les bêtabloquants, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Ils diminuent la fréquence cardiaque."
      },
      {
        "key": "B",
        "text": "Ils réduisent les besoins en oxygène du myocarde."
      },
      {
        "key": "C",
        "text": "Ils sont utilisés dans l'hypertension artérielle."
      },
      {
        "key": "D",
        "text": "Ils provoquent une vasodilatation immédiate des coronaires."
      },
      {
        "key": "E",
        "text": "Ils augmentent la fréquence cardiaque."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Ils diminuent la fréquence cardiaque. / B. Ils réduisent les besoins en oxygène du myocarde. / C. Ils sont utilisés dans l'hypertension artérielle."
  },
  {
    "id": 37,
    "type": "QCM",
    "text": "Concernant les dérivés nitrés, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Ils provoquent une vasodilatation des vaisseaux sanguins."
      },
      {
        "key": "B",
        "text": "Ils sont indiqués dans l'angor."
      },
      {
        "key": "C",
        "text": "Ils augmentent la pression artérielle."
      },
      {
        "key": "D",
        "text": "Ils ralentissent systématiquement la fréquence cardiaque."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Ils provoquent une vasodilatation des vaisseaux sanguins. / B. Ils sont indiqués dans l'angor."
  },
  {
    "id": 38,
    "type": "QCM",
    "text": "Concernant les antagonistes calciques, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Ils bloquent l'entrée du calcium dans les cellules cardiaques et vasculaires."
      },
      {
        "key": "B",
        "text": "Ils peuvent être utilisés dans l'HTA."
      },
      {
        "key": "C",
        "text": "Ils peuvent entraîner des œdèmes des membres inférieurs."
      },
      {
        "key": "D",
        "text": "Ils augmentent la pression artérielle."
      },
      {
        "key": "E",
        "text": "Ils sont contre-indiqués dans les troubles du rythme."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. Ils bloquent l'entrée du calcium dans les cellules cardiaques et vasculaires. / B. Ils peuvent être utilisés dans l'HTA. / C. Ils peuvent entraîner des œdèmes des membres inférieurs."
  },
  {
    "id": 39,
    "type": "QCM",
    "text": "Quels paramètres doivent être surveillés chez un patient recevant un traitement cardiovasculaire (bêtabloquants, dérivés nitrés ou antagonistes calciques) ?",
    "options": [
      {
        "key": "A",
        "text": "La tension artérielle."
      },
      {
        "key": "B",
        "text": "La fréquence cardiaque."
      },
      {
        "key": "C",
        "text": "L'apparition de signes d'hypotension ou de vertiges."
      },
      {
        "key": "D",
        "text": "La couleur des cheveux."
      },
      {
        "key": "E",
        "text": "L'acuité visuelle uniquement."
      }
    ],
    "correct": [
      "A",
      "B",
      "C"
    ],
    "feedback": "Selon le corrigé fourni : A. La tension artérielle. / B. La fréquence cardiaque. / C. L'apparition de signes d'hypotension ou de vertiges."
  },
  {
    "id": 40,
    "type": "QCM",
    "text": "Concernant l’asthme chez la femme enceinte, quelles affirmations sont exactes ?",
    "options": [
      {
        "key": "A",
        "text": "Un asthme mal contrôlé peut entraîner des complications maternelles et fœtales."
      },
      {
        "key": "B",
        "text": "Le traitement de fond de l’asthme doit généralement être poursuivi pendant la grossesse."
      },
      {
        "key": "C",
        "text": "Tous les traitements de l’asthme doivent être arrêtés dès le début de la grossesse."
      },
      {
        "key": "D",
        "text": "Les crises d’asthme n'ont aucun impact sur le fœtus."
      },
      {
        "key": "E",
        "text": "L'asthme disparaît systématiquement pendant la grossesse."
      }
    ],
    "correct": [
      "A",
      "B"
    ],
    "feedback": "Selon le corrigé fourni : A. Un asthme mal contrôlé peut entraîner des complications maternelles et fœtales. / B. Le traitement de fond de l’asthme doit généralement être poursuivi pendant la grossesse."
  }
];
const json=(d,status=200,headers={})=>Response.json(d,{status,headers:{'Cache-Control':'no-store',...headers}});
async function sign(value,secret){let k=await crypto.subtle.importKey('raw',new TextEncoder().encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return Array.from(new Uint8Array(await crypto.subtle.sign('HMAC',k,new TextEncoder().encode(value)))).map(x=>x.toString(16).padStart(2,'0')).join('')}
async function isAdmin(req,env){let c=req.headers.get('Cookie')?.match(/ue211exam1admin=([^;]+)/)?.[1];if(!c||!env.ADMIN_PASSWORD)return false;let [expiry,sig]=c.split('.');return Number(expiry)>Date.now()&&sig===await sign(expiry,env.ADMIN_PASSWORD)}
async function objects(env,prefix){let all=[],cursor;do{const l=await env.BUCKET.list({prefix,cursor});all.push(...await Promise.all(l.objects.map(o=>readObject(env,o.key))));cursor=l.truncated?l.cursor:undefined}while(cursor);return all.filter(Boolean)}
async function rows(env){const saved=await objects(env,'submissions/'),byId=new Map(saved.map(r=>[r.id,{...r,status:'completed',answered:QUESTIONS.filter(q=>(r.answers[q.id]||[]).length).length}]));for(const a of await objects(env,'attempts/')){if(!byId.has(a.id))byId.set(a.id,makeRow(a,false))}return [...byId.values()].sort((a,b)=>b.created_at.localeCompare(a.created_at))}
const equal=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
export default {async fetch(req,env){try{const path=new URL(req.url).pathname;const handled=await attemptRoutes(req,env,path);if(handled)return handled;if(assets[path])return new Response(assets[path][0],{headers:{'Content-Type':assets[path][1]}});
if(path==='/api/questions')return json(QUESTIONS.map(({id,type,text,options})=>({id,type,text,options})));
if(path==='/api/admin/login'&&req.method==='POST'){let d=await req.json();if(!env.ADMIN_PASSWORD||d.password!==env.ADMIN_PASSWORD)return json({error:'Mot de passe incorrect.'},401);let exp=String(Date.now()+8*3600000);return json({ok:true},200,{'Set-Cookie':`ue211exam1admin=${exp}.${await sign(exp,env.ADMIN_PASSWORD)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`})}
if(path==='/api/admin/logout')return json({ok:true},200,{'Set-Cookie':'ue211exam1admin=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0'});
if(path==='/api/admin/me')return json({admin:await isAdmin(req,env)});
if(path.startsWith('/api/admin/')){if(!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(path.endsWith('/questions'))return json(QUESTIONS);let data=await rows(env);if(path.endsWith('/results'))return json({results:data});if(path.endsWith('/export.csv')||path.endsWith('/export.xlsx'))return exportData(data,path.endsWith('.xlsx'));}
if(path==='/api/submit'&&req.method==='POST'){const d=await req.json(),a=await readObject(env,'attempts/'+d.attempt_token+'.json');if(!a)return json({error:'Tentative invalide'},409);if(a.submitted){const row=await readObject(env,'submissions/'+a.id+'.json');return json(withReview(row))}if(!a.deadline||Date.now()<=a.deadline+5000)a.answers=cleanAnswers(d.answers);return json(await finishAttempt(env,a));}
return json({error:'Page introuvable'},404)}catch(e){return json({error:'Erreur du serveur. Réessayez.'},500)}}};
const xml=s=>String(s??'').replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
function zip(files){let chunks=[],central=[],offset=0;const enc=new TextEncoder();const header=(n)=>new DataView(new ArrayBuffer(n));function crc(bytes){let c=0xffffffff;for(let b of bytes){c^=b;for(let i=0;i<8;i++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0}for(let [name,content]of Object.entries(files)){let n=enc.encode(name),b=enc.encode(content),c=crc(b),h=header(30);h.setUint32(0,0x04034b50,true);h.setUint16(4,20,true);h.setUint32(14,c,true);h.setUint32(18,b.length,true);h.setUint32(22,b.length,true);h.setUint16(26,n.length,true);chunks.push(new Uint8Array(h.buffer),n,b);let z=header(46);z.setUint32(0,0x02014b50,true);z.setUint16(4,20,true);z.setUint16(6,20,true);z.setUint32(16,c,true);z.setUint32(20,b.length,true);z.setUint32(24,b.length,true);z.setUint16(28,n.length,true);z.setUint32(42,offset,true);central.push(new Uint8Array(z.buffer),n);offset+=30+n.length+b.length}let size=central.reduce((s,b)=>s+b.length,0),e=header(22);e.setUint32(0,0x06054b50,true);e.setUint16(8,Object.keys(files).length,true);e.setUint16(10,Object.keys(files).length,true);e.setUint32(12,size,true);e.setUint32(16,offset,true);return new Blob([...chunks,...central,e.buffer])}
function exportData(data,xlsx){let matrix=[['ID','Date UTC','Nom','Prénom','Groupe','Score','Total','Note /20','Durée (s)','État','Questions renseignées',...QUESTIONS.map(q=>'Q'+q.id+' réponse'),...QUESTIONS.map(q=>'Q'+q.id+' résultat')],...data.map(r=>[r.id,r.created_at,r.nom,r.prenom,r.groupe,r.score,r.total,r.score20,r.duration_seconds,r.status==='in_progress'?'En cours — note provisoire':'Terminée',r.answered??QUESTIONS.length,...QUESTIONS.map(q=>(r.answers[q.id]||[]).join(', ')),...QUESTIONS.map(q=>Number(equal(r.answers[q.id]||[],q.correct)))])];if(!xlsx)return new Response('\ufeff'+matrix.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(';')).join('\r\n'),{headers:{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':'attachment; filename=resultats_quiz.csv'}});let sheet='<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>'+matrix.map(r=>'<row>'+r.map(x=>typeof x==='number'?`<c><v>${x}</v></c>`:`<c t="inlineStr"><is><t>${xml(x)}</t></is></c>`).join('')+'</row>').join('')+'</sheetData></worksheet>';let files={'[Content_Types].xml':'<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>','_rels/.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>','xl/workbook.xml':'<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Résultats" sheetId="1" r:id="rId1"/></sheets></workbook>','xl/_rels/workbook.xml.rels':'<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>','xl/worksheets/sheet1.xml':sheet};return new Response(zip(files),{headers:{'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','Content-Disposition':'attachment; filename=resultats_quiz.xlsx'}})}
const defaultSettings={timed:false,minutes:30,max_attempts:0,allow_resume:true};
async function readObject(env,key){let o=await env.BUCKET.get(key);return o?JSON.parse(await o.text()):null}
async function attemptRoutes(req,env,path){
if(path==='/api/settings'||path==='/api/admin/settings'){if(path.includes('/admin/')&&!await isAdmin(req,env))return json({error:'Accès formateur requis.'},401);if(req.method==='POST'){let s=await req.json();if(typeof s.timed!=='boolean'||typeof s.allow_resume!=='boolean'||!Number.isInteger(s.minutes)||s.minutes<1||s.minutes>240||!Number.isInteger(s.max_attempts)||s.max_attempts<0||s.max_attempts>100)return json({error:'Durée : 1 à 240 minutes. Tentatives : 0 à 100.'},400);await env.BUCKET.put('config/settings.json',JSON.stringify({timed:s.timed,minutes:s.minutes,max_attempts:s.max_attempts,allow_resume:s.allow_resume}));return json({ok:true})}return json(await readObject(env,'config/settings.json')||defaultSettings)}
if(path==='/api/start'&&req.method==='POST'){let d=await req.json(),nom=String(d.nom||'').trim(),prenom=String(d.prenom||'').trim();if(nom.length<2||nom.length>80||prenom.length<2||prenom.length>80)return json({error:'Nom et prénom obligatoires.'},400);const identity=(nom+'|'+prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ');let settings=await readObject(env,'config/settings.json')||defaultSettings;let previous=d.token?await readObject(env,'attempts/'+d.token+'.json'):null;if(previous&&!previous.submitted&&previous.identity===identity&&previous.allow_resume){return json(previous)}let count=0,cursor;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);if(a.identity===identity)count++}cursor=l.truncated?l.cursor:undefined}while(cursor);let old=(await rows(env)).filter(r=>(r.nom+'|'+r.prenom).normalize('NFKC').toLocaleLowerCase('fr').replace(/\s+/g,' ')===identity);let attemptSubmissionIds=new Set();cursor=undefined;do{let l=await env.BUCKET.list({prefix:'attempts/',cursor});for(let o of l.objects){let a=await readObject(env,o.key);attemptSubmissionIds.add(a.id)}cursor=l.truncated?l.cursor:undefined}while(cursor);count+=old.filter(r=>!attemptSubmissionIds.has(r.id)).length;if(settings.max_attempts&&count>=settings.max_attempts)return json({error:'Nombre maximal de tentatives atteint. Contactez votre formateur.'},403);let now=Date.now(),a={token:crypto.randomUUID(),id:now*1000+crypto.getRandomValues(new Uint16Array(1))[0]%1000,identity,nom,prenom,started_at:now,deadline:settings.timed?now+settings.minutes*60000:null,allow_resume:settings.allow_resume,answers:{},submitted:false};await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json(a)}
if(path==='/api/progress'&&req.method==='POST'){const d=await req.json(),a=await readObject(env,'attempts/'+d.token+'.json');if(!a)return json({error:'Tentative invalide'},409);if(a.submitted)return json({ok:true,completed:true,result:withReview(await readObject(env,'submissions/'+a.id+'.json'))});if(a.deadline&&Date.now()>a.deadline)return json({ok:true,completed:true,result:await finishAttempt(env,a)});a.answers=cleanAnswers(d.answers);a.confirmed=QUESTIONS.filter(q=>(d.confirmed||[]).includes(q.id)&&(a.answers[q.id]||[]).length>0).map(q=>q.id);a.current=Number.isInteger(d.current)?Math.max(0,Math.min(QUESTIONS.length-1,d.current)):0;a.updated_at=new Date().toISOString();if(a.confirmed.length===QUESTIONS.length)return json({ok:true,completed:true,result:await finishAttempt(env,a)});await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return json({ok:true,completed:false,updated_at:a.updated_at})}

return null}

function cleanAnswers(input){if(!input||typeof input!=='object'||Array.isArray(input)||JSON.stringify(input).length>30000)throw Error('Réponses invalides');const answers={};for(const q of QUESTIONS){const a=input[q.id]||[];if(!Array.isArray(a)||a.some(v=>!q.options.some(o=>o.key===v))||new Set(a).size!==a.length||(q.type==='QCS'&&a.length>1))throw Error('Réponse invalide');answers[q.id]=a}return answers}
function makeRow(a,completed){const answers=a.answers||{},score=QUESTIONS.filter(q=>equal(answers[q.id]||[],q.correct)).length;return {id:a.id,nom:a.nom,prenom:a.prenom,groupe:'',created_at:completed?new Date().toISOString():new Date(a.started_at).toISOString(),updated_at:a.updated_at||new Date(a.started_at).toISOString(),score,total:QUESTIONS.length,score20:Math.round(score*2000/QUESTIONS.length)/100,duration_seconds:Math.max(0,Math.round((Math.min(Date.now(),a.deadline||Date.now())-a.started_at)/1000)),answers,status:completed?'completed':'in_progress',answered:QUESTIONS.filter(q=>(answers[q.id]||[]).length).length}}
function withReview(row){return {...row,review:QUESTIONS.map(q=>({...q,selected:row.answers[q.id]||[],success:equal(row.answers[q.id]||[],q.correct)}))}}
async function finishAttempt(env,a){const existing=await readObject(env,'submissions/'+a.id+'.json');if(existing)return withReview(existing);const row=makeRow(a,true);await env.BUCKET.put('submissions/'+a.id+'.json',JSON.stringify(row));a.submitted=true;await env.BUCKET.put('attempts/'+a.token+'.json',JSON.stringify(a));return withReview(row)}
