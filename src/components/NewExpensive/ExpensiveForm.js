import React,{useState} from "react";
import './ExpensiveForm.css';

const ExpensiveForm =()=>{
    const [enterTitle,setEnterTitle]=useState('');
    const [enterAmount,setEnterAmount]=useState('');
    const [enterDate,setEnterDate]=useState('');


    const titleChangeHandler=(event)=>{
        setEnterTitle(event.target.value)
    };

    const amountChangeHandler=(event)=>{
        setEnterAmount(event.target.value);

    };

    const dateChangeHandler=(event)=>{
        setEnterDate(event.target.value);

    };

    const submittHandler=(event)=>{
        event.preventDefault();

        const expensiveData={
            title:enterTitle,
            amount:enterAmount,
            date:new Date(enterDate)
        }
        console.log(expensiveData);

    };


    return <form onSubmit={submittHandler}>
        <div className="new-expense__controls">
            <div className="new=expense__controls">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new=expense__controls">
                <label>Amount</label>
                <input type="number"  min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new=expense__controls">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>

                
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expensives</button>
        </div>
    </form>

};

export default ExpensiveForm;