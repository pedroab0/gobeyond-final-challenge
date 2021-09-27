<h1 align="center">
  <img src="https://d335luupugsy2.cloudfront.net/cms/files/90499/1605286727/$99awo9p2pkt" width="224px"/><br/>
  GoBeyond Final Challenge
</h1>

<h3 align="center">Desafio final do curso GoBeyond da CoreBiz.</h3>

<div align="center"><a src="https://gobeyond-final-challenge.netlify.app/"> 🔥Live Demo Here</a></div>

---
## 📑 Índice

<p align="center">
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-como-executar">Como executar</a> •
 <a href="#-projeto">Projeto</a> • 
 <a href="#-layout-e-requisitos">Layout e Requisitos</a> • 
  <a href="#-lighthouse-score">Lighthouse</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

---

##  🧪 Tecnologias

  

Esse projeto foi desenvolvido com as seguintes tecnologias:

  

- [React](https://reactjs.org)

- [Styled-Components](https://styled-components.com/)

- Bootstrapped com [create-react-app](https://github.com/facebook/create-react-app)

 ---

##  🚀 Como executar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).


### Iniciando  

Clone o projeto e acesse a pasta seu diretório.

  

```bash

$ git clone https://github.com/pedrobarbosa0/gobeyond-final-challenge

$ cd gobeyond-final-challenge

```

  

Para iniciar o projeto, siga os passos abaixo:

##### Instalar as dependências
```bash
$ yarn install
````
or
```bash
$ npm install
````
---

##### Iniciar o projeto
```bash
$ yarn start
```
or
```bash
$ npm start
````

A aplicação estará disponível no seu browser pelo endereço http://localhost:3000.

  

##  💻 Projeto

O projeto é uma simples simulação de uma landing page para a CoreBiz e foi desenvolvido com CRA e Styled-Components para a construção dos componentes e [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) para o processo criativo de construção e lógica.

Ele possui três componentes maiores (organismos) que são:
	
	- Header
	- Main
	- Footer

E cada um deles, seus organismos e átomos.


#### 📘 Documentação dos Componentes

- #### Main

Este é o componente responsável por fazer a requisição à API [JSON Placeholder](https://jsonplaceholder.typicode.com/) e pela renderização das imagens.

>A requisição é feita usando a função [fetch()](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) nativa e após isso ela passa a resposta da API usando o método [.json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) então ele "seta" os estados dos componentes através dos respectivos setters dos estados.

Veja o exemplo abaixo:

```javascript-react
fetch("https://jsonplaceholder.typicode.com/photos")
.then((data) => return data.json())
.then((data) => {setResonse(data)});
```



>A renderização dos dados vindos da API é feita usando [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Para cada item da resposta da API ele constrói um componente usando os dados de cada item.

Veja o exemplo abaixo:

```javascript
{response.map((photo) => {
	return (
		<img src={photo.url} />
	);
})}
```

>Nesse mesmo map é "settado" o estado do título dinâmico que é passado para ele através de uma prop.

Veja o exemplo abaixo:

```javascript
<Button title={title} />
```
<br/>

#### Os outros componentes possuem uma lógica simples, sem complexidades, e podem ser compreendidos facilmente em seus códigos fonte que estão na pasta 
>src/components.



<br/>  

## 🎨 Layout e Requisitos

Você pode visualizar o layout e os requisitos do projeto através dos links abaixo:

<p align="center">
	<a href="https://whimsical.com/pt-corebiz-go-beyond-2021-final-challenge-XPcnF5FUkS6pFW9nveNr2h">
	  <img alt="Acessar requisitos no whimsical" src="https://img.shields.io/badge/Acessar%20Requisitos%20-Whimsical-080eb3">
	</a>
	<a href="https://xd.adobe.com/view/e100320d-9539-4cd9-9146-e27f75204e69-b453/grid">
	  <img alt="Acessar layout no AdobeXd" src="https://img.shields.io/badge/Acessar%20Layout%20-AdobeXd-7c3c85">
	</a>
	<a href="https://go-beyond-2021-final-challenge.vercel.app/">
	  <img alt="Acessar página de exemplo na Vercel" src="https://img.shields.io/badge/Acessar%20Exemplo%20-Vercel-ffffff">
	</a>
</p>

#### ⚙️ Requisitos

- [x] Crie uma página responsiva usando react
- Header
    - [x] O header tem o logo da Corebiz alinhado à esquerda e um menu de navegação horizontal na direita.
- Main
	- [x] Na coluna da direita, uma imagem grande, dinâmica.
	- [x] Na coluna da esquerda, um título dinâmico, seguido por um botão de veja mais que redireciona para o site da Corebiz. Abaixo, uma lista de pequenas imagens dinâmicas que troca o título dinâmico e a imagem grande dinâmica quando clica em cada uma.
- Footer
	- [x] O logo da Corebiz seguido pelo texto de direitos reservados e os ícones de redes sociais da Corebiz com seus links. 
	- [x] Um menu de navegação vertical.
	- [x] A lista de endereços da Corebiz, separadas em colunas, por países.- [x] entrar em contato com a entidade através do E-mail ou do WhatsApp

---

#### 🖥️ Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Layout Desltop" src="https://user-images.githubusercontent.com/39542011/134087688-6788812c-4b71-4148-8203-e785faf38a99.png" width="400px">
</p>

#### 📱 Mobile

<p align="center">
    <img alt="Layout Mobile" src="https://user-images.githubusercontent.com/39542011/134087724-d741e6b5-9c8c-4414-abec-6dae29228523.png" height="800px">
</p>

---


## ⚡ Lighthouse Score

  
---


## 🧑‍💻 Autor

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/47837747?s=400&u=19b98696236746bc3e176259259591a9eb8aa3a3&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Pedro Barbosa</b></sub></a> <a href="https://github.com/pedrobarbosa0" title="GitHub">⚛️</a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Pedro%20Barbosa-blue?style=for-the-badge&logo=Linkedin&logoColor=white&https://www.linkedin.com/in/pedro-abarbosa/)](https://www.linkedin.com/in/tgmarinho/) 
[![Gmail Badge](https://img.shields.io/badge/-p.brbsa@gmail.com-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:p.brbsa@gmail.com)](mailto:p.brbsa@gmail.com)

  

##  📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.<br/>
Feito com ❤️ por Pedro Barbosa 👋🏽 [Entre em contato!](https://www.linkedin.com/in/pedro-abarbosa/)

---
