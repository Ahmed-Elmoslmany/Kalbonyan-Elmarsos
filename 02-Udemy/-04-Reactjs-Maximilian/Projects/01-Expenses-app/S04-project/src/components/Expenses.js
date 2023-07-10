import React , {useState} from "react";
import ExpenseITem  from "./ExpenseItem";
import './Expenses.css'
import Card from './Card'
import ExpensesFilter from "./NewExpenses/ExpenseFilter";
function Expenses(props){
  const [filteredYear, setFiltredYear] = useState('2020')
  const changeSelectHandler = selected => {
    setFiltredYear(selected)
  }
  return  <div>
    <ExpensesFilter selected={filteredYear} onChangeSelect={changeSelectHandler}/>
  
  <Card className="expenses">
    <ExpenseITem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        ></ExpenseITem>
        <ExpenseITem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        ></ExpenseITem>
  </Card>
  </div>
}

export default Expenses;