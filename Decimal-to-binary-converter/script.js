const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// ^ before refactoring
const decimalToBinaryFirst = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  input = 0;

  while(input > 0){
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);

    input = quotient;
  }  

  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);

  if (input === 0) {
    result.innerText = "0";
    return;
  }

  result.innerText = remainders.reverse().join("")
}

// ^ after refactoring
const decimalToBinary = (input) => {
  let binary = "";

  if (input === 0) {
    binary = "0";
  }

  while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input / 2);
  }

  result.innerText = binary;
};

const checkUserInput = () => {
  console.log(numberInput.value);
  
  // if(numberInput.value === "")
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert('Please provide a decimal number');
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

// Zvent listener to call the function when users click the Convert button. The event listener should listen for click events and take a reference to the checkUserInput function as a callback. Function references are not called with parentheses.
convertBtn.addEventListener("click", checkUserInput);

// The event listener should listen for keydown events and take an empty arrow function as a callback.
numberInput.addEventListener("keydown", (e) => {
  // Whenever an event listener is triggered by an event, an event object is created automatically.
  console.log(e);

  if(e.key == "Enter"){
    checkUserInput();
  }
})