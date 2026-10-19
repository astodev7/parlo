# PARLO 9 — Gramática com sequência e pré-requisitos

Projeto com frontend em HTML/CSS/JavaScript e backend Node.js + PostgreSQL. O visual mantém a referência verde escura, com títulos serifados e ações coral.

## Gramática conectada ao percurso — v9
+
+- São **14 regras introdutórias por idioma**, com explicação, exemplos traduzidos, alertas de uso e pré-requisitos: cumprimentos, identidade, estados, artigos, presente, negativas, perguntas, pedidos, localização, rotina, compras, planos, problemas e passado.
+- A área **Gramática passo a passo** aparece no início e na trilha. Qualquer regra pode ser lida como referência; sua verificação fica disponível após as bases anteriores.
+- Cada verificação tem quatro questões de completar e duas montagens. Para concluir, é necessário acertar pelo menos cinco das seis, incluindo as duas montagens. Não há pistas durante a resposta; a explicação vem após verificar. Leitura e contagem de repetições não equivalem a aprovação.
+- Ao iniciar uma lição nova ou oficina de frases, o aplicativo encontra o primeiro pré-requisito pendente e ensina sua regra antes de abrir a atividade. Ao concluir a verificação, um botão permite continuar a preparação e retornar à lição ou oficina escolhida.
+- Lições antigas concluídas e sessões em andamento são preservadas e podem ser retomadas. O progresso anterior não é convertido automaticamente em aprovação de gramática.
+- Erros de escrita, montagem e preenchimento nas lições recomendam rever a regra correspondente. Erros de vocabulário misturado e compreensão não são tratados automaticamente como falhas de gramática. As regras verificadas também recebem revisão após três dias. Uma recomendação de revisão não bloqueia novamente uma regra já verificada.
+- Leitura, resultados e revisões de gramática ficam salvos por idioma e por conta; não marcam vocabulário ou lições como concluídos. O percurso é introdutório, não uma certificação de nível nem um currículo de fluência completo.
+- Atualize **todos os arquivos**, incluindo o novo `public/grammar.js`, `public/index.html`, `public/app.js`, `public/styles.css`, o validador e o servidor. Preserve `.env` e `.git`, faça commit e push. Sem migração SQL, API de IA ou nova variável de ambiente.
+
+## Escuta e montagem de frases — v8
+
+- As lições novas misturam três reconhecimentos por áudio (quando há voz), montagem de todas as expressões com mais de uma palavra, até dois exercícios de ouvir e montar e três atividades de conversa (continuar, compreender a situação e entender a última fala).
+- Mantém as três rodadas e o reforço dos erros, com limite de 32 atividades. O total base varia com a quantidade de expressões que podem ser montadas: até 23 atividades, mais uma revisão.
+- A área **Frases / Montar frases** tem 8 oficinas por idioma e 6 frases por oficina: identidade, estados, rotina, negativas, perguntas, pedidos, localização e planos (96 frases de prática no total).
+- Cada oficina ensina a regra, divide um exemplo em partes e retira a ajuda aos poucos. Inclui pistas, ajuda para colocar uma peça, retomada de erros (máximo de 12 atividades), rascunho salvo e contagem separada de oficinas praticadas. Não conclui lições da trilha nem marca vocábulos diferentes como aprendidos.
+- O áudio usa as vozes do navegador, como antes. Sem voz ou com sons desligados, as novas tarefas têm apoio em texto. Não requer serviço externo, chave de TTS ou arquivos de áudio.
+- Substitua os arquivos preservando `.env` e `.git`; atualize também o validador compartilhado com o servidor. Commit e push. Sem migração SQL ou variável de ambiente adicional.
+
+## Aprendizado com mais prática — v7

