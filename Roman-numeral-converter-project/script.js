const convertBtn = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output')


convertBtn.addEventListener('click', () => {
    const numberValue = Number(number.value); 
    if (!numberValue) {
      output.innerText = "Please enter a valid number";
      return;
    };
  
    if(numberValue < 0) {
      output.innerText = "Please enter a number greater than or equal to 1";
      return;
    }
  
    if(numberValue >= 4000) {
      output.innerText = "Please enter a number less than or equal to 3999";
      return;
    }
});