import React, { useState } from "react";
import "./ToDo.css"; 

const Todo = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [todos, settodos] = useState([]);

  const addtodo = () => {
    if (inputvalue.trim() !== "") {
      const newtodo = {
        id: new Date().getTime(),
        text: inputvalue,
      };

      settodos([...todos, newtodo]);
      setinputvalue("");
    }
  };

  return (
    <div className="container">
      <h1>Your Daily Task</h1>
      <input
        type="text"
        placeholder="enter your task"
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
      />
      <button type="submit" onClick={addtodo}>
        Add Task
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
