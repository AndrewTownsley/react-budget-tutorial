import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
//Components
import Item from "./Components/Item"
import Budget from "./Components/Budget"
import Balance from "./Components/Balance"
import Spent from "./Components/Spent"
import ExpenseList from "./Components/ExpenseList"
import AddExpense from "./Components/AddExpense"

function App() {
  return (
    <div className="container">
      <h1 className="mt-3">Budget App</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget/>
        </div>
        <div className="col-sm">
          <Balance/>
        </div>
        <div className="col-sm">
          <Spent/>
        </div>
      </div>  
      <ExpenseList/>
      <AddExpense/>
    </div>
  );
}

export default App;
