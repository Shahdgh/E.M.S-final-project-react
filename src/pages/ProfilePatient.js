import { useContext } from "react"
import { useParams } from "react-router-dom"
import CardMeals from "../components/CardMeals"
import EmployeeInformation from "../components/EmployeeInformation"
import PatientInformation from "../components/PatientInformation"
import HospitalsContext from "../utils/HospitalsContext"

function ProfilePatient() {
  const { profilePatients ,meals} = useContext(HospitalsContext)
  if (!profilePatients) return <h1>Loading...</h1>

  // console.log(profilePatients)
  //   const{patientId}=useParams()
  //   let patient
  //  if(patientId) patient = profilePatients.find(profilePatients =>profilePatients._id === patientId)
  return (
    <>
      <PatientInformation key={profilePatients._id} />

      {/* {profilePatients.meals.map(meal=>(
   
      <h1>{meal._id }</h1>

      ))} */}
      {profilePatients.meals.map(meal =>
       
          <div className="card">
            {/* <img
              style={{ width: "50%", height: "30px", borderRadius: "4%" }}
              src={ingredients.image}
              class="card-img-top"
              alt="..."
            /> */}

            <div className="card-body">
              <h5 className="card-title">Name:{meal._id}</h5>
              {/* <h6 className="card-title">Calories:{meal.ingredients}</h6> */}
            </div>
          </div>
        // ))
      )}
    </>

  )
}

export default ProfilePatient
