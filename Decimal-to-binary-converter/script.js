const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

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