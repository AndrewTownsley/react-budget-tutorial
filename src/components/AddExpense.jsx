
const AddExpense = () => {

  return (
    <form action="">
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
          />
        </div>
      </div>
        <div className="row">
          <div className="col-sm">
            <button className="btn btn-primary mt-3">Save</button>
          </div>
        </div>
    </form>
  )
}

export default AddExpense;





