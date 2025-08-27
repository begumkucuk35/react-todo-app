import { useState } from "react";
import btnAdd from "./assets/btn-add.svg"
import "./App.css";

function App() {
  const [task, setTask] = useState(""); // tasks in input
  const [todos, setTodos] = useState([]); // todo list
  const [dones, setDones] = useState([]); // done list

  // Add the task
  const addTodo = () => {
    
  };

  // Delete the task
  const deleteTodo = (id) => {
  };

  // Complete the task
  const toggleComplete = (id) => {
    
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="input-task"
      />
      <button
        onClick={addTodo}
        className="btn-add"
      >
        <img src={btnAdd} alt="Add Task" />
      </button>
    </div>
  );
}

export default App;
