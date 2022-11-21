import React from 'react';

import ExpensiveForm from './ExpensiveForm';
import './NewExpensive.css';

const NewExpensive = (props) => {
  const saveExpensiveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpensiveForm onSaveExpenseData={saveExpensiveDataHandler} />
    </div>
  );
};

export default NewExpensive;