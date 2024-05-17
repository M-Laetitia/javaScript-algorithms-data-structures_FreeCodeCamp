const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");

const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
    {
      id: 1,
      name: "Vanilla Cupcakes (6 Pack)",
      price: 12.99,
      category: "Cupcake",
    },
    {
      id: 2,
      name: "French Macaron",
      price: 3.99,
      category: "Macaron",
    },
    {
      id: 3,
      name: "Pumpkin Cupcake",
      price: 3.99,
      category: "Cupcake",
    },
    {
      id: 4,
      name: "Chocolate Cupcake",
      price: 5.99,
      category: "Cupcake",
    },
    {
      id: 5,
      name: "Chocolate Pretzels (4 Pack)",
      price: 10.99,
      category: "Pretzel",
    },
    {
      id: 6,
      name: "Strawberry Ice Cream",
      price: 2.99,
      category: "Ice Cream",
    },
    {
      id: 7,
      name: "Chocolate Macarons (4 Pack)",
      price: 9.99,
      category: "Macaron",
    },
    {
      id: 8,
      name: "Strawberry Pretzel",
      price: 4.99,
      category: "Pretzel",
    },
    {
      id: 9,
      name: "Butter Pecan Ice Cream",
      price: 2.99,
      category: "Ice Cream",
    },
    {
      id: 10,
      name: "Rocky Road Ice Cream",
      price: 2.99,
      category: "Ice Cream",
    },
    {
      id: 11,
      name: "Vanilla Macarons (5 Pack)",
      price: 11.99,
      category: "Macaron",
    },
    {
      id: 12,
      name: "Lemon Cupcakes (4 Pack)",
      price: 12.99,
      category: "Cupcake",
    },
];

products.forEach(
    ({ name, id, price, category }) => {
      dessertCards.innerHTML += `
        <div class="dessert-card">
          <h2>${name}</h2>
          <p class="dessert-price">$${price}</p>
          <p class="product-category">Category: ${category}</p>
          <button 
            id="${id}" 
            class="btn add-to-cart-btn">Add to cart
          </button>
        </div>
      `;
    }
);

class ShoppingCart {
    constructor() {
      this.items = [];
      this.total = 0;
      this.taxRate = 8.25;
    }
    addItem(id, products) {
      const product = products.find((item) => item.id === id);
      // Use const and destructuring to extract name and price variables from product.
      const {name, price} = product;
      // push the product into the cart's items array,  use the this keyword.
      this.items.push(product);

      const totalCountPerProduct = {};
      this.items.forEach((dessert) => {
          // update the totalCountPerProduct object. Using the id of the current dessert as your property
          // use the || operator to set the value to 0 if it doesn't exist. 
          totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
      })

      // get prepared to update the display with the new product the user added.
      const currentProductCount = totalCountPerProduct[product.id];
      const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

      // Checks if the current product is already in the cart. Use undefined for both the truthy and falsy expressions to avoid a syntax error.
      currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x`
      //  add new HTML to your productsContainer  - use the addition assignment operator and template literal syntax 
      : productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p>
            <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <p>${price}</p>
      </div>
      `;
    }
};

// instantiate a new object
const cart = new ShoppingCart();

// get all of the Add to cart buttons  added to the DOM 
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");
        
//  iterate through the buttons in your addToCartBtns variable. However, .getElementsByClassName() returns a Collection, which does not have a forEach method.
// Use the spread operator on the addToCartBtns variable to convert it into an array.
[...addToCartBtns].forEach(
  btn => {
    btn.addEventListener('click', (event)=>{
      // call the .addItem() method of   cart object, and pass in the event.target.id.  the id here will be a string, so convert it to a number.
      cart.addItem(Number(event.target.id), products)
    })
  }
);

// make cart visible
cartBtn.addEventListener("click", () => {
  // inverting the value of isCartShowing
  isCartShowing = !isCartShowing
  // assign the textContent of the showHideCartSpan variable the result of a ternary expression which checks if isCartShowing is true. If it is, set the textContent to "Hide", otherwise set it to "Show".
  showHideCartSpan.textContent = isCartShowing ? 'Hide' :  'Show';
  // update the display property of the style object of the cartContainer variable to another ternary which checks if isCartShowing is true. If it is, set the display property to "block", otherwise set it to "none".
  cartContainer.style.display = isCartShowing ?  "block" : "none";
});