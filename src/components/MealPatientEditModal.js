import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"

function MealPatientEditModal(props) {
  const { show, setShow } = props
  const { editMealPatient, mealPatients } = useContext(HospitalsContext)
  

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editMealPatient(e, mealPatients._id)}>
        <Modal.Header style={{  backgroundColor: "#1a571a", color: "white" }} closeButton>
          <Modal.Title style={{ color: "white" }}>Meal Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Status:
            </Form.Label>
            <Col md="8">
              <Form.Control name="status" type="text" defaultValue={mealPatients.status} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
               Comment:
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="comment" defaultValue={mealPatients.comment} />
            </Col>
          </Form.Group>

        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="" style={{ backgroundColor: "#1a571a", color: "white" }} type="submit" onClick={() => setShow(false)}>
           send Edit 
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default MealPatientEditModal