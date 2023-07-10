import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  
  const [enteredTitle, setEntredTitle] = useState('')
  const titleChangeHandler = (event) => {
    setEntredTitle(event.target.value)
  }
  const [enteredAmount, setEntredAmount] = useState('')
  const amountChangeHandler = (event) => {
    setEntredAmount(event.target.value)
  }
  const [enteredDate, setEntredDate] = useState('')
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value)
  }

  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData= {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
    setEntredTitle('')
    setEntredAmount('')
    setEntredDate('')
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate}  min='2020-01-01' max='2023-01-01'
          onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.cancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>

  )
}

export default ExpenseForm;