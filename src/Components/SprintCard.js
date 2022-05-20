import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Card, Container, Button, ButtonGroup } from 'react-bootstrap'
import {FaEdit} from 'react-icons/fa'
import { MdDeleteForever } from "react-icons/md";


const SprintCard = ({key, task, title, index, id}) => {
 
  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
    {provided => (
      <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
      >
        <div>
        <ButtonGroup>
            <Card>
              <Card.Body>
                <Card.Text>
                  {task} <Button size="sm" variant="outline-dark" ><MdDeleteForever/></Button>

                </Card.Text>
                
              </Card.Body>
            </Card>
 
            </ButtonGroup>
        </div>
      </Container>
      )}
    </Draggable>
  )
}

export default SprintCard