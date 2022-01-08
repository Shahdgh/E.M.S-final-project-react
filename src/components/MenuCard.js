import { useContext, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { MdStackedLineChart } from "react-icons/md"
import Cart from "../pages/Cart"
import HospitalsContext from "../utils/HospitalsContext"
import  "./MenuCard.css"
function MenuCard(props) {
  const { ingredient, setmealIngredients, mealIngredients } = props
  const { ingredients } = useContext(HospitalsContext)

  return (
   
  
 <Row md={2} >
   
      <Card >
   <Card.Img variant="top" src={ingredient.image} />
   <Card.Body>
     <Card.Title> Name:{ingredient.name}</Card.Title>
     <Card.Title> Calories:{ingredient.calories}</Card.Title>

     <Card.Title> 
   {ingredient.types.map(type => (
          <p >Type:{type.name}</p>
        ))}
  </Card.Title> 
    <Button variant="" style={{ backgroundColor:"#32502E",color:"white"}} onClick={() => setmealIngredients([...mealIngredients, ingredient])}>Add Cart</Button>
  </Card.Body>
 </Card>
</Row>

  )
}

export default MenuCard
