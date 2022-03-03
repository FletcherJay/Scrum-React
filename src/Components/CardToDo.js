import NewToDo from './NewToDo'
import React from 'react'
import { CardGroup } from 'react-bootstrap'
import { DragDropContext } from 'react-beautiful-dnd'
import { useState } from 'react'
const CardToDo = (props) => {
  const [titles, setTitles ] = useState([
    {name : "Backlog",
  items : props.tasks
},
{
  name : "To Do",
  items : props.tasks
},
{
  name : "Doing",
  items : props.tasks
},
{
  name : "Review",
  items : props.tasks
},
{
  name : "Finished",
  items : props.tasks
}
]) 
//change title of task from source to destination on drop
  const onDragEnd = (result, titles, setTitles)=> {
    if (!result.destination) return;
    const { source, destination } = result;
    console.log(result)
    
    const title = titles.name[source.droppableId];
    const copiedItems = [...title.items];
    const [removed] =copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    
    setTitles({
      ...titles,
      [source.droppableId]: {
        ...title,
        items : copiedItems
      }
    })

  };
  return (

      <CardGroup>
       <DragDropContext
        onDragEnd={onDragEnd}
        >
            <NewToDo  tasks={props.tasks} titles={titles[0]} />
            <NewToDo tasks={props.tasks} titles={titles[1]}/>
            <NewToDo tasks={props.tasks} titles={titles[2]}/>
            <NewToDo tasks={props.tasks} titles={titles[3]}/>
            <NewToDo  tasks={props.tasks} titles={titles[4]}/>
            </DragDropContext>
      </CardGroup> 
  
  )
}

export default CardToDo
