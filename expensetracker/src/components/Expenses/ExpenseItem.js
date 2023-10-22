import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const [isDeleted, setDeleted] = useState(true);

  return isDeleted ? (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetails value={props} />
      </div>
      <h2 className="expense-item__location">{props.location}</h2>
      <button
        key={props.index}
        onClick={() => {
          setDeleted(false);
        }}
      >
        Delete
      </button>
    </Card>
  ) : null;
};

export default ExpenseItem;
