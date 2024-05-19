// & template literals
// & innerHTML / innerText / textContent /  string interpolation / 
// & getElementsByClassName() > returns a Collection
// & parseFloat() / hasOwnProperty()
// & showModal() / confirm()



// & --------------

Number() // The Number constructor is a function that converts a value to a number. 

insertAdjacentHTML("beforeend", str);// first argument is a string that specifies the position of the inserted element. The second argument is a string containing the HTML to be inserted.

function calculateCalories(e) {
  e.preventDefault();
}

Math.abs() // is a built-in JavaScript method that will return the absolute value of a number.

find(), forEach(), map(), join()

// The spread operator (...) allows you to copy all elements from one array into another. 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// arrow functions
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

const greet = name => {
  console.log(`Hello, ${name}!`);
};

//implicit return.
const multiplyTwoNumbers = (num1, num2) => num1 * num2;

//The map() method is used to iterate through an array and return a new array. It's helpful when you want to create a new array based on the values of an existing array. For example:
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2); // doubledNumbers will be [2, 4, 6]
// map() method takes a function as an argument. This is called a callback function, which is a function that is passed to another function as an argument.

// The join() method is used to concatenate all the elements of an array into a single string. It takes an optional parameter called a separator which is used to separate each element of the array. 
const exampleArr = ["This", "is", "a", "sentence"];
const sentence = exampleArr.join(" "); // Separator takes a space character
console.log(sentence); // Output: "This is a sentence"

//Optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined. 
const user = {
  name: "Quincy",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
  },
};
// Accessing nested properties without optional chaining
const state = user.address.state; // CA
// Accessing a non-existent nested property with optional chaining
const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error


// The sort() method converts elements of an array into strings and sorts them in place based on their values in the UTF-16 encoding.
const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort() // ["Jessica", "Naomi", "Quincy", "Tom"]

//The find() method retrieves the first element within an array that fulfills the conditions specified in the provided callback function. If no element satisfies the condition, the method returns undefined.
const numbers = [10, 20, 30, 40, 50];

// Find the first number greater than 25
const foundNumber = numbers.find((number) => number > 25);
console.log(foundNumber); // Output: 30

// The indexOf() array method returns the first index at which a given element can be found in the array, or -1 if the element is not present.
const animals = ["dog", "cat", "horse"];
animals.indexOf("cat") // 1


// RemoveAttribute() method to remove the "aria-current" attribute.
songEl.removeAttribute("aria-current") 

// textContent sets the text of a node and allows you to set or retrieve the text content of an HTML element.
<div id="example">This is some text content</div>

const element = document.getElementById('example');
console.log(element.textContent); // Output: This is some text content

// ternary operator
const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';

//sort() method to sort the songs in alphabetical order. Another use case for the callback function is to randomize an array.
// One way to randomize an array of items would be to subtract 0.5 from Math.random() which produces random values that are either positive or negative. This makes the comparison result a mix of positive and negative values, leading to a random ordering of elements.
const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort(() => Math.random() - 0.5);

// filter(), The filter method keeps only the elements of an array that satisfy the callback function passed to it
const numArr = [1, 10, 8, 3, 4, 5]
const numsGreaterThanThree = numArr.filter((num) => num > 3);

console.log(numsGreaterThanThree) // Output: [10, 8, 4, 5]


// createElement() is a DOM method you can use to dynamically create an element using JavaScript. To use createElement(), you call it, then pass in the tag name as a string:

// syntax
document.createElement(tagName)

// example
document.createElement('div')

const divElement = document.createElement('div')

// The createTextNode() method is used to create a text node. To use it, you call it and pass in the text as a string:
document.createTextNode("your text")

//need to assign it an id and aria-label attributes. JavaScript provides the id and ariaLabel properties you need to use for this.
//For example, element.id would set an id attribute, and element.ariaLabel would set an aria-label attribute. Both of them accept their values as a string.
resetButton.id = "reset";
resetButton.ariaLabel = "Reset playlist"

// appendChild() lets you add a node or an element as the child of another element. In the example below, the text "Click me" would be attached to the button:
const parentElement = document.createElement("button")
const parentElementText = document.createTextNode("Click me")
// attach the text "Click me" to the button
parentElement.appendChild(parentElementText)

// ^ Date Formater
// ^ -------------------------
// &  Built-in constructors that create objects
// There are many built-in constructors that create objects. A constructor is like a regular function, but starts with a capital letter, and is initialized with the new operator.

