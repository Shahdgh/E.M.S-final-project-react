import { useContext } from "react"
import HospitalsContext from "../utils/HospitalsContext"


function MenuCard(props) {
  const { ingredient } = props
  return (
    <div className="card">
      <img src={ingredient.image} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Name:{ingredient.name}</h5>
        <h6 className="card-title">Calories:{ingredient.calories}</h6>

        {ingredient.types.map(type => (
          <p>Type:{type.name}</p>
        ))}

        <a href="" type="submit" className="btn btn-primary">
          Add
        </a>
      </div>
    </div>
  )
}

export default MenuCard
