// Author-written bilingual scenarios. Existing lesson IDs remain unchanged.
const COURSE_EXPANSION=[
  {
    "title": "Pela cidade",
    "description": "Pedir informações, usar transporte e chegar ao destino",
    "topic": "directions",
    "lessons": [
      {
        "title": "Pedir direções",
        "goal": "Perguntar onde fica um lugar e entender uma orientação simples.",
        "notes": {
          "it": "“Dov’è” é a contração de “dove è”. Para orientar, use “vai dritto”, “gira a destra” e “gira a sinistra”. Em pedidos formais, comece com “Scusi”.",
          "en": "“Where is…?” pergunta onde algo fica. Nas instruções, o verbo vem sem sujeito: “Go straight”, “Turn right”. “Excuse me” é uma abertura educada."
        },
        "rows": [
          [
            "Scusi, dov'è la stazione?",
            "Excuse me, where is the station?",
            "Com licença, onde fica a estação?"
          ],
          [
            "Vai dritto",
            "Go straight",
            "Siga em frente"
          ],
          [
            "Gira a destra",
            "Turn right",
            "Vire à direita"
          ],
          [
            "Gira a sinistra",
            "Turn left",
            "Vire à esquerda"
          ],
          [
            "È vicino?",
            "Is it nearby?",
            "É perto?"
          ],
          [
            "È a cinque minuti a piedi",
            "It's a five-minute walk",
            "Fica a cinco minutos a pé"
          ]
        ],
        "dialogue": [
          [
            "Você",
            "Scusi, dov'è la stazione?",
            "Excuse me, where is the station?",
            "Com licença, onde fica a estação?"
          ],
          [
            "Morador",
            "Vai dritto e gira a destra",
            "Go straight and turn right",
            "Siga em frente e vire à direita"
          ],
          [
            "Você",
            "È vicino?",
            "Is it nearby?",
            "É perto?"
          ],
          [
            "Morador",
            "Sì, è a cinque minuti a piedi",
            "Yes, it's a five-minute walk",
            "Sim, fica a cinco minutos a pé"
          ]
        ],
        "question": "Quanto tempo leva para chegar a pé?",
        "answer": "Cinco minutos",
        "explanation": "A pessoa diz “cinque minuti” / “five-minute walk”: são cinco minutos caminhando."
      },
      {
        "title": "Comprar passagem",
        "goal": "Pedir uma passagem e perguntar de onde sai o transporte.",
        "notes": {
          "it": "“Un biglietto per…” indica o destino. “Andata e ritorno” é ida e volta. “Da quale binario” pergunta de qual plataforma ferroviária sai o trem.",
          "en": "“A ticket to…” indica destino. “Return ticket” é comum no Reino Unido; “round-trip ticket”, nos EUA. “Platform” se refere à plataforma ferroviária."
        },
        "rows": [
          [
            "Vorrei un biglietto per Roma",
            "I'd like a ticket to Rome",
            "Gostaria de uma passagem para Roma",
            [
              "Voglio un biglietto per Roma"
            ],
            [
              "I would like a ticket to Rome"
            ]
          ],
          [
            "Solo andata",
            "One way",
            "Só ida"
          ],
          [
            "Andata e ritorno",
            "A return ticket",
            "Uma passagem de ida e volta",
            [],
            [
              "A round-trip ticket"
            ]
          ],
          [
            "A che ora parte il treno?",
            "What time does the train leave?",
            "A que horas o trem sai?"
          ],
          [
            "Da quale binario parte?",
            "Which platform does it leave from?",
            "De qual plataforma ele sai?"
          ],
          [
            "Parte alle nove",
            "It leaves at nine",
            "Ele sai às nove"
          ]
        ],
        "dialogue": [
          [
            "Você",
            "Vorrei un biglietto per Roma",
            "I'd like a ticket to Rome",
            "Gostaria de uma passagem para Roma"
          ],
          [
            "Atendente",
            "Solo andata?",
            "One way?",
            "Só ida?"
          ],
          [
            "Você",
            "Sì. A che ora parte il treno?",
            "Yes. What time does the train leave?",
            "Sim. A que horas o trem sai?"
          ],
          [
            "Atendente",
            "Parte alle nove, dal binario due",
            "It leaves at nine, from platform two",
            "Ele sai às nove, da plataforma dois"
          ]
        ],
        "question": "De qual plataforma sai o trem?",
        "answer": "Da plataforma dois",
        "explanation": "A informação aparece no final: “binario due” / “platform two”."
      },
      {
        "title": "Confirmar o caminho",
        "goal": "Checar se está no transporte correto e onde descer.",
        "notes": {
          "it": "“Questo autobus” significa este ônibus. “Devo” é a forma de dovere com io: eu devo/preciso. “Scendere” é descer de um transporte.",
          "en": "“Does this bus go…?” usa does porque o sujeito é this bus. Depois de does, o verbo fica na forma base: go, não goes. “Get off” é descer do transporte."
        },
        "rows": [
          [
            "Questo autobus va in centro?",
            "Does this bus go downtown?",
            "Este ônibus vai para o centro?",
            [],
            [
              "Does this bus go to the city centre?"
            ]
          ],
          [
            "Dove devo scendere?",
            "Where should I get off?",
            "Onde devo descer?"
          ],
          [
            "Alla prossima fermata",
            "At the next stop",
            "Na próxima parada"
          ],
          [
            "Mi può avvisare?",
            "Could you let me know?",
            "Você poderia me avisar?"
          ],
          [
            "Ho perso il treno",
            "I missed the train",
            "Perdi o trem"
          ],
          [
            "Quanto dura il viaggio?",
            "How long does the journey take?",
            "Quanto tempo dura a viagem?"
          ]
        ],
        "dialogue": [
          [
            "Você",
            "Questo autobus va in centro?",
            "Does this bus go downtown?",
            "Este ônibus vai para o centro?"
          ],
          [
            "Motorista",
            "Sì, va in centro",
            "Yes, it goes downtown",
            "Sim, vai para o centro"
          ],
          [
            "Você",
            "Dove devo scendere?",
            "Where should I get off?",
            "Onde devo descer?"
          ],
          [
            "Motorista",
            "Alla prossima fermata",
            "At the next stop",
            "Na próxima parada"
          ]
        ],
        "question": "Onde a pessoa deve descer?",
        "answer": "Na próxima parada",
        "explanation": "A orientação é “alla prossima fermata” / “at the next stop”."
      }
    ]
  },
  {
    "title": "Compras e serviços",
    "description": "Comparar opções, experimentar e resolver uma compra",
    "topic": "shopping",
    "lessons": [
      {
        "title": "Escolher uma roupa",
        "goal": "Pedir outro tamanho e dizer se uma peça serve.",
        "notes": {
          "it": "“Posso provare…?” pede permissão para experimentar. “Taglia” significa tamanho de roupa. “Mi sta bene” indica que a peça cai bem ou serve bem.",
          "en": "“Try on” significa experimentar uma roupa. “Do you have…?” pergunta por disponibilidade. “Too small” indica pequeno demais; “fits” significa serve."
        },
        "rows": [
          [
            "Posso provare questa maglietta?",
            "Can I try on this T-shirt?",
            "Posso experimentar esta camiseta?"
          ],
          [
            "Avete una taglia più grande?",
            "Do you have a larger size?",
            "Vocês têm um tamanho maior?",
            [],
            [
              "Do you have a bigger size?"
            ]
          ],
          [
            "È troppo piccola",
            "It's too small",
            "É pequena demais"
          ],
          [
            "Mi sta bene",
            "It fits me well",
            "Ela me serve bem"
          ],
          [
            "Dov'è il camerino?",
            "Where is the fitting room?",
            "Onde fica o provador?"
          ],
          [
            "La prendo",
            "I'll take it",
            "Vou levar"
          ]
        ],
        "dialogue": [
          [
            "Você",
            "Posso provare questa maglietta?",
            "Can I try on this T-shirt?",
            "Posso experimentar esta camiseta?"
          ],
          [
            "Atendente",
            "Certo, il camerino è a destra",
            "Of course, the fitting room is on the right",
            "Claro, o provador fica à direita"
          ],
          [
            "Você",
            "È troppo piccola. Avete una taglia più grande?",
            "It's too small. Do you have a larger size?",
            "É pequena demais. Vocês têm um tamanho maior?"
          ],
          [
            "Atendente",
            "Sì, ecco una taglia più grande",
            "Yes, here is a larger size",
            "Sim, aqui está um tamanho maior"
          ]
        ],
        "question": "Por que a pessoa pede outra peça?",
        "answer": "Porque precisa de um tamanho maior",
        "explanation": "A peça está pequena demais; a solução pedida é uma numeração maior."
      },
      {
        "title": "Fazer compras",
        "goal": "Perguntar por produtos, preços e forma de pagamento.",
        "notes": {
          "it": "Use “quanto costano” para perguntar o preço de itens no plural. “Un chilo di…” indica quantidade. “Contanti” significa dinheiro em espécie.",
          "en": "“How much are…?” combina com itens no plural. “A kilo of…” indica quantidade. “By card” é com cartão; “in cash”, em dinheiro."
        },
        "rows": [
          [
            "Quanto costano queste mele?",
            "How much are these apples?",
            "Quanto custam estas maçãs?"
          ],
          [
            "Vorrei un chilo di mele",
            "I'd like a kilo of apples",
            "Gostaria de um quilo de maçãs",
            [],
            [
              "I would like a kilo of apples"
            ]
          ],
          [
            "Dove posso trovare il pane?",
            "Where can I find the bread?",
            "Onde posso encontrar o pão?"
          ],
          [
            "Posso pagare in contanti?",
            "Can I pay in cash?",
            "Posso pagar em dinheiro?"
          ],
          [
            "Mi dà una borsa, per favore?",
            "Could I have a bag, please?",
            "Pode me dar uma sacola, por favor?"
          ],
          [
            "Non mi serve lo scontrino",
            "I don't need the receipt",
            "Não preciso da nota"
          ]
        ],
        "dialogue": [
          [
            "Você",
            "Quanto costano queste mele?",
            "How much are these apples?",
            "Quanto custam estas maçãs?"
          ],
          [
            "Atendente",
            "Tre euro al chilo",
            "Three euros a kilo",
            "Três euros o quilo"
          ],
          [
            "Você",
            "Vorrei un chilo. Posso pagare in contanti?",
            "I'd like a kilo. Can I pay in cash?",
            "Gostaria de um quilo. Posso pagar em dinheiro?"
          ],
          [
            "Atendente",
            "Sì, certo",
            "Yes, of course",
            "Sim, claro"
          ]
        ],
        "question": "Qual quantidade a pessoa quer comprar?",
        "answer": "Um quilo",
        "explanation": "“Un chilo” / “a kilo” é a quantidade pedida, não o preço."
      },
      {
        "title": "Trocar um produto",
        "goal": "Explicar um defeito e pedir uma solução com educação.",
        "notes": {
          "it": "“Non funziona” significa não funciona. “Cambiare” pode significar trocar um produto. “L’ho comprato” combina pronome + passato prossimo: eu o comprei.",
          "en": "“It doesn’t work” usa doesn’t + verbo base. “Bought” é o passado de buy. “Exchange” é trocar; “refund” é reembolso."
        },
        "rows": [
          [
            "Questo non funziona",
            "This doesn't work",
            "Isto não funciona"
          ],
          [
            "L'ho comprato ieri",
            "I bought it yesterday",
            "Comprei isto ontem"
          ],
          [
            "Vorrei cambiarlo",
            "I'd like to exchange it",
            "Gostaria de trocar isto",
            [],
            [
              "I would like to exchange it"
            ]
          ],
          [
            "Ho lo scontrino",
            "I have the receipt",
            "Tenho a nota"
          ],
          [
            "Posso avere un rimborso?",
            "Could I get a refund?",
            "Posso receber um reembolso?"
          ],
          [
            "Grazie per il suo aiuto",
            "Thank you for your help",
            "Obrigado(a) pela sua ajuda"
          ]
        ],
        "dialogue": [
          [
            "Você",
            "Questo non funziona. L'ho comprato ieri",
            "This doesn't work. I bought it yesterday",
            "Isto não funciona. Comprei ontem"
          ],
          [
            "Atendente",
            "Ha lo scontrino?",
            "Do you have the receipt?",
            "Você tem a nota?"
          ],
          [
            "Você",
            "Sì. Vorrei cambiarlo",
            "Yes. I'd like to exchange it",
            "Sim. Gostaria de trocar"
          ],
          [
            "Atendente",
            "Certo, possiamo cambiarlo",
            "Of course, we can exchange it",
            "Claro, podemos trocar"
          ]
        ],
        "question": "O que a pessoa apresenta para fazer a troca?",
        "answer": "A nota da compra",
        "explanation": "A pergunta “Ha lo scontrino?” / “Do you have the receipt?” é respondida com sim."
      }
    ]
  },
  {
    "title": "Sua rotina",
    "description": "Falar de hábitos, estudo e trabalho",
    "topic": "routine",
    "lessons": [
      {
        "title": "Contar seu dia",
        "goal": "Descrever ações e horários de uma rotina.",
        "notes": {
          "it": "“Mi sveglio” é uma forma reflexiva: eu acordo. No presente, parlare → parlo; lavorare → lavoro. “Di solito” indica um hábito.",
          "en": "Para hábitos, use presente simples: I wake up, I work. Com I, não coloque am antes desses verbos. “Usually” normalmente vem antes do verbo principal."
        },
        "rows": [
          [
            "Mi sveglio alle sette",
            "I wake up at seven",
            "Acordo às sete"
          ],
          [
            "Di solito lavoro da casa",
            "I usually work from home",
            "Geralmente trabalho de casa"
          ],
          [
            "Studio la sera",
            "I study in the evening",
            "Estudo à noite"
          ],
          [
            "Vado in palestra",
            "I go to the gym",
            "Vou à academia"
          ],
          [
            "Torno a casa alle sei",
            "I get home at six",
            "Chego em casa às seis"
          ],
          [
            "Vado a dormire presto",
            "I go to bed early",
            "Vou dormir cedo"
          ]
        ],
        "dialogue": [
          [
            "Colega",
            "A che ora ti svegli?",
            "What time do you wake up?",
            "A que horas você acorda?"
          ],
          [
            "Você",
            "Mi sveglio alle sette",
            "I wake up at seven",
            "Acordo às sete"
          ],
          [
            "Colega",
            "Studi la mattina?",
            "Do you study in the morning?",
            "Você estuda de manhã?"
          ],
          [
            "Você",
            "No, studio la sera",
            "No, I study in the evening",
            "Não, estudo à noite"
          ]
        ],
        "question": "Em qual período a pessoa estuda?",
        "answer": "À noite",
        "explanation": "A resposta corrige a hipótese de manhã: “No, studio la sera” / “No, I study in the evening”."
      },
      {
        "title": "Falar do trabalho",
        "goal": "Apresentar sua ocupação e colaborar numa tarefa.",
        "notes": {
          "it": "“Lavoro come…” apresenta sua função. “Posso” significa eu posso. “Puoi aiutarmi?” é informal; para alguém em contexto formal, use “Può aiutarmi?”.",
          "en": "Use “I work as…” para a função e “I work in…” para a área. “Can you help me?” pede ajuda. “Let’s…” propõe algo para fazer juntos."
        },
        "rows": [
          [
            "Lavoro come sviluppatore",
            "I work as a developer",
            "Trabalho como desenvolvedor"
          ],
          [
            "Sto cercando lavoro",
            "I'm looking for a job",
            "Estou procurando emprego",
            [
              "Cerco lavoro"
            ],
            [
              "I am looking for a job"
            ]
          ],
          [
            "Puoi aiutarmi con questo?",
            "Can you help me with this?",
            "Você pode me ajudar com isto?"
          ],
          [
            "Ho una riunione alle dieci",
            "I have a meeting at ten",
            "Tenho uma reunião às dez"
          ],
          [
            "Possiamo parlarne dopo?",
            "Can we talk about it later?",
            "Podemos falar sobre isso depois?"
          ],
          [
            "Facciamo una pausa",
            "Let's take a break",
            "Vamos fazer uma pausa"
          ]
        ],
        "dialogue": [
          [
            "Colega",
            "Puoi aiutarmi con questo?",
            "Can you help me with this?",
            "Você pode me ajudar com isto?"
          ],
          [
            "Você",
            "Certo, ma ho una riunione alle dieci",
            "Of course, but I have a meeting at ten",
            "Claro, mas tenho uma reunião às dez"
          ],
          [
            "Colega",
            "Possiamo parlarne dopo?",
            "Can we talk about it later?",
            "Podemos falar sobre isso depois?"
          ],
          [
            "Você",
            "Sì, dopo la riunione",
            "Yes, after the meeting",
            "Sim, depois da reunião"
          ]
        ],
        "question": "Quando as pessoas vão conversar sobre a tarefa?",
        "answer": "Depois da reunião",
        "explanation": "“Dopo” / “after” indica que a conversa fica para depois da reunião."
      },
      {
        "title": "Aprender e pedir explicações",
        "goal": "Avisar que não entendeu e pedir que a pessoa adapte a fala.",
        "notes": {
          "it": "“Non ho capito” é não entendi. “Può ripetere?” é um pedido formal para repetir; “puoi ripetere?” é informal. “Più lentamente” significa mais devagar.",
          "en": "“I didn’t understand” usa didn’t + understand, sem mudar o verbo para o passado. “Could you…?” torna o pedido educado. “What does … mean?” pergunta um significado."
        },
        "rows": [
          [
            "Non ho capito",
            "I didn't understand",
            "Não entendi"
          ],
          [
            "Può ripetere, per favore?",
            "Could you repeat that, please?",
            "Pode repetir, por favor?",
            [
              "Puoi ripetere, per favore?"
            ],
            [
              "Can you repeat that, please?"
            ]
          ],
          [
            "Può parlare più lentamente?",
            "Could you speak more slowly?",
            "Pode falar mais devagar?"
          ],
          [
            "Che cosa significa questa parola?",
            "What does this word mean?",
            "O que esta palavra significa?",
            [
              "Cosa significa questa parola?"
            ]
          ],
          [
            "Come si scrive?",
            "How do you spell it?",
            "Como se escreve?"
          ],
          [
            "Sto ancora imparando",
            "I'm still learning",
            "Ainda estou aprendendo",
            [],
            [
              "I am still learning"
            ]
          ]
        ],
        "dialogue": [
          [
            "Professor",
            "Hai capito?",
            "Did you understand?",
            "Você entendeu?"
          ],
          [
            "Você",
            "Non ho capito. Può ripetere, per favore?",
            "I didn't understand. Could you repeat that, please?",
            "Não entendi. Pode repetir, por favor?"
          ],
          [
            "Professor",
            "Certo",
            "Of course",
            "Claro"
          ],
          [
            "Você",
            "Può parlare più lentamente?",
            "Could you speak more slowly?",
            "Pode falar mais devagar?"
          ]
        ],
        "question": "O que a pessoa pede além de repetir?",
        "answer": "Que falem mais devagar",
        "explanation": "O segundo pedido contém “più lentamente” / “more slowly”."
      }
    ]
  },
  {
    "title": "Pessoas e planos",
    "description": "Conhecer alguém, combinar encontros e expressar preferências",
    "topic": "plans",
    "lessons": [
      {
        "title": "Conhecer alguém",
        "goal": "Iniciar uma conversa e encontrar interesses em comum.",
        "notes": {
          "it": "“Ti piace” combina com uma coisa no singular; “ti piacciono”, com plural. Para dizer eu gosto, use “mi piace”. “Anch’io” significa eu também.",
          "en": "“Do you like…?” pergunta gostos. Depois de like, você pode usar verbo com -ing: “I like reading”. “Me too” indica que você compartilha a afirmação positiva."
        },
        "rows": [
          [
            "Che cosa ti piace fare?",
            "What do you like doing?",
            "Do que você gosta de fazer?",
            [
              "Cosa ti piace fare?"
            ],
            [
              "What do you like to do?"
            ]
          ],
          [
            "Mi piace leggere",
            "I like reading",
            "Gosto de ler",
            [],
            [
              "I like to read"
            ]
          ],
          [
            "Mi piace ascoltare musica",
            "I like listening to music",
            "Gosto de ouvir música"
          ],
          [
            "Anch’io",
            "Me too",
            "Eu também"
          ],
          [
            "Conosci questo posto?",
            "Do you know this place?",
            "Você conhece este lugar?"
          ],
          [
            "È la prima volta che vengo qui",
            "It's my first time here",
            "É minha primeira vez aqui"
          ]
        ],
        "dialogue": [
          [
            "Pessoa",
            "È la prima volta che vengo qui",
            "It's my first time here",
            "É minha primeira vez aqui"
          ],
          [
            "Você",
            "Anch’io. Che cosa ti piace fare?",
            "Me too. What do you like doing?",
            "Eu também. Do que você gosta de fazer?"
          ],
          [
            "Pessoa",
            "Mi piace leggere",
            "I like reading",
            "Gosto de ler"
          ],
          [
            "Você",
            "Anch’io!",
            "Me too!",
            "Eu também!"
          ]
        ],
        "question": "Qual interesse as duas pessoas compartilham?",
        "answer": "Ler",
        "explanation": "Uma pessoa diz que gosta de ler e a outra responde “Anch’io” / “Me too”."
      },
      {
        "title": "Combinar um encontro",
        "goal": "Fazer um convite e combinar um horário.",
        "notes": {
          "it": "“Ti va di…?” é um convite informal: você topa…? “Ci vediamo” pode confirmar o encontro. “Alle” é usado antes da maioria dos horários.",
          "en": "“Would you like to…?” faz um convite. “Are you free…?” pergunta disponibilidade. “Let’s meet…” propõe horário e lugar."
        },
        "rows": [
          [
            "Ti va di fare una passeggiata?",
            "Would you like to go for a walk?",
            "Você gostaria de dar uma caminhada?"
          ],
          [
            "Sei libero domani?",
            "Are you free tomorrow?",
            "Você está livre amanhã?",
            [
              "Sei libera domani?"
            ]
          ],
          [
            "Ci vediamo alle cinque",
            "Let's meet at five",
            "Vamos nos encontrar às cinco"
          ],
          [
            "Davanti alla stazione",
            "In front of the station",
            "Em frente à estação"
          ],
          [
            "Per me va bene",
            "That works for me",
            "Por mim, tudo bem"
          ],
          [
            "A domani, allora",
            "See you tomorrow, then",
            "Até amanhã, então"
          ]
        ],
        "dialogue": [
          [
            "Você",
            "Sei libero domani?",
            "Are you free tomorrow?",
            "Você está livre amanhã?"
          ],
          [
            "Pessoa",
            "Sì, nel pomeriggio",
            "Yes, in the afternoon",
            "Sim, à tarde"
          ],
          [
            "Você",
            "Ci vediamo alle cinque, davanti alla stazione",
            "Let's meet at five, in front of the station",
            "Vamos nos encontrar às cinco, em frente à estação"
          ],
          [
            "Pessoa",
            "Per me va bene",
            "That works for me",
            "Por mim, tudo bem"
          ]
        ],
        "question": "Onde será o encontro?",
        "answer": "Em frente à estação",
        "explanation": "O local é dado por “davanti alla stazione” / “in front of the station”."
      },
      {
        "title": "Mudar os planos",
        "goal": "Avisar sobre atraso e propor outro dia.",
        "notes": {
          "it": "“Sono in ritardo” significa estou atrasado. “Possiamo” é nós podemos. Para pedir desculpas a alguém próximo, use “scusa”; em situação formal, “mi scusi”.",
          "en": "“I’m running late” é uma expressão natural para avisar sobre atraso. “Can we…?” propõe uma mudança. “Instead” indica uma alternativa ao plano anterior."
        },
        "rows": [
          [
            "Scusa, sono in ritardo",
            "Sorry, I'm running late",
            "Desculpe, estou atrasado(a)"
          ],
          [
            "Arrivo tra dieci minuti",
            "I'll be there in ten minutes",
            "Chego em dez minutos"
          ],
          [
            "Possiamo cambiare giorno?",
            "Can we change the day?",
            "Podemos mudar o dia?"
          ],
          [
            "Oggi non posso",
            "I can't today",
            "Hoje não posso"
          ],
          [
            "Facciamo sabato?",
            "How about Saturday instead?",
            "Que tal sábado, então?"
          ],
          [
            "Nessun problema",
            "No problem",
            "Sem problema",
            [
              "Non c’è problema"
            ]
          ]
        ],
        "dialogue": [
          [
            "Pessoa",
            "Scusa, oggi non posso",
            "Sorry, I can't today",
            "Desculpe, hoje não posso"
          ],
          [
            "Você",
            "Nessun problema. Possiamo cambiare giorno?",
            "No problem. Can we change the day?",
            "Sem problema. Podemos mudar o dia?"
          ],
          [
            "Pessoa",
            "Facciamo sabato?",
            "How about Saturday instead?",
            "Que tal sábado, então?"
          ],
          [
            "Você",
            "Per me va bene",
            "That works for me",
            "Por mim, tudo bem"
          ]
        ],
        "question": "Para qual dia o plano foi mudado?",
        "answer": "Sábado",
        "explanation": "A proposta “Facciamo sabato?” / “How about Saturday instead?” é aceita na resposta seguinte."
      }
    ]
  },
  {
    "title": "Resolver imprevistos",
    "description": "Hospedagem, saúde e pedidos urgentes",
    "topic": "problems",
    "lessons": [
      {
        "title": "Chegar à hospedagem",
        "goal": "Informar uma reserva e perguntar sobre a estadia.",
        "notes": {
          "it": "“A nome di…” informa o nome da reserva. “La camera” é o quarto. Para perguntar se algo está incluído, use “è inclusa?” com palavra feminina como colazione.",
          "en": "“A reservation under…” informa o nome da reserva. “Check in” é o verbo; “check-in” pode ser substantivo. “Included” indica que algo já faz parte do preço."
        },
        "rows": [
          [
            "Ho una prenotazione a nome di Silva",
            "I have a reservation under Silva",
            "Tenho uma reserva no nome de Silva"
          ],
          [
            "Vorrei fare il check-in",
            "I'd like to check in",
            "Gostaria de fazer o check-in",
            [],
            [
              "I would like to check in"
            ]
          ],
          [
            "La colazione è inclusa?",
            "Is breakfast included?",
            "O café da manhã está incluído?"
          ],
          [
            "A che ora devo lasciare la camera?",
            "What time is check-out?",
            "A que horas é o check-out?"
          ],
          [
            "Qual è la password del Wi-Fi?",
            "What's the Wi-Fi password?",
            "Qual é a senha do Wi-Fi?"
          ],
          [
            "La chiave non funziona",
            "The key doesn't work",
            "A chave não funciona"
          ]
        ],
        "dialogue": [
          [
            "Você",
            "Ho una prenotazione a nome di Silva",
            "I have a reservation under Silva",
            "Tenho uma reserva no nome de Silva"
          ],
          [
            "Recepção",
            "Benvenuto. La camera è pronta",
            "Welcome. Your room is ready",
            "Bem-vindo. Seu quarto está pronto"
          ],
          [
            "Você",
            "La colazione è inclusa?",
            "Is breakfast included?",
            "O café da manhã está incluído?"
          ],
          [
            "Recepção",
            "Sì, dalle sette alle dieci",
            "Yes, from seven to ten",
            "Sim, das sete às dez"
          ]
        ],
        "question": "Qual é o horário do café da manhã?",
        "answer": "Das sete às dez",
        "explanation": "A recepção informa “dalle sette alle dieci” / “from seven to ten”."
      },
      {
        "title": "Explicar um mal-estar",
        "goal": "Descrever sintomas básicos e pedir ajuda profissional.",
        "notes": {
          "it": "“Mi fa male…” indica algo que dói. “Ho mal di testa” é estou com dor de cabeça. “Sono allergico/allergica” concorda com a pessoa que fala.",
          "en": "“I have a headache” descreve dor de cabeça. “I feel…” descreve como você se sente. “Allergic to” inclui a preposição to. Estas frases são prática de idioma, não orientação médica."
        },
        "rows": [
          [
            "Non mi sento bene",
            "I don't feel well",
            "Não estou me sentindo bem"
          ],
          [
            "Ho mal di testa",
            "I have a headache",
            "Estou com dor de cabeça"
          ],
          [
            "Mi fa male lo stomaco",
            "My stomach hurts",
            "Meu estômago dói"
          ],
          [
            "Ho bisogno di un medico",
            "I need a doctor",
            "Preciso de um médico"
          ],
          [
            "Dov'è la farmacia più vicina?",
            "Where is the nearest pharmacy?",
            "Onde fica a farmácia mais próxima?"
          ],
          [
            "Sono allergico alla penicillina",
            "I'm allergic to penicillin",
            "Sou alérgico à penicilina",
            [
              "Sono allergica alla penicillina"
            ],
            [
              "I am allergic to penicillin"
            ]
          ]
        ],
        "dialogue": [
          [
            "Pessoa",
            "Come ti senti?",
            "How do you feel?",
            "Como você está se sentindo?"
          ],
          [
            "Você",
            "Non mi sento bene. Ho mal di testa",
            "I don't feel well. I have a headache",
            "Não estou me sentindo bem. Estou com dor de cabeça"
          ],
          [
            "Pessoa",
            "Vuoi chiamare un medico?",
            "Would you like to call a doctor?",
            "Você gostaria de chamar um médico?"
          ],
          [
            "Você",
            "Sì, per favore",
            "Yes, please",
            "Sim, por favor"
          ]
        ],
        "question": "Qual sintoma a pessoa descreve?",
        "answer": "Dor de cabeça",
        "explanation": "“Mal di testa” / “headache” significa dor de cabeça."
      },
      {
        "title": "Pedir ajuda num imprevisto",
        "goal": "Relatar a perda de um objeto e localizar ajuda.",
        "notes": {
          "it": "“Ho perso…” é eu perdi. “Il mio telefono” significa meu telefone. Para pedir que alguém chame outra pessoa, use “può chiamare…?”.",
          "en": "“I’ve lost…” relata uma perda relevante agora; “I lost…” também é natural, especialmente no inglês americano. “Could you call…?” pede que alguém telefone ou chame ajuda."
        },
        "rows": [
          [
            "Ho perso il telefono",
            "I've lost my phone",
            "Perdi meu telefone",
            [],
            [
              "I have lost my phone",
              "I lost my phone"
            ]
          ],
          [
            "Non trovo il passaporto",
            "I can't find my passport",
            "Não encontro meu passaporte"
          ],
          [
            "Può aiutarmi?",
            "Could you help me?",
            "Pode me ajudar?",
            [
              "Mi può aiutare?"
            ],
            [
              "Can you help me?"
            ]
          ],
          [
            "Può chiamare la polizia?",
            "Could you call the police?",
            "Pode chamar a polícia?"
          ],
          [
            "Ho bisogno di aiuto subito",
            "I need help right away",
            "Preciso de ajuda agora"
          ],
          [
            "Dove posso chiedere informazioni?",
            "Where can I ask for information?",
            "Onde posso pedir informações?"
          ]
        ],
        "dialogue": [
          [
            "Você",
            "Non trovo il passaporto",
            "I can't find my passport",
            "Não encontro meu passaporte"
          ],
          [
            "Pessoa",
            "L'hai lasciato in albergo?",
            "Did you leave it at the hotel?",
            "Você o deixou no hotel?"
          ],
          [
            "Você",
            "Forse. Può aiutarmi a chiamare?",
            "Maybe. Could you help me call?",
            "Talvez. Pode me ajudar a ligar?"
          ],
          [
            "Pessoa",
            "Certo, chiamiamo la reception",
            "Of course, let's call reception",
            "Claro, vamos ligar para a recepção"
          ]
        ],
        "question": "Qual será a primeira ação das pessoas?",
        "answer": "Ligar para a recepção",
        "explanation": "A última fala propõe ligar para a recepção para verificar se o passaporte ficou lá."
      }
    ]
  },
  {
    "title": "Ontem e amanhã",
    "description": "Relatar experiências simples e contar seus próximos passos",
    "topic": "past-plans",
    "lessons": [
      {
        "title": "Contar o que fez",
        "goal": "Relatar ações concluídas no dia anterior.",
        "notes": {
          "it": "O passato prossimo combina um auxiliar com um particípio: “ho studiato”. Alguns verbos de movimento usam essere: “sono andato/andata”. Com essere, o particípio concorda com a pessoa.",
          "en": "Para ações terminadas ontem, use passado simples. Verbos regulares ganham -ed, como studied. Alguns são irregulares: go → went; see → saw. O marcador yesterday ajuda a situar a ação."
        },
        "rows": [
          [
            "Ieri ho studiato",
            "I studied yesterday",
            "Estudei ontem"
          ],
          [
            "Sono andato al cinema",
            "I went to the cinema",
            "Fui ao cinema",
            [
              "Sono andata al cinema"
            ],
            [
              "I went to the movies"
            ]
          ],
          [
            "Ho visto un amico",
            "I saw a friend",
            "Vi um amigo"
          ],
          [
            "Abbiamo parlato per un’ora",
            "We talked for an hour",
            "Conversamos por uma hora"
          ],
          [
            "È stato interessante",
            "It was interesting",
            "Foi interessante"
          ],
          [
            "Mi sono divertito",
            "I had a good time",
            "Eu me diverti",
            [
              "Mi sono divertita"
            ]
          ]
        ],
        "dialogue": [
          [
            "Pessoa",
            "Che cosa hai fatto ieri?",
            "What did you do yesterday?",
            "O que você fez ontem?"
          ],
          [
            "Você",
            "Sono andato al cinema",
            "I went to the cinema",
            "Fui ao cinema"
          ],
          [
            "Pessoa",
            "Ti è piaciuto?",
            "Did you like it?",
            "Você gostou?"
          ],
          [
            "Você",
            "Sì, mi sono divertito",
            "Yes, I had a good time",
            "Sim, eu me diverti"
          ]
        ],
        "question": "O que a pessoa fez ontem?",
        "answer": "Foi ao cinema",
        "explanation": "“Sono andato al cinema” / “I went to the cinema” relata a atividade de ontem."
      },
      {
        "title": "Perguntar sobre uma experiência",
        "goal": "Fazer uma pergunta no passado e entender uma resposta negativa.",
        "notes": {
          "it": "“Hai già…?” pergunta se a pessoa já fez algo. “Non ho ancora…” é ainda não fiz. Em “non l’ho visto”, l’ retoma algo masculino singular já mencionado.",
          "en": "“Have you ever…?” pergunta sobre experiências até agora. Para um momento terminado, como yesterday, use did: “Did you like it?”. Após didn’t, o verbo volta à forma base."
        },
        "rows": [
          [
            "Sei mai stato in Italia?",
            "Have you ever been to Italy?",
            "Você já esteve na Itália?",
            [
              "Sei mai stata in Italia?"
            ]
          ],
          [
            "Non ancora",
            "Not yet",
            "Ainda não"
          ],
          [
            "Ci sono stato l’anno scorso",
            "I went there last year",
            "Fui lá no ano passado",
            [
              "Ci sono stata l’anno scorso"
            ]
          ],
          [
            "Ti è piaciuto il viaggio?",
            "Did you enjoy the trip?",
            "Você gostou da viagem?"
          ],
          [
            "Non l'ho visto",
            "I didn't see it",
            "Não vi isso"
          ],
          [
            "Vorrei tornarci",
            "I'd like to go back",
            "Gostaria de voltar lá",
            [],
            [
              "I would like to go back"
            ]
          ]
        ],
        "dialogue": [
          [
            "Você",
            "Sei mai stato in Italia?",
            "Have you ever been to Italy?",
            "Você já esteve na Itália?"
          ],
          [
            "Pessoa",
            "Sì, ci sono stato l’anno scorso",
            "Yes, I went there last year",
            "Sim, fui lá no ano passado"
          ],
          [
            "Você",
            "Ti è piaciuto il viaggio?",
            "Did you enjoy the trip?",
            "Você gostou da viagem?"
          ],
          [
            "Pessoa",
            "Molto. Vorrei tornarci",
            "Very much. I'd like to go back",
            "Muito. Gostaria de voltar lá"
          ]
        ],
        "question": "Quando a pessoa visitou a Itália?",
        "answer": "No ano passado",
        "explanation": "O período informado é “l’anno scorso” / “last year”."
      },
      {
        "title": "Falar dos próximos passos",
        "goal": "Explicar planos e algo que quer aprender.",
        "notes": {
          "it": "Em italiano, o presente com um marcador futuro pode expressar planos: “domani studio”. “Vorrei” expressa desejo de forma educada. “Ho intenzione di…” apresenta uma intenção.",
          "en": "“Be going to” expressa planos: “I’m going to study”. “Want to” apresenta um desejo. Depois de want to, use o verbo base, sem -ing."
        },
        "rows": [
          [
            "Domani studio a casa",
            "I'm going to study at home tomorrow",
            "Vou estudar em casa amanhã",
            [],
            [
              "I am going to study at home tomorrow"
            ]
          ],
          [
            "Ho intenzione di viaggiare",
            "I'm planning to travel",
            "Estou planejando viajar",
            [],
            [
              "I am planning to travel"
            ]
          ],
          [
            "Voglio imparare una nuova lingua",
            "I want to learn a new language",
            "Quero aprender um novo idioma"
          ],
          [
            "Il mese prossimo visito Roma",
            "I'm going to visit Rome next month",
            "Vou visitar Roma no mês que vem",
            [],
            [
              "I am going to visit Rome next month"
            ]
          ],
          [
            "Spero di parlare meglio",
            "I hope to speak better",
            "Espero falar melhor"
          ],
          [
            "Un passo alla volta",
            "One step at a time",
            "Um passo de cada vez"
          ]
        ],
        "dialogue": [
          [
            "Pessoa",
            "Che programmi hai per domani?",
            "What are your plans for tomorrow?",
            "Quais são seus planos para amanhã?"
          ],
          [
            "Você",
            "Domani studio a casa",
            "I'm going to study at home tomorrow",
            "Vou estudar em casa amanhã"
          ],
          [
            "Pessoa",
            "Perché studi ogni giorno?",
            "Why do you study every day?",
            "Por que você estuda todos os dias?"
          ],
          [
            "Você",
            "Voglio imparare una nuova lingua",
            "I want to learn a new language",
            "Quero aprender um novo idioma"
          ]
        ],
        "question": "Qual é o objetivo de estudar todos os dias?",
        "answer": "Aprender um novo idioma",
        "explanation": "A resposta final explica o motivo: “Voglio imparare…” / “I want to learn…”."
      }
    ]
  }
];

