import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [inputOpen, setInputOpen] = useState(false);

  const viewForm = () => {
    setInputOpen(true)
  }

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
        {!inputOpen && <button onClick={viewForm}>Add New Expense</button>}
        {inputOpen && <ExpenseForm onSaveExpenseData={saveExpenseData} onSetInputOpen={setInputOpen}/>}
    </div>
  );
};

export default NewExpenses;
