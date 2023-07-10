import logo from "./logo.svg";
import "./App.css";
import ExpenseITem from "./components/ExpenseItem";
import Expenses from "./components/Expenses"
import Cars from "./components/Cars";
function App() {
  const expense = [
    { title: "Car Expence", amount: 24, date: new Date(2023, 3, 20) },
    { title: "Car Expence2", amount: 224, date: new Date(2023, 3, 20) },
    { title: "Car Expence2", amount: 2478, date: new Date(2023, 3, 20) },
  ]; 
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
        <Expenses items={expense}/>
        <Cars />
      </header>
    </div>
  );
}

export default App;
