import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseITem from "./components/ExpenseItem";
import Expenses from "./components/Expenses"
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Car Expence", amount: 24, date: new Date(2022, 3, 20) },
  { title: "Car Expence2", amount: 224, date: new Date(2021, 3, 20) },
  { title: "Car Expence2", amount: 2478, date: new Date(2020, 3, 20) },
]; 

function App() {
  
  const [expense, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expense}/>
      </header>
    </div>
  );
}

export default App;
