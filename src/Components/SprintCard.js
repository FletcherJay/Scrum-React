import React from 'react'
import { Card } from 'react-bootstrap'
const SprintCard = ({key, task}) => {
  
  return (
    <div>
        <Card>
          <Card.Body>
           
            <Card.Text>
              {task.text}
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default SprintCard
