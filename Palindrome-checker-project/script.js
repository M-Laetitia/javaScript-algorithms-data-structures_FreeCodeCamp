const checkBtn = document.getElementById('check-btn')
const textInput = document.getElementById('text-input')
const result = document.getElementById('result')

function formattedInput(input) {
    return input.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase().split("").join('');
}

checkBtn.addEventListener('click', () => {
    const textInputValue = textInput.value.trim();
  if(textInputValue == '') {
    alert("Please input a value")
  }

  const cleanedInput = formattedInput(textInputValue);
  const reversedInput = cleanedInput.split('').reverse().join('');

  if(cleanedInput === reversedInput) {
    result.innerText = `${textInputValue} is a palindrome`
  } else {
    result.innerText = `${textInputValue} is not a palindrome`
  }

})

