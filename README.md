# O que é?

Um projeto feito com para praticar Typescript e React. Nele você pode exibir algumas informações pessoais e os seus projetos.

# Como usar

Para usar o projeto você precisa ter o NodeJs e um dos seus gerenciadores de pacotes instalado. Depois disso basta clonar o projeto e instalar os pacotes do projeto.

```bash
# Utilizando o npm
npm install
# ou
npm i

# Utilizando o yarn
yarn install

# Utilizando o pnpm
pnpm install
# ou
pnpm i
```

Com o os pacotes instalados você pode configurar as variáveis de ambiente, com elas você poderá exibir as suas informações e seus projetos.

Para configurar as variáveis de ambiente, basta copiar o arquivo .env_template, renomeá-lo para .env.local e colocar as suas informações nas variáveis de ambiente.

```
REPO_URL=URL DE UM SERVIDOR QUE RETORNE O JSON COM OS PROJETOS
HOST_URL=localhost:3000

USER_NAME=NOME DO DONO DO PORTFOLIO
USER_DESCRIPTION=DESCRIÇÃO DO DONO DO PORTFOLIO
```

A url da variável `REPO_URL` precisa obedecer o comportamento do [repoistório de dados](https://github.com/LuanFabricio/portfolio-data), pois esse projeto foi feito para puxar os dados de um repositório do github.

Com as variáveis de ambiente configuradas, basta executar o projeto no modo de desenvolvimento.

# Pré-requisitos
Instalar o [Node.Js](https://nodejs.org/en) na versão **16.x** e algum dos seus gerenciadores de pacotes ([npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/pt/)).

# Comandos do projeto

## Desenvolvimento
Para iniciar o projeto no modo de desenvolvimento basta utilizar o script `dev` pelo seu gerenciador de pacotes.

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Depois disso você pode acessar o seu projeto acessando o https://localhost:3000, no seu navegador.

## Linter
Para rodar o linter do projeto basta utilizar o script `lint` ou `lint-fix`.
```sh
npm run lint
# ou
npm run lint-fix
# ou
yarn lint
# ou
yarn lint-fix
# ou
pnpm lint
# ou
pnpm lint-fix
```

## Formatter
Para rodar o formatter do projeto basta utilizar o script `format`.
```sh
npm run format
# ou
yarn format
# ou
pnpm format
```

## Testes
Para rodar o framework de testes do projeto basta utilizar o script `test`.
```sh
npm run test
# ou
npm test
# ou
yarn test
# ou
pnpm test
```

## Build
Para fazer o build do projeto basta utilizar o script `build`.
```sh
npm run build
# ou
yarn build
# ou
pnpm build
```

# Tecnologias
[Next.Js](https://nextjs.org/)</br>
[React](https://react.dev/)</br>
[Tailwind](https://tailwindcss.com/)</br>
[Typescript](https://www.typescriptlang.org/)</br>
[Eslint](https://eslint.org/)</br>
[Jest](https://jestjs.io/pt-BR/)</br>
[Prettier](https://prettier.io/)</br>
[Axios](https://axios-http.com/ptbr/docs/intro)</br>
