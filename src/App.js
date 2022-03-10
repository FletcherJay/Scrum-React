import { React, useState} from 'react'
import ToDoInput from './Components/ToDoInput';
import NavBar from './Components/NavBar'
import CardToDo from './Components/CardToDo';
import { DragDropContext } from 'react-beautiful-dnd'

const App = () => {
  
  const [tasks, setTasks] = useState([
 
   ])

   const [titles, setTitles ] = useState('') 
      
  
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    
    setTitles([...titles ])
  }  

  const handleOnDragEnd = (result)=> {
    if (!result.destination) return;
    const { source } = result;
    
    const copiedItems = [...tasks];
    const destinationList = parseInt(result.draggableId)
    const destinationTitle = result.destination.droppableId
    const [removed] = copiedItems.splice(result.source.index, 1);
    copiedItems.splice(result.destination.index, 0, removed);
    
    setTasks(copiedItems)
    setTasks(
      tasks.map((task) =>
        task.id === destinationList
        ? {...task, title: destinationTitle } 
        : {...task}
      )
    );
   
  };

  return (
   
      <div>
        <NavBar />
        <ToDoInput onAdd={addTask} />

        <DragDropContext
        onDragEnd={handleOnDragEnd}
        >
          <CardToDo tasks={tasks} />
          </DragDropContext>
      </div>
    
  );
}
export default App;