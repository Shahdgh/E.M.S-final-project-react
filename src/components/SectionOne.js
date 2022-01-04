import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import video from "../assets/hg.mp4"
import styles from "./SectionOne.module.css"
function SectionOne() {
    return ( <>
    
        <div className="text-first"> 
  <video className={styles.video} src={video} autoPlay muted loop></video>
 
  
        <h2 >Enn  </h2>
        <p> It is the image obtained from the process of photosynthesis, by the fall of light on a light-sensitive surface.</p>
        {/* <div className={styles.button}>
          <Link variant="light" className={styles.btn} to="/apicard">
            View
          </Link>
          </div> */}
        </div>
      

    </> );
}

export default SectionOne;