const FOUNDATION_SCENARIOS=[
  {
    "title": "Primeira conversa",
    "goal": "Cumprimentar uma pessoa e perguntar como ela está.",
    "dialogue": [
      [
        "Ana",
        "Ciao! Come stai?",
        "Hi! How are you?",
        "Oi! Como você está?"
      ],
      [
        "Você",
        "Sto bene, grazie",
        "I'm fine, thank you",
        "Estou bem, obrigado(a)"
      ],
      [
        "Ana",
        "Anch’io, grazie",
        "Me too, thank you",
        "Eu também, obrigado(a)"
      ],
      [
        "Você",
        "A presto!",
        "See you soon!",
        "Até breve!"
      ]
    ],
    "question": "Como as pessoas estão se sentindo?",
    "answer": "Bem",
    "choices": [
      "Cansadas",
      "Com frio",
      "Com fome"
    ],
    "explanation": "“Sto bene” / “I’m fine” indica que a pessoa está bem."
  },
  {
    "title": "Conhecendo alguém",
    "goal": "Dizer seu nome e sua origem.",
    "dialogue": [
      [
        "Luca",
        "Ciao, mi chiamo Luca",
        "Hi, my name is Luca",
        "Oi, meu nome é Luca"
      ],
      [
        "Você",
        "Piacere, sono Ana",
        "Nice to meet you, I am Ana",
        "Prazer, sou a Ana"
      ],
      [
        "Luca",
        "Di dove sei?",
        "Where are you from?",
        "De onde você é?"
      ],
      [
        "Você",
        "Sono di Recife",
        "I am from Recife",
        "Sou de Recife"
      ]
    ],
    "question": "De qual cidade é Ana?",
    "answer": "Recife",
    "choices": [
      "Roma",
      "Londres",
      "São Paulo"
    ],
    "explanation": "Ana responde “Sono di Recife” / “I am from Recife”."
  },
  {
    "title": "Uma pausa necessária",
    "goal": "Descrever como se sente e fazer uma proposta.",
    "dialogue": [
      [
        "Ana",
        "Sei stanco?",
        "Are you tired?",
        "Você está cansado?"
      ],
      [
        "Você",
        "Sì, ho anche fame",
        "Yes, I am hungry too",
        "Sim, também estou com fome"
      ],
      [
        "Ana",
        "Mangiamo qualcosa?",
        "Shall we get something to eat?",
        "Vamos comer alguma coisa?"
      ],
      [
        "Você",
        "Sì, grazie",
        "Yes, thank you",
        "Sim, obrigado(a)"
      ]
    ],
    "question": "O que Ana propõe fazer?",
    "answer": "Comer alguma coisa",
    "choices": [
      "Ir dormir",
      "Pegar o trem",
      "Telefonar para alguém"
    ],
    "explanation": "A proposta contém “mangiamo” / “something to eat”: comer algo."
  },
  {
    "title": "Quem é essa pessoa?",
    "goal": "Apresentar um familiar e entender quem é quem.",
    "dialogue": [
      [
        "Ana",
        "Chi è lui?",
        "Who is he?",
        "Quem é ele?"
      ],
      [
        "Você",
        "È mio fratello",
        "He is my brother",
        "Ele é meu irmão"
      ],
      [
        "Ana",
        "Come si chiama?",
        "What's his name?",
        "Como ele se chama?"
      ],
      [
        "Você",
        "Si chiama Marco",
        "His name is Marco",
        "Ele se chama Marco"
      ]
    ],
    "question": "Qual é o nome do irmão?",
    "answer": "Marco",
    "choices": [
      "Luca",
      "Alex",
      "Paolo"
    ],
    "explanation": "A última resposta apresenta o nome Marco."
  },
  {
    "title": "Um pedido completo",
    "goal": "Fazer um pedido, confirmar e pedir a conta.",
    "dialogue": [
      [
        "Atendente",
        "Buongiorno, cosa desidera?",
        "Good morning, what would you like?",
        "Bom dia, o que deseja?"
      ],
      [
        "Você",
        "Un tè e un panino, per favore",
        "A tea and a sandwich, please",
        "Um chá e um sanduíche, por favor"
      ],
      [
        "Atendente",
        "Certo, arriva subito",
        "Of course, coming right up",
        "Claro, já vai chegar"
      ],
      [
        "Você",
        "Grazie. Posso pagare con la carta?",
        "Thank you. Can I pay by card?",
        "Obrigado(a). Posso pagar com cartão?"
      ]
    ],
    "question": "Como a pessoa quer pagar?",
    "answer": "Com cartão",
    "choices": [
      "Em dinheiro",
      "Por transferência",
      "Com um vale"
    ],
    "explanation": "A última pergunta menciona “carta” / “card”."
  },
  {
    "title": "Estudo e horários",
    "goal": "Falar sobre um hábito e combinar um horário.",
    "dialogue": [
      [
        "Ana",
        "Studi ogni giorno?",
        "Do you study every day?",
        "Você estuda todos os dias?"
      ],
      [
        "Você",
        "Sì, studio la sera",
        "Yes, I study in the evening",
        "Sim, estudo à noite"
      ],
      [
        "Ana",
        "A che ora?",
        "At what time?",
        "A que horas?"
      ],
      [
        "Você",
        "Alle otto",
        "At eight o'clock",
        "Às oito"
      ]
    ],
    "question": "A que horas a pessoa estuda?",
    "answer": "Às oito",
    "choices": [
      "Às sete",
      "Às nove",
      "Ao meio-dia"
    ],
    "explanation": "“Alle otto” / “At eight o’clock” informa o horário."
  }
];

