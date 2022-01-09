import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import HospitalsContext from "../utils/HospitalsContext"

function IngredientAddModal(props) {
  const { show, setShow } = props
  const { addIngredient, types } = useContext(HospitalsContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addIngredient}>
        <Modal.Header style={{ backgroundColor: "#32502E", color: "white" }} closeButton white>
          <Modal.Title style={{ color: "white" }}>Add Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="name" type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              description
            </Form.Label>
            <Col md="8">
              <Form.Control name="description" type="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Calories
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="calories" />
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
                    <Form.Check type="checkbox" name="types" value={type._id} />
                  </Col>
                  <Col md="7">
                    <span style={{ marginLeft: "3px" }}>{type.name}</span>
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
              <Form.Control type="url" name="image" />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Add Ingredient
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default IngredientAddModal
