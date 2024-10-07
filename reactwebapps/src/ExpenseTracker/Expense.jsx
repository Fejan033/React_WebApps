import React, { useState } from "react";
import "./Expense.css";

const Expense = () => {
  const [expensetype, setExpensetype] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]); 

  const handleType = (event) => {
    setExpensetype(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    

    if (!expensetype || !amount) return;

    
    setExpenses([...expenses, { type: expensetype, amount: amount }]);

    
    setExpensetype('');
    setAmount('');
  };

  return (
    <div className="maincontainer">
      <div className="container">
        <div className="header">
          <h1>Your Expenses</h1>
        </div>
        <div className="expensebar">

          <input
            type="text"
            value={expensetype}
            placeholder="Expense Type"
            onChange={handleType}
            className="input1"
          />

          <input
            type="number"
            value={amount}
            placeholder="Enter Amount"
            onChange={handleAmount}
            className="input1"
          />

          <button className="Button" onClick={handleSubmit}>
            Add Expense
          </button>
        </div>

        <div>
          <h2>Your Expenses:</h2>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                Expense Type: {expense.type} | Expense Amount: ${expense.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Expense;
