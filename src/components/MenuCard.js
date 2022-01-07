import { useContext, useState } from "react"
import { MdStackedLineChart } from "react-icons/md"
import Cart from "../pages/Cart"
import HospitalsContext from "../utils/HospitalsContext"

function MenuCard(props) {
  const { ingredient, setmealIngredients, mealIngredients } = props
  const { ingredients } = useContext(HospitalsContext)

  return (
    <div  className="card">
      <img style={{width:"50%",
        height: "30px",
        borderRadius:"4%"}} src={ingredient.image} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Name:{ingredient.name}</h5>
        <h6 className="card-title">Calories:{ingredient.calories}</h6>

        {ingredient.types.map(type => (
          <p>Type:{type.name}</p>
        ))}

        <a className="btn btn-primary" onClick={() => setmealIngredients([...mealIngredients, ingredient])}>
          Add to cart
        </a>
      </div>
    </div>
  )
}

export default MenuCard
