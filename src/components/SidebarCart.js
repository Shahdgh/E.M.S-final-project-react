import React, { useContext } from "react"

// import HospitalsContext from "../utils/HospitalsContext"
// import { Button } from "react-bootstrap"

function SidebarCart(props) {
  const { mealIngredient, ingredient } = props
//   const { addMealPatient, ingredients } = useContext(HospitalsContext)

  return (
    <>
      <tr style={{ fontSize: "13px", fontWeight: "600", textAlign: "center", paddingTop: "200px" }}>
        <td style={{ paddingTop: "50px" }}>{mealIngredient.name}</td>

        <td style={{ paddingTop: "50px" }}>{mealIngredient.calories}</td>
        <td>
          <img src={mealIngredient.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
        </td>
      </tr>
    </>
  )
}

export default SidebarCart
