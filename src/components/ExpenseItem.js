import React from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate"

function ExpenseItem(props){

  return (<div className="expense-item">
 <ExpenseDate obj={props.obj}/>
    <div className="expense-item__description">
       <h2>{props.obj.title}</h2>
       <div className="expense-item__price">{props.obj.amount}</div>
    </div>
  
  </div>);
};

export default ExpenseItem;