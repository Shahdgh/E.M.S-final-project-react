import { useContext } from "react"
import SectionOne from "../components/SectionOne"
import Types from "../components/Types"
import HospitalsContext from "../utils/HospitalsContext"


function Home() {
  // const {ingredient}= props
  // const { types  } = useContext(HospitalsContext)
  // if (!ingredients) <p> loding... </p>
  return (
    <>
      <SectionOne/>
      <Types/>
      {/* {types.map(type =>
        type.name == "Drinks" ? <Types key={type._id} type = {type} /> : null
      )}   */}
     

    </>
  )
}

export default Home
