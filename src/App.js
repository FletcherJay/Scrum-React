import { React, useState, useEffect} from 'react'
import ToDoInput from './Components/ToDoInput';
import NavBar from './Components/NavBar'
import CardToDo from './Components/CardToDo';
import { DragDropContext } from 'react-beautiful-dnd'

const App = () => {
  
  const [tasks, setTasks] = useState([
 
   ])

   const [titles, setTitles ] = useState('') 

   useEffect(() => {
     const data = localStorage.getItem("my-tasks");
     if (data) {
      setTasks(JSON.parse(data))
     }
   }, []) 

  useEffect(() => {
    localStorage.setItem("my-tasks",JSON.stringify(tasks));
  });
  
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
  const onDelete = (tasks) => {
    setTasks((tasks) => tasks.filter((tasks) => tasks.id !== tasks.id))
  }
  return (
   
      <div>
        <NavBar />
        <ToDoInput onAdd={addTask} />

        <DragDropContext
        onDragEnd={handleOnDragEnd}
        >
          <CardToDo onDelete={setTasks} tasks={tasks} />
          </DragDropContext>
      </div>
    
  );
}
export default App;