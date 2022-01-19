import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"

function DietitianEditModal(props) {
  const { show, setShow } = props
  const { editDietitian, profileDietitians } = useContext(HospitalsContext)
  

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editDietitian(e, profileDietitians._id)}>
        <Modal.Header style={{  backgroundColor: "#1a571a", color: "white" }} closeButton>
          <Modal.Title style={{ color: "white" }}>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              First Name
            </Form.Label>
            <Col md="8">
              <Form.Control name="firstName" type="text" defaultValue={profileDietitians.firstName} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Last Name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" defaultValue={profileDietitians.lastName} />
            </Col>
          </Form.Group> */}

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Phone
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="phone" defaultValue={profileDietitians.phone} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" defaultValue={profileDietitians.email} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Avatar
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" defaultValue={profileDietitians.avatar} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" defaultValue={profileDietitians.password} />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="" style={{ backgroundColor: "#1a571a", color: "white" }} type="submit" onClick={() => setShow(false)}>
            Edit Profile
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default DietitianEditModal