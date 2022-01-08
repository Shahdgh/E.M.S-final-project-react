import { useContext, useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Col, Card, Row, Button, Image } from "react-bootstrap"
import { CDBTable, CDBTableBody } from "cdbreact"

import { GiShoppingCart } from "react-icons/gi"
import MenuCard from "../components/MenuCard"
import SidebarCart from "../components/SidebarCart"
function Menu() {
  const [mealIngredients, setmealIngredients] = useState([])
  const { ingredients, addMealPatient, addMealEmployee, addMealCompanion } = useContext(HospitalsContext)
  // console.log(mealIngredients)
  return (
    <>
      <Row>
        <Col xs={5} sm={9}>
          {ingredients.map(ingredient => (
            <MenuCard
              key={ingredient._id}
              ingredient={ingredient}
              setmealIngredients={setmealIngredients}
              mealIngredients={mealIngredients}
            />
          ))}
        </Col>

        <Col sm={3}>
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
        </Col>
      </Row>
    </>
  )
}

export default Menu
