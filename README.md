<!--
*** Obrigado por estar vendo o nosso README. Se você tiver alguma sugestão
*** que possa melhorá-lo ainda mais dê um fork no repositório e crie uma Pull
*** Request ou abra uma Issue com a tag "sugestão".
*** Obrigado novamente! Agora vamos rodar esse projeto incrível :D
-->

<!-- PROJECT SHIELDS -->

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![issues](https://img.shields.io/github/issues/HigorAlves/cra-template)](https://github.com/HigorAlves/cra-template/issues)
[![license](https://img.shields.io/github/license/HigorAlves/cra-template)](https://github.com/HigorAlves/cra-template/)
[![top-language](https://img.shields.io/github/languages/top/higoralves/cra-template)](https://github.com/HigorAlves/cra-template/)
[![pr-open](https://img.shields.io/github/issues-pr/higoralves/cra-template)](https://github.com/HigorAlves/cra-template/)
[![version](https://img.shields.io/github/package-json/v/higoralves/cra-template)](https://github.com/HigorAlves/cra-template/)
[![release](https://img.shields.io/github/v/release/higoralves/cra-template?include_prereleases)](https://github.com/HigorAlves/cra-template/)
[![latest-commit](https://img.shields.io/github/last-commit/higoralves/cra-template)](https://github.com/HigorAlves/cra-template/)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="link">
    <img src="logo" alt="Logo">
  </a>

  <h3 align="center">CRA Template</h3>
</p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conteúdo)
- [Sobre o Projeto](#sobre-o-projeto)
	- [Feito Com](#feito-com)
- [Começando](#começando)
	- [Pré-requisitos](#pré-requisitos)
	- [Estrutura de Arquivos](#estrutura-de-arquivos)
	- [Instalação](#instalação)
	- [Edição](#edição)
- [Contribuição](#contribuição)
- [Licença](#licença)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando ReactJS, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [ReactJS](http://reactjs.org) - Uma biblioteca JavaScript para criar interfaces de usuário
- [Typescript](https://www.typescriptlang.org) - O Typescript é um SuperSet para ECMAscript nos ajudando a tipar melhor nossos componentes.
- [Husky](https://www.npmjs.com/package/husky) - Plugin para ajudar a rodar scripts antes de se commitar alguma alteração;
- [lint-staged](https://www.npmjs.com/package/lint-staged) - Executa o linter para os arquivos no Staged do Git, não permitindo subir arquivos fora dos padrões;
- [standard-version](https://github.com/conventional-changelog/standard-version) - Padronização para versionamento semantico usando o padrão semver e CHANGELOG;
- [commitizen](https://github.com/commitizen/cz-cli) - Ferramenta para padronizar os commits;
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript, JSX e Typescript;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Regras para controlar os erros de lint dos Hooks;
  - [eslint-plugin-import-helpers](https://github.com/Tibfib/eslint-plugin-import-helpers) - Regras para ordem de ordenação dos nossos importes;
- [Prettier](https://prettier.io/) - O Prettier atualiza seu código automaticamente seguindo os padrões que você quiser toda vez salva o arquivo;
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - Roda o Prettier como uma regra do ESLint;
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do CRA ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em ReactJS, para isso você pode seguir o guia do link abaixo:

[Ambiente ReactJS](https://reactjs.org/docs/create-a-new-react-app.html)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
cra-template
├── src/
│   ├── __test__/
│   ├── assets/
│   │   ├── css/
│   │   └── images/
│   ├── components/
│   ├── config/
│   ├── containers/
│   ├── lib/
│   ├── pages/
│   ├── router/
│   ├── services/
│   ├── store/
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   └── setupTests.ts
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── LICENSE
├── package.json
├── README.md
└── tsconfig.json
```

Serão explicados os arquivos e diretórios na seção de [Edição](#edição).

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
npx create-react-app <nome-do-projeto> --template @higoralves/cra-template
```

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

### Edição

Nesta seção haverão instruções caso você queira editar o template, explicando para que os diretórios são utilizados e também os arquivos de configuração.

- **src/** - Diretório contendo todos os arquivos da aplicação, é criado um diretório `src` para que o código da aplicação possa ser isolado em um diretório e facilmente portado para outros projetos, se necessário;

  - **config** - Diretório para guardar os arquivos de configuração da aplicação, por exemplo, a configuração de uso do Reactotron e configuração de inicialização do Firebase;

	- **assets** - Diretório para armazenar dados consistentes a estilização do sistema em geral, como imagens, cores, css;
    - **images** - Diretório para armazenar imagens em geral que possam ser utilizadas na aplicação;
		- **css** - Diretório para armazenar arquivos do tipo css para estilização global da aplicação;

	- **components** - Diretório onde os menores segmentos de código e reutilizáveis, devem apenas cumprir o papel de receber props e exibir algum componente de interface gráfica na tela;
	
	- **containers** - Diretório onde estão os componentes maiores e que inevitavelmente interagem com o estado global da aplicação;

	- **lib** - Diretório onde estão armazenados recursos do Typescript compartilhados;
  
	- **pages** - Diretório onde ficam as páginas (telas) da aplicação, como forma de padronização e boas práticas toda página fica dentro de um diretório com seu nome;

	- **router** - Diretório com as configurações de navegação da aplicação, nele são criados as Rotas;

  - **services** - Diretório onde serão criados os arquivos relacionados a serviços utilizados na aplicação, por exemplo, requisições HTTP, autenticação com Firebase ou qualquer outro serviço que for utilizado;

  - **store** - Diretório onde será criada os módulos de armazenamento do estado global da aplicação;

      - **reducer.ts** - Arquivo responsável por relacionar as **Actions** disparadas pela aplicação e estabelecer o estado inicial da aplicação;

			- **index.tsx** - Arquivo responsável por gerar um Hook para se usar o estado global de forma facil dentro da aplicação;

  - **index.tsx** - Arquivo responsável por centralizar o código do diretório `src`, nele é inserido o HOC Provider que é o responsável por disponilizar o state global para a aplicação, e dentro do Provider são chamadas as rotas tal como qualquer outra configuração que precise ser executada na inicialização da aplicação, ele é como um _Entry Point_ do diretório `src`;

- **.editorconfig** - Arquivo destinado à configuração do plugin Editor Config, que padroniza algumas configurações para o editor em diferentes ambientes;

- **.eslintrc.json** - Arquivo de configuração do ESLint, é nele que são inseridas as regras e configurações de Linting do projeto, tal como a configuração do Resolver para o Babel Plugin Root Import e configuração da variável global `__DEV__`;

- **.prettierrc** - Arquivo de configuração do Prettier;

- **package.json** - Diferente dos projetos comuns, esse arquivo tem as configurações necessárias para a publicação do Template no NPM, para saber mais sobre isso veja a seção abaixo.

- **tsconfig.json** -  Arquivo de configuração do Typescript, onde é possivel setar diversas funcionalidades e regras;

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

Para testar o template de um caminho local, coloque o caminho absoluto junto com o prefixo `file://`
```
npx create-react-app AwesomeContribution --template file:///Users/Dev/contributions/cra-template
```

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.