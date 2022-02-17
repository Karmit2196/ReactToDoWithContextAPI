import React, { useContext } from 'react'
import { SETTODO, TODO } from '../App'
import Item from './Item'

function Todo() {
  const todo=useContext(TODO);
  const setTodo=useContext(SETTODO);
  return (
    <div>
    
        {todo.map((item,ind) => {
          return <Item item={item}  key={ind} ind={ind} />
        })}
        <button onClick={()=>setTodo([])}>Clear All</button>
    </div>
  )
}

export default Todo