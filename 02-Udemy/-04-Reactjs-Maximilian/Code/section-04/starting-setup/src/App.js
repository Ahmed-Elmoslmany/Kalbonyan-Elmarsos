import logo from "./logo.svg";
import "./App.css";
import ExpenseITem from "./components/ExpenseItem";
import Expenses from "./components/Expenses"
import NewExpense from "./components/NewExpenses/NewExpense";
function App() {
  const expense = [
    { title: "Car Expence", amount: 24, date: new Date(2023, 3, 20) },
    { title: "Car Expence2", amount: 224, date: new Date(2023, 3, 20) },
    { title: "Car Expence2", amount: 2478, date: new Date(2023, 3, 20) },
  ]; 

  const addExpenseHandler = expense => {
    console.log("A[[ now")
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
