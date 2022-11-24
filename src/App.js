import React,{useState} from 'react';
import NewExpensive from './components/NewExpensive/NewExpensive';
import ExpensiveItem from './components/expensives/ExpensiveItem';
import Expensive from './components/expensives/Expensive';


  const DUMMY__EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      location:'bank',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', location:'bank', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      location:'bank',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      location:'bank',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
 // return React.createElement('div',{},React.createElement('h2',{},'Lets get started'),React.createElement(expenses,{items:expenses}));
  const App=()=>{
    const [expenses,setExpenses]=useState(DUMMY__EXPENSES);

    const addExpensiveHandler=(expenses) =>{
      setExpenses((prevExpenses)=>{
        return[expenses,...prevExpenses];
      });
    }
  

 return(
    <div>
      <NewExpensive onAddExpense={addExpensiveHandler}/>
      <Expensive items={expenses}/>
  



    {/*<ExpensiveItem
      title={expenses[0].title}
      location={expenses[0].location}
      amout={expenses[0].amount}
      date={expenses[0].date}>

    </ExpensiveItem>

    <ExpensiveItem
    title={expenses[1].title}
    location={expenses[1].location}
    amout={expenses[1].amount}
    date={expenses[1].date}>

    </ExpensiveItem>
    

    <ExpensiveItem
    title={expenses[2].title}
    location={expenses[2].location}
    amout={expenses[2].amount}
    date={expenses[2].date}>

    </ExpensiveItem>
    <ExpensiveItem
    title={expenses[3].title}
    location={expenses[3].location}
    amout={expenses[3].amount}
    date={expenses[3].date}>

  </ExpensiveItem>*/}


  
      
    

    </div>
  );
}

export default App;
