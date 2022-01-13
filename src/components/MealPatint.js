
import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
function MealPatient(props) {
  const { meal } = props

  return (
    <>
  

		
      <Col md={4}>
        <Card style={{ gap: "3", marginBottom: "10px",}}>
          <h5 style={{ fontSize: "20px", fontWeight: "800", textAlign: "center" }} className="card-title">
            Satus:{meal.status} 
          </h5>
          <h5 style={{ fontSize: "20px", fontWeight: "800" }}>
            Comment:{" "}
            {meal.comment ? (
              <h4 style={{ fontSize: "20px", fontWeight: "800", disply: "flex", justifyCcontent: "center" }}>
                {meal.comment}
              </h4>
            ) : (
              <h4>---</h4>
            )}
          </h5>

          {meal.ingredients.map(ingredient => (
            <Row>
              <h5 style={{ fontWeight: "700", textAlign: "center" }}>Name: {ingredient.name}</h5>
              <img
                src={ingredient.image}
                style={{
                  objectFit: "cover",
                  height: "150px",
                  width: "100%",
                  alignItems: "center",
                  textAlign: "center",
                }}
              />
            </Row>
          ))}
        </Card>
      </Col>
    </>
  )
}

export default MealPatient
