import { useContext } from "react"
import { useParams } from "react-router-dom"
import CardMeals from "../components/CardMeals"
import EmployeeInformation from "../components/EmployeeInformation"
import PatientInformation from "../components/PatientInformation"
import HospitalsContext from "../utils/HospitalsContext"
import Meals from "./Meals"

function ProfilePatient() {
  const { profilePatients, meals } = useContext(HospitalsContext)
  if (!profilePatients) return <h1>Loading...</h1>

  return (
    <>
      <PatientInformation key={profilePatients._id} />
    </>
  )
}

export default ProfilePatient
