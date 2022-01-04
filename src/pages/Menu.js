import { useContext } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { Col, Card, Row, Button } from "react-bootstrap"
import Types from "../components/Types"
import MenuCard from "../components/MenuCard"
function Menu() {

  const { ingredients } = useContext(HospitalsContext)
 
  return (
    <>
     <Row md={4} sm={2} xs={1}>
    {ingredients.map(ingredient => (
      <MenuCard key={ingredient._id} ingredient={ingredient}/>
    ))}
    </Row>   
    </>
  )
}

export default Menu
