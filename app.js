"use strict";
//DOM nodes
let questionForm = document.getElementById("questionForm");
let question = document.getElementById("question");
let reading = document.getElementById("reading");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");

//array for local storage
const allCards = [];

// card construct
function Card(name, src) {
  this.name = name;
  this.src = src;
  allCards.push(this);
}

// function to choose a random card
function getRandomIndex() {
  return Math.floor(Math.random() * allCards.length);
}

// function to render cards in reading

function renderCards() {
  let card1Index = getRandomIndex();
  let card2Index = getRandomIndex();
  let card3Index = getRandomIndex();
  while (
    card1Index === card2Index ||
    card1Index === card3Index ||
    card2Index === card3Index
  ) {
    card1Index = getRandomIndex();
    card2Index = getRandomIndex();
    card3Index = getRandomIndex();
  }

  card1.name = allCards[card1Index].name;
  card2.name = allCards[card2Index].name;
  card3.name = allCards[card3Index].name;
  card1.src = allCards[card1Index].src;
  card2.src = allCards[card2Index].src;
  card3.src = allCards[card3Index].src;
}

const tarotCollection = [
  new Card("fool", "./images/00-TheFool.png"),
  new Card("magician", "./images/01-TheMagician.png"),
  new Card("high-priestess", "./images/02-TheHighPriestess.png"),
  new Card("empress", "./images/03-TheEmpress.png"),
  new Card("emperor", "./images/04-TheEmperor.png"),
  new Card("hierophant", "./images/05-TheHierophant.png"),
  new Card("lovers", "./images/06-TheLovers.png"),
];

// event for the form button

function drawCards(event) {
  event.preventDefault();
  renderCards();
  let drawnCard1 = event.target.card1.name;
  allCards.push(drawnCard1);
  let drawnCard2 = event.target.card2.name;
  allCards.push(drawnCard2);
  let drawnCard3 = event.target.card3.name;
  allCards.push(drawnCard3);
  localStorage.setItem("entries", JSON.stringify(allCards));
}
questionForm.addEventListener("submit", drawCards);
console.log(allCards.name);
