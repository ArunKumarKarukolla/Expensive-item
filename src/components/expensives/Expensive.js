import React from 'react';

import ExpensiveItem from './ExpensiveItem';
import Card from '../UI/Card';
import './Expensive.css';

const Expensive = (props) => {
  return (
    <Card className="expenses">
      <ExpensiveItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpensiveItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpensiveItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <Expensive
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expensive;