const currentDate = new Date();
const dayOfTheMonth = currentDate.getDate();
const month = currentDate.getMonth(); // Because the number this method returns is zero-based, you need to add 1 to it to get the expected month number.
const year = currentDate.getFullYear(); 
const hours = currentDate.getHours(); 
const minutes = currentDate.getMinutes();

// & Change event
//the change event is used to detect when the value of an HTML element has changed:

// &  split, reverse, and join methods. 
// The split() method is used to divide a string into substrings based on a specified separator. It then returns these substrings as elements of an array.
const greeting = "Hello World";
greeting.split(); // ["Hello World"]

//The split method takes in a parameter known as a separator. The separator is used to tell the computer where each split should occur.
// returns ["h", "e", "l", "l", "o"]
"hello".split(""); 

// the reverse method. This method reverses the order of the elements in the array in place. 
// returns [5, 4, 3, 2, 1]
[1, 2, 3, 4, 5].reverse(); 

//the join method. This method takes an array of elements and joins them into a string.
// the join method also takes an optional separator. If you don't provide a separator, the default separator is a comma.
// returns "1-2-3-4-5"
[1, 2, 3, 4, 5].join("-");


// ^ Football team cards
// ^ -------------------------

// & Object.freeze(obj)
// which will freeze this object and prevent any changes being made to it.
Object.freeze(object)

// & Object destructuring syntax
// The object destructuring syntax allows you to unpack values from arrays and objects:
const developerObj = {
  name: "Jessica Wilkins",
  isDeveloper: true
};

// Object destructuring
const { name, isDeveloper } = developerObj;

// & Function parameters
// Function parameters can be initialized with default values. If a function is called without an argument, then the default value will be used:
const greeting = (name = "Anonymous") => {
  return "Hello " + name;
} 
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

receiver += "Some value"
element.property += someArray.map(() => {})

// ^ TO DO APP -------------------------
// ^ -----------------------------------
// ^ handle form inputs, manage local storage, perform CRUD (Create, Read, Update, Delete) operations on tasks, implement event listeners, and toggle UI elements.

// & ShowModal() method 
// The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.
dialogElement.showModal();
dialogElement.close();

// &  the findIndex() method.
// The findIndex() array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing function. If no such element is found, the method returns -1.

const numbers = [3, 1, 5, 6];
const firstNumLargerThanThree = numbers.findIndex((num) => num > 3);

console.log(firstNumLargerThanThree); // prints index 2

// & Date.now()
// Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
console.log(Date.now()); // 1628586800000

// & unshift()
// unshift() is an array method that is used to add one or more elements to the beginning of an array.

// & forEach()
// take 3 arguments: element, index and the array itself.

// & splice()
// splice() is an array method that modifies arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements. It can take up to three arguments: the first one is the mandatory index at which to start, the second is the number of items to remove, and the third is an optional replacement element.

// & local storage
// For instance, the setItem() method is used to save an item, and the getItem() method retrieves the item. To delete a specific item, you can utilize the removeItem() method, or if you want to delete all items in the storage, you can use clear().
localStorage.setItem("key", value); // value could be string, number, or any other data type
localStorage.getItem("key")
localStorage.removeItem("key")
localStorage.clear()

//everything save in localStorage needs to be in string format.
JSON.stringify()
JSON.parse()

// ^ Decimal to binary converter -------
// ^ -----------------------------------
// ^ learn about both number systems and about recursion by using it to perform the conversions.

// Since you want to perform an action when the Enter key is pressed, the most helpful property is key, which tells you the string value of the key that was pressed.
// Note: Since the Enter and Return keys have similar functions, they both have the same string value of Enter.
if(e.key == "Enter"){
  checkUserInput()
}

// & False / truthy values
// common falsy values :  null, undefined, the number 0, and empty strings.

// Rather than check if a value is equal to a falsy value, you can use the logical NOT operator (!) to check if the value itself is falsy. 
const num = 0;

console.log(num === 0); // true
console.log(!num); // true

// & parseInt()
// to check and normalize numbers in JavaScript is to use the built-in parseInt() function, which converts a string into an integer or whole number. 
// parseInt() takes at least one argument, a string to be converted into an integer, and returns either an integer or NaN which stands for Not a Number

// & IsNaN()
isNaN("test"); // true
isNaN(2); // false
isNaN("3.5"); // false

// & The remainder operator (%)
// the remainder operator (%), which returns the remainder of the division of two numbers. 

