import { useState, useEffect } from "react"
import ToDoList from "./ToDoList"

const Input = () => {
    const [todo, setTodo] = useState([]);

    const createToDo = (event) => {
        if (event.key === 'Enter') {
            setTodo([event.target.value])
        }
    }
    return (
        <>
            <ToDoList/>
            <h4>Add a new to do</h4>
            {todo.map((i) => {
                <p>i</p>
            })}
            <input type="text" onKeyDown={createToDo}/>
        </>
    )
}

export default Input