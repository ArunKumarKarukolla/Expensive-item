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

  return (
    <Card className="expenses">
      <ExpensiveFilter
        selected={filteredyear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expenses) => {
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