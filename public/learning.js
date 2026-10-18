/* Pedagogical data, explicit equivalents and error explanations. No external AI service. */
function phraseTip(text,lang,fallback){
 const rules=lang==='en'?[
 [/\bdoes(n't)?\b/i,'Com he, she, it ou um sujeito singular, perguntas e negativas usam does/doesn’t. O verbo principal fica na forma base: does it work, não does it works.'],
 [/\bdid(n't)?\b/i,'Em perguntas e negativas no passado, did/didn’t carrega o passado. Use o verbo principal na forma base: didn’t understand, não didn’t understood.'],
 [/\b(hungry|thirsty|sleepy|cold|tired|happy)\b/i,'Esse estado é descrito com to be em inglês: I am hungry/tired. Não traduza o “ter” de “ter fome” literalmente.'],
 [/\bgoing to\b/i,'Para este plano, a estrutura é pessoa + am/is/are + going to + verbo base. O marcador de tempo mostra quando acontecerá.'],
 [/\bwould like\b|\bI'd like\b/i,'Would like expressa um pedido ou desejo educado. I’d like e I would like são equivalentes neste contexto. Antes de outro verbo, use to.'],
 [/\b(wake up|usually|study|work from home|go to the gym)\b/i,'Uma rotina usa presente simples. Com I, use o verbo base: I study, I work. Não acrescente am antes desses verbos para indicar hábito.'],
 [/\blike (reading|listening)\b/i,'Depois de like, o verbo pode aparecer com -ing: like reading, like listening to music. Observe o to em listen to.'],
 [/\b(have you ever|I've lost|I have lost)\b/i,'Have + particípio liga uma experiência ou resultado ao presente. Have you ever been…? pergunta por uma experiência, sem uma data passada específica.'],
 [/\b(yesterday|last year|went|saw|bought)\b/i,'Uma ação situada em um período passado terminado usa passado simples: went, saw, bought ou um verbo regular com -ed.'],
 [/\b(where|what time|how long|how much)\b/i,'A expressão inicial define a pergunta: where = onde; what time = a que horas; how long = quanto tempo; how much = quanto custa/quanto.'],
 [/\b(can|could)\b/i,'Can/could é seguido pelo verbo base, sem to. A forma com could costuma tornar o pedido mais educado.'],
 [/\b(at|in front of|from seven|in the evening)\b/i,'Observe a preposição da expressão: at para horários; in the evening para o período; in front of para em frente a.'],
 [/\bhas\b/i,'No presente, have vira has com he, she e it. Com I, you, we e they, use have.'],
 [/\b(a |an |the )/i,'A/an introduz algo não específico; the se refere a algo identificado no contexto. A escolha entre a e an depende do som seguinte.']
 ]:[
 [/\b(ho fame|ho sete|ho sonno|ho caldo|ho freddo)\b/i,'Em italiano, esses estados usam avere: ho fame, ho sete, ho sonno. Ho é a forma de avere com io, não uma forma de essere.'],
 [/\bsono andat[oa]|mi sono divertit[oa]|ci sono stat[oa]\b/i,'Aqui o passato prossimo usa essere. O particípio concorda com a pessoa: andato/andata, divertito/divertita.'],
 [/\b(ho studiato|ho visto|ho perso|ho comprato|abbiamo parlato|l'ho)\b/i,'O passato prossimo combina avere conjugado e particípio: ho studiato/visto/perso. Não deixe o auxiliar de fora.'],
 [/\b(posso|può|puoi|possiamo|devo)\b/i,'O verbo modal já está conjugado para a pessoa. O verbo que vem depois fica no infinitivo: posso pagare, può ripetere, devo scendere.'],
 [/\bvorrei\b/i,'Vorrei é uma forma educada de fazer um pedido ou expressar desejo. Pode vir antes de um substantivo ou de um verbo no infinitivo.'],
 [/\b(mi piace|ti piace|ti piacciono)\b/i,'Mi piace significa eu gosto; ti piace pergunta sobre você. Piace combina com singular ou infinitivo, enquanto piacciono combina com plural.'],
 [/\b(dov'è|dove|qual è|quanto|a che ora|che cosa)\b/i,'A expressão inicial indica a informação pedida. Dov’è leva apóstrofo; qual è se escreve sem apóstrofo. A che ora pergunta o horário.'],
 [/\b(alle |alle$|tra dieci|domani|ieri)\b/i,'Marcadores de tempo ajudam a interpretar a frase: ieri = ontem; domani = amanhã; alle + hora; tra dieci minuti = daqui a dez minutos.'],
 [/\b(non |non$)/i,'A negação non vem antes do verbo conjugado: non capisco, non ho capito, non posso. Ela muda o sentido da frase.'],
 [/\b(mi chiamo|ti chiami|si chiama)\b/i,'Chiamarsi muda junto com o pronome: mi chiamo para eu, ti chiami para você, si chiama para ele/ela ou tratamento formal.'],
 [/\b(sono|sei|è|siamo|siete)\b/i,'Confira a pessoa de essere: io sono, tu sei, lui/lei è, noi siamo, voi siete. È é verbo; e sem acento significa “e”.'],
 [/\b(il |la |un |una |lo |l’|l')/i,'O artigo acompanha gênero e número do substantivo. Antes de vogal, il/la pode virar l’. Compare a expressão completa, não só a palavra principal.']
 ];return rules.find(([r])=>r.test(text))?.[1]||fallback;
}
const APPROVED_VARIANTS={
 en:{"i need help":["I need some help"],"where are you from?":["Where do you come from?"],"my name is alex":["I'm Alex","I am Alex"],"i'm ana":["My name is Ana"],"how are you?":["How are you doing?"],"can i pay by card?":["Can I pay with a card?"],"i would like a coffee":["I'd like a cup of coffee","I would like a cup of coffee"],"i don't feel well":["I feel unwell"],"could you repeat that, please?":["Could you say that again, please?","Can you say that again, please?"],"could you speak more slowly?":["Can you speak more slowly?"],"i studied yesterday":["Yesterday I studied"],"i'm going to study at home tomorrow":["Tomorrow I'm going to study at home","I am going to study at home tomorrow"],"is it nearby?":["Is it close?"],"where is the nearest pharmacy?":["Where's the nearest pharmacy?"],"i live in recife":["I live in the city of Recife"],"i have a reservation under silva":["I have a reservation under the name Silva","I have a reservation in the name of Silva"]},
 it:{"come stai?":["Come va?"],"mi chiamo luca":["Il mio nome è Luca"],"di dove sei?":["Da dove vieni?"],"sto bene, grazie":["Bene, grazie"],"ho bisogno di aiuto":["Mi serve aiuto"],"dove sei?":["Dove ti trovi?"],"posso pagare con la carta?":["Posso pagare con carta?"],"può ripetere, per favore?":["Puoi ripetere, per favore?","Può ripetere, per piacere?"],"non mi sento bene":["Mi sento male"],"è vicino?":["È qui vicino?"],"ieri ho studiato":["Ho studiato ieri"],"domani studio a casa":["Studio a casa domani"],"ho una prenotazione a nome di silva":["Ho prenotato a nome di Silva"],"non c'è problema":["Nessun problema"],"a presto":["Ci vediamo presto"]}
};
function equivalents(text,lang,manual=[]){const result=new Set([...manual,...(APPROVED_VARIANTS[lang][text.replace(/[’‘]/g,"'").toLowerCase()]||[])]);if(lang==='en'){
 const pairs=[["I'm",'I am'],["You're",'You are'],["We are","We're"],["They are","They're"],["It's",'It is'],["I'd like",'I would like'],["I'll",'I will'],["don't",'do not'],["doesn't",'does not'],["didn't",'did not'],["can't",'cannot'],["What's",'What is']];
 for(const [a,b]of pairs){if(text.toLowerCase().includes(a.toLowerCase()))result.add(text.replace(new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i'),b));if(text.toLowerCase().includes(b.toLowerCase()))result.add(text.replace(new RegExp(b.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i'),a));}
 }else if(/^(Sono|Ho|Parlo|Studio|Lavoro|Abito|Mangio|Bevo|Vado|Voglio|Vorrei)\b/.test(text))result.add('Io '+text[0].toLowerCase()+text.slice(1));
 return [...result].filter(s=>s!==text);
}
function buildExpansion(lang){const col=lang==='it'?0:1;return COURSE_EXPANSION.map((u,i)=>({t:u.title,d:u.description,topic:u.topic,l:u.lessons.map((l,j)=>({t:l.title,n:l.notes[lang],k:(i+6)+'-'+j,goal:l.goal,topic:u.topic,dialogue:l.dialogue.map(([speaker,it,en,pt])=>({speaker,text:lang==='it'?it:en,pt})),task:{q:l.question,a:l.answer,o:SCENARIO_DISTRACTORS[i*3+j],why:l.explanation},w:l.rows.map((row,k)=>({k:(i+6)+'-'+j+'-'+k,it:row[col],pt:row[2],c:u.title,topic:u.topic,alt:equivalents(row[col],lang,row[col+3]||[]),tip:phraseTip(row[col],lang,l.notes[lang])}))}))}));}
const TOPIC_NAMES={greetings:'Cumprimentos e cortesia',identity:'Apresentações e perguntas',states:'Ser, estar e ter',articles:'Artigos e pessoas',requests:'Pedidos e alimentação',present:'Presente e horários',directions:'Direções e transporte',shopping:'Compras e serviços',routine:'Hábitos, estudo e trabalho',plans:'Convites e planos',problems:'Pedidos de ajuda', 'past-plans':'Passado e próximos passos'};
const FOUNDATION_TOPICS=['greetings','identity','states','articles','requests','present'];
function enrichFoundation(units,lang){units.forEach((u,i)=>{u.topic=FOUNDATION_TOPICS[i];u.l.forEach(l=>{const d=FOUNDATION_SCENARIOS[i];l.topic=u.topic;l.goal=d.goal;l.dialogue=d.dialogue.map(([speaker,it,en,pt])=>({speaker,text:lang==='it'?it:en,pt}));l.task={q:d.question,a:d.answer,o:d.choices,why:d.explanation};l.w.forEach(x=>{x.topic=u.topic;x.alt=equivalents(x.it,lang);x.tip=phraseTip(x.it,lang,l.n)});})});return units;}
