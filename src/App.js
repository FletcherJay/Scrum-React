import { React, useState} from 'react'
import ToDoInput from './Components/ToDoInput';
import NavBar from './Components/NavBar'
import CardToDo from './Components/CardToDo';
import { DragDropContext } from 'react-beautiful-dnd'

const App = () => {
  
  const [tasks, setTasks] = useState([
     {id: 1,
     text: 'Backlog to do',
   title: 'Backlog'},
   {id: 2,
    text: 'new To Do',
  title: 'To Do'},
  {id: 3,
    text: 'lower to do',
  title: 'To Do'},
  {id: 4,
    text: 'finished to do',
  title: 'Finished'}
   ])

   const [titles, setTitles ] = useState('') 
      
  
  
  


  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    
    setTitles([...titles ])
  }
  return (
   
      <div>
        <NavBar />
        <ToDoInput onAdd={addTask} />
        
          <CardToDo tasks={tasks} />
        
      </div>
    
  );
}

export default App;
