import { useContext } from "react"
import { useParams } from "react-router-dom"
import CardMeals from "../components/CardMeals"
import EmployeeInformation from "../components/EmployeeInformation"
import PatientInformation from "../components/PatientInformation"
import HospitalsContext from "../utils/HospitalsContext"

function ProfilePatient() {
  const { profilePatients } = useContext(HospitalsContext)
  if (!profilePatients) return <h1>Loading...</h1>

  // console.log(profilePatients)
  //   const{patientId}=useParams()
  //   let patient
  //  if(patientId) patient = profilePatients.find(profilePatients =>profilePatients._id === patientId)
  return (
    <>
      <PatientInformation key={profilePatients._id} />

      {profilePatients.meals.map(meal=>(
   
      <h1>{meal._id }</h1>

      ))}
            {/* {profilePatients.meals.map(meal => (
          <CardMeals key={meal._id} meal={meal} />
        ))} */}
    </>

  )
}

export default ProfilePatient
