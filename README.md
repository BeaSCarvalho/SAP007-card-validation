# Validador de Cartão de Crédito
# Índice

- [1. Sobre](#1-sobre)
- [2. User Experience](#2-user-experience)
- [3. Protótipo](#3-protótipo) 
- [4. Acesso](#4-acesso)
- [5. Funcionalidades](#5-funcionalidades)
- [6. Capturas de Tela](#6-capturas-de-tela)
- [7. Futuras Implementações](#7-futuras-implementações)
- [8. Organização do Projeto](#8-organização-do-projeto)
<<<<<<< HEAD
- [9. Pré-requisitos](#9-pré-requisitos)
- [10. Passos para Rodar](#10-passos-para-rodar)
- [11. Ferramentas e Tecnologias Utilizadas](#11-ferramentas-e-tecnologias-utilizadas)
- [12. Autora](#12-autora)
=======
- [9. Ferramentas e Tecnologias Utilizadas](#9-ferramentas-e-tecnologias-utilizadas)
- [10. Autora](#10-autora)
>>>>>>> a322a4c9e37807a202962c7d940749d827b6cf1b

---

## 1. Sobre
Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
A aplicação serve para o usuário verificar se o cartão de crédito dele serve
para realizar compras pela internet pois há cartões de crédito que é possível 
fazer compras "fisicamente", porém, não são aptos para realizar compras pela
internet. Dessa forma, ao fazer uma consulta antes, o usuário poderá fazer
compras em sites sem passar por possíveis constrangimentos, por exemplo.
Essa verificação é feita através do [Algoritmo de Luhn](https://stringfixer.com/pt/Luhn_algorithm).

## 2. User Experience

O design foi pensado para ser de fácil entendimento: No início há um texto de introdução ao validador e um local para inserir o número do cartão. Os cartões de crédito geralmente têm de 13 a 16 dígitos, portanto se o usuário colocar uma quantidade fora desse intervalo aparece um alerta para ele digitar a quantidade válida.<br><br>
Ao lado do input dos números há um botão que aciona a verificação, apaga os dados no input e, logo abaixo, aparece o resultado da validação encobrindo os primeiros números e ficando visível apenas os quatro últimos. Assim que o botão é acionado, ao lado dele surge um outro botão ("Tente outro cartão") que apaga os dados e possibilita o usuário  digitar outro número.

## 3. Protótipo

Protótipo da idealização do projeto criado através do [Mockflow](https://mockflow.com/).
<br><br>
![Protótipo-card-validation](https://github.com/BeaSCarvalho/SAP007-card-validation/blob/96b38109754f2017f909308d04c665cb17f50d8c/Prot%C3%B3tipo-card-validation.png)

## 4. Acesso

O projeto pode ser acessado pelo [link](https://beascarvalho.github.io/SAP007-card-validation/).

## 5. Funcionalidades

- [x] Local para inserir o número do cartão
- [x] Botão para acionar a verificação 
- [x] Verificação através do Algoritmo de Luhn
- [x] Resultado da Validação
- [x] Números do cartão mascarados com #
- [x] Botão para limpar os dados e inserir outro numero

## 6. Capturas de tela

As capturas foram realizadas na versão mais atual do projeto.

## 7. Futuras Implementações

Identificar e exibir em tela a instituição financeira emissora do cartão de crédito.

## 8. Organização do Projeto

Para organização e planejamento do projeto foi utilizada a metodologia do Quadro Kanban por meio do [Trello](https://trello.com/b/MoKEHshS).

<<<<<<< HEAD
## 9. Pré-requisitos

Antes de começar, é necessário ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/)
e um editor de código como [VS Code](https://code.visualstudio.com/).

## 10. Passos para Rodar

Clone este repositório<br>
`$ git clone https://github.com/BeaSCarvalho/SAP007-card-validation.git`

Instale as dependências<br>
`$ npm install`

Realize os testes unitários<br>
`$ npm run test` 

Iniciar a aplicação<br>
`$ npm start`

## 11. Ferramentas e Tecnologias Utilizadas 
=======
## 9. Ferramentas e Tecnologias Utilizadas
>>>>>>> a322a4c9e37807a202962c7d940749d827b6cf1b

- HTML5
- CSS3
- Vanilla JavaScript
<<<<<<< HEAD
- Terminal
- GitHub Pages

## 12. Autora
=======
- Node.js
- Terminal
- Git
- GitHub Pages
- VS Code

## 10. Autora
>>>>>>> a322a4c9e37807a202962c7d940749d827b6cf1b






