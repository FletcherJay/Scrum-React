import NewToDo from './NewToDo'
import React from 'react'
import { CardGroup } from 'react-bootstrap'
const CardToDo = (props) => {
  return (

      <CardGroup>
        <NewToDo tasks={props.tasks} title='Backlog' />
        <NewToDo tasks={props.tasks} title='to do'/>
        <NewToDo tasks={props.tasks} title='doing'/>
        <NewToDo tasks={props.tasks} title='review'/>
        <NewToDo tasks={props.tasks} title='finished'/>
      </CardGroup>
  
  )
}

export default CardToDo