- Cada etapa nova tem três rodadas com as seis expressões: reconhecimento, prática guiada e recordação escrita. São 20 atividades, mais uma revisão de outro assunto quando disponível.
- As respostas erradas voltam após outras atividades quando possível, em outro formato. Limite de duas retomadas por expressão e 32 atividades por sessão, para evitar repetição infinita.
- A tela final oferece “Praticar mais” da mesma etapa e continuar. A prática extra tem 14 atividades de base e prioriza os pontos pendentes, sem contar outra lição concluída.
- As etapas já concluídas também têm “Praticar mais” na trilha. Sessões em andamento são retomadas sem descartá-las.
- Repetir a mesma expressão na lição ou na prática extra dentro de 24 horas não aumenta várias vezes o intervalo da revisão espaçada. Os erros continuam antecipando a revisão. XP limitado a 200 por sessão.
- O avanço é uma escolha ao terminar a prática; não representa domínio permanente do conteúdo.
- Copie a atualização preservando `.env` e `.git`, faça commit e push. Atualize também `public/progress-validator.cjs` (compartilhado com o servidor). Não há migração SQL ou variável de ambiente nova. Sessões antigas podem ser concluídas normalmente; a nova sequência vale ao iniciar outra etapa ou prática.

## Atualização visual v6

- Seletor de cursos com bandeiras em SVG, menu “Meus cursos”, destaque do idioma atual e troca no desktop e celular.
- Inglês com a bandeira dos Estados Unidos; voz de pronúncia continua en-US.
- Filtros visuais combináveis de tópicos, unidades/assuntos, registro e favoritos, com contagem, busca e limpeza.
- Teclado: Tab e Enter/Espaço para abrir e selecionar cursos; Escape fecha o menu. Clique fora também fecha.
- Atualize os arquivos do projeto preservando `.env` e `.git`. Rode `npm install` se necessário, faça commit e push. Sem nova migração ou variável de ambiente.

## Vocabulário ampliado

A biblioteca tem **400 entradas por idioma**, sendo 216 ligadas às aulas e 184 novas entradas editoriais. São entradas de estudo (uma mesma palavra pode ter sentidos ou usos diferentes), não um ranking estatístico de frequência.

| Seção | Entradas por idioma | Organização |
| --- | ---: | --- |
| Verbos essenciais | 50 | Essenciais, movimento, rotina e comunicação; formas úteis e exemplos |
| Palavras do dia a dia | 48 | Casa, pessoas/sentimentos, tempo/rotina, cidade/transporte, trabalho/estudo e tecnologia |
| Frases do cotidiano | 24 | Perguntas, necessidades/imprevistos e conversas/opiniões |
| Linguagem formal | 12 | Pedidos educados e comunicação profissional |
| Linguagem informal | 12 | As mesmas 12 intenções em um registro mais próximo |
| Gírias e expressões coloquiais | 16 | Notas de contexto e região; não confundir com linguagem formal |
| Conectores e respostas | 12 | Ligar ideias, explicar motivos e responder |
| Falsos amigos | 10 | Significados que podem causar confusão com o português |
| Vocabulário das aulas | 216 | Separado pelas unidades existentes |

Cada entrada nova tem tradução, exemplo original e tradução do exemplo. Os verbos mostram formas de uso; formal e informal têm comparação; expressões coloquiais têm notas de adequação e, quando pertinente, região. A busca considera ambos os idiomas, exemplos e notas; há filtros por registro, assunto e favoritos, com paginação de 18 resultados.

Favoritos novos aparecem na tela Salvos e podem entrar em revisão. O botão Praticar seleção usa até oito itens do conjunto filtrado. As chaves das lições antigas foram preservadas; as entradas editoriais usam IDs lex- distintos e validados pelo backend.

O vocabulário editorial está em `public/vocabulary.js`. Não modifique IDs de entradas já publicadas ao apenas revisar grafia ou exemplos. As regras de áudio permanecem as da versão anterior: voz nativa do navegador quando disponível, sem MP3s novos neste pacote.

