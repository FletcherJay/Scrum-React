import NewToDo from './NewToDo'
import React from 'react'
import { CardGroup } from 'react-bootstrap'
const CardToDo = (props) => {
  return (

      <CardGroup>
        <NewToDo  tasks={props.tasks} titles='Backlog' />
        <NewToDo tasks={props.tasks} titles='to do'/>
        <NewToDo tasks={props.tasks} titles='doing'/>
        <NewToDo tasks={props.tasks} titles='review'/>
        <NewToDo  tasks={props.tasks} titles='finished'/>
        
      </CardGroup> 
  
  )
}

export default CardToDo
