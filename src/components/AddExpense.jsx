import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext); 

  let [name, setName] = useState("");
  let [cost, setCost] = useState("");

  const onSubmit = (event) => {
    // Create an Expense Item and add it to the Expense List.
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "Add_Expense",
      payload: expense,
    })
  }

  return (
    <form onSubmit={onSubmit} action="submit">
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            // eslint-disable-next-line no-const-assign
            onChange={(event) => setName=(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            // eslint-disable-next-line no-const-assign
            onChange={(event) => setCost=(event.target.value)}
          />
        </div>
      </div>
        <div className="row">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary mt-3">Save</button>
          </div>
        </div>
    </form>
  )
}

export default AddExpense;





