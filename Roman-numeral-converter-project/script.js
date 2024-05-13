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
  // const numberValue = Number(number.value); 
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);

  if (isValid(numStr, int)) {
    output.innerText = convert(int);
  }
});


function convert(nb) {
  const romanNb = []
  
  correspondance.forEach((arr) => {
    while( nb >= arr[1]) {     
      romanNb.push(arr[0])  
      nb -= arr[1];
      console.log("ok", nb, romanNb)
    }
  })
    const result = romanNb.join('')
    return result
}


const isValid = (str, int) => {
  let errText = '';

  if (!str || str.match(/[e.]/g)) {
    errText = "Please enter a valid number";
  } else if(int < 1) {
    errText = "Please enter a number greater than or equal to 1";
  } else if(int >= 4000) {
    errText = "Please enter a number less than or equal to 3999";
  } else {
    // no error
    return true; 
  }

  // display error text on the page
  output.innerText = errText;

  return false;
}