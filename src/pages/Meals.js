import HospitalsContext from "../utils/HospitalsContext";
import { useContext,useState } from "react"
import CardMeals from "../components/CardMeals";
import { Col, Row } from "react-bootstrap";
function Meals() {
   const{meals}=useContext(HospitalsContext)
 
    return (  <>
  <Row style={{gap:"5%",margin:"30px"}}  md={3} sm={2} xs={1}> 
   
  {meals.map(meal => (
              <CardMeals key={meal._id} meal={meal} />
            ))}
 
   </Row>
    </>);
}

export default Meals;