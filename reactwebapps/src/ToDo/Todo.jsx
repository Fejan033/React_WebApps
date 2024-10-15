import React, { useState } from "react";
import "./ToDo.css";

const Todo = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [todos, settodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const addtodo = () => {
    if (inputvalue.trim() !== "") {
      if (editId) {
        const updatedtodos = todos.map((todo) =>
          todo.id === editId ? { ...todo, text: inputvalue } : todo
        );
        settodos(updatedtodos);
        setEditId(null);
      } else {
        const newtodo = {
          id: new Date().getTime(),
          text: inputvalue,
        };
        settodos([...todos, newtodo]);
      }
      setinputvalue("");
    }
  };

  const deletetodo = (id) => {
    const updatedtodos = todos.filter((todo) => todo.id !== id);
    settodos(updatedtodos);
  };

  const edittodo = (id, text) => {
    setEditId(id);
    setinputvalue(text);
  };

  return (
    <div className="container">
      <h1>Your Daily Task</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
      />
      <button className='addbutton' type="submit" onClick={addtodo}>
        {editId ? "Update Task" : "Add Task"}
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className="editbutton" onClick={() => edittodo(todo.id, todo.text)}>Edit Task</button>
            <button className="editbutton" onClick={() => deletetodo(todo.id)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
