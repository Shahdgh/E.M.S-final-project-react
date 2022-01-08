import React, { useContext } from "react"

// import HospitalsContext from "../utils/HospitalsContext"
import { Button, Table } from "react-bootstrap"

function SidebarCart(props) {
  const { mealIngredient, ingredient } = props
//   const { addMealPatient, ingredients } = useContext(HospitalsContext)

  return (
    <>


<Table striped bordered hover>
  <thead>
    <tr  style={{ backgroundColor:"#32502E",color:"white"}}>
      <th>Name</th>
      <th>Calories</th>
      <th>Image</th>
  
    </tr>
  </thead>
  <tbody>

 
   <tr style={{ fontSize: "13px", fontWeight: "600", textAlign: "center", paddingTop: "200px" }}>
        <td style={{ paddingTop: "50px" }}>{mealIngredient.name}</td>

        <td style={{ paddingTop: "50px" }}>{mealIngredient.calories}</td>
        <td>
          <img src={mealIngredient.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
        </td>
    </tr>
  </tbody>
</Table>

      {/* <tr style={{ fontSize: "13px", fontWeight: "600", textAlign: "center", paddingTop: "200px" }}>
        <td style={{ paddingTop: "50px" }}>{mealIngredient.name}</td>

        <td style={{ paddingTop: "50px" }}>{mealIngredient.calories}</td>
        <td>
          <img src={mealIngredient.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
        </td>
      </tr> */}
    </>
  )
}

export default SidebarCart