// & Recursion 
const a = () => {
  return "freeCodeCamp " + b();
};
const b = () => {
  return "is " + c();
};
const c = () => {
  return "awesome!";
};
console.log(a()) // return : freeCodeCamp is awesome!


// Stack is a data structure where items are stored in a LIFO (last-in-first-out) manner.
// The call stack is a collection of function calls stored in a stack structure. When you call a function, it is added to the top of the stack, and when it returns, it is removed from the top / end of the stack.
// creating mock call stack.

const callStack = [
  // since a() calls b(), the function b() is added to the call stack.
  'a(): returns "freeCodeCamp " + b()',
  // since b() calls c(), the function c() is added to the call stack.
  'b(): returns "is " + c()',

  'c(): returns "awesome!"'
];

const callStack = [
  'a(): returns "freeCodeCamp " + b()',
  'b(): returns "is " + "awesome!"'
];

const callStack = [];
const a = () => {
  return "freeCodeCamp " + b();
};
const b = () => {
  return "is " + c();
};
const c = () => {
  return "awesome!";
};
console.log(a());

// The base case is when the function stops calling itself, and it is a good idea to write it first.
// Recursive functions also have a recursive case, which is where the function calls itself.
const countdown = (number) => {
  console.log(number);
  // base case : 
  if (number === 0){
    return;
  }
};

// When writing the recursive case, you need to remember two things:

// What is the base case?
// What is the least amount of work you need to do to get closer to the base case?
if (number === 0) {
  return;
} else {
  // Since the base case is when number is equal to 0, you need to call countdown() again while also lowering the value of number by 1.
  countdown(number - 1)
}

const countDownAndUp = (number) => {
  console.log(number);

  if (number === 0) {
    console.log("Reached base case");
    return;
  } else {
    countDownAndUp(number - 1);
    console.log(number);
  }
};

countDownAndUp(3);

// & String()
// For a reliable way to convert a value into a string, even falsy values like null and undefined

// & setTimeout()
// The setTimeout function takes two arguments: a callback function and a number representing the time in milliseconds to wait before executing the callback function.
setTimeout(() => {
  console.log("Hello, world!");
}, 3000);

// ^ Spam filter -----------------------
// ^ -----------------------------------
// ^ regex, capture groups, positive lookaheads, negative lookaheads, and other techniques to match any text

const  isSpam=(msg)=>{
  return  false;
}

const isSpam = (msg) => false;


// & Regex > flags
// Regular expressions can take flags to modify their behavior. Flags are added after the trailing backslash. 
const helpRegex = /hello/i; //the i flag can be used to make the expression ignore case, causing it to match hello, HELLO, and Hello for the expression /hello/.

// & .match() method
// Strings have a .match() method, which accepts a regular expression as an argument and determines if the string matches that expression.
// &  .test() method
// .test() method test if a string matches the pattern. Unlike .match(), .test() returns a boolean value indicating whether or not the string matches the pattern.
// La méthode .match() renvoie un tableau contenant les correspondances trouvées, ou null s'il n'y a aucune correspondance.
[ 'please help',
  index: 0,
  input: 'please help',
  groups: undefined ]

// & Alternate sequence | 
// The alternate sequence | can be used to match either the text on the left or the text on the right of the |. For example, the regular expression /yes|no/ will match either yes or no.

// & Character class
// A character class is defined by square brackets, and matches any character within the brackets.  For example, [a-z] matches any character from a to z.

// & Capture group
// A capture group is a way to define a part of the expression that should be captured and saved for later reference. 

// & ? quantifier
// mark the entire pattern as an optional match. The ? quantifier matches zero or one occurrence of the preceding character or group. For example, the regular expression /colou?r/ matches both color and colour, because the u is optional.

// & meta character \s
// the meta character \s, which will match spaces, tabs, and line breaks.

// & ^ anchor
// use the ^ anchor. This asserts that your pattern match starts at the beginning of the full string.

// ^ Number sorter ---------------------
// ^ -----------------------------------
// ^ fundamental sorting algorithms like bubble sort, selection sort, and insertion sort

// &  fallback value
//  if writing algorithms that won't immediately have a return value, set a fallback value for array to be an empty array.
const myFunction = (string = "") => {
}

// & bubble sort
// sorting algorithm which starts at the beginning of the array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted.

// & selection sort
//  selection sort  works by finding the smallest value in the array, then swapping it with the first value in the array. Then, it finds the next smallest value in the array, and swaps it with the second value in the array. It continues iterating through the array until it is completely sorted.

