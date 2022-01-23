import { Card } from 'react-bootstrap'
import SprintCard from './SprintCard'


const NewToDo = ({tasks, title}) => {
  
  return (
    
      <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text> 
                {title==='to do' ? (tasks.map((task) => (
                  <SprintCard key={task.id} task={task}/>
                ))) : null}

            </Card.Text>
          </Card.Body>
        </Card>
   
  )
}

export default NewToDo
