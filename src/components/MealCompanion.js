import { useContext } from "react";
import { Row } from "react-bootstrap";
import HospitalsContext from "../utils/HospitalsContext";
 
function MealCopmanion(props) {
    const {meal,}=props
    const {ingredients,profileCompanions}=useContext(HospitalsContext)
    return ( <>

          <div className="card">
       
              <h5 className="card-title">Name:{meal.status}</h5>
            <h4>Comment : {meal.comment ? <h4>{meal.comment}</h4> : <h4>No</h4>}</h4>  
              {/* <h6 className="card-title">Calories:{meal.comment}</h6> */}
            </div>
       {meal.ingredients.map(meal => (
         <h3>{meal.name}</h3>
      
       ))} 
 
    </> );
}

export default MealCopmanion;