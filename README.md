<h1 align="center">
  <img src="https://d335luupugsy2.cloudfront.net/cms/files/90499/1605286727/$99awo9p2pkt" width="224px"/><br/>
  GoBeyond Final Challenge
</h1>

<h3 align="center">Desafio final do curso GoBeyond da CoreBiz.</h3>

<h4 align="center"><a src="https://gobeyond-final-challenge.netlify.app/"> 🔥Live Demo Here</a></h4>

---

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

-   [React](https://reactjs.org)

-   [Styled-Components](https://styled-components.com/)

-   Bootstrapped com [create-react-app](https://github.com/facebook/create-react-app)

## 🚀 Como executar

Clone o projeto e acesse a pasta seu diretório.

```bash

$ git clone https://github.com/pedrobarbosa0/gobeyond-final-challenge

$ cd gobeyond-final-challenge

```

Para iniciar o projeto, siga os passos abaixo:

##### Instalar as dependências

```bash
$ yarn install
```

or

```bash
$ npm install
```

---

##### Iniciar o projeto

```bash
$ yarn start
```

or

```bash
$ npm start
```

A aplicação estará disponível no seu browser pelo endereço http://localhost:3000.

## 💻 Projeto

O projeto é uma simples simulação de uma landing page para a CoreBiz e foi desenvolvido com CRA e Styled-Components para a construção dos componentes e [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) para o processo criativo de construção e lógica.

Ele possui três componentes maiores (organismos) que são: 

- Header 
- Main 
- Footer

E cada um deles, suas moléculas e átomos.

#### 📘 Documentação dos Componentes

-   #### Main

Este é o componente responsável por fazer a requisição à API [JSON Placeholder](https://jsonplaceholder.typicode.com/) e pela renderização das imagens.

> A requisição é feita usando a função [fetch()](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) nativa e após isso ela passa a resposta da API usando o método [.json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) então ele "seta" os estados dos componentes através dos respectivos setters dos estados.

Veja o exemplo abaixo:

```javascript
fetch("https://jsonplaceholder.typicode.com/photos")
.then((data) => return data.json())
.then((data) => {setResonse(data)});
```

> A renderização dos dados vindos da API é feita usando [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Para cada item da resposta da API ele constrói um componente usando os dados de cada item.

Veja o exemplo abaixo:

```javascript
{response.map((photo) => {
	return (
		<img src={photo.url} />
	);
})}
```

> Nesse mesmo map é "settado" o estado do título dinâmico que é passado para ele através de uma prop.

Veja o exemplo abaixo:

```javascript
<Button title={title} />
```

<br/>

#### Os outros componentes possuem uma lógica simples, sem complexidades, e podem ser compreendidos facilmente em seus códigos fonte que estão na pasta src.

---

<br/>

## 🔖 Layout e Requisitos

Você pode visualizar o layout e os requisitos do projeto através dos links abaixo:

-   [Requisitos](https://whimsical.com/pt-corebiz-go-beyond-2021-final-challenge-XPcnF5FUkS6pFW9nveNr2h)
-   [Layout](https://xd.adobe.com/view/e100320d-9539-4cd9-9146-e27f75204e69-b453/grid)
-   [Página de Exemplo](https://go-beyond-2021-final-challenge.vercel.app/)

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---
