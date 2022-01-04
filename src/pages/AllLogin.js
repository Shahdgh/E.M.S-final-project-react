
import { useContext, useState } from "react"
import { Col, Card,Row, Button } from "react-bootstrap"
import image from "../assets/g.jpg"
import styles from "./AllLogin.module.css"
//icon
import { GrUserManager} from "react-icons/gr"
import { FaProcedures,FaUserMd ,FaHospitalUser} from "react-icons/fa"

import { FcMultipleDevices, } from "react-icons/fc";
import { Link } from "react-router-dom"

function AllLogin() {
  return (
    <>
    <Row>
      <Col >
        <Card className={styles.colcard}>
          <Card.Body className={styles.colcardd}>
            <Card.Img className={styles.cardimg} src="https://media.istockphoto.com/photos/supporting-patient-health-with-multiple-disciplines-picture-id1163467716?s=2048x2048" />
            <Card.Title className={styles.cardtitlee}>
            <Link to="/employee-login"> <FaHospitalUser color="dark" className={styles.icon} /> Employee</Link>
            </Card.Title> 
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className={styles.colcard}>
          <Card.Body className={styles.colcardd}>
            <Card.Img className={styles.cardimg} src={image} />
            <Card.Title className={styles.cardtitlee}>
            <Link to="/patient-login"> <FaProcedures color="dark" className={styles.icon} /> Patients</Link>
            </Card.Title>
       
          
          </Card.Body>
        </Card>
      </Col>
    
      <Col>
        <Card className={styles.colcard}>
          <Card.Body className={styles.colcardd}>
            <Card.Img className={styles.cardimg} src={image} />
            <Card.Title className={styles.cardtitlee}> 
            <Link to="/dietitian-login">  <FaUserMd color="dark" className={styles.icon} /> Dietitians</Link>
            </Card.Title>
        
          
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className={styles.colcard}>
          <Card.Body className={styles.colcardd}>
            <Card.Img className={styles.cardimg} src={image} />
            <Card.Title className={styles.cardtitlee}>
            <Link to="/companion-login"> <GrUserManager color="dark" className={styles.icon} /> Patient Compianion</Link>
            </Card.Title>
          
          
          </Card.Body>
        </Card>
      </Col>
      </Row>
    </>
  )
}

export default AllLogin
