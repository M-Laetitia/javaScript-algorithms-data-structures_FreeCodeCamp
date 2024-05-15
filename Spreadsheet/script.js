const sum = nums => nums.reduce((acc, el) => acc + el, 0);

const isEven =(num)=>{
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const average =(nums)=> sum(nums) / nums.length;

const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length = sorted.length;
  const middle = length / 2 - 1 ;
  // Using ternary syntax, check if length is even - Use Math.ceil() to round the middle value up.
  return isEven(length) ? average([sorted[middle],sorted[middle + 1]])  : sorted[Math.ceil(middle)];
}

const spreadsheetFunctions = {
  sum,
  average,
  median
}


// ^ Generate a range of numbers.
// use Array() constructor and implicitly return an empty array.
// the  will need to be the size of the range. calculate this by finding the difference between end and start, and adding 1 to the result.
// .fill() method which can be used to fill an array with a value. 
// Pass the .map() method a callback which takes element and index as parameters and returns the sum of those parameters. (implict return)
const range = (start, end) => Array(end - start + 1).fill(start).map((element, index)=> element + index
);

// ^ Create a range of letters
// range function expects numbers, but the start and end values will be strings, vonvert the start and end values in the range() call to numbers by using the .charCodeAt() method, passing the number 0 as the argument to that method.
// range() will return an array of numbers, convert back into characters. Chain the .map() method to the range() call.
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));

window.onload = () => {
    const container = document.getElementById("container");
    const createLabel = (name) => {
      const label = document.createElement("div");
      label.className = "label";
      label.textContent = name;
      container.appendChild(label);
    }
    const letters = charRange("A", "J");
    letters.forEach(createLabel)

    // range() returns an array, so chain array methods directly to the function call.
    range(1, 99).forEach(number => {
        createLabel(number);
        letters.forEach(letter => {
            const input = document.createElement('input');
            input.type = 'text';
            input.id =  letter + number;
            input.ariaLabel = letter + number;
            container.appendChild(input)
        })
      })
}