import React,{useState} from "react";
import '../CSS/New_Expense.css';

const New_Expense=(props)=>{
  const[enteredDate,setDate]= useState('');
  const[enteredTitle,setTitle]= useState('');
  const[enteredAmount,setAmount]= useState('');

  const dateHandler=(event)=>{
      setDate(event.target.value);
  }
  const titleHandler=(event)=>{
      setTitle(event.target.value);
  }
  const amountHandler=(event)=>{
      setAmount(event.target.value);
  }
  const eventHandler=(event)=>{
    event.preventDefault();
    const Expense_data={
     title:enteredTitle,
     amount:enteredAmount,
     date: new Date(enteredDate)
    }
    props.newdata(Expense_data);
    console.log( Expense_data);
    setDate('');
    setTitle('');
    setAmount('');
  }
return(
  <div className="newexpense">
  <form onSubmit={eventHandler} >
    <label htmlFor="date" className="dates">Date:</label>
    <input type="date" name="date" onChange={dateHandler} value={enteredDate} /><br/><br/>
    <label htmlFor="title" className="title">Title:</label>
    <input type="text" name="title"  onChange={ titleHandler} value={enteredTitle} /><br/><br/>
    <label htmlFor="amount" className="price">Price:</label>
    <input type="number" name="price" min="0.1"  onChange={ amountHandler} value={enteredAmount}/><br/><br/>
    <button className="button" type="submit">Add Expense</button>
  </form>
  </div>
);
}
export default New_Expense;