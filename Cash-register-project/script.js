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
const cashDrawer = document.getElementById('cash-drawer');

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

  let changeDueAmount = (Number(cash.value) - price).toFixed(2);
  changeDueDisplay.innerHTML = `Change due: ${changeDueAmount}` ;
  let status = "";
  let amount = [0.01,0.05,0.1,0.25,1,5,10,20,100];
  let totalMoney = 0;
  cid.forEach((amount)=>{
    console.log(amount[1]);
    totalMoney += amount[1];
    
  });
  console.log(typeof Number(totalMoney.toFixed(2)));
}



purcharseBtn.addEventListener('click', ()=>{
  const cash = document.getElementById('cash').value;
  checkCashRegister();
});

const displayDrawerCash =()=>{
  const currencyName = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };

  cid.forEach((money)=>{
    const currencyKey = money[0];
     const currencyFormattedName = currencyName[currencyKey];
    const capitalized = currencyFormattedName.charAt(0).toUpperCase() + currencyFormattedName.slice(1).toLowerCase();
    cashDrawer.innerHTML += `<p>${capitalized}: $${money[1].toFixed(2)}</p>`;
    
  });
}
displayDrawerCash();