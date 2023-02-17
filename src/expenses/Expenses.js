import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesItem from "./ExpensesItem";

const Expenses = (props) => {
  const [purchaseDate, setPurchaseDate] = useState("2023");

  const filteredItem = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === purchaseDate;
  });

  return (
    <div className="expenses">
      <ExpensesFilter year={purchaseDate} onSetPurchaseDate={setPurchaseDate} />
      {filteredItem.length === 0 ? (
        <h2 style={{color: 'white'}}>No Items Found!</h2>
      ) : (
        filteredItem.map((item) => (
          <ExpensesItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      )}
    </div>
  );
};

export default Expenses;
