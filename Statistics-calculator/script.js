const calculate =() => {
    const value = document.querySelector('#numbers').value

    // regex + create an array
    const array = value.split( /,\s*/g)

    // convert str into numbers
    // creates a new array, instead of mutating the original array.
    /*const numbers = array.map(el => { 
        Number(el);
    });*/
    // const numbers = array.map(el => Number(el));

    // callback function to your .filter() method that returns true if the element is not NaN.
    // const filtered = numbers.filter(el => !isNaN(el));

    
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
}