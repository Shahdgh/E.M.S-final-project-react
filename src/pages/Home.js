import { useContext } from "react"
import  CarouselItem from "../components/Carousel"
  import Footer from "../components/Footer"
import MealPatient from "../components/MealPatint"
import SectionOne from "../components/SectionOne"
import SectionTow from "../components/SectionTow"
import Types from "../components/Types"
import HospitalsContext from "../utils/HospitalsContext"


function Home() {
  // const {ingredient}= props
  // const { types  } = useContext(HospitalsContext)
  // if (!ingredients) <p> loding... </p>
  return (
    <>
      <SectionOne/>
      <CarouselItem/> 
      <Types/>
      {/* {types.map(type =>
        type.name == "Drinks" ? <Types key={type._id} type = {type} /> : null
      )}   */}
     
{/* <MealPatient/> */}
<Footer/>
    </>
  )
}

export default Home
