const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// const dummyTransactions = [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 }
// ];

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];


function addTrans(e){
  e.preventDefault()

  if(text.value.trim() === '' || amount.value.trim() === ''){
    alert("Please add a text and amount")
  }else{
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    }
    transactions.push(transaction)
    addTransDom(transaction)
    updateValue()
    updateLocalStorage()

    text.value = ''
    amount.value = ''
  }

}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}



// Add trans to Dom
function addTransDom(transactions){
  // Check sign
  const sign = transactions.amount < 0 ? '-' : '+'
  const item = document.createElement('li')
  if(sign === '-'){
    item.className = 'minus'
    
   
  }else{
    item.className = 'plus'
    
  }
  item.innerHTML= `
    ${transactions.text} <span>${sign}${Math.abs(transactions.amount)}</span>
    <button class="delete-btn" onclick="removeTrans(${transactions.id})">x</button>
  `
  list.appendChild(item)
}

function removeTrans(id){
  transactions = transactions.filter((item) => item.id !== id)
  
  init()

  updateLocalStorage()
}
// Update value
function updateValue(){
  const amounts = transactions.map(transaction => 
    transaction.amount)
    
  const total = amounts.reduce((preV, item) => preV += item,0).toFixed(2)
  const income = amounts.filter(item => item > 0)
                        .reduce((preV,item) => preV += item,0).toFixed(2)
  const expense = Math.abs(total - income)
  balance.innerText = `$${total}`
  money_plus.innerText = `$${income}`
  money_minus.innerText = `$${expense}`
}


function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}


function init(){
  list.innerHTML =''
  transactions.forEach(addTransDom)
  updateValue()
}


init()

form.addEventListener('submit', addTrans)