As notas foram redigidas para este material, com conferência pontual de expressões em dicionários: https://dictionary.cambridge.org/dictionary/english/no-worries ; https://dictionary.cambridge.org/dictionary/english/cheers ; https://www.treccani.it/vocabolario/boh/ ; https://www.treccani.it/vocabolario/magari/ . Os exemplos e traduções são originais, não transcrições desses dicionários.

## Atualizar da versão 4

Copie os arquivos sobre a pasta do projeto atual, preservando `.env` e `.git`. Inclua o novo `public/vocabulary.js` e atualize também o backend e o validador compartilhado: eles reconhecem os novos IDs de favoritos/revisões. Faça commit e push. **Não precisa recriar o banco ou executar uma nova migração SQL.** As mesmas variáveis `DATABASE_URL` e `SITE_URL` continuam válidas.

## Atualizar a versão já publicada

Esta atualização preserva os IDs das 18 lições anteriores de cada idioma e usa o mesmo banco, as mesmas contas e as mesmas variáveis de ambiente. **Não precisa recriar o banco nem repetir a migração para atualizar da v3.** Os novos dados pedagógicos ficam no JSON de progresso existente.

1. Faça uma cópia de segurança do projeto atual.
2. Copie os arquivos desta versão por cima dos arquivos do seu repositório, preservando seu `.env` e a pasta `.git`. Não copie uma pasta PARLO dentro de outra.
3. Não envie `.env` ou `node_modules`. Execute `npm install` se for testar localmente.
4. Faça commit e push para disparar o deploy na Vercel. Mantenha `DATABASE_URL` e `SITE_URL` já configurados.
5. Após o deploy, entre na conta existente e confira o progresso. A nova seção Conversas está disponível no dashboard e na trilha.

Se você não usa mais a pasta com o repositório, extraia esta versão e copie o `.env` da versão anterior somente para uso local. O ZIP não contém suas credenciais.

## Aprendizado nesta versão

- 24 situações distintas por idioma: seis conversas de fundamentos e 18 situações novas. As conversas iniciais são retomadas nas três lições da respectiva unidade.
- As seis novas unidades trabalham cidade/transporte, compras/serviços, rotina/trabalho/estudo, pessoas/planos, imprevistos/hospedagem e primeiras experiências no passado e planos.
- Cada lição combina seis exercícios de palavras/frases com continuação de diálogo e compreensão de uma conversa. Quando há itens anteriores estudados, inclui ainda uma revisão de outro assunto.
- A introdução apresenta objetivo, explicação, expressões e diálogo com tradução. O aluno lê e ouve antes de iniciar os exercícios.
- O feedback explica o conteúdo e dá orientações específicas para alguns padrões de erro. É um sistema editorial e de regras, sem inteligência artificial generativa. Não pretende diagnosticar qualquer texto livre possível.
- Respostas alternativas são listas revisadas e transformações controladas (por exemplo, contrações em inglês e sujeito explícito/omitido em italiano). Não há aceitação indiscriminada por similaridade.
- Acertos e erros alimentam indicadores por assunto e revisão direcionada. Os indicadores descrevem atividades, não proficiência certificada. A revisão espaçada de palavras continua disponível.
- Áudio da conversa inteira, reprodução mais lenta, opção de parar e transcrição. Sem voz compatível, a leitura permite concluir normalmente. Não há gravações profissionais incluídas.
- Prática de fala opcional com SpeechRecognition quando disponível, com feedback de transcrição, sem nota de pronúncia e sem perda de XP. O microfone só é solicitado ao tocar no botão. Bloqueio de permissão, ausência de API, falta de HTTPS e erros de rede têm mensagens e alternativa sem microfone.

O reconhecimento pode depender de um serviço do fornecedor do navegador e transmitir áudio a esse serviço. O servidor do PARLO não recebe ou armazena gravações; a transcrição da prática oral não é incluída no progresso. O teste automatizado de reconhecimento usa simulações para ausência/negação de permissão, não avalia precisão real de sotaques ou voz humana.

