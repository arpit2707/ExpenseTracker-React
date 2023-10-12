import React from "react";
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  return (
    <>
      <h2>{props.value.title}</h2>
      <div className="expense-item__price">${props.value.amount}</div>
    </>
  );
};

export default ExpenseDetails;