const SCENARIO_DISTRACTORS=[["Dez minutos", "Vinte minutos", "Meia hora"], ["Da plataforma um", "Da plataforma três", "Da plataforma quatro"], ["Na última parada", "Duas paradas depois", "No ponto inicial"], ["Porque quer outra cor", "Porque perdeu a peça", "Porque vai pagar"], ["Dois quilos", "Meio quilo", "Três quilos"], ["O passaporte", "Uma passagem", "Um cartão de transporte"], ["De manhã", "À tarde", "Só nos fins de semana"], ["Antes da reunião", "Durante a reunião", "No dia seguinte"], ["Que escrevam a conta", "Que mudem de assunto", "Que falem mais alto"], ["Viajar", "Correr", "Cozinhar"], ["Dentro do cinema", "No hotel", "Atrás do mercado"], ["Sexta-feira", "Domingo", "Segunda-feira"], ["Das seis às nove", "Das oito às onze", "Das sete às nove"], ["Dor no estômago", "Dor nas costas", "Dor na garganta"], ["Comprar uma passagem", "Ir à academia", "Fazer uma reserva"], ["Ficou em casa", "Foi ao trabalho", "Visitou um museu"], ["Ontem", "Na semana passada", "No mês passado"], ["Comprar um livro", "Trocar de emprego", "Pegar um ônibus"]];