A recuperação de senha permanece fora desta atualização, conforme solicitado. A função existente de trocar a senha atual continua disponível.

## Recursos da plataforma

- Italiano e inglês: 12 unidades, 36 lições e 216 entradas de vocabulário **em cada idioma**. As trilhas são introdutórias, sem certificação de nível.
- Idioma escolhido no cadastro e alterável no dashboard, em desktop e celular.
- Login com e-mail e senha, acesso imediato e **sem confirmação de e-mail**.
- Progresso, revisões, favoritos, preferências e sessão de estudo salvos por usuário e idioma.
- Nome da conta e idioma inicial salvos no banco; a última troca de idioma atualiza a preferência da conta.
- Sincronização com controle de versão. Se dois dispositivos alterarem o mesmo progresso, a interface permite escolher qual versão preservar e exportar antes.
- Modo visitante local e importação explícita dos dados da v1/v2 pelo Perfil. Os dados locais de um visitante não são vinculados automaticamente a quem entrar neste navegador.
- Troca de senha com confirmação da senha atual e revogação das demais sessões.
- Páginas de privacidade, termos e cookies, além de robots.txt, sitemap.xml e página 404 no aplicativo.

## Executar no computador

Utilize Node.js **22.9 ou superior** e um PostgreSQL acessível (local, Neon ou Supabase).

1. Extraia o projeto e abra a pasta PARLO no terminal.
2. Execute `npm install`.
3. Copie `.env.example` para `.env`. No PowerShell: `Copy-Item .env.example .env`.
4. Preencha `DATABASE_URL` com a conexão PostgreSQL do seu banco, incluindo a senha atual. Mantenha o `.env` apenas no servidor/computador de desenvolvimento.
5. Para desenvolvimento, use `SITE_URL=http://localhost:3000` e `NODE_ENV=development`.
6. Execute `npm run db:migrate` para criar as tabelas.
7. Execute `npm start` e acesse **http://localhost:3000**.

O frontend continua separado em `public/index.html`, `public/styles.css` e `public/app.js`. O conteúdo inicial de inglês fica em `public/english.js`; os cenários novos e diálogos ficam em `public/courses.js`, e as explicações/alternativas em `public/learning.js`; `public/progress-validator.cjs` é JavaScript compartilhado entre navegador e servidor para validar o progresso.

**Com login, não basta abrir o HTML com duplo clique.** A aplicação precisa do backend para autenticar e sincronizar. A opção de visitante funciona quando o frontend está servido por HTTP, inclusive para estudar sem conta.

## Configurar o banco

`DATABASE_URL` deve ser uma conexão **PostgreSQL**, não a URL da API pública do Supabase. Não são necessárias chaves anon/service-role no navegador. Use o usuário servidor/proprietário das tabelas, que executa as migrações e as consultas da API.

No painel do provedor, obtenha a URL de conexão e respeite seus parâmetros SSL e instruções de pool. Se a senha tiver caracteres reservados, use a URL codificada fornecida pelo provedor. Não desative a verificação TLS; a conexão mantém as opções SSL do provedor. Um certificado CA específico pode ser informado por `PG_CA_FILE`.

As tabelas usam o prefixo `parlo_`, para não conflitar com outros projetos. **Preferencialmente use um banco separado do FITWAY.** A migração é idempotente e não altera tabelas do FITWAY.

## Publicar na Vercel

O projeto inclui `vercel.json` e `api/index.js` para implantação pela conta do proprietário.

1. Envie o projeto ao seu repositório, sem `.env` e sem `node_modules`.
2. Importe a pasta como projeto na Vercel. Use preset **Other**, sem build command. O `vercel.json` define `public` como diretório estático; preserve essa configuração.
3. Configure `DATABASE_URL` e `SITE_URL` nas variáveis de ambiente. `SITE_URL` deve ser o endereço **HTTPS exato** que será usado no navegador, por exemplo `https://seu-parlo.vercel.app`.
4. Execute a migração a partir do seu computador usando a conexão do banco de produção. Isso é feito com `npm run db:migrate`, depois de conferir o banco no `.env`.
5. Faça o deploy. Verifique `/api/health`, crie sua conta e conclua uma lição.

