import { Card } from 'react-bootstrap'
import SprintCard from './SprintCard'


const NewToDo = ({tasks: {id, text,title},
   titles, tasks}) => {
  
  return (
    
      <Card>
          <Card.Body>
            <Card.Title>{titles}</Card.Title>
            <Card.Text> 
            {console.log(tasks)}
                {titles==='to do' ? (tasks.map((task) => (
                  <SprintCard key={id} task={text} title={title} />
                ))) : ''}

            </Card.Text>
          </Card.Body>
        </Card>
   
  )
}

export default NewToDo
