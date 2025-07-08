import React from 'react';
import Expense_Item from "./Expense_Item";
import '../CSS/Expenses.css'
const Expenses=(props)=>{
return(
<div className="expenses">
{props.item.map((expense, index) => (
        <Expense_Item
        key={expense.id}
        id={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        onDelete={props.onDelete}
        />
      ))}
</div>
);
}
export default Expenses;
