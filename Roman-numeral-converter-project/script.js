const convertBtn = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output')


convertBtn.addEventListener('click', () => {
    const numberValue = Number(number.value); 
    if (!numberValue) {
      output.innerText = "Please enter a valid number";
      return;
    };
});