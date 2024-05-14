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

    const mean = getMean(numbers);
    const median = getMedian(numbers);

    document.querySelector('#mean').textContent = mean;
    document.querySelector("#median").textContent = median;
}

// ^ Mean
const getMean = (array) => {
    const getMean = (array) => {
        const sum = array.reduce((acc, el) => acc + el, 0); // set an initial value at 0
        // calculate the mean by dividing the sum of numbers by the count of numbers in the list.
        mean = sum / array.length
        return mean;
    }
    // const getMean = (array) => array.reduce((acc, el) => acc + el, 0)/ array.length;
}

// ^ Median

// sort array  from least to greatest
const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);
    if(sorted.length % 2 === 0) {
        return getMean([sorted[sorted.length / 2], sorted[(sorted.length / 2) - 1]]);
    } else {
        return sorted[Math.floor(sorted.length / 2)]
    }
}
