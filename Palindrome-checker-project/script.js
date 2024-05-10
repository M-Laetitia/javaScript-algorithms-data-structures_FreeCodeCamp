const checkBtn = document.getElementById('check-btn')
const textInput = document.getElementById('text-input')
const result = document.getElementById('result')

function formattedInput(input) {
    return input.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase().split("").join('');
}

checkBtn.addEventListener('click', () => {
    const textInputValue = textInput.value.trim(); // trim() to remove leading and trailing whitespace from the text.
  if(textInputValue == '') {
    alert("Please input a value");
    return; // to stop the execution of the function 
  }

  const cleanedInput = formattedInput(textInputValue);
  const reversedInput = cleanedInput.split('').reverse().join('');

  if(cleanedInput === reversedInput) {
    result.innerText = `${textInputValue} is a palindrome`
  } else {
    result.innerText = `${textInputValue} is not a palindrome`
  }
})

