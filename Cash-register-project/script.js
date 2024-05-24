let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];
 
 
const purcharseBtn = document.getElementById('purchase-btn'); 
const changeDue = document.getElementById('change-due');
const priceDisplay = document.getElementById('price');
const changeDueDisplay = document.getElementById('price-due');

priceDisplay.innerHTML = `Total : ${price}`;

const checkCashRegister =()=>{
  const cash = document.getElementById('cash').value;
  if(Number(cash) < price){
    alert("Customer does not have enough money to       purchase the item");
    cash.value = '';
    return;
  }
  if(Number(cash) === price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
    cash.value = '';
    return;
  }

  let changeDue = (Number(cash) - price).toFixed(2);
  changeDueDisplay.innerHTML = `Change due: ${changeDue}`;
}

purcharseBtn.addEventListener('click', ()=>{
  const cash = document.getElementById('cash').value;
  checkCashRegister();
});


const displayDrawerCash =()=>{
  cid.forEach((money)=>{
    const name = money[0];
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    cashDrawer.innerHTML += `<p>${capitalized}: $${money[1].toFixed(2)}</p>`;
    
  });
}
displayDrawerCash();