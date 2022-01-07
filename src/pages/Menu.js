import { useContext, useState } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Col, Card, Row, Button, Image } from "react-bootstrap"
import { CDBTable, CDBTableBody } from "cdbreact"

import { GiShoppingCart } from "react-icons/gi"
import MenuCard from "../components/MenuCard"
import SidebarCart from "../components/SidebarCart"
function Menu() {
  const [mealIngredients, setmealIngredients] = useState([])
  const { ingredients, addMealPatient ,addMealEmployee,addMealCompanion} = useContext(HospitalsContext)
  // console.log(mealIngredients)
  return (
    <>
      <Row>
        <Col  sm={7}>
          {ingredients.map(ingredient => (
            <MenuCard
              key={ingredient._id}
              ingredient={ingredient}
              setmealIngredients={setmealIngredients}
              mealIngredients={mealIngredients}
            />
          ))}
        </Col>

        <Col ms={3}>
          <CDBTable
            striped
            bordered
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            materialSearch={true}
          >
            <h4>
              Cart <GiShoppingCart />
            </h4>
            <tr
              style={{
                textAlign: "center",
                tableLayout: "sticky",
                backgroundColor: "#1a571a",
                color: "white",
                padding: "0px",
              }}
            >
              <th style={{ width: "40%" }}> Name </th>

              <th style={{ width: "20%" }}>Calories</th>
              <th style={{ width: "40%" }}>Image</th>
            </tr>

            <CDBTableBody style={{ textAlign: "center" }}>
              {mealIngredients.map(mealIngredient => (
                <SidebarCart  key={mealIngredient._id} mealIngredient={mealIngredient} />
              ))}
            </CDBTableBody>
          </CDBTable>
{/* 
{localStorage.tokenPatient || localStorage.tokenEmployee? }
          <Button
            variant=""
            style={{ fontSize: "15px", fontWeight: "800", backgroundColor: "#1a571a", color: "white" }}
            className="me-2"
            onClick={() => addMealPatient(mealIngredients)|| addMealEmployee(mealIngredients)||addMealCompanion(mealIngredients) }
          >
            Send
          </Button> */}
            { localStorage.tokenPatient ? (
              <Button
            variant=""
            style={{ fontSize: "15px", fontWeight: "800", backgroundColor: "#1a571a", color: "white" }}
            className="me-2"
            onClick={() => addMealPatient(mealIngredients)|| addMealEmployee(mealIngredients)||addMealCompanion(mealIngredients) }
          >
            Send
          </Button>
            ) : localStorage.tokenCompanion ? (
              <Button
              variant=""
              style={{ fontSize: "15px", fontWeight: "800", backgroundColor: "#1a571a", color: "white" }}
              className="me-2"
              onClick={() => addMealCompanion(mealIngredients) }
            >
              Send
            </Button>
            ) : localStorage.tokenEmployee ? (
              <Button
              variant=""
              style={{ fontSize: "15px", fontWeight: "800", backgroundColor: "#1a571a", color: "white" }}
              className="me-2"
              onClick={() => addMealEmployee(mealIngredients) }
            >
              Send
            </Button>
            ) : null
          }
        </Col>
      </Row>
    </>
  )
}

export default Menu
