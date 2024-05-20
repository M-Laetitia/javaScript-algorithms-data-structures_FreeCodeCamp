// select all of the elements responsible for displaying the scores.
const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll('#score-options input');
const scoreSpans = document.querySelectorAll('#score-options span');

// elements responsible for displaying the current round text.
const currentRoundText = document.getElementById('current-round');
const currentRoundRollsText = document.getElementById('current-round-rolls');

// elements responsible for displaying the score history and total text.
const totalScoreText = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");

// buttons that are responsible for keeping the score and rolling the dice.
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");

// access the container responsible for displaying the rules
const rulesContainer = document.querySelector(".rules-container");

// access the button responsible for showing and hiding the rules.
const rulesBtn = document.getElementById("rules-btn");