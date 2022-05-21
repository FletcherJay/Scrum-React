import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Card } from 'react-bootstrap'
import SprintCard from './SprintCard'


const NewToDo = (props) => {
  
  return (
    
      <Card>
        

          <Card.Body>
            <Card.Title>{props.titles.name}</Card.Title>
            
              <Droppable droppableId={props.titles.name}>
              
                {(provided, snapshot) => (
                  <Card.Body 
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  >
                    {props.tasks.map((task,index) => (
                    task.title===props.titles.name ? (
                    <SprintCard  onDelete={props.onDelete} id={task.id}  task={task.text} title={task.title} index={index} props={task} />): '' 
                    ))
                    }
                    {provided.placeholder}
                  </Card.Body>
                    
                )}
                
              </Droppable>
          </Card.Body>
        </Card>
   
  )
}

export default NewToDo
