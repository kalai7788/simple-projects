import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h1>📝 Task Manager</h1>
      <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.map(task => (
        <div key={task.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
          textDecoration: task.completed ? 'line-through' : 'none'
        }}>
          <span onClick={() => toggleComplete(task.id)} style={{ cursor: 'pointer' }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default App;
