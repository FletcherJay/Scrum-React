import NewToDo from './NewToDo'
import React from 'react'
import { CardGroup } from 'react-bootstrap'
import { useState } from 'react'
const CardToDo = (props) => {
  const [titles, setTitles ] = useState([
    {name : "Backlog"
      
    },
    {
      name : "To Do"
      
    },
    {
      name : "Doing"
      
    },
    {
      name : "Review"
    
    },
    {
      name : "Finished"
   
    }
    ]);
 // const[tasks, setTasks] = useState('')
//change title of tasks from source to destination on drop

  return (
      <CardGroup>
       
            <NewToDo onDelete={props.onDelete} tasks={props.tasks} titles={titles[0]}/>
            <NewToDo onDelete={props.onDelete} tasks={props.tasks} titles={titles[1]}/>
            <NewToDo onDelete={props.onDelete} tasks={props.tasks} titles={titles[2]}/>
            <NewToDo onDelete={props.onDelete} tasks={props.tasks} titles={titles[3]}/>
            <NewToDo onDelete={props.onDelete} tasks={props.tasks} titles={titles[4]}/>
            
      </CardGroup> 
  
  )
}

export default CardToDo
