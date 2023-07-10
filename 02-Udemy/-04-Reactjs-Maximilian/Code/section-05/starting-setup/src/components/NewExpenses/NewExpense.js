import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }

  const [isEditing, setIsEditing] = useState(false)

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }
  return(
  <div className='new-expense'>
    {!isEditing && <button  onClick={startEditingHandler}>Add new Expense</button>}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={stopEditingHandler }/>}
  </div>
  )
}

export default NewExpense;