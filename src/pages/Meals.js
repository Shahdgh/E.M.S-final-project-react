import HospitalsContext from "../utils/HospitalsContext"
import { useContext, useState } from "react"
import CardMeals from "../components/CardMeals"
import { Col, Row } from "react-bootstrap"

function Meals(props) {
  
  const { mealPatients } = useContext(HospitalsContext)
  if (!mealPatients) return <h1>Loading...</h1>
  return (
    <>
     
          <Row style={{ gap: "5%", margin: "30px" }} md={3} sm={2} xs={1}>
        {mealPatients.map(mealPatient => (
          <CardMeals key={mealPatient._id} mealPatient={mealPatient} />
        ))}
      </Row>
      
    
          {/* <CardMeals key={mealPatient._id} mealPatient={mealPatient}  /> */}
  
    </>
  )
}

export default Meals
