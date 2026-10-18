# PARLO 3 — Italiano, inglês e contas

Projeto com frontend em HTML/CSS/JavaScript e backend Node.js + PostgreSQL. O visual mantém a referência verde escura, com títulos serifados e ações coral.

## Novidades

- Italiano e inglês: seis unidades, 18 lições e 108 entradas de vocabulário **em cada idioma**. As trilhas são introdutórias, sem certificação de nível.
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

O frontend continua separado em `public/index.html`, `public/styles.css` e `public/app.js`. O conteúdo de inglês fica em `public/english.js`; `public/progress-validator.cjs` é JavaScript compartilhado entre navegador e servidor para validar o progresso.

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
- Headers CSP, anti-iframe, nosniff, Referrer-Policy, Permissions-Policy e HSTS no servidor de produção. Na Vercel os headers estáticos estão configurados e a plataforma oferece HTTPS.
- Dados de texto renderizados com escape; backup validado antes da importação e progresso validado novamente na API. O CSP permite handlers inline devido à estrutura existente do frontend; não é uma política restrita por nonce.
- RLS habilitado e acesso PUBLIC revogado nas tabelas. O cliente acessa somente a API da aplicação; o proprietário/servidor acessa o banco.
- `.env` fora da pasta pública, sem segredos nos arquivos do frontend. O servidor expõe apenas arquivos estáticos permitidos.

Não há analytics, publicidade ou cookies opcionais nesta versão; por isso não foi incluído um banner para rastreadores inexistentes. A tela de cookies explica o cookie de sessão e IndexedDB. As páginas privadas do aplicativo estão marcadas como noindex.

## Dados locais, saída da conta e conflitos

A cópia local de progresso usa chaves distintas para cada conta e idioma. Sair revoga o cookie e retorna ao login. As cópias de estudo em IndexedDB permanecem no navegador para evitar perda de alterações pendentes; podem ser removidas pelas configurações de dados do site. Não utilize perfis de navegador compartilhados para dados pessoais.

O indicador “Salvo na conta” só aparece após confirmação do servidor. No estado offline, o progresso local fica pendente até reconectar. O aplicativo evita sair ou trocar de idioma durante um envio em andamento ou enquanto há conflito sem resolução. Fechar a aba pode deixar alterações locais pendentes, recuperadas no próximo acesso à mesma conta neste navegador.

Para migrar o progresso anterior, use o mesmo endereço do site e o mesmo navegador, entre no Perfil e escolha “Importar progresso deste navegador”. Se mudar a origem, exporte JSON na versão anterior e importe no idioma italiano. Novos backups identificam o idioma e bloqueiam importação no curso errado.

## Verificação

Execute `npm test`. Os testes usam PostgreSQL em WebAssembly (PGlite) e HTTP real, sem seu banco externo. Eles verificam cadastro sem confirmação, hashes, cookies, login, bloqueio de origem indevida, isolamento de usuários e idiomas, revisão concorrente, validação, alteração de idioma, mudança de senha, revogação de sessão, acesso às páginas públicas, arquivos privados inacessíveis e permissões das tabelas.

Também foram exercitados no Chromium: cadastro escolhendo inglês, lição completa, salvamento no banco, recarga, troca entre idiomas, vocabulário, favoritos, cartões e navegação em desktop e celular, recuperação em um segundo navegador, resolução de conflito e isolamento de contas na interface. O navegador de teste usa um banco isolado, sem enviar e-mails ou dados a um banco de produção.

## Limites e operação

- A recuperação de senha por e-mail não está implementada; a troca de senha no Perfil exige a senha atual. Não há configuração SMTP, porque esta versão não envia e-mails.
- A propriedade do e-mail não é verificada, conforme solicitado. Não utilize o e-mail cadastrado como prova de identidade para outras operações.
- Sem credenciais do seu banco, não é possível ativar o armazenamento de produção. O pacote contém a integração, esquema e migração; as credenciais ficam a cargo do proprietário.
- Antes de abrir o serviço ao público, o responsável pela instância deve identificar sua operação e publicar um canal de suporte nas páginas legais.
- As vozes dependem do navegador. Sem voz compatível, as atividades usam texto.

Referências técnicas: https://nodejs.org/api/crypto.html e https://www.postgresql.org/docs/current/sql-insert.html.
