const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const animationData = [
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500
  },
   {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000
  }
]

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
};

// ^ after refactoring
const decimalToBinarySecond = (input) => {
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

// ^ Recursive function 
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  }  else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const showAnimation = () => {
  // setTimeout() function is asynchronous
  // setTimeout(() => {
  //   console.log("free");
  // }, 500);
  result.innerText = "Call Stack Animation"
  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
      <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
        decimalToBinary(${obj.inputVal})
      </p>
      `;
    }, obj.addElDelay);
  });
};


const checkUserInput = () => {
  console.log(numberInput.value);
  const inputInt = parseInt(numberInput.value)

  // if(numberInput.value === "")
  if (!numberInput.value || isNaN(inputInt)) {
    alert('Please provide a decimal number');
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  // decimalToBinary(inputInt);
  // result.textContent = decimalToBinary();

  result.textContent = decimalToBinary(inputInt);
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