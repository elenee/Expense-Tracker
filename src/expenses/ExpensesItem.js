import ExpensesDate from "./ExpensesDate";
import "./ExpensesItem.css";

const ExpensesItem = (props) => {
  return (
    <div className="expenses-item">
      <ExpensesDate date={props.date} />
      <div className="item">
        <h2 className="item-name">{props.title}</h2>
        <div className="item-price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpensesItem;
