import ExpenseITem  from "./ExpenseItem";
import './Expenses.css'
import Card from './Card'
function Expenses(props){
  return <Card className="expenses">
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
}

export default Expenses;