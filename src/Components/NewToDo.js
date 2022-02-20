import React from 'react'
import { Card } from 'react-bootstrap'
import SprintCard from './SprintCard'


const NewToDo = ({tasks: {id, text,title},
   titles, tasks}) => {
  
  return (
    
      <Card>
          <Card.Body>
            <Card.Title>{titles}</Card.Title>
            
          
                {tasks===tasks ? (tasks.map((task) => (
                  task.title===titles ? (
                  <SprintCard key={task.id} task={task.text} title={task.title} />): '' 
                ))) : ''}

            
          </Card.Body>
        </Card>
   
  )
}

export default NewToDo