A origem é verificada exatamente. Se mudar o domínio, atualize `SITE_URL` e faça novo deploy. A URL de preview de outro deployment não compartilha automaticamente autorização com o domínio principal.

A implementação para Vercel está preparada no código, mas este pacote não foi publicado nem conectado à sua conta. Os testes locais usam o mesmo handler HTTP e as mesmas consultas SQL, com banco isolado de teste.

## Proteções implementadas

- Senhas derivadas com scrypt (salt aleatório; parâmetros N=32768, r=8, p=1; comparação em tempo constante).
- Tokens de sessão aleatórios; no banco fica somente o hash do token. Expiração de 30 dias.
- Cookies HttpOnly, SameSite=Lax e, em produção, Secure + prefixo __Host-. Nenhum token de sessão em localStorage ou sessionStorage.
- Login, cadastro, progresso, preferências e mudança de senha validados no servidor.
- Proteção de requisições de escrita por verificação estrita de Origin + JSON; sem CORS aberto. Todas as rotas de progresso usam a identidade da sessão, nunca um user_id enviado pelo cliente.
- Consultas SQL parametrizadas e controle atômico de revisão para evitar sobrescrita silenciosa entre dispositivos.
- Limites de autenticação por e-mail e endereço de conexão persistidos no PostgreSQL, inclusive entre instâncias. Limite geral adicional em memória. A aplicação não confia em cabeçalhos arbitrários X-Forwarded-For; em proxies compartilhados o limite por conexão pode ser compartilhado entre visitantes.
- Campo antispam no cadastro, limite de tamanho do JSON e mensagens de login sem detalhar qual credencial falhou.
- Headers CSP, anti-iframe, nosniff, Referrer-Policy, Permissions-Policy (microfone somente na própria origem) e HSTS no servidor de produção. Na Vercel os headers estáticos estão configurados e a plataforma oferece HTTPS.
- Dados de texto renderizados com escape; backup validado antes da importação e progresso validado novamente na API. O CSP permite handlers inline devido à estrutura existente do frontend; não é uma política restrita por nonce.
- RLS habilitado e acesso PUBLIC revogado nas tabelas. O cliente acessa somente a API da aplicação; o proprietário/servidor acessa o banco.
- `.env` fora da pasta pública, sem segredos nos arquivos do frontend. O servidor expõe apenas arquivos estáticos permitidos.

Não há analytics, publicidade ou cookies opcionais nesta versão; por isso não foi incluído um banner para rastreadores inexistentes. A tela de cookies explica o cookie de sessão e IndexedDB. As páginas privadas do aplicativo estão marcadas como noindex.

## Dados locais, saída da conta e conflitos

A cópia local de progresso usa chaves distintas para cada conta e idioma. Sair revoga o cookie e retorna ao login. As cópias de estudo em IndexedDB permanecem no navegador para evitar perda de alterações pendentes; podem ser removidas pelas configurações de dados do site. Não utilize perfis de navegador compartilhados para dados pessoais.

O indicador “Salvo na conta” só aparece após confirmação do servidor. No estado offline, o progresso local fica pendente até reconectar. O aplicativo evita sair ou trocar de idioma durante um envio em andamento ou enquanto há conflito sem resolução. Fechar a aba pode deixar alterações locais pendentes, recuperadas no próximo acesso à mesma conta neste navegador.

Para migrar o progresso anterior, use o mesmo endereço do site e o mesmo navegador, entre no Perfil e escolha “Importar progresso deste navegador”. Se mudar a origem, exporte JSON na versão anterior e importe no idioma italiano. Novos backups identificam o idioma e bloqueiam importação no curso errado.

## Verificação

