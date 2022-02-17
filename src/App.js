import { createContext, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

const TODO=createContext();
const SETTODO=createContext();

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const saveInput = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    if (!input) {
    alert('empty value is not accepted!!')
    return;
    }
    else{
    setTodo((prevState) => [...prevState, input]);
    console.log(todo);
    setInput('');
    }
  };

  return (
    <div>
      <div className="container">
        <input type="text" onChange={saveInput} value={input} />
        <button style={{ backgroundColor: 'green', margin: '20px', padding: '5px 10px' }} onClick={addItem}>Add</button>
        <TODO.Provider value={todo}>
        <SETTODO.Provider value={setTodo}>

        <Todo />
        </SETTODO.Provider>
        </TODO.Provider>
      </div>
    </div>
  );
}

export default App;

export {TODO,SETTODO}