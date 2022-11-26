import React, { useState } from "react";

import ExpensiveItem from "./ExpensiveItem";
import Card from "../UI/Card";
import ExpensiveFilter from "./ExpensiveFilter";
import "./Expensive.css";

const Expensive = (props) => {
  const [filteredyear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  console.log("items", props.items);

  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredyear;
  });

  return (
    <Card className="expenses">
      <ExpensiveFilter
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expenses) => {
        return (
          <ExpensiveItem
            title={expenses.title}
            location={expenses.location}
            amount={expenses.amount}
            date={expenses.date}
            key={expenses.id}
          ></ExpensiveItem>
        );
      })}
    </Card>
  );
};

export default Expensive;