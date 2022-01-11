import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import EmployeeInformation from "../components/EmployeeInformation"
import MealCopmanion from "../components/MealCompanion"
import MealEmployee from "../components/MealEmployee"
import HospitalsContext from "../utils/HospitalsContext"

function ProfileEmployee() {
  const { profileEmployees } = useContext(HospitalsContext)
  if (!profileEmployees) return <h1>Loading...</h1>
  console.log(profileEmployees)
  return (
    <>
      
      <EmployeeInformation key={profileEmployees._id} />
    
      <Col>
        <Row md={4}>
        
          {profileEmployees.meals.map(meal => (
            <MealEmployee key={meal._id} meal={meal} />
          ))}
       
        </Row>
      </Col>
    </>
  )
}

export default ProfileEmployee
