import { useContext } from "react"
import { useParams } from "react-router-dom"
import CardMeals from "../components/CardMeals"
import EmployeeInformation from "../components/EmployeeInformation"
import PatientInformation from "../components/PatientInformation"
import HospitalsContext from "../utils/HospitalsContext"

function ProfilePatient() {
  const { profilePatients ,meals} = useContext(HospitalsContext)
  if (!profilePatients) return <h1>Loading...</h1>

  return (
    <>
      <PatientInformation key={profilePatients._id} />

      {profilePatients.meals.map(meal=>(
   meal.ingredients.map(ingredient =>(
    <h1>{ingredient.name}</h1>

   ))
     
      ))}
  
  {/* {profilePatients.meals.map(meal =>
        meal.ingredients.map(ingredient => (
          <div className="card">
            <img
              style={{ width: "50%", height: "30px", borderRadius: "4%" }}
              src={ingredient.image}
              class="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">Name:{ingredient.name}</h5>
              <h6 className="card-title">Calories:{ingredient.calories}</h6>
            </div>
          </div>
        ))
      )} */}
    </>

  )
}

export default ProfilePatient
