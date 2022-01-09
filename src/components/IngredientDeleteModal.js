import HospitalsContext from "../utils/HospitalsContext"
import { useContext } from "react"
import { Button, Modal } from "react-bootstrap"
function IngredientDeleteModal(props) {
  const { deleteIngredient } = useContext(HospitalsContext)
  const { show, setShow, ingredientId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header style={{backgroundColor:"#32502E",color:"white"}} closeButton>
        <Modal.Title style={{color:"white"}}>Delete Ingredients</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this Ingredient?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteIngredient(ingredientId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default IngredientDeleteModal