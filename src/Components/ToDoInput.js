import { React, useState} from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import SprintCard from './SprintCard'

const ToDoInput = (onAdd) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text){
      alert('Please add task')
      return
    }
     
      onAdd({text}) 

      setText('')
  }

  return (
    <div>
         <InputGroup className="mb-3">
    <FormControl
      placeholder='new sprint'
      aria-label="To Do Task"
      aria-describedby="basic-addon2"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <Button onSubmit={onSubmit} variant="outline-secondary" id="button-addon2">
      Add
    </Button>
  </InputGroup>


    </div>
  )
}

export default ToDoInput
