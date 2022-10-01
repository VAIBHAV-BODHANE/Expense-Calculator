import './NewExpenses.css'

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpenses = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }

  const startEdiitingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  
  return <div className='new-expense'>
    {
      !isEditing && (
        <button onClick={startEdiitingHandler}>Add New Expense</button>
      )
    }
    {
      isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler} 
          onCancel={stopEditingHandler}
        />
      )
    }
  </div>
};


export default NewExpenses;