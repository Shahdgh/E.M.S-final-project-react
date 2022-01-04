import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";


function CardMeals(props) {
    const { meal } = props
 
    const client = meal.employee || meal.patient || meal.patientCompanion
    return (  <>
  
<Card style={{ width: '18rem' }}>
{meal.ingredients.map(
            ingredient => (
              
              <Card.Img  src={ingredient.image} style={{ objectFit: "contain", height: "50px", width: "50%" }} />  )   
        )}
    
 
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
    <p>{client.firstName} {client.lastName} </p>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>     {client.disease}  </ListGroupItem>
    <ListGroupItem>{meal.comment ? <p>{meal.comment}</p> : <p>--</p>}</ListGroupItem>
    {/* <ListGroupItem></ListGroupItem>
    <ListGroupItem></ListGroupItem> */}
  </ListGroup>
  {/* <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body> */}
</Card>

    
    </> );
}

export default CardMeals;