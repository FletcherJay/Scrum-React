import React from 'react'
import { Card } from 'react-bootstrap'
import SprintCard from './SprintCard'

const NewToDo = (props) => {
  return (
    
      <Card>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
            <SprintCard/>
        </Card>
   
  )
}

export default NewToDo
