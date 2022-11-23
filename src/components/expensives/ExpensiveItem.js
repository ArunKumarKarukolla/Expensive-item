import React,{useState} from 'react';
import ExpensiveDate from './ExpensiveDate';
import Card from '../UI/Card';
import './ExpensiveItems.css';


function ExpensiveItem(props){
    //const expensiveDate=new Date(2022,11,2);
    //const expensiveTitle='Car Insure';
    //const expensiveAmount='500.52';
    const LocationOfExpenditure='Hyderabad';

    const [title,setTitle]=useState(props.title);
    const [amount,setExpensiveAmount]=useState(props.amount);


    const clickHandler=()=>{
        setTitle('Washdish','Laptop','LifeInsure','Table');
        console.log(title);
    }

    const clickExpensive=()=>{
        setExpensiveAmount('100$')
        console.log(amount);

    }

    return(
        <Card className='expensive-item'>
            <ExpensiveDate date={props.date}/>
            <div>{LocationOfExpenditure}-</div>
            <div className='expensive-item__description'>
                <h2>{props.title}</h2>
                <div className='expensive-item__price'>{amount}</div>

            </div>
            <button onClick ={clickHandler}>Delete Expensive</button>
            <button onClick ={clickExpensive}>Each expensive</button>
        </Card>

    );
   
    
}

export default ExpensiveItem;