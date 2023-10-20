"use strict";
//DOM nodes
let questionForm = document.getElementById("questionForm");
let question = document.getElementById("question");
let reading = document.getElementById("reading");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");

//empty array
const allCards = [];

// card construct
function Card(name, src) {
  this.name = name;
  this.src = src;
  allCards.push(this);
}

const tarotCollection = [
  new Card("fool", "./images/00-TheFool.png"),
  new Card("magician", "./images/01-TheMagician.png"),
  new Card("high-priestess", "./images/02-TheHighPriestess.png"),
  new Card("empress", "./images/03-TheEmpress.png"),
  new Card("emperor", "./images/04-TheEmperor.png"),
  new Card("hierophant", "./images/05-TheHierophant.png"),
  new Card("lovers", "./images/06-TheLovers.png"),
  new Card("chariot", "./images/07-TheChariot.png"),
  new Card("strength", "./images/08-Strength.png"),
  new Card("hermit", "./images/09-TheHermit.png"),
  new Card("wheel-fortune", "./images/10-WheelOfFortune.png"),
  new Card("justice", "./images/11-Justice.png"),
  new Card("hanged", "./images/12-TheHangedMan.png"),
  new Card("death", "./images/13-Death.png"),
  new Card("temperance", "./images/14-Temperance.png"),
  new Card("devil", "./images/15-TheDevil.png"),
  new Card("tower", "./images/16-TheTower.png"),
  new Card("lovers", "./images/06-TheLovers.png"),
  new Card("star", "./images/17-TheStar.png"),
  new Card("moon", "./images/18-TheMoon.png"),
  new Card("sun", "./images/19-TheSun.png"),
  new Card("judgement", "./images/20-Judgement.png"),
  new Card("world", "./images/21-TheWorld.png"),
];

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

//array for LS
let entries = [];

// event for the form button

function drawCards(event) {
  event.preventDefault();
  renderCards();
  entries.push(card1.name);
  entries.push(card2.name);
  entries.push(card3.name);

  // let drawnCard1 = event.target.card1.name;
  // allCards.push(drawnCard1);
  // let drawnCard2 = event.target.card2.name;
  // allCards.push(drawnCard2);
  // let drawnCard3 = event.target.card3.name;
  // allCards.push(drawnCard3);
  localStorage.setItem("entries", JSON.stringify(card1.name));
  localStorage.setItem("entries", JSON.stringify(card2.name));
  localStorage.setItem("entries", JSON.stringify(card3.name));
}
questionForm.addEventListener("submit", drawCards);
console.log(entries);
