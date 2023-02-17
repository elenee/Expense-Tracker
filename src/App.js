import { useState } from "react";
import "./App.css";
import Expenses from "./expenses/Expenses";
import NewExpenses from "./newExpenses/NewExpenses";

const expensesList = [
  {
    id: "e1",
    title: "Phone Case",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Headphones",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const[list,setList] = useState(expensesList)

  const addExpense = (newExpense) => {
    setList((prevList) => {
      return[newExpense, ...prevList]
    })
  }
  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpense}/>
      <Expenses items={list} />
    </div>
  );
}

export default App;
