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
          <img src={type.image} alt="menu" />
          <figcaption>
            <h3> {type.name} </h3>
            <Link to="/menu"></Link>
          </figcaption>
        </figure>
      ))}
    </>
  )
}

export default Types
