import Item from "./Item";


const ExpenseList = () => {
  const expenses = [
   {id: 12, name: 'shopping', cost: 40},   
   {id: 13, name: 'rent', cost: 400},   
   {id: 14, name: 'bills', cost: 50},   
  ]

  return (
    <ul className="">
      {expenses.map((expense) => {
        return <Item id={expense.id} name={expense.name} cost={expense.cost}/>
      })}
    </ul>
  )
}

export default ExpenseList;