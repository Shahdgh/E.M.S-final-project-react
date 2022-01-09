import { Button, Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { useContext, useState } from "react"
import { AiFillEdit } from "react-icons/ai"
import { RiFileList2Fill } from "react-icons/ri";
import MealPatientEditModal from "./MealPatientEditModal"
import HospitalsContext from "../utils/HospitalsContext"
function CardMeals(props) {
  // const { meal } = props
  const [editShow, setEditShow] = useState(false)
  const { mealPatient } = props
 

  const client = mealPatient.employee || mealPatient.patient || mealPatient.patientCompanion
  console.log(client);
  return (
    <> {mealPatient.ingredients.map(ingredient => (
      <Card style={{ width: "18rem",gap:"4",marginBottom:"15px" }}>
       
          <Card.Img src={ingredient.image} style={{ objectFit: "contain", height: "90px", width: "100%" }} />
          <Card.Text style={{fontSize:"20px",fontWeight:"800"}}>Ingredient Name:{ingredient.name}</Card.Text>
      

        <Card.Body style={{fontSize:"20px",fontWeight:"800"}}>
       
          <Card.Text>
          
          </Card.Text>
        </Card.Body>
        <ListGroup style={{fontSize:"20px",fontWeight:"800"}} className="list-group-flush">
        <ListGroupItem> Patient Name:   {client?.firstName} {client?.lastName} </ListGroupItem>

          <ListGroupItem style={{fontSize:"20px",fontWeight:"800"}} ><RiFileList2Fill  /> Disease: {client?.disease} </ListGroupItem>
          <ListGroupItem>Status: {mealPatient.status} </ListGroupItem>
          <ListGroupItem>Comment :{mealPatient.comment ? <p>{mealPatient.comment}</p> : <p>--</p>}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button
            style={{ color: "white", backgroundColor: "#1a571a", padding: "5px 20px", border: "none" }}
            size="small"
            onClick={() => setEditShow(true)}
            color="dark"
          >
            Acepet <AiFillEdit />
          </Button>
     

          <MealPatientEditModal show={editShow} setShow={setEditShow} mealPatient={mealPatient} />
        </Card.Body>
      </Card>
        ))}
    </>
  )
}

export default CardMeals
