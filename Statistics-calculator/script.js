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
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);

    document.querySelector('#mean').textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
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

// ^ Mode

// before refactor
/*
const getMode = (array) => {
    const counts = {};
    array.forEach(el => {
        if (counts[el]) {
            counts[el] += 1;
        } else {
            counts[el] = 1;
        }
    })
});
*/

// after refactor
const getMode = (array) => {
    const counts = {};
    
    array.forEach(el => counts[el] = (counts[el] || 0) + 1)
  
    if(new Set(Object.values(counts)).size=== 1 ){
      return null
    }
    // find the value that occurs with the highest frequency
    // sort the values properly.  use the counts object to compare the values of each key. 
    const highest = Object.keys(counts).sort((a,b)=> {
        return counts[b] - counts[a];
      })[0]; // access the first element in the array

      // handle both of cases : when multiple numbers in a series occur at the same highest frequency or when there is only one result
      const mode = Object.keys(counts).filter((el)=>{
        return counts[el] === counts[highest]
      });

      // mode is an array,  return it as a string with the .join() method.
      return mode.join(", ")
}

// ^ Range
const getRange =(array)=> {
    // using the the spread operator
    return Math.max(...array) - Math.min(...array)
}

// ^ Variance

// before refactor
const getVariancefirst = (array) => {
    const mean = getMean(array);
    // calculate how far each element is from the mean
    const differences = array.map((el)=> {
      return el - mean
    })
    // square each of the differences
    const squaredDifferences  = differences.map((el)=>{
        return el ** 2;
    })
    /*
    const squaredDifferences = differences.map(el => el ** 2);
    */

    // take the sum of the squared differences 
    const sumSquaredDifferences  = squaredDifferences.reduce((acc,el)=>{
        return acc + el;
    }, 0) // set the initial value to 0

    /*
    const sumSquaredDifferences = squaredDifferences.reduce(
    (acc, el) => acc + el, 0
    );*/
}

// after refactor
const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc, el) => {
      const difference = el - mean;
      const squared = difference ** 2;
      return acc + squared;
    } , 0) / array.length;
    return variance;
  }

// ^ Standard deviation 

const getStandardDeviation =(array)=>{
    const variance = getVariance(array);
    // calculate a root exponent
    // const standardDeviation  = Math.pow(variance, 1/2)

    // The Math object has a .sqrt() method specifically for finding the square root of a number.
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation ;
}
