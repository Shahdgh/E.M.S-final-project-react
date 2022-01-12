import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import MealCopmanion from "../components/MealCompanion"
import MealEmployee from "../components/MealEmployee"
import MealPatient from "../components/MealPatint"
import HospitalsContext from "../utils/HospitalsContext"
function MyMeals() {
  const { profileCompanions,profileEmployees ,profilePatients} = useContext(HospitalsContext)
  return (
    <>
       <h4 style={{textAlign:"center",fontWeight:"800", marginTop:"30px",}}>My Meals</h4>
      {localStorage.tokenCompanion ? (
        <Col>
          <Row md={4}>
            {profileCompanions.meals.map(meal => (
              <MealCopmanion key={meal._id} meal={meal} />
            ))}
          </Row>
        </Col>
      ):localStorage.tokenEmployee ? (
        <Col>
          <Row md={4}>
            {profileEmployees.meals.map(meal => (
              <MealEmployee key={meal._id} meal={meal} />
            ))}
          </Row>
        </Col>
      ) : localStorage.tokenPatient?(
        <Col>
        <Row md={4}>
          {profilePatients.meals.map(meal => (
            <MealPatient key={meal._id} meal={meal} />
          ))}
        </Row>
      </Col>
      ): null}
    </>
  )
}

export default MyMeals
