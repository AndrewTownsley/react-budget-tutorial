import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
//Components
import Item from "./Components/Item"
import Budget from "./Components/Budget"
import Balance from "./Components/Balance"
import Spent from "./Components/Spent"
import ExpenseList from "./Components/ExpenseList"
import AddExpense from "./Components/AddExpense"

function App() {
  return (
    <AppProvider>
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
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList/>
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpense/>
          </div>
        </div>
      </div>  
    </div>
    </AppProvider>
  );
}

export default App;
