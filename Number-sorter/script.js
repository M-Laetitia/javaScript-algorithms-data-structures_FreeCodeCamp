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

}

sortButton.addEventListener("click", sortInputArray);