import React, { useState, useEffect } from 'react';
import Expenses from './Expenses';
import New_Expense from './New_Expense';
import '../CSS/Expense_Tracker.css';
import Navbar from './Navbar';

const Expense_Tracker = () => {
  const [items, setItems] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

    fetch(`https://686b6a81e559eba908726d59.mockapi.io/api/v1/users/${userId}`)
      .then(res => res.json())
      .then(user => {
        if (user.expenses && Array.isArray(user.expenses)) {
          const updated = user.expenses.map(exp => ({
            ...exp,
            date: new Date(exp.date)
          }));
          setItems(updated.reverse());
        }
      });
  }, [userId]);

  const postExpenseToAPI = (enteredData) => {
    const newExpense = {
      id: Date.now().toString(), 
      title: enteredData.title,
      amount: parseFloat(enteredData.amount),
      date: enteredData.date.toISOString()
    };
    
    const updatedExpenses = [newExpense, ...items];
  
    fetch(`https://686b6a81e559eba908726d59.mockapi.io/api/v1/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        expenses: updatedExpenses
      })
    })
      .then(res => res.json())
      .then(updatedUser => {
        const fixedExpenses = updatedUser.expenses.map(exp => ({
          ...exp,
          date: new Date(exp.date)
        }));
        setItems(fixedExpenses.reverse());
      });
  };
  
  const deleteExpenseFromAPI = (idToDelete) => {
    const updated = items.filter(exp => exp.id !== idToDelete);
    setItems(updated);
  
    fetch(`https://686b6a81e559eba908726d59.mockapi.io/api/v1/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ expenses: updated })
    });
  };
  
  
  return (
    <div>
       <Navbar/>
      <New_Expense newdata={postExpenseToAPI} />
      <Expenses item={items} onDelete={(id) => deleteExpenseFromAPI(id)} />
    </div>
  );
};

export default Expense_Tracker;
