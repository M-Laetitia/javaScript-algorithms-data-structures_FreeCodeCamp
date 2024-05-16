const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

checkBtn.addEventListener('click', ()=>{
    if(!userInput.value) {
      alert('Please provide a phone number');
    }
    isValidNumber();
})
  
  clearBtn.addEventListener('click',()=>{
    results.innerHTML= "";
})


// ^ Regex
/*
(^ anchor Anchor indicating the match must start at the beginning of the string
(1\\s?)? : Optional capturing group for the country code, which may start with "1"
\\s? : Matches zero or one space. Double backslash (\\) is used to escape the space character (\s), and ? indicates the space is optional.
)? : Means the preceding capturing group is optional, allowing for phone numbers with or without a country code.
*/
const countryCode = '^(1\\s?)?';

const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
const spaces = '[\\s\\-]?';
const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';

const phoneRegex = `${countryCode}${areaCode}${spaces}${phoneNumber}`


const isValidNumber =()=>{
    console.log("test");
    if(userInput.value.match(newRegex)){
      results.innerHTML += `Valid US number: ${userInput.value} <br>`
    } else {
      results.innerHTML += `Invalid US number: ${userInput.value} <br>`
    }
  }