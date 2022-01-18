import NewToDo from './NewToDo'
import React from 'react'
import { CardGroup } from 'react-bootstrap'
const CardToDo = () => {
  return (

      <CardGroup>
        <NewToDo title='Backlog' />
        <NewToDo title='to do'/>
        <NewToDo title='doing'/>
        <NewToDo title='review'/>
        <NewToDo title='finished'/>
      </CardGroup>
  
  )
}

export default CardToDo