// & Insertion sort
// Insertion sort. This algorithm works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backward into the sorted array until it is in a sorted position, and so on.
// the default behavior of .sort() is to convert the numbers values to strings, and sort them alphabetically. And 10 comes before 2 alphabetically.

/* The callback to .sort() should return a number. That number determines how to sort the elements a and b:

If the number is negative, sort a before b.
If the number is positive, sort b before a.
If the number is zero, do not change the order of a and b.
Keeping in mind that you want the numbers to be sorted in ascending order (smallest to largest), return a single subtraction calculation using a and b that will correctly sort the numbers with the above logic.
*/
const sortedValues = inputValues.sort((a, b) => {
  return a - b;
});

// ^ Statistics calculator -------------
// ^ -----------------------------------
// ^  handling user input, DOM manipulation, and method chaining, performing statistical calculations like mean, median, mode, variance, and standard deviation, array manipulation methods, such as map(), reduce(), and filter().

// & filter()
//  The .filter() method will allow you to filter elements out of an array, creating a new array in the process.

// & reduce()
// The .reduce() method takes an array and applies a callback function to condense the array into a single value.
// .reduce() takes a callback. This callback, however, takes at least two parameters. The first is the accumulator, and the second is the current element in the array. The return value for the callback becomes the value of the accumulator on the next iteration.

array.reduce((acc, el) => {

});

// set an initial value.
array.reduce((acc, el) => acc + el.toLowerCase(), "");

// & return false (html)
//  Normally, when a form is submitted, the event triggers a page refresh. To resolve this, add return false; after your calculate(); call in the onsubmit attribute.
<form onsubmit="calculate() return false;"></form>

// & modulus operator %
// modulus operator %. The modulus operator returns the remainder of the division of two numbers.

// check if array length is even
arr.length % 2 === 0;

// check if array length is odd
arr.length % 2 === 1;

const isEven = testArr2.length % 2 === 0; // return true or false

//find the middle number of an array with an odd number of elements:
arr[Math.floor(arr.length / 2)];

const numbers = [1, 2, 3, 4, 5];
const middleNumber = numbers[Math.floor(numbers.length / 2)];
console.log(middleNumber); // 3


// find the median of an even list of numbers, you need to find the two middle numbers and calculate the mean of those numbers.
// first middle number
arr[arr.length / 2];
// second middle number
arr[(arr.length / 2) - 1];

const numbers = [1, 2, 3, 4];
const firstMiddleNumber = numbers[numbers.length / 2];
const secondMiddleNumber = numbers[(numbers.length / 2) - 1];
// result is 2.5
getMean([firstMiddleNumber, secondMiddleNumber]);

const evenListMedian = getMean([testArr2[testArr2.length / 2], testArr2[(testArr2.length / 2) - 1]]);

// & Mode / Occurence
// To calculate the occurrence you can use the following approach
const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
const counts = {};
numbersArr.forEach((el) => {
  if (counts[el]) {
    counts[el] += 1;
  } else {
    counts[el] = 1;
  }
});

// & Set
// . A Set is a data structure that only allows unique values. If you pass an array into the Set constructor, it will remove any duplicate values.

// & Object.keys()

// & Math.min - Math.max

// & ** operator
// To square a value, you can use the ** operator. For example, 3 ** 2 would return 9.

// & Math.pow()
// To calculate a root exponent, such as  x−−√n, you can use an inverted exponent  x1/n. JavaScript has a built-in Math.pow() function that can be used to calculate exponents.

Math.pow(base, exponent);

const base = 4;
const exponent = 0.5;
// returns 2
Math.pow(base, exponent);

// & Math.sqrt()
// The Math object has a .sqrt() method specifically for finding the square root of a number.

// ^ Spreadsheet -----------------------
// ^ -----------------------------------
// ^  Functional Programming. parsing and evaluating mathematical expressions, implementing spreadsheet functions, handling cell references, and creating interactive web interfaces.dynamically update the page based on user input.
// ^ map() method, find() method, parseInt(), the includes() method.

// & window.onload
// & Array() / .fill()
//  The Array() constructor has a .fill() method which can be used to fill an array with a value. You can use this to fill your array with the start value.

//& .charCodeAt(), String.fromCharCode()
//& Math.ceil() 

// & Shorthand property name syntax
// When using the shorthand property name syntax, the name of the variable becomes the property key and its value the property value.
const userId = 1;
const firstName = "John";
const loggedIn = true;

const user = {
  userId,
  firstName,
  loggedIn,
};

