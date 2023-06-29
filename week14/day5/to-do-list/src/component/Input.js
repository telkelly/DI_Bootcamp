import { useState, useEffect } from "react";
import ToDoList from "./ToDoList";

const Input = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = (event) => {
    if (event.key === "Enter") {
      if (newTodo.trim() !== "") {
        setTodos([...todos, newTodo]);
        setNewTodo("");
      }
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo..."
        onKeyDown={handleAddTodo}
      />
      <div>
        {todos.map((todo, index) => (
          <p key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Input;
