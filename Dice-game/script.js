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

// When the user clicks on the Show rules button, they should be able to toggle between showing and hiding the game rules.
let isModalShowing = false;
// Each time the user rolls the dice, you will need to keep track of all of the dice values
let diceValuesArr = [];
// keep track of the current score, total score, number of rolls and which round the player is on.
let rolls = 0;
let score = 0;
let totalScore = 0;
let round = 1;

// build out the roll dice algorithm.
const rollDice = () => {
    diceValuesArr = [];
    // generate 5 random numbers representing each die value.
    for(let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() *6)+1;
        diceValuesArr.push(randomDice);
    }
    //display the five random dice values on the screen.
    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });
};

// update the text content for both of those values: rolls and round
const updateStats = () => {
    currentRoundRollsText.textContent = rolls;
    currentRoundText.textContent = round;
};

rollDiceBtn.addEventListener("click", () => {
    if(rolls === 3){
      alert("You have made three rolls this round. Please select a score.");
    }  else {
        rolls ++;
        rollDice();
        updateStats();
    }
});

// toggle functionality to show and hide the rules.
rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;
    if(isModalShowing) {
        rulesBtn.textContent = "Hide Rules";
        rulesContainer.style.display = "block";
    } else {
        rulesBtn.textContent = "Show Rules";
        rulesContainer.style.display = "none";
     }
   
});
