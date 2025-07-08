import React from 'react';
import '../CSS/Expense_Item.css';
import Expense_Date from './Expense_Date';

const Expense_Item = (props) => {
  const ondelete = () => {
    props.onDelete(props.id);  // 🔄 Call parent's delete function
  };

  return (
    <div className='Items'>
      <Expense_Date date={props.date} />
      <div className='OnWhat'>
        <p>{props.title}</p>
      </div>
      <div className='need'>
        <div className='How_Much'>
          <p>${props.amount}</p>
        </div>
        <button onClick={ondelete} className='a'>⛌</button>
      </div>
    </div>
  );
};

export default Expense_Item;
