import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"

function IngredientEditModal(props) {
  const { show, setShow,ingredient } = props
  const { types,editIngredient } = useContext(HospitalsContext)
  return (
    <Modal  show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editIngredient(e, ingredient._id)}>
        <Modal.Header style={{backgroundColor:"#32502E",color:"white"}} closeButton>
          <Modal.Title style={{color:"white"}}>Edit Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
           Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="name" type="text" defaultValue={ingredient.name} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
           description
            </Form.Label>
            <Col md="8">
              <Form.Control name="description" type="text" defaultValue={ingredient.description} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
            Calories
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="calories" defaultValue={ingredient.calories} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              types
            </Form.Label>
            <Col md="8" style={{ maxHeight: 450, overflowY: "scroll", border: "1px solid darkgray" }}>
              {types.map(type => (
                <Row style={{ height: 60, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="checkbox" name="types" value={type._id} defaultValue={type.name} />
                  </Col>
                  <Col md="7">
                    <span style={{ marginLeft: "3px" }}>
                      {type.name}
                    </span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={ingredient.image} />
            </Col>
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Ingredient
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default IngredientEditModal
