import { useContext } from "react";
import CardMeals from "../components/CardMeals";
import Types from "../components/Types";
import HospitalsContext from "../utils/HospitalsContext";
import Meals from "./Meals";

function AllDrinks() {
    const {ingredients,types}=useContext(HospitalsContext)
    console.log(ingredients)
    return ( <>
     {ingredients.map(type =>
        type.name == "Drinks" ? <CardMeals key={type._id} type= {type} /> : null
     
      )}   
  
    </>
     );
}

export default AllDrinks;