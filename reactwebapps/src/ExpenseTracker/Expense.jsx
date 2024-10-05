import React from "react";
import { useState } from 'react';
import './Expense.css'; 

const Expense = () => {
  const[amount, setAmount] = useState(0)

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(amount);
  }


  return (
    <div className="container">
      <div className="header">
        <h1>Your Expenses</h1>
      </div>
      <div>
        <input type="text" placeholder="Expense Type" />
        <input type="number" placeholder="Enter Amount" onChange={handleAmount}/>
        <button className="Button" onClick={handleSubmit}>Add Expense</button>
      </div>
      <div>
      <h1>Your Expenses:</h1>
      
      </div>
    </div>
  );
};

export default Expense;
