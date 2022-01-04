import { Button, Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { useState } from "react"
import { AiFillEdit } from "react-icons/ai"
import MealPatientEditModal from "./MealPatientEditModal"
function CardMeals(props) {
  // const { meal } = props
  const [editShow, setEditShow] = useState(false)
  const { mealPatient } = props

  const client = mealPatient.employee || mealPatient.patient || mealPatient.patientCompanion
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {mealPatient.ingredients.map(ingredient => (
          <Card.Img src={ingredient.image} style={{ objectFit: "contain", height: "50px", width: "50%" }} />
        ))}

        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <p>
              {client.firstName} {client.lastName}{" "}
            </p>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem> {client.disease} </ListGroupItem>
          <ListGroupItem> {mealPatient.status} </ListGroupItem>
          <ListGroupItem>{mealPatient.comment ? <p>{mealPatient.comment}</p> : <p>--</p>}</ListGroupItem>
          {/* <ListGroupItem></ListGroupItem>
    <ListGroupItem></ListGroupItem> */}
        </ListGroup>
        <Card.Body>
          <Button
            style={{ color: "white", backgroundColor: "#1a571a", padding: "5px 20px", border: "none" }}
            size="small"
            onClick={() => setEditShow(true)}
            color="dark"
          >
            {" "}
            Acepet <AiFillEdit />
          </Button>
          {/* <Button style={{color:"white", backgroundColor:"red",padding:"5px 20px",border:"none"}} size="small" onClick={() => setEditShow(true)} color="dark">
                {" "}
                Refsued 
              </Button> */}
          <MealPatientEditModal show={editShow} setShow={setEditShow} />
        </Card.Body>
      </Card>
    </>
  )
}

export default CardMeals
