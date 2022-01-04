import { useContext } from "react"
import { Link } from "react-router-dom"
import HospitalsContext from "../utils/HospitalsContext"
import styles from "./Types.module.css"

function Types() {
 
  const { types } = useContext(HospitalsContext)

  return (
    <>
      {types.map(type => (
        <figure className={styles.snip0016}>
          <img src={type.image} alt="sample41" />
          <figcaption>
            <h2> {type.name} </h2>
            <Link to="all-drinks"></Link>
            {/* <a href=""></a> */}
          </figcaption>
        </figure>
      ))}

     
    </>
  )
}

export default Types
