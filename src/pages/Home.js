import { useContext } from "react"
import CarouselItem from "../components/Carousel"
import Footer from "../components/Footer"

import SectionOne from "../components/SectionOne"
import { MdMenuBook} from "react-icons/md"

import Types from "../components/Types"

function Home() {
  return (
    <>
      <SectionOne />
      <CarouselItem />
      <br/>
      <h4 style={{fontSize:"30px",fontWeight:"600",textAlign:"center",alignItems:"center"}}>Menu List <MdMenuBook style={{fontSize:"30px",fontWeight:"600",textAlign:"center",alignItems:"center"}}/></h4>
      <br/>
      <Types />

      <Footer />
    </>
  )
}

export default Home