console.log(user); // { userId: 1, firstName: 'John', loggedIn: true }

// & Currying / closure
// The concept of returning a function within a function is called currying. This approach allows you to create a variable that holds a function to be called later, but with a reference to the parameters of the outer function call.

const innerOne = elemValue(1);
const final = innerOne("A");

// innerOne would be your inner function, with num set to 1, and final would have the value of the cell with the id of A1. This is possible because functions have access to all variables declared at their creation. This is called closure.

// curry is a function which takes a soup parameter and returns a function which takes a veggies parameter.
const curry = soup => veggies => {};

const addCharacters = character1 => character2 => num => charRange(character1, character2);

// A function reference is a function name without the parentheses. 
const myFunc = (val) => `value: ${val}`;
const array = [1, 2, 3];
const newArray = array.map(myFunc);

// JavaScript allows you to immediately invoke returned functions:
myFunc(1)("hi");

// & .some()
// Arrays have a .some() method. Like the .filter() method, .some() accepts a callback function which should take an element of the array as the argument. The .some() method will return true if the callback function returns true for at least one element in the array.

const arr = ["A", "b", "C"];
[1, 2, 3, 4].every((item) => item === 3)
arr.some(letter => letter === letter.toUpperCase());

// & .every()
// Arrays have an .every() method. Like the .some() method, .every() accepts a callback function which should take an element of the array as the argument. The .every() method will return true if the callback function returns true for all elements in the array.

const arr = ["A", "b", "C"];
arr.every(letter => letter === letter.toUpperCase());

// ^ Shopping Cart ---------------------
// ^ -----------------------------------
// ^  OOP, or Object Oriented Programming : objects, classes, class instances and implement methods for data manipulation.
// ^ the ternary operator, the spread operator, the this keyword.

// & Class
// In JavaScript, a class is like a blueprint for creating objects. It allows you to define a set of properties and methods, and instantiate (or create) new objects with those properties and methods. The class keyword is used to declare a class. 
class Computer {};

// & constructor method
// Classes have a special constructor method, which is called when a new instance of the class is created. The constructor method is a great place to initialize properties of the class.
class Computer {
  constructor() {
  }
}

// & this
// The this keyword in JavaScript is used to refer to the current object. Depending on where this is used, what it references changes. In the case of a class, it refers to the instance of the object being constructed. You can use the this keyword to set the properties of the object being instantiated. 
class Computer {
  constructor() {
    this.ram = 16;
  }
}

// & method
// Create an empty addItem method, which takes two parameters: id and products.
class Computer {
  constructor() {
    this.ram = 16;
  }

  addRam(amount) {
    this.ram += amount;
  }
}

// & instantiate 
const myComputer = new Computer();

// & bind()
// do this by passing cart.clearCart.bind(cart) as the callback.
clearCartBtn.addEventListener('click', cart.clearCart.bind(cart));

// & .toFixed()
// the way computers store and work with numbers, calculations involving decimal numbers can result in some strange behavior. For example, 0.1 + 0.2 is not equal to 0.3. This is because computers store decimal numbers as binary fractions, and some binary fractions cannot be represented exactly as decimal fractions.
//need to clean up the number result from your calculation with the .toFixed() method.
// .toFixed() method the number 2 as an argument. This will round the number to two decimal places and return a string.

// & confirm()
// Browsers have a built-in confirm() function which displays a confirmation prompt to the user. confirm() accepts a string, which is the message displayed to the user. It returns true if the user confirms, and false if the user cancels.

// ^ Platformer Game ---------------------
// ^ -----------------------------------
// ^ classes, objects, inheritance, and encapsulation.

// & Canvas API
// The Canvas API can be used to create graphics in games using JavaScript and the HTML canvas element. You will need to use the getContext method which will provide the context for where the graphics will be rendered.
canvas.getContext("2d");
canvas.width

// & requestAnimationFrame()
// The requestAnimationFrame() web API, takes in a callback and is used to update the animation on the screen. 

// & clearRect() Web API 
// As the player moves through the game, you will need to clear the canvas before rendering the next frame of the animation.You can use the clearRect() Web API to accomplish this. It takes in an x, y, width, and height arguments.

// & Shorthand property name syntax
// When working with objects where the property name and value are the same, you can use the shorthand property name syntax. This syntax allows you to omit the property value if it is the same as the property name.

// using shorthand property name syntax
obj = {
  a, b, c
}
obj = {
  a: a,
  b: b,
  c: c
}