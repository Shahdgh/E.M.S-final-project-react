import { useContext, useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Col, Card, Row, Button, Image } from "react-bootstrap"

import { MdAddBox } from "react-icons/md"
import { GiShoppingCart } from "react-icons/gi"
import MenuCard from "../components/MenuCard"
import SidebarCart from "../components/SidebarCart"
import IngredientAddModal from "../components/IngredientAddModal"
function Menu() {
 
  const [show, setShow] = useState(false)
  const [mealIngredients, setmealIngredients] = useState([])
  const { ingredients, addMealPatient, addMealEmployee, addMealCompanion } = useContext(HospitalsContext)
  // console.log(mealIngredients)
  return (
    <>
      {localStorage.tokenDietitian ? (
        <Button
          variant=""
          style={{
            backgroundColor: "#32502E",
            color: "white",
            marginLeft: "10px",
            marginTop: "10px",
            marginLeft: "3px",
            marginBottom: "7px",
          }}
          className="me-2"
          onClick={() => setShow(true)}
        >
          Add Ingredients <MdAddBox />
        </Button>
        
      ) : null}
       <IngredientAddModal show={show} setShow={setShow} />


{/* /*********************** */ }
      {/* <Row> md={4} */}
      <Col md={9}>
        <Row md={3} xs={1} sm={9}>
          {ingredients.map(ingredient => (
            <MenuCard
              key={ingredient._id}
              ingredient={ingredient}
              setmealIngredients={setmealIngredients}
              mealIngredients={mealIngredients}
            />
          ))}
        </Row>
      </Col>
      <Col md={3}>
        <Row style={{ disply: "flex", justifyContent: "flex-end" }}>
          <h4>
            Cart <GiShoppingCart />
          </h4>
          {mealIngredients.map(mealIngredient => (
            <SidebarCart key={mealIngredient._id} mealIngredient={mealIngredient} />
          ))}

          {localStorage.tokenPatient ? (
            <Button
              variant=""
              style={{ fontSize: "15px", fontWeight: "800", backgroundColor: "#1a571a", color: "white" }}
              className="me-2"
              onClick={() =>
                addMealPatient(mealIngredients) || addMealEmployee(mealIngredients) || addMealCompanion(mealIngredients)
              }
            >
              Send
            </Button>
          ) : localStorage.tokenCompanion ? (
            <Button
              variant=""
              style={{ fontSize: "15px", fontWeight: "800", backgroundColor: "#1a571a", color: "white" }}
              className="me-2"
              onClick={() => addMealCompanion(mealIngredients)}
            >
              Send
            </Button>
          ) : localStorage.tokenEmployee ? (
            <Button
              variant=""
              style={{ fontSize: "15px", fontWeight: "800", backgroundColor: "#1a571a", color: "white" }}
              className="me-2"
              onClick={() => addMealEmployee(mealIngredients)}
            >
              Send
            </Button>
          ) : null}
        </Row>
      </Col>
    </>
  )
}

export default Menu
