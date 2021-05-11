import './App.css';
import Header from "./components/Header";
import Task from "./components/Task";
import { useState } from 'react';
import AddTasks from "./components/AddTasks";

function App() {
  const [toggleForm, setToggleForm] = useState(false)
  const [tasks, setstate] = useState([])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000 +1 )
  const newt = { id ,...task}
  setstate([ ...tasks , newt]);
}

const deleteTask = (id) =>{
    setstate(tasks.filter((task) => task.id !== id));
}
const reminderToggle = (id) => {
  setstate(tasks.map((task) => task.id === id ? {
    ...task, reminder : ! task.reminder 
  } : task));
}
  return (
    <div className="container">
          <Header onAdd={() => setToggleForm(!toggleForm)} changeBtn={toggleForm}/>
          {toggleForm && <AddTasks onAdd={addTask}/>}
          {tasks.length > 0 ? <Task tasks={tasks} onDelete={deleteTask} onToggle={reminderToggle}/> : 'No Tasks' }
    </div>
  );
}

export default App