const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
    event.preventDefault();
    // const inputValues = document.getElementsByClassName("values-dropdown"); //  returns an array-like object. 
    // use the spread operator to convert it into an array.
    const inputValues = [...document.getElementsByClassName("values-dropdown")];

}

sortButton.addEventListener("click", sortInputArray);