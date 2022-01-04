import { useContext } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Col, Card, Row, Button } from "react-bootstrap"
import Types from "../components/Types"
function Menu() {

  const { ingredients, types } = useContext(HospitalsContext)
  // console.log(types)
  return (
    <>
      <Row md={4} sm={2} xs={1}>
        {ingredients.map(ingredient => (
          <div className="card">
            <img src={ingredient.image} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Name:{ingredient.name}</h5>
              <h6 className="card-title">Calories:{ingredient.calories}</h6>

              {types.map(type => (
                <p>Type:{type.name}</p>
              ))} 
   
        {/* <p>Types:{ingredient.types.name}</p> */}
     
              <a href="" type="submit"  className="btn btn-primary">
                Add
              </a>
            </div>
          </div>
        ))}
      </Row>
    </>
  )
}

export default Menu
