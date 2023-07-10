import ExpenseITem from "./ExpenseItem";
const ExpensesList = (props) => {
  
  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">No Expenses found</h2>
  }

  return <ul className="expenses-list">
    {props.items.map((expense, index) => (
      <ExpenseITem key={index}
       title={expense.title} 
      amount={expense.amount}
      date={expense.date}/>
    ))}
  </ul>
}

export default ExpensesList;