import React from 'react';
import ExpensiveItem from './components/expensives/ExpensiveItem';

function App() {
  const expenses = [
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
 return(
    <div>
      <h2>Lets get started </h2>
      {expenses.map((expenses)=>{
        return(
          <ExpensiveItem
          title={expenses.title}
         location={expenses.location}
          amount={expenses.amount}
          date={expenses.date}
          key={expenses.id}
          ></ExpensiveItem>

       );
    })}




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
