import React from 'react'
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {CartPlus,CartDash} from "react-bootstrap-icons"
function OneProduct({prod}) {
  return (
    <Card style={{ width: '18rem' }}>{
        console.log(prod,"hello")
    }
    <Card.Img style={{width:"250px",height:"250px",margin:"10%"}} variant="top" src={prod.imageUrl} />
    <Card.Body>
      <Card.Title>{prod.productName}</Card.Title>
      <Card.Text>
        {prod.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>price:{prod.price}dt</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#"><CartPlus/></Card.Link>
      <Card.Link href="#"><CartDash/></Card.Link>
      <Button variant='info' style={{marginLeft:"45%"}}>see more</Button>
    </Card.Body>
    
  </Card>
  )
}

export default OneProduct