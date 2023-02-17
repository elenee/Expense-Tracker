import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
  const handleOptionChange = (event) => {
    props.onSetPurchaseDate(event.target.value);
  };
  return (
    <div className='filter'>
      <label htmlFor="selector">Filter By Year</label>
      <select className="selector" value={props.year} onChange={handleOptionChange}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  )
}

export default ExpensesFilter