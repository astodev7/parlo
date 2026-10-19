// Authored introductory grammar sequence. Progress is separate for each language.
const GRAMMAR_COURSE={
  "it": [
    {
      "id": "greetings",
      "title": "Cumprimentos e contexto",
      "topic": "greetings",
      "requires": [],
      "rule": "Ciao é informal e pode ser oi ou tchau. Buongiorno e buonasera são cumprimentos mais neutros ou educados. Buonanotte costuma marcar a despedida antes de dormir. Arrivederci é uma despedida educada. Buona giornata deseja um bom dia; ci vediamo domani significa a gente se vê amanhã.",
      "examples": [
        {
          "text": "Buonasera",
          "pt": "Boa noite, ao chegar"
        },
        {
          "text": "Buonanotte",
          "pt": "Boa noite, antes de dormir"
        },
        {
          "text": "Buona giornata",
          "pt": "Tenha um bom dia"
        },
        {
          "text": "Ci vediamo domani",
          "pt": "A gente se vê amanhã"
        }
      ],
      "pitfall": "Buonanotte não costuma substituir buonasera ao chegar a um lugar à noite.",
      "quiz": [
        {
          "before": "Ao chegar à noite: ",
          "answer": "Buonasera",
          "after": "",
          "wrong": [
            "Buonanotte",
            "Arrivederci"
          ]
        },
        {
          "before": "Antes de dormir: ",
          "answer": "Buonanotte",
          "after": "",
          "wrong": [
            "Buongiorno",
            "Buonasera"
          ]
        },
        {
          "before": "Oi e tchau entre amigos: ",
          "answer": "Ciao",
          "after": "",
          "wrong": [
            "Buonanotte",
            "Grazie"
          ]
        },
        {
          "before": "Despedida educada: ",
          "answer": "Arrivederci",
          "after": "",
          "wrong": [
            "Buongiorno",
            "Prego"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Buona giornata",
          "pt": "Tenha um bom dia"
        },
        {
          "text": "Ci vediamo domani",
          "pt": "A gente se vê amanhã"
        }
      ]
    },
    {
      "id": "identity",
      "title": "Ser, estar e apresentar-se",
      "topic": "identity",
      "requires": [
        "greetings"
      ],
      "rule": "Essere muda com a pessoa: io sono, tu sei, lui/lei è, noi siamo. O pronome pode ser omitido. Para dizer o nome, use Mi chiamo… . Aqui vamos montar o modelo mostrado com as peças disponíveis.",
      "examples": [
        {
          "text": "Io sono brasiliano",
          "pt": "Sou brasileiro"
        },
        {
          "text": "Io sono uno studente",
          "pt": "Sou estudante"
        },
        {
          "text": "Noi siamo studenti",
          "pt": "Somos estudantes"
        },
        {
          "text": "Lui è mio fratello",
          "pt": "Ele é meu irmão"
        }
      ],
      "pitfall": "Concorde o verbo com a pessoa; não use a mesma forma para todos os sujeitos.",
      "quiz": [
        {
          "before": "Io ",
          "answer": "sono",
          "after": " brasiliano",
          "wrong": [
            "sei",
            "è"
          ]
        },
        {
          "before": "Tu ",
          "answer": "sei",
          "after": " mio amico",
          "wrong": [
            "sono",
            "è"
          ]
        },
        {
          "before": "Lei ",
          "answer": "è",
          "after": " brasiliana",
          "wrong": [
            "sei",
            "sono"
          ]
        },
        {
          "before": "Noi ",
          "answer": "siamo",
          "after": " studenti",
          "wrong": [
            "sono",
            "siete"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Noi siamo studenti",
          "pt": "Somos estudantes"
        },
        {
          "text": "Lui è mio fratello",
          "pt": "Ele é meu irmão"
        }
      ]
    },
    {
      "id": "states",
      "title": "Estados e necessidades",
      "topic": "states",
      "requires": [
        "identity"
      ],
      "rule": "Fome, sede e sono usam avere: ho fame, ho sete, ho sonno. Para emoções ou cansaço, use essere: sono felice, sono stanco. O gênero muda: stanco/stanca.",
      "examples": [
        {
          "text": "Io ho fame",
          "pt": "Estou com fome"
        },
        {
          "text": "Io ho sete",
          "pt": "Estou com sede"
        },
        {
          "text": "Lui è felice",
          "pt": "Ele está feliz"
        },
        {
          "text": "Tu hai fame",
          "pt": "Você está com fome"
        }
      ],
      "pitfall": "O modo de expressar uma necessidade muda entre inglês, italiano e português.",
      "quiz": [
        {
          "before": "Io ",
          "answer": "ho",
          "after": " fame",
          "wrong": [
            "sono",
            "ha"
          ]
        },
        {
          "before": "Lei ",
          "answer": "è",
          "after": " stanca",
          "wrong": [
            "ha",
            "sei"
          ]
        },
        {
          "before": "Tu ",
          "answer": "hai",
          "after": " sete",
          "wrong": [
            "sei",
            "ho"
          ]
        },
        {
          "before": "Io ",
          "answer": "ho",
          "after": " sonno",
          "wrong": [
            "sono",
            "è"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Lui è felice",
          "pt": "Ele está feliz"
        },
        {
          "text": "Tu hai fame",
          "pt": "Você está com fome"
        }
      ]
    },
    {
      "id": "articles",
      "title": "Artigos e gênero",
      "topic": "articles",
      "requires": [
        "identity"
      ],
      "rule": "Artigos concordam com gênero e número. Il e la aparecem em il libro e la casa; os plurais são i libri e le case. Antes de vogal, l’: l’amica. Um/uma podem ser un, uno, una ou un’: un libro, uno studente, una casa, un’amica.",
      "examples": [
        {
          "text": "Il libro è sul tavolo",
          "pt": "O livro está sobre a mesa"
        },
        {
          "text": "Una casa e un libro",
          "pt": "Uma casa e um livro"
        },
        {
          "text": "Ho un libro",
          "pt": "Tenho um livro"
        },
        {
          "text": "La casa è grande",
          "pt": "A casa é grande"
        }
      ],
      "pitfall": "Un’amica tem apóstrofo; un amico, masculino, não. Uno aparece antes de s + consoante, como studente.",
      "quiz": [
        {
          "before": "Ho ",
          "answer": "un",
          "after": " libro",
          "wrong": [
            "una",
            "uno"
          ]
        },
        {
          "before": "Questa è ",
          "answer": "una",
          "after": " casa",
          "wrong": [
            "un",
            "uno"
          ]
        },
        {
          "before": "Luca è ",
          "answer": "uno",
          "after": " studente",
          "wrong": [
            "un",
            "una"
          ]
        },
        {
          "before": "Sono ",
          "answer": "le",
          "after": " sorelle di Anna",
          "wrong": [
            "la",
            "il"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Ho un libro",
          "pt": "Tenho um livro"
        },
        {
          "text": "La casa è grande",
          "pt": "A casa é grande"
        }
      ]
    },
    {
      "id": "present",
      "title": "Verbos no presente",
      "topic": "present",
      "requires": [
        "identity",
        "articles"
      ],
      "rule": "O verbo informa a pessoa. No presente: parlo/parli/parla; lavoro/lavori/lavora. Não acrescente sono antes de studio para falar de um hábito. Use ogni giorno para “todos os dias”. Com noi, uma terminação comum no presente é -iamo: studiamo, lavoriamo.",
      "examples": [
        {
          "text": "Io lavoro ogni giorno",
          "pt": "Trabalho todos os dias"
        },
        {
          "text": "Io studio italiano",
          "pt": "Estudo italiano"
        },
        {
          "text": "Loro abitano in Brasile",
          "pt": "Eles moram no Brasil"
        },
        {
          "text": "Io lavoro la mattina",
          "pt": "Trabalho de manhã"
        }
      ],
      "pitfall": "Observe a pessoa antes de escolher a terminação ou a forma do verbo.",
      "quiz": [
        {
          "before": "Io ",
          "answer": "parlo",
          "after": " italiano",
          "wrong": [
            "parli",
            "parla"
          ]
        },
        {
          "before": "Lei ",
          "answer": "lavora",
          "after": " a casa",
          "wrong": [
            "lavoro",
            "lavori"
          ]
        },
        {
          "before": "Tu ",
          "answer": "studi",
          "after": " inglese",
          "wrong": [
            "studio",
            "studia"
          ]
        },
        {
          "before": "Noi ",
          "answer": "studiamo",
          "after": " ogni giorno",
          "wrong": [
            "studio",
            "studiano"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Loro abitano in Brasile",
          "pt": "Eles moram no Brasil"
        },
        {
          "text": "Io lavoro la mattina",
          "pt": "Trabalho de manhã"
        }
      ]
    },
    {
      "id": "negative",
      "title": "Construir negativas",
      "topic": "present",
      "requires": [
        "states",
        "present"
      ],
      "rule": "Para negar, coloque non imediatamente antes do verbo: io non parlo. A ordem continua com o sujeito antes de non, quando ele aparece. Non ho fame significa “não estou com fome”.",
      "examples": [
        {
          "text": "Io non lavoro qui",
          "pt": "Não trabalho aqui"
        },
        {
          "text": "Io non parlo inglese",
          "pt": "Não falo inglês"
        },
        {
          "text": "Loro non abitano qui",
          "pt": "Eles não moram aqui"
        },
        {
          "text": "Io non ho fame",
          "pt": "Não estou com fome"
        }
      ],
      "pitfall": "A palavra de negação precisa estar na posição correta; preserve o verbo base quando houver auxiliar.",
      "quiz": [
        {
          "before": "Io ",
          "answer": "non",
          "after": " parlo inglese",
          "wrong": [
            "no",
            "sono"
          ]
        },
        {
          "before": "Lei ",
          "answer": "non",
          "after": " lavora qui",
          "wrong": [
            "no",
            "è"
          ]
        },
        {
          "before": "Noi non ",
          "answer": "siamo",
          "after": " stanchi",
          "wrong": [
            "sono",
            "è"
          ]
        },
        {
          "before": "Io non ",
          "answer": "ho",
          "after": " fame",
          "wrong": [
            "sono",
            "ha"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Loro non abitano qui",
          "pt": "Eles não moram aqui"
        },
        {
          "text": "Io non ho fame",
          "pt": "Não estou com fome"
        }
      ]
    },
    {
      "id": "questions",
      "title": "Construir perguntas",
      "topic": "identity",
      "requires": [
        "negative"
      ],
      "rule": "O italiano não precisa de um auxiliar como do para perguntar. Dove, come e quando introduzem a pergunta. Em È aperto il negozio?, o verbo pode vir antes do sujeito. Preste atenção à pontuação das peças.",
      "examples": [
        {
          "text": "Dove abiti?",
          "pt": "Onde você mora?"
        },
        {
          "text": "Tu parli inglese?",
          "pt": "Você fala inglês?"
        },
        {
          "text": "Quanto costa questo libro?",
          "pt": "Quanto custa este livro?"
        },
        {
          "text": "È aperto il negozio?",
          "pt": "A loja está aberta?"
        }
      ],
      "pitfall": "Nem toda pergunta se forma apenas acrescentando um ponto de interrogação.",
      "quiz": [
        {
          "before": "",
          "answer": "Dove",
          "after": " abiti?",
          "wrong": [
            "Quanto",
            "Chi"
          ]
        },
        {
          "before": "Come ti ",
          "answer": "chiami",
          "after": "?",
          "wrong": [
            "chiamo",
            "chiama"
          ]
        },
        {
          "before": "",
          "answer": "Quando",
          "after": " parte il treno?",
          "wrong": [
            "Chi",
            "Quanto"
          ]
        },
        {
          "before": "Quanto ",
          "answer": "costa",
          "after": " questo libro?",
          "wrong": [
            "costano",
            "costi"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Quanto costa questo libro?",
          "pt": "Quanto custa este livro?"
        },
        {
          "text": "È aperto il negozio?",
          "pt": "A loja está aberta?"
        }
      ]
    },
    {
      "id": "requests",
      "title": "Pedidos educados",
      "topic": "requests",
      "requires": [
        "questions"
      ],
      "rule": "Vorrei significa “eu gostaria” e pode vir antes do que você quer. Potrebbe + infinitivo é um pedido formal; potrebbe ripetere significa “o senhor/a senhora poderia repetir?”. Per favore suaviza o pedido.",
      "examples": [
        {
          "text": "Vorrei un biglietto",
          "pt": "Eu gostaria de uma passagem"
        },
        {
          "text": "Vorrei un tavolo per due",
          "pt": "Eu gostaria de uma mesa para dois"
        },
        {
          "text": "Vorrei un bicchiere di acqua",
          "pt": "Eu gostaria de um copo de água"
        },
        {
          "text": "Potrebbe ripetere per favore?",
          "pt": "O senhor poderia repetir por favor?"
        }
      ],
      "pitfall": "Diferencie um pedido educado de uma afirmação sobre o que você gosta.",
      "quiz": [
        {
          "before": "Eu gostaria: ",
          "answer": "Vorrei",
          "after": " un tavolo per due",
          "wrong": [
            "Vorresti",
            "Vorremmo"
          ]
        },
        {
          "before": "Potrebbe ",
          "answer": "aiutarmi",
          "after": " per favore?",
          "wrong": [
            "aiuto",
            "aiutato"
          ]
        },
        {
          "before": "Vorrei un tavolo ",
          "answer": "per",
          "after": " due",
          "wrong": [
            "di",
            "in"
          ]
        },
        {
          "before": "Potrebbe ",
          "answer": "parlare",
          "after": " lentamente?",
          "wrong": [
            "parla",
            "parlato"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Vorrei un bicchiere di acqua",
          "pt": "Eu gostaria de um copo de água"
        },
        {
          "text": "Potrebbe ripetere per favore?",
          "pt": "O senhor poderia repetir por favor?"
        }
      ]
    },
    {
      "id": "location",
      "title": "Preposições e localização",
      "topic": "directions",
      "requires": [
        "identity",
        "articles"
      ],
      "rule": "Use essere + lugar: è vicino alla… = fica perto da… . Preposições podem se juntar ao artigo: a + la = alla, in + la = nella, su + il = sul. A casa dispensa artigo.",
      "examples": [
        {
          "text": "La stazione è vicino al museo",
          "pt": "A estação fica perto do museu"
        },
        {
          "text": "La banca è vicino al museo",
          "pt": "O banco fica perto do museu"
        },
        {
          "text": "Io sono a casa",
          "pt": "Estou em casa"
        },
        {
          "text": "Il libro è sul tavolo",
          "pt": "O livro está sobre a mesa"
        }
      ],
      "pitfall": "Aprenda a preposição junto com a expressão de lugar.",
      "quiz": [
        {
          "before": "Le chiavi ",
          "answer": "sono",
          "after": " nella borsa",
          "wrong": [
            "è",
            "siamo"
          ]
        },
        {
          "before": "Noi siamo ",
          "answer": "alla",
          "after": " stazione",
          "wrong": [
            "sul",
            "nel"
          ]
        },
        {
          "before": "Io sono ",
          "answer": "a",
          "after": " casa",
          "wrong": [
            "alla",
            "sul"
          ]
        },
        {
          "before": "Il libro è ",
          "answer": "sul",
          "after": " tavolo",
          "wrong": [
            "alla",
            "nella"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Io sono a casa",
          "pt": "Estou em casa"
        },
        {
          "text": "Il libro è sul tavolo",
          "pt": "O livro está sobre a mesa"
        }
      ]
    },
    {
      "id": "routine",
      "title": "Hábitos e rotina",
      "topic": "routine",
      "requires": [
        "present",
        "negative",
        "questions"
      ],
      "rule": "O verbo informa a pessoa. No presente: parlo/parli/parla; lavoro/lavori/lavora. Não acrescente sono antes de studio para falar de um hábito. Use ogni giorno para “todos os dias”.",
      "examples": [
        {
          "text": "Io lavoro ogni giorno",
          "pt": "Trabalho todos os dias"
        },
        {
          "text": "Io studio italiano",
          "pt": "Estudo italiano"
        },
        {
          "text": "Loro abitano in Brasile",
          "pt": "Eles moram no Brasil"
        },
        {
          "text": "Io lavoro la mattina",
          "pt": "Trabalho de manhã"
        }
      ],
      "pitfall": "Não traduza palavra por palavra: identifique sujeito, verbo e complemento.",
      "quiz": [
        {
          "before": "Lei ",
          "answer": "lavora",
          "after": " ogni giorno",
          "wrong": [
            "lavoro",
            "lavori"
          ]
        },
        {
          "before": "Io ",
          "answer": "studio",
          "after": " la mattina",
          "wrong": [
            "sono studio",
            "studia"
          ]
        },
        {
          "before": "Noi non ",
          "answer": "lavoriamo",
          "after": " la domenica",
          "wrong": [
            "lavoro",
            "lavora"
          ]
        },
        {
          "before": "Tu ",
          "answer": "studi",
          "after": " ogni giorno?",
          "wrong": [
            "studio",
            "studia"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Loro abitano in Brasile",
          "pt": "Eles moram no Brasil"
        },
        {
          "text": "Io lavoro la mattina",
          "pt": "Trabalho de manhã"
        }
      ]
    },
    {
      "id": "shopping",
      "title": "Quantidade e compras",
      "topic": "shopping",
      "requires": [
        "articles",
        "requests"
      ],
      "rule": "Quanto costa? pergunta o preço de um item. No plural: quanto costano? Questo/questa concordam com o substantivo; o plural pode ser questi/queste. Para quantidade contável, quanti/quante também concordam com o nome.",
      "examples": [
        {
          "text": "Quanto costa questo libro?",
          "pt": "Quanto custa este livro?"
        },
        {
          "text": "Quanti biglietti vuoi?",
          "pt": "Quantas passagens você quer?"
        },
        {
          "text": "Questi libri costano poco",
          "pt": "Estes livros custam pouco"
        }
      ],
      "pitfall": "Com dois ou mais objetos, use costano, não costa.",
      "quiz": [
        {
          "before": "Quanto ",
          "answer": "costa",
          "after": " questo libro?",
          "wrong": [
            "costano",
            "costi"
          ]
        },
        {
          "before": "Quanto ",
          "answer": "costano",
          "after": " questi libri?",
          "wrong": [
            "costa",
            "costi"
          ]
        },
        {
          "before": "",
          "answer": "Quanti",
          "after": " biglietti vuoi?",
          "wrong": [
            "Quanto",
            "Quanta"
          ]
        },
        {
          "before": "",
          "answer": "Questa",
          "after": " borsa costa poco",
          "wrong": [
            "Questo",
            "Questi"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Quanto costa questo libro?",
          "pt": "Quanto custa este livro?"
        },
        {
          "text": "Questi libri costano poco",
          "pt": "Estes livros custam pouco"
        }
      ]
    },
    {
      "id": "plans",
      "title": "Expressar planos",
      "topic": "plans",
      "requires": [
        "routine"
      ],
      "rule": "O presente com uma indicação de tempo pode expressar um plano futuro: domani studio. Aqui vamos usar o tempo no começo, seguido do verbo e dos complementos. É uma forma comum de falar de planos próximos.",
      "examples": [
        {
          "text": "Domani studio italiano",
          "pt": "Amanhã vou estudar italiano"
        },
        {
          "text": "Domani parto per Roma",
          "pt": "Amanhã parto para Roma"
        },
        {
          "text": "Sabato visitiamo il museo",
          "pt": "Sábado vamos visitar o museu"
        },
        {
          "text": "Domani ti chiamo",
          "pt": "Amanhã vou ligar para você"
        }
      ],
      "pitfall": "A indicação de tempo e a forma do verbo trabalham juntas para expressar o plano.",
      "quiz": [
        {
          "before": "Domani ",
          "answer": "studio",
          "after": " italiano",
          "wrong": [
            "sono studio",
            "studiare"
          ]
        },
        {
          "before": "Domani ",
          "answer": "parto",
          "after": " per Roma",
          "wrong": [
            "partire",
            "sono parto"
          ]
        },
        {
          "before": "Stasera ",
          "answer": "mangiamo",
          "after": " a casa",
          "wrong": [
            "mangiare",
            "sono mangiamo"
          ]
        },
        {
          "before": "Sabato ",
          "answer": "visitiamo",
          "after": " il museo",
          "wrong": [
            "visitare",
            "sono visitiamo"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Sabato visitiamo il museo",
          "pt": "Sábado vamos visitar o museu"
        },
        {
          "text": "Domani ti chiamo",
          "pt": "Amanhã vou ligar para você"
        }
      ]
    },
    {
      "id": "problems",
      "title": "Explicar problemas",
      "topic": "problems",
      "requires": [
        "states",
        "requests",
        "location"
      ],
      "rule": "Potere expressa poder ou conseguir: posso, puoi, può. Depois dele, use o infinitivo: posso capire. Non vem antes do verbo conjugado: non posso capire. Para necessidade, ho bisogno di aiuto significa preciso de ajuda.",
      "examples": [
        {
          "text": "Non posso capire",
          "pt": "Não consigo entender"
        },
        {
          "text": "Ho bisogno di aiuto",
          "pt": "Preciso de ajuda"
        }
      ],
      "pitfall": "Depois de posso, use capire, não capisco.",
      "quiz": [
        {
          "before": "Non posso ",
          "answer": "capire",
          "after": "",
          "wrong": [
            "capisco",
            "capito"
          ]
        },
        {
          "before": "Ho bisogno ",
          "answer": "di",
          "after": " aiuto",
          "wrong": [
            "a",
            "in"
          ]
        },
        {
          "before": "Tu ",
          "answer": "puoi",
          "after": " aiutarmi?",
          "wrong": [
            "posso",
            "può"
          ]
        },
        {
          "before": "Io ",
          "answer": "non",
          "after": " posso capire",
          "wrong": [
            "no",
            "sono"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Non posso capire",
          "pt": "Não consigo entender"
        },
        {
          "text": "Ho bisogno di aiuto",
          "pt": "Preciso de ajuda"
        }
      ]
    },
    {
      "id": "past",
      "title": "Primeiras frases no passado",
      "topic": "past-plans",
      "requires": [
        "plans",
        "negative",
        "questions"
      ],
      "rule": "O passato prossimo junta avere ou essere no presente a um particípio. Exemplos com avere: ho mangiato, abbiamo lavorato. Com essere, o particípio concorda com o sujeito: lui è arrivato, lei è arrivata. Muitos verbos de movimento usam essere; aprenda o auxiliar junto com o verbo.",
      "examples": [
        {
          "text": "Ho mangiato a casa",
          "pt": "Comi em casa"
        },
        {
          "text": "Lei è arrivata ieri",
          "pt": "Ela chegou ontem"
        }
      ],
      "pitfall": "Com essere, observe gênero e número: arrivato, arrivata, arrivati, arrivate. A escolha do auxiliar depende do verbo.",
      "quiz": [
        {
          "before": "Io ",
          "answer": "ho",
          "after": " mangiato",
          "wrong": [
            "sono",
            "ha"
          ]
        },
        {
          "before": "Lei è ",
          "answer": "arrivata",
          "after": " ieri",
          "wrong": [
            "arrivato",
            "arrivare"
          ]
        },
        {
          "before": "Noi ",
          "answer": "abbiamo",
          "after": " lavorato",
          "wrong": [
            "siamo",
            "avete"
          ]
        },
        {
          "before": "Lui ",
          "answer": "è",
          "after": " arrivato",
          "wrong": [
            "ha",
            "sei"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Ho mangiato a casa",
          "pt": "Comi em casa"
        },
        {
          "text": "Lei è arrivata ieri",
          "pt": "Ela chegou ontem"
        }
      ]
    }
  ],
  "en": [
    {
      "id": "greetings",
      "title": "Cumprimentos e contexto",
      "topic": "greetings",
      "requires": [],
      "rule": "Escolha o cumprimento conforme o momento e a relação. Hello serve em situações variadas; hi é mais informal. Good evening é uma saudação à noite. Good night costuma ser uma despedida, inclusive antes de dormir. Good morning significa bom dia; see you tomorrow é até amanhã.",
      "examples": [
        {
          "text": "Good evening",
          "pt": "Boa noite, ao chegar"
        },
        {
          "text": "Good night",
          "pt": "Boa noite, ao se despedir ou dormir"
        },
        {
          "text": "Good morning",
          "pt": "Bom dia"
        },
        {
          "text": "See you tomorrow",
          "pt": "Até amanhã"
        }
      ],
      "pitfall": "Good evening e good night não são intercambiáveis em todos os contextos.",
      "quiz": [
        {
          "before": "Ao chegar à noite, diga: ",
          "answer": "Good evening",
          "after": "",
          "wrong": [
            "Good night",
            "Goodbye"
          ]
        },
        {
          "before": "Ao se despedir antes de dormir: ",
          "answer": "Good night",
          "after": "",
          "wrong": [
            "Good morning",
            "Good afternoon"
          ]
        },
        {
          "before": "Forma mais informal: ",
          "answer": "Hi",
          "after": "",
          "wrong": [
            "Good evening",
            "Good afternoon"
          ]
        },
        {
          "before": "Ao encontrar alguém pela manhã: ",
          "answer": "Good morning",
          "after": "",
          "wrong": [
            "Good night",
            "Goodbye"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Good morning",
          "pt": "Bom dia"
        },
        {
          "text": "See you tomorrow",
          "pt": "Até amanhã"
        }
      ]
    },
    {
      "id": "identity",
      "title": "Ser, estar e apresentar-se",
      "topic": "identity",
      "requires": [
        "greetings"
      ],
      "rule": "Para dizer quem você é, use sujeito + am/is/are + informação. Com I, use am; com you, are. Para o nome, também é natural dizer My name is… . He/she/it usam is; we/they usam are.",
      "examples": [
        {
          "text": "I am Brazilian",
          "pt": "Sou brasileiro(a)"
        },
        {
          "text": "I am a student",
          "pt": "Sou estudante"
        },
        {
          "text": "We are students",
          "pt": "Somos estudantes"
        },
        {
          "text": "He is my brother",
          "pt": "Ele é meu irmão"
        }
      ],
      "pitfall": "Concorde o verbo com a pessoa; não use a mesma forma para todos os sujeitos.",
      "quiz": [
        {
          "before": "I ",
          "answer": "am",
          "after": " a student",
          "wrong": [
            "is",
            "are"
          ]
        },
        {
          "before": "You ",
          "answer": "are",
          "after": " my friend",
          "wrong": [
            "am",
            "is"
          ]
        },
        {
          "before": "She ",
          "answer": "is",
          "after": " Brazilian",
          "wrong": [
            "am",
            "are"
          ]
        },
        {
          "before": "We ",
          "answer": "are",
          "after": " students",
          "wrong": [
            "is",
            "am"
          ]
        }
      ],
      "assembly": [
        {
          "text": "We are students",
          "pt": "Somos estudantes"
        },
        {
          "text": "He is my brother",
          "pt": "Ele é meu irmão"
        }
      ]
    },
    {
      "id": "states",
      "title": "Estados e necessidades",
      "topic": "states",
      "requires": [
        "identity"
      ],
      "rule": "Em inglês, fome, sede e frio usam to be: I am hungry/thirsty/cold. Não traduza literalmente “tenho fome” como I have hungry. Com she/he, use is.",
      "examples": [
        {
          "text": "I am hungry",
          "pt": "Estou com fome"
        },
        {
          "text": "I am tired",
          "pt": "Estou cansado"
        },
        {
          "text": "He is happy",
          "pt": "Ele está feliz"
        },
        {
          "text": "You are hungry",
          "pt": "Você está com fome"
        }
      ],
      "pitfall": "O modo de expressar uma necessidade muda entre inglês, italiano e português.",
      "quiz": [
        {
          "before": "I ",
          "answer": "am",
          "after": " hungry",
          "wrong": [
            "have",
            "has"
          ]
        },
        {
          "before": "She ",
          "answer": "is",
          "after": " thirsty",
          "wrong": [
            "has",
            "are"
          ]
        },
        {
          "before": "We ",
          "answer": "are",
          "after": " tired",
          "wrong": [
            "is",
            "have"
          ]
        },
        {
          "before": "He ",
          "answer": "is",
          "after": " happy",
          "wrong": [
            "have",
            "are"
          ]
        }
      ],
      "assembly": [
        {
          "text": "He is happy",
          "pt": "Ele está feliz"
        },
        {
          "text": "You are hungry",
          "pt": "Você está com fome"
        }
      ]
    },
    {
      "id": "articles",
      "title": "Artigos e gênero",
      "topic": "articles",
      "requires": [
        "identity"
      ],
      "rule": "A e an significam um/uma com substantivos contáveis no singular. A escolha depende do som seguinte: a student, an apple, an hour. The indica uma referência específica e pode acompanhar singular e plural. Em inglês, os artigos não mudam com gênero.",
      "examples": [
        {
          "text": "I have an apple",
          "pt": "Tenho uma maçã"
        },
        {
          "text": "The book is on the table",
          "pt": "O livro está sobre a mesa"
        }
      ],
      "pitfall": "An depende de som de vogal, não apenas da letra: an hour, mas a university.",
      "quiz": [
        {
          "before": "I have ",
          "answer": "an",
          "after": " apple",
          "wrong": [
            "a",
            "these"
          ]
        },
        {
          "before": "She is ",
          "answer": "a",
          "after": " student",
          "wrong": [
            "an",
            "these"
          ]
        },
        {
          "before": "This is ",
          "answer": "the",
          "after": " book we discussed",
          "wrong": [
            "these",
            "an"
          ]
        },
        {
          "before": "We waited for ",
          "answer": "an",
          "after": " hour",
          "wrong": [
            "a",
            "these"
          ]
        }
      ],
      "assembly": [
        {
          "text": "I have an apple",
          "pt": "Tenho uma maçã"
        },
        {
          "text": "The book is on the table",
          "pt": "O livro está sobre a mesa"
        }
      ]
    },
    {
      "id": "present",
      "title": "Verbos no presente",
      "topic": "present",
      "requires": [
        "identity",
        "articles"
      ],
      "rule": "Use sujeito + verbo + complemento. No presente afirmativo, he/she/it normalmente acrescentam -s ao verbo: work → works, study → studies. I work dispensa am.",
      "examples": [
        {
          "text": "I work every day",
          "pt": "Trabalho todos os dias"
        },
        {
          "text": "I study English",
          "pt": "Estudo inglês"
        },
        {
          "text": "They live in Brazil",
          "pt": "Eles moram no Brasil"
        },
        {
          "text": "I work in the morning",
          "pt": "Trabalho de manhã"
        }
      ],
      "pitfall": "Observe a pessoa antes de escolher a terminação ou a forma do verbo.",
      "quiz": [
        {
          "before": "I ",
          "answer": "work",
          "after": " here",
          "wrong": [
            "works",
            "am work"
          ]
        },
        {
          "before": "She ",
          "answer": "studies",
          "after": " English",
          "wrong": [
            "study",
            "is study"
          ]
        },
        {
          "before": "He ",
          "answer": "speaks",
          "after": " Italian",
          "wrong": [
            "speak",
            "is speak"
          ]
        },
        {
          "before": "They ",
          "answer": "live",
          "after": " in Brazil",
          "wrong": [
            "lives",
            "are live"
          ]
        }
      ],
      "assembly": [
        {
          "text": "They live in Brazil",
          "pt": "Eles moram no Brasil"
        },
        {
          "text": "I work in the morning",
          "pt": "Trabalho de manhã"
        }
      ]
    },
    {
      "id": "negative",
      "title": "Construir negativas",
      "topic": "present",
      "requires": [
        "states",
        "present"
      ],
      "rule": "Com verbos comuns, use do not ou does not + verbo base. Com she, use does not work, sem -s em work. Com to be, coloque not depois de am/is/are. Aqui usaremos as formas completas.",
      "examples": [
        {
          "text": "I do not work here",
          "pt": "Não trabalho aqui"
        },
        {
          "text": "I do not speak Italian",
          "pt": "Não falo italiano"
        },
        {
          "text": "They do not live here",
          "pt": "Eles não moram aqui"
        },
        {
          "text": "I am not hungry",
          "pt": "Não estou com fome"
        }
      ],
      "pitfall": "A palavra de negação precisa estar na posição correta; preserve o verbo base quando houver auxiliar.",
      "quiz": [
        {
          "before": "I ",
          "answer": "do not",
          "after": " work here",
          "wrong": [
            "does not",
            "am not"
          ]
        },
        {
          "before": "She does not ",
          "answer": "work",
          "after": " here",
          "wrong": [
            "works",
            "working"
          ]
        },
        {
          "before": "We ",
          "answer": "are not",
          "after": " tired",
          "wrong": [
            "do not",
            "does not"
          ]
        },
        {
          "before": "He ",
          "answer": "does not",
          "after": " study English",
          "wrong": [
            "do not",
            "is not"
          ]
        }
      ],
      "assembly": [
        {
          "text": "They do not live here",
          "pt": "Eles não moram aqui"
        },
        {
          "text": "I am not hungry",
          "pt": "Não estou com fome"
        }
      ]
    },
    {
      "id": "questions",
      "title": "Construir perguntas",
      "topic": "identity",
      "requires": [
        "negative"
      ],
      "rule": "Com to be, inverta verbo e sujeito: You are… → Are you…? Com verbos comuns, use Do/Does + sujeito + verbo base. Where e what vêm antes dessa estrutura.",
      "examples": [
        {
          "text": "Do you speak English?",
          "pt": "Você fala inglês?"
        },
        {
          "text": "Are you a student?",
          "pt": "Você é estudante?"
        },
        {
          "text": "Do they speak Italian?",
          "pt": "Eles falam italiano?"
        },
        {
          "text": "Are we late?",
          "pt": "Estamos atrasados?"
        }
      ],
      "pitfall": "Nem toda pergunta se forma apenas acrescentando um ponto de interrogação.",
      "quiz": [
        {
          "before": "",
          "answer": "Are",
          "after": " you a student?",
          "wrong": [
            "Is",
            "Am"
          ]
        },
        {
          "before": "Where ",
          "answer": "do",
          "after": " you live?",
          "wrong": [
            "does",
            "are"
          ]
        },
        {
          "before": "Does she ",
          "answer": "work",
          "after": " here?",
          "wrong": [
            "works",
            "working"
          ]
        },
        {
          "before": "What ",
          "answer": "is",
          "after": " your name?",
          "wrong": [
            "are",
            "do"
          ]
        }
      ],
      "assembly": [
        {
          "text": "Do they speak Italian?",
          "pt": "Eles falam italiano?"
        },
        {
          "text": "Are we late?",
          "pt": "Estamos atrasados?"
        }
      ]
    },
    {
      "id": "requests",
      "title": "Pedidos educados",
      "topic": "requests",
      "requires": [
        "questions"
      ],
      "rule": "I would like + objeto é uma forma educada de pedir. Para pedir uma ação, use Could you + verbo base…? Please pode ficar no fim. Would like significa “gostaria”, não “gosto”.",
      "examples": [
        {
          "text": "I would like some water",
          "pt": "Eu gostaria de um pouco de água"
        },
        {
          "text": "I would like a ticket",
          "pt": "Eu gostaria de uma passagem"
        },
        {
          "text": "I would like a table for two",
          "pt": "Eu gostaria de uma mesa para dois"
        },
        {
          "text": "Could you repeat that please?",
          "pt": "Você poderia repetir isso por favor?"
        }
      ],
      "pitfall": "Diferencie um pedido educado de uma afirmação sobre o que você gosta.",
      "quiz": [
        {
          "before": "I ",
          "answer": "would like",
          "after": " a ticket",
          "wrong": [
            "am like",
            "would likes"
          ]
        },
        {
          "before": "Could you ",
          "answer": "help",
          "after": " me?",
          "wrong": [
            "helps",
            "to help"
          ]
        },
        {
          "before": "I would like a table ",
          "answer": "for",
          "after": " two",
          "wrong": [
            "at",
            "on"
          ]
        },
        {
          "before": "Could you ",
          "answer": "speak",
          "after": " slowly?",
          "wrong": [
            "speaks",
            "to speak"
          ]
        }
      ],
      "assembly": [
        {
          "text": "I would like a table for two",
          "pt": "Eu gostaria de uma mesa para dois"
        },
        {
          "text": "Could you repeat that please?",
          "pt": "Você poderia repetir isso por favor?"
        }
      ]
    },
    {
      "id": "location",
      "title": "Preposições e localização",
      "topic": "directions",
      "requires": [
        "identity",
        "articles"
      ],
      "rule": "Para localizar, use sujeito + is/are + expressão de lugar. Next to = ao lado de; near = perto de; in = dentro de/em. The acompanha o lugar específico. At home é em casa; on the table indica sobre a mesa.",
      "examples": [
        {
          "text": "The station is near the hotel",
          "pt": "A estação fica perto do hotel"
        },
        {
          "text": "The bank is next to the hotel",
          "pt": "O banco fica ao lado do hotel"
        },
        {
          "text": "I am at home",
          "pt": "Estou em casa"
        },
        {
          "text": "The book is on the table",
          "pt": "O livro está sobre a mesa"
        }
      ],
      "pitfall": "Aprenda a preposição junto com a expressão de lugar.",
      "quiz": [
        {
          "before": "The keys ",
          "answer": "are",
          "after": " in the bag",
          "wrong": [
            "is",
            "am"
          ]
        },
        {
          "before": "The bank is next ",
          "answer": "to",
          "after": " the hotel",
          "wrong": [
            "at",
            "in"
          ]
        },
        {
          "before": "I am ",
          "answer": "at",
          "after": " home",
          "wrong": [
            "on",
            "to"
          ]
        },
        {
          "before": "The book is ",
          "answer": "on",
          "after": " the table",
          "wrong": [
            "to",
            "for"
          ]
        }
      ],
      "assembly": [
        {
          "text": "I am at home",
          "pt": "Estou em casa"
        },
        {
          "text": "The book is on the table",
          "pt": "O livro está sobre a mesa"
        }
      ]
    },
    {
      "id": "routine",
      "title": "Hábitos e rotina",
      "topic": "routine",
      "requires": [
        "present",
        "negative",
        "questions"
      ],
      "rule": "Use sujeito + verbo + complemento. No presente afirmativo, he/she/it normalmente acrescentam -s ao verbo: work → works, study → studies. I work dispensa am.",
      "examples": [
        {
          "text": "I work every day",
          "pt": "Trabalho todos os dias"
        },
        {
          "text": "I study English",
          "pt": "Estudo inglês"
        },
        {
          "text": "They live in Brazil",
          "pt": "Eles moram no Brasil"
        },
        {
          "text": "I work in the morning",
          "pt": "Trabalho de manhã"
        }
      ],
      "pitfall": "Não traduza palavra por palavra: identifique sujeito, verbo e complemento.",
      "quiz": [
        {
          "before": "She ",
          "answer": "works",
          "after": " every day",
          "wrong": [
            "work",
            "is work"
          ]
        },
        {
          "before": "I ",
          "answer": "study",
          "after": " in the morning",
          "wrong": [
            "am study",
            "studies"
          ]
        },
        {
          "before": "We ",
          "answer": "do not",
          "after": " work on Sundays",
          "wrong": [
            "does not",
            "are not"
          ]
        },
        {
          "before": "Does he ",
          "answer": "study",
          "after": " every day?",
          "wrong": [
            "studies",
            "to study"
          ]
        }
      ],
      "assembly": [
        {
          "text": "They live in Brazil",
          "pt": "Eles moram no Brasil"
        },
        {
          "text": "I work in the morning",
          "pt": "Trabalho de manhã"
        }
      ]
    },
    {
      "id": "shopping",
      "title": "Quantidade e compras",
      "topic": "shopping",
      "requires": [
        "articles",
        "requests"
      ],
      "rule": "How much pergunta preço ou quantidade não contável; how many pergunta quantidade contável no plural. Use this para um objeto próximo e these para vários. O verbo concorda: this is, these are.",
      "examples": [
        {
          "text": "How much is this ticket?",
          "pt": "Quanto custa esta passagem?"
        },
        {
          "text": "How many tickets do you need?",
          "pt": "De quantas passagens você precisa?"
        },
        {
          "text": "These books are expensive",
          "pt": "Estes livros são caros"
        }
      ],
      "pitfall": "Use how many com tickets, não how much tickets.",
      "quiz": [
        {
          "before": "How ",
          "answer": "much",
          "after": " is this ticket?",
          "wrong": [
            "many",
            "are"
          ]
        },
        {
          "before": "How ",
          "answer": "many",
          "after": " tickets do you need?",
          "wrong": [
            "much",
            "is"
          ]
        },
        {
          "before": "These books ",
          "answer": "are",
          "after": " expensive",
          "wrong": [
            "is",
            "am"
          ]
        },
        {
          "before": "",
          "answer": "This",
          "after": " ticket is cheap",
          "wrong": [
            "These",
            "Those"
          ]
        }
      ],
      "assembly": [
        {
          "text": "How much is this ticket?",
          "pt": "Quanto custa esta passagem?"
        },
        {
          "text": "These books are expensive",
          "pt": "Estes livros são caros"
        }
      ]
    },
    {
      "id": "plans",
      "title": "Expressar planos",
      "topic": "plans",
      "requires": [
        "routine"
      ],
      "rule": "Para uma intenção futura, use am/is/are + going to + verbo base. Não esqueça to. Tomorrow pode ficar no final; no modelo, vamos usar essa ordem.",
      "examples": [
        {
          "text": "I am going to study tomorrow",
          "pt": "Vou estudar amanhã"
        },
        {
          "text": "I am going to travel tomorrow",
          "pt": "Vou viajar amanhã"
        },
        {
          "text": "They are going to visit Rome",
          "pt": "Eles vão visitar Roma"
        },
        {
          "text": "I am going to call you tomorrow",
          "pt": "Vou ligar para você amanhã"
        }
      ],
      "pitfall": "A indicação de tempo e a forma do verbo trabalham juntas para expressar o plano.",
      "quiz": [
        {
          "before": "I am going ",
          "answer": "to",
          "after": " travel tomorrow",
          "wrong": [
            "for",
            "at"
          ]
        },
        {
          "before": "She ",
          "answer": "is",
          "after": " going to study English",
          "wrong": [
            "are",
            "am"
          ]
        },
        {
          "before": "We are going to ",
          "answer": "meet",
          "after": " tomorrow",
          "wrong": [
            "meeting",
            "meets"
          ]
        },
        {
          "before": "They ",
          "answer": "are",
          "after": " going to visit Rome",
          "wrong": [
            "is",
            "am"
          ]
        }
      ],
      "assembly": [
        {
          "text": "They are going to visit Rome",
          "pt": "Eles vão visitar Roma"
        },
        {
          "text": "I am going to call you tomorrow",
          "pt": "Vou ligar para você amanhã"
        }
      ]
    },
    {
      "id": "problems",
      "title": "Explicar problemas",
      "topic": "problems",
      "requires": [
        "states",
        "requests",
        "location"
      ],
      "rule": "Para pedir ajuda, use I need help. Can expressa capacidade: I can understand. Cannot ou can’t negam essa capacidade; depois deles, use o verbo base, sem to. Há também pedidos educados com could you. Can não ganha -s com she/he/it: she can, não she cans.",
      "examples": [
        {
          "text": "I cannot understand",
          "pt": "Não consigo entender"
        },
        {
          "text": "Could you help me?",
          "pt": "Você poderia me ajudar?"
        },
        {
          "text": "I need your help",
          "pt": "Preciso da sua ajuda"
        }
      ],
      "pitfall": "Diga I cannot understand, sem to entre cannot e understand.",
      "quiz": [
        {
          "before": "I cannot ",
          "answer": "understand",
          "after": "",
          "wrong": [
            "to understand",
            "understands"
          ]
        },
        {
          "before": "I ",
          "answer": "need",
          "after": " help",
          "wrong": [
            "needs",
            "am need"
          ]
        },
        {
          "before": "Could you ",
          "answer": "help",
          "after": " me?",
          "wrong": [
            "helps",
            "helping"
          ]
        },
        {
          "before": "She ",
          "answer": "can",
          "after": " speak English",
          "wrong": [
            "cans",
            "can to"
          ]
        }
      ],
      "assembly": [
        {
          "text": "I cannot understand",
          "pt": "Não consigo entender"
        },
        {
          "text": "I need your help",
          "pt": "Preciso da sua ajuda"
        }
      ]
    },
    {
      "id": "past",
      "title": "Primeiras frases no passado",
      "topic": "past-plans",
      "requires": [
        "plans",
        "negative",
        "questions"
      ],
      "rule": "No passado simples, verbos regulares costumam terminar em -ed: work → worked. Há irregulares: go → went, buy → bought. Nas negativas e perguntas com did, volte ao verbo base: did not go, Did you go? Aqui usamos as formas completas.",
      "examples": [
        {
          "text": "I went home yesterday",
          "pt": "Fui para casa ontem"
        },
        {
          "text": "Did you work yesterday?",
          "pt": "Você trabalhou ontem?"
        }
      ],
      "pitfall": "Depois de did/did not, não use went ou worked: use go ou work.",
      "quiz": [
        {
          "before": "Yesterday I ",
          "answer": "went",
          "after": " home",
          "wrong": [
            "go",
            "goed"
          ]
        },
        {
          "before": "Did you ",
          "answer": "work",
          "after": " yesterday?",
          "wrong": [
            "worked",
            "working"
          ]
        },
        {
          "before": "She did not ",
          "answer": "go",
          "after": "",
          "wrong": [
            "went",
            "goes"
          ]
        },
        {
          "before": "We ",
          "answer": "worked",
          "after": " yesterday",
          "wrong": [
            "work",
            "works"
          ]
        }
      ],
      "assembly": [
        {
          "text": "I went home yesterday",
          "pt": "Fui para casa ontem"
        },
        {
          "text": "Did you work yesterday?",
          "pt": "Você trabalhou ontem?"
        }
      ]
    }
  ]
};
