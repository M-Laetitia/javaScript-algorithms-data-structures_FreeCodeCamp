const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

checkBtn.addEventListener('click', ()=>{
    isValidNumber();
    userInput.value = '';
})

userInput.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter') {
        isValidNumber();
        userInput.value = '';
    }
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

/*
\\(: Matches an opening parenthesis. The backslash is an escape character to match the literal parenthesis.
[0-9]{3}: Matches exactly three digits (0-9).
|: Alternation operator, which means "or".
*/
const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';

/*
[\\s\\-]: Character class that matches either a space (\\s) or a hyphen (\\-).
-?: Quantifier that makes the preceding character class optional, meaning it can appear zero or one time.
*/
const spaces = '[\\s\\-]?';

/*
[0-9]{3}: Matches exactly three digits (0-9).
[\\s\\-]?: Matches zero or one space (\\s) or hyphen (\\-).
$: Anchors the match to the end of the string, ensuring that the pattern occurs at the end of the phone number.
*/
const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
const phoneRegex = `${countryCode}${areaCode}${spaces}${phoneNumber}`


const isValidNumber =()=>{
    if(!userInput.value) { // or (input === '')
        alert('Please provide a phone number');
        return;
    }
  
    if(userInput.value.match(phoneRegex)){
      results.innerHTML += `Valid US number: ${userInput.value} <br>`
    } else {
      results.innerHTML += `Invalid US number: ${userInput.value} <br>`
    }
}