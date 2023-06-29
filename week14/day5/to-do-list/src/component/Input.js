import { useState } from "react";

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
    <div className="input-div">
      <div className="todos">
        {todos.map((todo, index) => (
          <p key={index} onClick={() => handleDeleteTodo(index)}>
            {todo}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Enter a new todo..."
        onKeyDown={handleAddTodo}
      />
    </div>
  );
};

export default Input;
