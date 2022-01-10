import { useContext } from "react"
import { Row } from "react-bootstrap"
import HospitalsContext from "../utils/HospitalsContext"

function MealCopmanion(props) {
  const { meal } = props
  const { ingredients, profileCompanions } = useContext(HospitalsContext)
  return (
    <>
      <div className="card">
        <h5 className="card-title">Name:{meal.status}</h5>
        <h4>Comment : {meal.comment ? <h4>{meal.comment}</h4> : <h4>No</h4>}</h4>
      </div>
      {meal.ingredients.map(ingredient => (
        <h3>{ingredient.name}</h3>
      ))}
    </>
  )
}

export default MealCopmanion
