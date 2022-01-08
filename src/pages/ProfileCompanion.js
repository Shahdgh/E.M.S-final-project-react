import { useContext } from "react"
import CompanionInformation from "../components/CompanionInformation"
import DietitianInformation from "../components/DietitianInformation"

import HospitalsContext from "../utils/HospitalsContext"

function ProfileCompanion(props) {
  const { ingredient } = props
  const { profileCompanions, ingredients, meals } = useContext(HospitalsContext)
  // if (!profileCompanions) return <h1>Loading...</h1>

  // const mealcompinanion= meals.filter(meal => meal._companion._id === profileCompanions._id)
  // console.log(mealcompinanion);
  return (
    <>
      <CompanionInformation key={profileCompanions._id} />

      {profileCompanions.meals.map(meal =>
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
      )}
    </>
  )
}

export default ProfileCompanion
