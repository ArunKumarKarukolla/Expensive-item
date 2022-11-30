import React,{useState} from 'react';

import ExpensiveForm from './ExpensiveForm';
import './NewExpensive.css';

const NewExpensive = (props) => {
  const [isEditing,setIsEditing]=useState(false);
  const saveExpensiveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler=()=>{
    setIsEditing(true);
  };

  const stopEditingHandler=()=>{
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (<button onClick={startEditingHandler}>Add New Button</button>)}
      {isEditing &&(<ExpensiveForm onSaveExpenseData={saveExpensiveDataHandler} onCancel={stopEditingHandler} />)}
    </div>
  );
};

export default NewExpensive;