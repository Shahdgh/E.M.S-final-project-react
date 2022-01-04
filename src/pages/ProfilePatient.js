import { useContext } from "react"
import { useParams } from "react-router-dom"
import EmployeeInformation from "../components/EmployeeInformation"
import PatientInformation from "../components/PatientInformation"
import HospitalsContext from "../utils/HospitalsContext"

function ProfilePatient() {
  const { profilePatients } = useContext(HospitalsContext)
  console.log(profilePatients)
  //   const{patientId}=useParams()
  //   let patient
  //  if(patientId) patient = profilePatients.find(profilePatients =>profilePatients._id === patientId)
  return (
    <>
      <PatientInformation key={profilePatients._id} />
    </>
  )
}

export default ProfilePatient
