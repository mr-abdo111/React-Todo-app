import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    const newTask = { task: taskText.trim(), done: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskText("");
  }

  function toggleStatus(index) {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === index ? { ...t, done: !t.done } : t
      )
    );
  }

  function edit(index) {
    const newTask = prompt("Edit your task:", tasks[index].task);
    if (newTask !== null && newTask.trim() !== "") {
      setTasks((prevTasks) =>
        prevTasks.map((t, i) =>
          i === index ? { ...t, task: newTask.trim() } : t
        )
      );
    }
  }

  function removeLine(index) {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );
  }

  function removeAll() {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setTasks([]);
    }
  }

  return (
    <div className="app">
      <h1 className="title">📝 To Do List</h1>
      <div className="input-area">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Write your task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {tasks.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, i) => (
              <tr key={i}>
                <td className={t.done ? 'task-done' : ''}>{t.task}</td>
                <td>
                  <label className="status">
                    <input
                      type="checkbox"
                      checked={t.done}
                      onChange={() => toggleStatus(i)}
                    />
                    <span>{t.done ? '✅ Done' : '❌ Not Yet'}</span>
                  </label>
                </td>
                <td>
                  <button className="btn-edit" onClick={() => edit(i)}>✏️ Edit</button>
                  <button className="btn-delete" onClick={() => removeLine(i)}>🗑 Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-tasks">No tasks yet. Add one!</p>
      )}

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={removeAll}>🧹 Clear All</button>
      )}
    </div>
  );
}

export default App;
