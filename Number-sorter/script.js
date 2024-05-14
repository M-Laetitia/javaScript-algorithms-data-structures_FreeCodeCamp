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

    // const sortedValues = bubbleSort(inputValues)
    // const sortedValues = selectionSort(inputValues);
    // const sortedValues = insertionSort(inputValues);


    
    // const sortedValues = inputValues.sort();
    // the default behavior of .sort() is to convert the numbers values to strings, and sort them alphabetically
    // The callback to .sort() should return a number. That number determines how to sort the elements a and b
    const sortedValues = inputValues.sort((a, b) => {
        return a - b;
    });


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
            // check if the current element is larger than the next element. 
            if (array[j] > array[j + 1]) {
                // if condition is true, swap the two elements, "bubbling" the larger element up toward the end of the array.
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {

        // track the index of the smallest value in the array.
        let minIndex = i
        //  This loop needs to start at the index after i and iterate through the rest of the array.
        for(let j = i + 1 ; j < array.length ; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        // the nested for loop returns the smallest value > swap it withthe current value.
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

const insertionSort = (array) => {
    // An insertion sort algorithm starts the sort at the beginning of the list, meaning the first element is already sorted. so i = 1
    for(let i = 1; i < array.length; i++) {
        const currValue = array[i];
        let j = i - 1

        //  two conditions:
        // it should not run beyond the beginning of the array (accessed with j).
        //the loop should not run after it finds a value smaller than the current value.
        while (j >= 0 && array[j] > currValue){

            // On each iteration of the while loop, it is finding an element that is larger than your current valur >  move that element to the right to make room for your current value.
            array[j+1] = array[j]
            j--;
        }
        // assignment operator to insert your current value into the correct index.
        array[j + 1] = currValue ;
    }
    return array;
}

sortButton.addEventListener("click", sortInputArray);