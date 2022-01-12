import IngredientDeleteModal from "./IngredientDeleteModal"
import IngredientEditModal from "./IngredientEditModal"
import { MdStackedLineChart, MdDelete, MdEditNote } from "react-icons/md"
import { Button, Card, Col } from "react-bootstrap"
import { useState } from "react"
function CardMenu(props) {
    const { ingredient}= props
  const [editShow, setEditShow] = useState(false)
  const [mealIngredients, setmealIngredients] = useState([])
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <Col ms={3} style={{ height: "50vh", width: "18rem", margin: "20px" }}>
      <Card style={{ textAlign: "center" }}>
        <Card.Img variant="top" style={{ objectFit: "cover", height: "150px", width: "100%" }} src={ingredient.image} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "600" }}>{ingredient.name}</Card.Title>
          <Card.Title style={{ fontWeight: "600" }}> Kcal:{ingredient.calories}</Card.Title>
          <Card.Title style={{ fontWeight: "600", color: "salmon" }}>
          
            Dietitian note:
            {ingredient.description ? (
              <Card.Title>{ingredient.description}</Card.Title>
            ) : (
              <Card.Title>---</Card.Title>
            )}
          </Card.Title>

          {localStorage.tokenPatient || localStorage.tokenCompanion || localStorage.tokenEmployee ? (
            <Button
              variant=""
              style={{ backgroundColor: "#32502E", color: "white" }}
              onClick={() => setmealIngredients([...mealIngredients, ingredient])}
            >
              Add Cart
            </Button>
          ) : null}
          {localStorage.tokenDietitian ? (
            <Button
              variant=""
              style={{ backgroundColor: "#081EA9", color: "white" }}
              className="me-2"
              onClick={() => setEditShow(true)}
            >
              <MdEditNote />
            </Button>
          ) : null}
          {localStorage.tokenDietitian ? (
            <Button
              variant=""
              style={{ backgroundColor: "#720c0c", color: "white", marginLeft: "10px" }}
              className="me-2"
              onClick={() => setDeleteShow(true)}
            >
              <MdDelete />
            </Button>
          ) : null}
        </Card.Body>
      </Card>
      {/* <IngredientEditModal show={editShow} setShow={setEditShow} ingredient={ingredient} /> */}
      {/* <IngredientDeleteModal show={deleteShow} setShow={setDeleteShow} ingredientId={ingredient._id} /> */}
    </Col>
  )
}

export default CardMenu
