// & template literals
// & innerHTML / innerText / textContent

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