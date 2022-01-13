import { useContext, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { MdStackedLineChart, MdDelete, MdEditNote } from "react-icons/md"

import HospitalsContext from "../utils/HospitalsContext"
import CardMenuOne from "./CardMenuOne"

function MenuCard(props) {
  const { setmealIngredients, mealIngredients } = props
  const { types, ingredients } = useContext(HospitalsContext)

  return (
    <>
      {types.map(type => {
        const ingredientsType = ingredients.filter(ing => ing.types.find(t => t._id == type._id))
        if (ingredientsType.length == 0) return null
        return (
          <>
            <h4 style={{ fontSize: "25px", fontWeight: "800", paddingTop: "7px" }}>{type.name}</h4>

            {ingredientsType.map(ingredient => (
              <CardMenuOne 
                ingredient={ingredient}
                mealIngredients={mealIngredients}
                setmealIngredients={setmealIngredients}
              />
            ))}
          </>
        )
      })}
    </>
  )
}

export default MenuCard
