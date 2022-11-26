import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensiveFilter from './ExpensiveFilter';
import ExpensiveList from './ExpensiveList';
import './Expensive.css';

const Expensive = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensiveFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensiveList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expensive;