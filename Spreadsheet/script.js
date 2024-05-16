const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,

}



const sum = nums => nums.reduce((acc, el) => acc + el, 0);

const isEven =(num)=>{
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// callback needs four parameters. match, arg1, operator, and arg2.
// callback function implicitly return the operator property of your infixToFunction object. 
// arg1 and arg2 are strings, not numbers. Wrap each of the infixToFunction[operator] arguments in a parseFloat() call.
const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));


const highPrecedence = str => {
  // Regular expression that matches a number (including decimal numbers) followed by a * or / operator followed by another number.Each number, and the operator, should be in separate capture groups.
  const regex = /([0-9.]+)([*\/])([0-9.]+)/;
  const str2 = infixEval(str, regex);

  // infixEval function will only evaluate the first multiplication or division operation, because regex isn't global. This means it needs a recursive approach to evaluate the entire string.
  return str2 === str ? str :  highPrecedence(str2);
};


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

// applying the function parsing logic to a string.
const applyFunction = str => {
  const noHigh = highPrecedence(str);
  // evaluatethe addition and subtraction operators.
  const infix = /([\d.]+)([-+])([\d.]+)/;
  const str2 = infixEval(noHigh, infix);
  // check for function calls like sum(1, 4).
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList =(args)=> args.split(",").map(parseFloat);
  const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(functionCall, (match, fn, args) => spreadsheetFunctions.hasOwnProperty(fn.toLowerCase())? apply(fn,args) : match);
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


const evalFormula = (x, cells) => {
  // return the value of that input element.
  const idToText = id => cells.find(cell => cell.id === id).value ;
  // regular expression that matches A through J, Use a capture group with a character class.
  //  new capture group should match one or two digits – the first digit should be 1 through 9, and the second digit should be 0 through 9. The second digit should be optional.
  // Ranges are separated by a colon. 
  // global and case-insensitive.with gi
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;

  // parse num1 and num2 into integers
  const rangeFromString =(num1, num2)=> range(parseInt(num1), parseInt(num2));

  // before refactor
  // const elemValue = num => {
  //   const inner = character => {
  //     return idToText(character + num);
  //   }
  //   return inner;
  // }

  // after refactor
  const elemValue = num => character => idToText(character + num)
  // the addCharacters function ultimately returns a range of characters. You want it to return an array of cell ids. Chain the .map() method to your charRange() 
  const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num));
  // rangeRegex has four capture groups: the first letter, the first numbers, the second letter, and the second numbers.
  // JavaScript, it is common convention to prefix an unused parameter with an underscore _. 
  const rangeExpanded = x.replace(rangeRegex, (_match, char1, num1, char2, num2) => rangeFromString(num1, num2).map(addCharacters(char1)(char2)));
  const cellRegex = /[A-J][1-9][0-9]?/gi;
  const cellExpanded = rangeExpanded.replace(cellRegex, match => idToText(match.toUpperCase()));
}

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

        //  tell your input elements to call the update function when the value changes. 
        input.onchange = update;

        container.appendChild(input)

    })
  })
}

const update = event => {
  // Since the update event is running as a change event listener, the event parameter will be a change event.
  const element = event.target;
  // /\s/g is a regular expression that matches all whitespace characters globally (g flag).
  const value = element.value.replace(/\s/g, '');

  // check if the value does not include the id of the element and also checks if the first character of value is =.
  if (!value.includes(element.id) && value.charAt(0) === "=") {

  }
}