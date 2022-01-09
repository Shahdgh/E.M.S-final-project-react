import { useContext, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { MdStackedLineChart,MdDelete,MdEditNote } from "react-icons/md"
import Cart from "../pages/Cart"
import HospitalsContext from "../utils/HospitalsContext"
import IngredientAddModal from "./IngredientAddModal"
import IngredientDeleteModal from "./IngredientDeleteModal"
import IngredientEditModal from "./IngredientEditModal"
import "./MenuCard.css"
function MenuCard(props) {
  const { ingredient, setmealIngredients, mealIngredients,ingredientId } = props
  const { DietitianDeleteIngredient ,ingredients} = useContext(HospitalsContext)
  // const { ingredients } = useContext(HospitalsContext)
  const [show, setShow] = useState(false)
    const [editShow, setEditShow] = useState(false)

    const [deleteShow, setDeleteShow] = useState(false)
  return (

    <>
      
  
    <Card>
      <Card.Img variant="top" src={ingredient.image} />
      <Card.Body>
        <Card.Title> Name:{ingredient.name}</Card.Title>
        <Card.Title> Calories:{ingredient.calories}</Card.Title>

        <Card.Title>
          {ingredient.types.map(type => (
            <p>Type:{type.name}</p>
          ))}
        </Card.Title>
        {localStorage.tokenPatient  || localStorage.tokenCompanion 
              || localStorage.tokenEmployee ? (
        <Button
          variant=""
          style={{ backgroundColor: "#32502E", color: "white" }}
          onClick={() => setmealIngredients([...mealIngredients, ingredient])}
        >
          Add Cart
        </Button>):null}
       {localStorage.tokenDietitian ? (
     <Button
     variant=""
     style={{ backgroundColor: "#081EA9", color: "white"}}
     className="me-2"
     onClick={() => setEditShow(true)}

   >
     EDIT   <MdEditNote/>
   </Button>):null}
    {localStorage.tokenDietitian ? (
      <Button
      variant=""
      style={{ backgroundColor: "#720c0c", color: "white",marginLeft:"10px" }}
      className="me-2"

      onClick={() => setDeleteShow(true)}
    >
     DELETE  <MdDelete/>
    </Button>):null}
    </Card.Body>
    </Card>
   
    <IngredientEditModal show={editShow} setShow={setEditShow} ingredient={ingredient} />
      <IngredientDeleteModal show={deleteShow} setShow={setDeleteShow}   ingredientId={ingredient._id} />
   </>
  )
}

export default MenuCard
