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