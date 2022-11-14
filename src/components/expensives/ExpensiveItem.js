//import './ExpensiveItems.css';
import ExpensiveDate from './ExpensiveDate';
import Card from '../UI/Card';
import './ExpensiveItems.css';


function ExpensiveItem(props){
    const expensiveDate=new Date(2022,11,2);
    const expensiveTitle='Car Insure';
    const expensiveAmount='500.52';
    const LocationOfExpenditure='Hyderabad';

    const month=props.date.getMonth();
    const day=props.date.getDate();
    const year=props.date.getFullYear();

    const clickHandler=()=>{
        console.log('clicked!!');
    }

    return(
        <Card className='expensive-item'>
            <ExpensiveDate date={props.date}/>
            <div>{LocationOfExpenditure}-</div>
            <div className='expensive-item__description'>
                <h2>{props.title}</h2>
                <div className='expensive-item__price'>{expensiveAmount}</div>

            </div>
            <button onClick ={clickHandler}>Delete Expensive</button>
        </Card>

    );
   
    
}

export default ExpensiveItem;