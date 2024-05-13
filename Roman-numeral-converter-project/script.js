const convertBtn = document.getElementById('convert-btn');
const number = document.getElementById('number');
const output = document.getElementById('output')

const correspondance =  [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
];

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