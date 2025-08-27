import { useState } from "react";
import btnAdd from "./assets/btn-add.svg";
import completeTask from "./assets/check.svg";
import deleteTask from "./assets/trash.svg";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [task, setTask] = useState(""); // tasks in input
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Study lesson",
      completed: false,
    },
  ]); // todo list

  // Add the task
  const addTodo = () => {
    if (task.trim() === "") return; // to prevent adding empty
    setTodos([...todos, { id: Date.now(), name: task, completed: false }]);
    setTask("");
  };

  // Delete the task
  const deleteTodo = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  // Complete the task
  const toggleComplete = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="list-container">
      <div className="add-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="input-task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo} className="btn-add">
          <img src={btnAdd} alt="Add Task" />
        </button>
      </div>
      <div className="tasks-container">
        <h4>Tasks to do - {todos.filter((t) => !t.completed).length}</h4>
        {todos.filter((t) => !t.completed).length == 0 && todos.length > 0 ? (
          <div>
            <p className="congrats-text">Congratulations! You completed all of your tasks...</p>
          <Confetti/>
          </div>
        ) : (
          <ul>
            {todos
              .filter((t) => !t.completed)
              .map((task) => (
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
        )}
      </div>
      <div className="tasks-container">
        <h4>Done - {todos.filter((t) => t.completed).length}</h4>
        <ul>
          {todos
            .filter((t) => t.completed)
            .map((task) => (
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
