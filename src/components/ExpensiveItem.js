import './ExpensiveItems.css';


function ExpensiveItem(props){
    const expensiveDate=new Date(2022,11,2);
    const expensiveTitle='Car Insure';
    const expensiveAmount='500.52';
    const LocationOfExpenditure='Hyderabad';

    const month=props.date.getMonth();
    const day=props.date.getDate();
    const year=props.date.getFullYear();

    return(
        <div className='expensive-item'>




            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div>{LocationOfExpenditure}-</div>
            <div className='expensive-item__description'>
                <h2>{props.title}</h2>
                <div className='expensive-item__price'>{expensiveAmount}</div>

            </div>
        </div>

    );
   
    
}

export default ExpensiveItem;