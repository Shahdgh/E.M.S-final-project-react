import HospitalsContext from "../utils/HospitalsContext"
import { useContext, useState } from "react"
import CardMeals from "../components/CardMeals"
import { Col, Row } from "react-bootstrap"
function Meals() {
  // const { meals } = useContext(HospitalsContext)
  const { mealPatients } = useContext(HospitalsContext)
console.log(mealPatients)

  return (
    <>
      {/* <Row style={{ gap: "5%", margin: "30px" }} md={3} sm={2} xs={1}>
        {meals.map(meal => (
          <CardMeals key={meal._id} meal={meal} />
        ))}
      </Row> */}
          <Row style={{ gap: "5%", margin: "30px" }} md={3} sm={2} xs={1}>
        {mealPatients.map(mealPatient => (
          <CardMeals key={mealPatient._id} mealPatient={mealPatient} />
        ))}
      </Row>
    </>
  )
}

export default Meals
