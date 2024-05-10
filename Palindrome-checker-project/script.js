const checkBtn = document.getElementById('check-btn')
const textInput = document.getElementById('text-input')
const result = document.getElementById('result')


checkBtn.addEventListener('click', () => {
  const textInputValue = textInput.value
  if(textInputValue == '') {
    alert("Please input a value")
  }

const clearInput = textInputValue.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
console.log('clear:', clearInput)

  const formattedInput = clearInput.toLowerCase()
  console.log('formatted:', formattedInput)
  const inputArray = formattedInput.split("");
  console.log('array:', inputArray)
  const inputReserved = inputArray.slice().reverse()
  console.log('reversed array:', inputReserved)

  const firstArrayJoin = inputArray.join('')
  console.log('array join', firstArrayJoin)
  const secondArrayJoin = inputReserved.join('')
  console.log('array join2', secondArrayJoin)
  
  if(firstArrayJoin === secondArrayJoin) {
    result.innerText = `${textInputValue} is a palindrome`
  } else {
    result.innerText = `${textInputValue} is not a palindrome`
  }

})
