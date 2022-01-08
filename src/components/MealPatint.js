import HospitalsContext from "../utils/HospitalsContext";
import {useContext} from "react"
function MealPatient(props) {
    const {meals,ingredients } = useContext(HospitalsContext)
    
    const{meal}=props
    // console.log(meal)
    return (  <>
    {/* {meal.ingredients.map(ingredient=>(
    
    <div  className="card">
        
      <img style={{width:"50%",
        height: "30px",
        borderRadius:"4%"}} src={ingredient.image} class="card-img-top" alt="..." />
    
      <div className="card-body">
        <h5 className="card-title">Name:{ingredient.name}</h5>
        <h6 className="card-title">Calories:{ingredient.calories}</h6>
         

       

      </div>
    </div>
    ))} */}

 
    
    </>
    );
}

export default MealPatient;