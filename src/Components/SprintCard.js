import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Card, Container, NavItem } from 'react-bootstrap'

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
            <Card>
              <Card.Body>
                <Card.Text>
                  {task}
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      </Container>
      )}
    </Draggable>
  )
}

export default SprintCard