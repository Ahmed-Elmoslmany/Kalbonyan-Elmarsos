import React, { useState } from "react";
import ExpenseITem from "./ExpenseItem";
import ExpensesList from './ExpensesList'
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./NewExpenses/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFiltredYear] = useState("2020");
  const changeSelectHandler = (selected) => {
    setFiltredYear(selected);
  };

  const filtredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeSelect={changeSelectHandler}
      />

      <Card className="expenses">
        <ExpensesChart expenses={filtredExpenses}/>
        <ExpensesList items={filtredExpenses}/>
        
      </Card>
    </div>
  );
}

export default Expenses;
