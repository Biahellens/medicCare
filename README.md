![medicare](https://github.com/Biahellens/medicCare/blob/main/public/favicon.svg)
#  MediCare

A versão web de um sistema para agendamentos de consultas médicas.

- [MediCare](#VagaKey)
  - [Tecnologias](#tecnologias)
  - [Inicializando](#inicializando)
    - [Server](#server)
    - [Cliente](#cliente)


## Tecnologias
Para o desenvolvimento deste projeto, foi utilizado as seguintes tecnologias:

- [React.js](https://react.dev/);
  - [styled-components](https://styled-components.com/).
- [Npm](https://www.npmjs.com/);
- [TypeScript](https://www.typescriptlang.org/);
- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Axios](https://axios-http.com/ptbr/docs/intro)

## Inicializando

O projeto foi construido de maneira desacoplada, sendo assim, o server desenvolvido totalmente desacoplado do cliente.

### Server

O server foi construido utilizando o Node com template Typescript, Express e Cors com banco de dados Sqlite. Com tudo configurado é possível estar subindo os contêineres para a aplicação estar no ar através do seguinte comando:

```bash
$ npm i
```

agora, podemos estar inicializando com através do comando:

```bash
$ npm run server
```

que ficará disponivel na seguninte url: [localhost:3001](http://localhost:3001).

### Cliente
O desenvolvimento do nosso cliente foi criado um SPA utilizando React, com template Typescript. Antes de iniciar, precisa-se instalar as dependências, para isso utilizamos o npm como nosso gerenciador de dependencias e xecutar o seguinte comando no terminar:

```bash
$ npm i
```

agora com as dependencias instaladas é possível estar executando o cliente:

```bash
$ npm start
```

que ficará disponivel na seguninte url: [localhost:3000](http://localhost:3000).
