import './ExpensiveItems.css';


function ExpensiveItem(props){
    const expensiveDate=new Date(2022,11,2);
    const expensiveTitle='Car Insure';
    const expensiveAmount='500.52';
    const LocationOfExpenditure='Hyderabad';

    return(
        <div>
            <div className='expensive-item'></div>
            <div>{LocationOfExpenditure}-</div>
            <div>{expensiveDate.toISOString()}</div>
            <div className='expensive-item__description'>
                <h2>{props.title}</h2>
                <div className='expensive-item__price'>{expensiveAmount}</div>

            </div>
        </div>

    );
   
    
}

export default ExpensiveItem;