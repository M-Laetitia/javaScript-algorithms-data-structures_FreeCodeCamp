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

// update radio option
const updateRadioOption = (optionNode, score) => {
    // enable the radio buttons, you should set the disabled property on scoreInputs[optionNode] to false.
    scoreInputs[optionNode].disabled = false;
    // update the radio button's value to the current score.
    scoreInputs[optionNode].value = score;
    // display the current score
    scoreSpans[optionNode].textContent = `, score = ${score}`;
};

// algorithm that keeps track of and displays each score for all six rounds of the game.
const updateScore = (selectedValue, achieved) => {
    // update the score -  wrap the parameter inside a parseInt since this string value needs to be converted to an integer.
    totalScore += parseInt(selectedValue);
    totalScoreText.textContent = totalScore;
    scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

// algorithm that tracks any duplicates found in the diceValuesArr and displays a score next to the first two radio buttons.
const getHighestDuplicates = (arr) => {
    // count the number of occurrences for each unique number in the arr
    const counts = {};
    for (const num of arr) {
        // check if the current number exists in the counts object.
        if(counts[num]){
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
    }
    // keep track of when a particular number appears three or four times within the arr.
    let highestCount = 0;
    for (const num of arr) {
        // get the current duplicate count for each number in the arr
        const count = counts[num];
        if (count >= 3 && count > highestCount) {
        highestCount = count;
        }
        if (count >= 4 && count > highestCount) {
        highestCount = count;
        }
    }

    // get the score totalling the sum of all five dice values
    const sumOfAllDice = diceValuesArr.reduce((a, b) => a + b, 0);

    if(highestCount >= 4) {
        updateRadioOption(1, sumOfAllDice);
    }
    if (highestCount >= 3) {
        updateRadioOption(0, sumOfAllDice);
    }
    updateRadioOption(5,0);
};


// check for both a "Three of a kind" and a pair and display that option on the screen.
const detectFullHouse=(arr)=>{
    const counts = {};
    // count the occurrences for each number
    for (const num of arr) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    // Object.values(): create an array of only the counts values.
    // include(): check if 3 is inside this new array.
    const hasThreeOfAKind =  Object.values(counts).includes(3);
    const hasPair = Object.values(counts).includes(2);

    // Full house case resulting in 25 points.
    if(hasThreeOfAKind  && hasPair) {
        updateRadioOption(2,25);
    }
    // option for None of the above should be enabled with 0 points awarded.
    updateRadioOption(5,0);
};

// algorithm that checks for the presence of a straight.
const checkForStraights = (arr) => {
    //  sort the list of numbers in the array.
    const sortedNumbersArr  = arr.sort((a,b) => a - b);
    // check for only unique numbers with Set
    const uniqueNumbersArr = [...new Set(sortedNumbersArr)];
    const uniqueNumbersStr = uniqueNumbersArr.join("");

    // 3 possibilities for a small straight
    const smallStraightsArr = ["1234","2345","3456"];
    // two possibilities for a large straight
    const largeStraightsArr = ["12345", "23456"];

    // make radio button option enabled with a score of 40 points for small Straight.
    smallStraightsArr.forEach((straight)=>{
        if(uniqueNumbersStr.includes(straight)){
          updateRadioOption(3, 30);
        }
    })

    // make radio button option enabled with a score of 40 points for large Straight.
    if(largeStraightsArr.includes(uniqueNumbersStr)) {
        updateRadioOption(4,40); 
    }

    // case when the user does not get a small or large straight
    updateRadioOption(5, 0); 

};

// Before each dice roll, reset the values for the score
const resetRadioOption = () => {
    const resetRadioOption = () => {
        scoreInputs.forEach((input) => {
          input.disabled = true;
          input.checked = false;
        });
        // For each of the score span elements, reset the text content.
        scoreSpans.forEach((span)=>{
            span.textContent = "";
        })
    };
};

// reset the game after 6 rounds
const resetGame = () => {
    diceValuesArr = [0,0,0,0,0];
    score = 0;
    totalScore = 0;
    rolls = 0;
    round = 1;

    // reset each of the dice values to show 0
    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });

    // update the score history, total, rounds and rolls text.
    totalScoreText.textContent = totalScore;
    scoreHistory.innerHTML = "";
  
    currentRoundRollsText.textContent = rolls;
    currentRoundText.textContent = round;

    // reset all of the radio buttons.
    resetRadioOption();
};

rollDiceBtn.addEventListener("click", () => {
    if(rolls === 3){
      alert("You have made three rolls this round. Please select a score.");
    }  else {
        rolls ++;
        resetRadioOption();
        rollDice();
        updateStats();
        getHighestDuplicates(diceValuesArr);
        detectFullHouse(diceValuesArr);
        checkForStraights(diceValuesArr);
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

// After a user makes a selection, they should be able to keep that score and move onto the next round.
keepScoreBtn.addEventListener("click", () => {
    let selectedValue;
    let achieved;
    // loop through each radio button to see which one has the checked attribute.
    for (const radioButton of scoreInputs) {
        if(radioButton.checked) {
          selectedValue = radioButton.value;
          achieved = radioButton.id;
          break;
        }
    }
    if(selectedValue){
        rolls = 0;
        round ++;
        updateStats();
        resetRadioOption();
        updateScore(selectedValue, achieved);
        // fix a limit of 6 rounds
        if (round > 6) {
            setTimeout(()=>{
              alert(`Game Over! Your total score is ${totalScore}`);
              resetGame();
            }, 500)
        }
    } else {
        alert("Please select an option or roll the dice");
    }
});