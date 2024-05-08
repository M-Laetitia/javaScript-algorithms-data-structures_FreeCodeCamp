const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function isInvalidInput(str) {
    // const regex = /[0-9]+e[0-9]+/i;
    const regex = /\d+e\d+/i;
    return str.match(regex); // The match method returns an array with any matches found in the string. Should return null when the input is a valid number without any scientific notation.
}

/* [ '1e3', index: 0, input: '1e3', groups: undefined ]
"1e3" is the matched value against the /\d+e\d+/i regex.
index: 0 is the index of the matched value in the string.
input: '1e3' is the original string that was matched.
groups: undefined are the matched groups, which are not used in this case. You will learn more about groups in a later project.
*/

function addEntry() {
    // const targetId = '#' + entryDropdown.value;
    // const targetInputContainer = document.querySelector(`${targetId} .input-container`);
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    entryNumber = targetInputContainer.querySelectorAll(); // The querySelectorAll() method returns a NodeList of all the elements that match the selector. A NodeList is an array-like object, so you can access the elements using bracket notation.
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;

    // template literal 
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
    />`;

    // targetInputContainer.innerHTML += HTMLString;
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);// first argument is a string that specifies the position of the inserted element. The second argument is a string containing the HTML to be inserted.
}

function getCaloriesFromInputs(list) {
    let calories = 0;
  
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
  
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
        isError = true;
        return null;
      } 
        calories += Number(currVal) // The Number constructor is a function that converts a value to a number. 
    }
    return calories;
}

function calculateCalories(e) {
    e.preventDefault();
    isError = false;
  
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');
  
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  
    if (isError) {
      return;
    }
  
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `;
  
    output.classList.remove('hide');
  }

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);