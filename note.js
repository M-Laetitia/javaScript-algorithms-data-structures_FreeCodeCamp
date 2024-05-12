// & template literals
// & innerHTML / innerText / textContent /  string interpolation / 



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

// ^ Roman numeral converter project ---
// ^ -----------------------------------
// ^ 