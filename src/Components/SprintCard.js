import React from 'react'
import { Card } from 'react-bootstrap'
const SprintCard = ({key, task, title}) => {
  
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
{/* bootstrap draggable list sort from 
   'https://mdbootstrap.com/docs/standard/plugins/drag-and-drop/'
  <div id="sortable-multi-tables-1" data-mdb-sortable="sortable" class="sortable-list" data-mdb-connected-list="#sortable-multi-tables-2">
        <h4 class="text-center pt-2">To do</h4>
        <div class="sortable-item" data-mdb-id="sortable-item-324552">Item 1</div>
        <div class="sortable-item" data-mdb-id="sortable-item-186641">Item 2</div>
        <div class="sortable-item" data-mdb-id="sortable-item-279773">Item 3</div>
        <div class="sortable-item" data-mdb-id="sortable-item-193860">Item 4</div>
        <div class="sortable-item" data-mdb-id="sortable-item-881058">Item 5</div>
        <div class="sortable-item" data-mdb-disabled="true" data-mdb-id="sortable-item-749526">Disabled</div>
      </div> */}