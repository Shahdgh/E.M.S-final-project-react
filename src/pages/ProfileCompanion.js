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

     
      

    
    </>
  )
}

export default ProfileCompanion
