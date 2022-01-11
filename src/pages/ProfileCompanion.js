import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import CompanionInformation from "../components/CompanionInformation"
import DietitianInformation from "../components/DietitianInformation"
import MealCopmanion from "../components/MealCompanion"
import MealPatient from "../components/MealPatint"

import HospitalsContext from "../utils/HospitalsContext"

function ProfileCompanion(props) {
  const { ingredient } = props
  const { profileCompanions, ingredients, meals } = useContext(HospitalsContext)
  if (!profileCompanions) return <h1>Loading...</h1>

  return (
    <>
      <CompanionInformation key={profileCompanions._id} />

      <>
        <h2>My Meals</h2>
      </>
      

      {/* <Col>
        <Row md={4}>
     
          {profileCompanions.meals.map(meal => (
            <MealCopmanion key={meal._id} meal={meal} />
          ))}
       
        </Row>
      </Col> */}
    </>
  )
}

export default ProfileCompanion
