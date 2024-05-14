const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();
    //1. const inputValues = document.getElementsByClassName("values-dropdown"); //  returns an array-like object. 
    //2. const inputValues = [...document.getElementsByClassName("values-dropdown")];// use the spread operator to convert it into an array.
    //3.  
    /*const inputValues = [...document.getElementsByClassName("values-dropdown")];
        inputValues.map((dropdown) => {
            return dropdown.value
    })*/

    //  get the values from your select elements. map function to iterate over the array.
    // 4 const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => dropdown.value)

    // convert result (string) into numbers with Number()
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));

    const sortedValues = bubbleSort(inputValues)
    updateUI(sortedValues);
}

// update the display with the sorted numbers. set a fallback value for array to be an empty array. 
const updateUI = (array = []) => {
    // pass it an empty callback which takes num and i as the parameters.
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num; 
    }) 
}

const bubbleSort = (array) => {
    for (let i = 0; i < array.length ; i++) {
        // use a nested for loop. This loop should iterate through every element in the array except the last one.
        for(let j = 0; j < array.length - 1; j++) {
            console.log(array, array[j], array[j + 1]);
        }
    }
}

sortButton.addEventListener("click", sortInputArray);