import { useState } from "react";
import btnAdd from "./assets/btn-add.svg";
import completeTask from "./assets/check.svg";
import deleteTask from "./assets/trash.svg";
import "./App.css";

function App() {
  const [task, setTask] = useState(""); // tasks in input
  const [todos, setTodos] = useState([{
    id: 1,
    name: "Study lesson",
    completed: false
  }]); // todo list
  const [dones, setDones] = useState([]); // done list

  // Add the task
  const addTodo = () => {};

  // Delete the task
  const deleteTodo = (id) => {};

  // Complete the task
  const toggleComplete = (id) => {};

  return (
    <div className="list-container">
      <div className="add-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="input-task"
        />
        <button onClick={addTodo} className="btn-add">
          <img src={btnAdd} alt="Add Task" />
        </button>
      </div>
      <div className="tasks-container">
        <h4>Tasks to do - 4</h4>
        <ul>
          {todos.map((task) => (
            <li key={task.id} className="task-todo">
              <span>{task.name}</span>
                    <div className="actions">

              <button onClick={() => toggleComplete(task.id)}>
                <img src={completeTask} alt="Complete Task" />
              </button>
              <button onClick={() => deleteTodo(task.id)}>
                <img src={deleteTask} alt="Delete Task" />
              </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="tasks-container">
        <h4>Done - 4</h4>
        <ul>
          {dones.map((task) => (
            <li key={task.id} className="task-done">
              <span>{task.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
