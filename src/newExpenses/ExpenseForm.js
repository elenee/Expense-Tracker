import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpenseForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputDate, setInputDate] = useState("");

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };
  const handleInputNumber = (event) => {
    setInputNumber(event.target.value);
  };
  const handleInputDate = (event) => {
    setInputDate(event.target.value);
  };
  const handleCancel = () => {
    props.onSetInputOpen(false)
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputText,
      amount: +inputNumber,
      date: new Date(inputDate),
    };

    props.onSaveExpenseData(expenseData);
    setInputDate("");
    setInputNumber("");
    setInputText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="expenses-inputs">
        <div className="input-blanks">
          <div className="expenses-input">
            <label>Title</label>
            <input type="text" value={inputText} onChange={handleInputText} />
          </div>
          <div className="expenses-input">
            <label>Amount</label>
            <input
              type="number"
              value={inputNumber}
              onChange={handleInputNumber}
            />
          </div>
          <div className="expenses-input">
            <label>Date</label>
            <input type="date" value={inputDate} onChange={handleInputDate} />
          </div>
        </div>
        <div className="expenses-buttons">
          <button onClick={handleCancel}>Cancel</button>
          <button type="submit">Add New Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
