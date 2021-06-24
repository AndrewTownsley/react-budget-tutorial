import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Item from "./Item";


const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense) => {
        return <Item id={expense.id} name={expense.name} cost={expense.cost}/>
      })}
    </ul>
  )
}

export default ExpenseList;