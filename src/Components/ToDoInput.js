import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const ToDoInput = () => {
  const onClick = (props) => {
    console.log(FormControl.value)
  }

  return (
    <div>
         <InputGroup className="mb-3">
    <FormControl
      placeholder="New Sprints"
      aria-label="To Do Task"
      aria-describedby="basic-addon2"
    />
    <Button onClick={onClick} variant="outline-secondary" id="button-addon2">
      Add
    </Button>
  </InputGroup>

    </div>
  )
}

export default ToDoInput
