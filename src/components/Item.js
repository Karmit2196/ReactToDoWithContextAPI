import React, {useContext} from 'react'
import '../App.css'
import { SETTODO, TODO } from '../App'

function Item({ item,ind}) {
    const todo=useContext(TODO);
    const setTodo=useContext(SETTODO);
  
    const deleteItem = (id) => {
        const updatedItem = todo.filter((elem, ind) => {
            return ind !== id;
        })

        setTodo(updatedItem)
    }

    const doneItem = () => {
        let currentItem = item;
        currentItem.style.color="green"
    }

    return (
        <div>
            <div className='item'>
                {item}
                <div className='btn'>
                    <button onClick={() => doneItem()}>Done</button>
                    <button>Edit</button>
                    <button onClick={() => deleteItem(ind)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Item