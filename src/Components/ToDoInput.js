import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const ToDoInput = () => {
  const onClick = (e) => {
    console.log(e)
  }

  return (
    <div>
         <InputGroup className="mb-3">
    <FormControl
      placeholder="To Do Task"
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
