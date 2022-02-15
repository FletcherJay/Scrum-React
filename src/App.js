import { React, useState} from 'react'
import ToDoInput from './Components/ToDoInput';
import NavBar from './Components/NavBar'
import CardToDo from './Components/CardToDo';
const App = () => {
  const [tasks, setTasks] = useState([
   // {id: 1,
    //text: 'newToaDo'}
  ])
  const [titles, setTitles ] = useState('')
//i want to make it so when i create  a new to do
//that to do will have a title of to do, and when i drag
//it that title will change based on where i drop that to do
// but i also what to filter out any titles that are not also the title
//to specific cards such as backlog and finished

  const addTask = (task, title) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    setTitles([...titles ])
  }
  return (
    <div>
      <NavBar />
      <ToDoInput onAdd={addTask} />
      <CardToDo tasks={tasks} titles={titles}/>
      
    </div>
  );
}

export default App;