Execute `npm test`. Há também um teste que gera, valida e conclui todas as 72 lições dos dois idiomas, verifica respostas alternativas, acentos, pontuação, controle de recompensa duplicada e revisão por assunto. Os testes usam PostgreSQL em WebAssembly (PGlite) e HTTP real, sem seu banco externo. Eles verificam cadastro sem confirmação, hashes, cookies, login, bloqueio de origem indevida, isolamento de usuários e idiomas, revisão concorrente, validação, alteração de idioma, mudança de senha, revogação de sessão, acesso às páginas públicas, arquivos privados inacessíveis e permissões das tabelas.

Também foram exercitados no Chromium: cadastro escolhendo inglês, lição completa, salvamento no banco, recarga, troca entre idiomas, vocabulário, favoritos, cartões e navegação em desktop e celular, recuperação em um segundo navegador, resolução de conflito e isolamento de contas na interface. O navegador de teste usa um banco isolado, sem enviar e-mails ou dados a um banco de produção.

## Limites e operação

- A recuperação de senha por e-mail não está implementada; a troca de senha no Perfil exige a senha atual. Não há configuração SMTP, porque esta versão não envia e-mails.
- A propriedade do e-mail não é verificada, conforme solicitado. Não utilize o e-mail cadastrado como prova de identidade para outras operações.
- Sem credenciais do seu banco, não é possível ativar o armazenamento de produção. O pacote contém a integração, esquema e migração; as credenciais ficam a cargo do proprietário.
- Antes de abrir o serviço ao público, o responsável pela instância deve identificar sua operação e publicar um canal de suporte nas páginas legais.
- As vozes dependem do navegador. Sem voz compatível, as atividades usam texto.

Referências técnicas: https://nodejs.org/api/crypto.html e https://www.postgresql.org/docs/current/sql-insert.html.

Referência de áudio e fala: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API e https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition.

Validação da v5: integridade e IDs das novas entradas em ambos os idiomas; exemplos e pares formal/informal; filtros e contagens; favoritos e sessões lexicais aceitos pela API; preservação das 72 lições; testes no Chromium de busca, paginação, comparação, prática da seleção, sincronização e layout de celular.

Validação da v6: testes automatizados de filtros combinados e limpeza nos dois idiomas, busca, unidades, favoritos e geração do menu de cursos; suíte de lições e integração PostgreSQL/HTTP. O novo layout não foi validado em navegador nesta execução.

Validação da v7: todas as 72 lições, três exposições de cada expressão, correção e retomada após recarregar, filas de erro limitadas a 32 atividades, prática extra sem avanço, intervalos de revisão e compatibilidade com sessões antigas. Integração PostgreSQL/HTTP cobre salvar e recuperar sessões novas com a fila de reforço. Sem conferência visual em navegador nesta execução.

Validação v8: testes de lições com e sem voz, reprodução de trechos de conversa, ouvir e montar, conclusão das 16 oficinas, pistas, peças iniciais, rascunhos retomados, filas de erro limitadas e separação do progresso da trilha. Os testes de voz verificam a chamada da API do navegador, não a qualidade sonora. Layout sem conferência visual no navegador nesta execução.

A integração PostgreSQL/HTTP também verifica salvar e recuperar o rascunho das peças e o histórico das oficinas, além de rejeitar identificadores inválidos.

Validação v9: as 28 verificações (inglês e italiano), pré-requisitos acíclicos, leitura sem aprovação automática, critério de cinco acertos mais duas montagens, tentativas insuficientes, retomada sem recontar respostas, retorno às lições/oficinas, recomendações de revisão e compatibilidade com progresso anterior. A suíte anterior continua cobrindo lições e oficinas com pré-requisitos já verificados. Sem conferência visual em navegador nesta execução.

A integração PostgreSQL/HTTP verifica o novo arquivo público `grammar.js`, o salvamento de aprovações e tentativas em andamento, o retorno à lição e a separação entre inglês e italiano.
