import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import CompanionInformation from "../components/CompanionInformation"
import DietitianInformation from "../components/DietitianInformation"
import MealCopmanion from "../components/MealCompanion"
import MealPatient from "../components/MealPatint"

import HospitalsContext from "../utils/HospitalsContext"

function ProfileCompanion(props) {
  const { ingredient } = props
  const { profileCompanions, ingredients, meals } = useContext(HospitalsContext)
  // if (!profileCompanions) return <h1>Loading...</h1>

  
  return (
    <>
      <CompanionInformation key={profileCompanions._id} />
      <>
      <h2>My Meals</h2>
      <Col md={3} style={{backgroundColor:"green",textAlign:"center",marginLeft:"40%",width:"50vh"}}>
  {profileCompanions.meals.map(meal =>(
<MealCopmanion key={meal._id} meal={meal} />
 ))} 
 </Col>


 
 </> 


      {/* {profileCompanions.meals.map(meal =>(
        <div>
      <p>statues:{meal.comment}</p>

      <p> Status :{meal.status}</p>
     {ingredients.map(ingredient=>(

<img src={ingredient.image}/>
     ))}
      </div>
     
      ))} */}
    </>
  )
}

export default ProfileCompanion
