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
  const {  addMealPatient, addMealEmployee, addMealCompanion } = useContext(HospitalsContext)

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

      {/* /************************************************** */}

      <Row className="row-lg-3 ms-4 md-4">
        <Col className="col-lg-9 ">
          <Row md={7}>
            <MenuCard setmealIngredients={setmealIngredients} mealIngredients={mealIngredients} />
          </Row>
        </Col>

        <Col md={3}>
          <h4 style={{ fontWeight: "800", marginTop: "8px" }}>
            Cart <GiShoppingCart style={{ fontWeight: "800", fontSize: "30px" }} />
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
                addMealPatient(mealIngredients)
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
