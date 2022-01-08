import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import video from "../assets/hg.mp4"
import styles from "./SectionOne.module.css"
function SectionOne() {
  return (
    <>
    
      <video className={styles.video} src={video} autoPlay muted loop></video>
      <div className={styles.textfirst}>
        <h2 >Enjoyable Meal Service </h2>
        <p>
          
       Ouer Dear Employees,in Patients ,Visitors to the Hospitl , We are at Your Service
        </p>
        <button className={styles.bttnn}  ><Link to="/menu">Menu</Link> </button>
       
      </div>
    </>
  )
}

export default SectionOne
