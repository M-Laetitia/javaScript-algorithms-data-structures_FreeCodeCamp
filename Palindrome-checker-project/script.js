const checkBtn = document.getElementById('check-btn')
const textInput = document.getElementById('text-input')
const result = document.getElementById('result')
const title = document.querySelector('h1')

function formattedInput(input) {
    return input.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase().split("").join('');
}

checkBtn.addEventListener('click', () => {
    title.style.color = '#1f2159';

    const textInputValue = textInput.value.trim(); // trim() to remove leading and trailing whitespace from the text.
  if(textInputValue == '') {
    alert("Please input a value");
    return; // to stop the execution of the function 
  }

  const cleanedInput = formattedInput(textInputValue);
  const reversedInput = cleanedInput.split('').reverse().join('');

  if(cleanedInput === reversedInput) {
    result.innerHTML = `<i class="ri-check-line"></i> ${textInputValue} is a palindrome`
    result.style.color = '#0f54a2';
  } else {
    result.innerHTML = `<i class="ri-close-line"></i> ${textInputValue} is not a palindrome`
    result.style.color = '#fe618b';
  }
})

textInput.addEventListener('click', () =>{
  title.style.color = '#cc236a';
})

// <i class="ri-close-line"></i>