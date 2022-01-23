import { React, useState} from 'react'
import ToDoInput from './Components/ToDoInput';
import NavBar from './Components/NavBar'
import CardToDo from './Components/CardToDo';
const App = () => {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'newToaDo'}])


  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  return (
    <div>
      <NavBar />
      <ToDoInput onAdd={addTask} />
      <CardToDo tasks={tasks}/>

    </div>
  );
}

export default App;
