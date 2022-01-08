
import { useContext, useState } from "react"
import { Col, Card,Row, Button } from "react-bootstrap"
import patient from "../assets/patient.jpg"
import companion from "../assets/compianion.jpg"
import dietitian from "../assets/Dietitian.jpg"
import styles from "./AllLogin.module.css"
//icon
import { MdFamilyRestroom} from "react-icons/md"
import { FaProcedures,FaUserMd ,FaHospitalUser} from "react-icons/fa"

import { FcMultipleDevices, } from "react-icons/fc";
import { Link } from "react-router-dom"

function AllLogin() {
  return (
    <>
    <Row md={2} xs={1}>
      <Col >
        <Card className={styles.colcard}>
          <Card.Body className={styles.colcardd}>
            <Card.Img className={styles.cardimg} src="https://labblog.uofmhealth.org/sites/lab/files/2018-06/michigan-med-l-doc-wardrobe.jpg" />
            <Card.Title className={styles.cardtitlee}>
            <Link to="/employee-login" style={{textDecoration: "none",color:"#32502E",}}> <FaHospitalUser color="dark" className={styles.icon} /> Employee</Link>
            </Card.Title> 
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card className={styles.colcard}>
          <Card.Body className={styles.colcardd}>
            <Card.Img className={styles.cardimg} src={patient} />
            <Card.Title className={styles.cardtitlee}>
            <Link to="/patient-login"  style={{textDecoration: "none",color:"#32502E",}}> <FaProcedures color="dark" className={styles.icon} /> Patients</Link>
            </Card.Title>
       
          
          </Card.Body>
        </Card>
      </Col>
    
      <Col>
        <Card className={styles.colcard}>
          <Card.Body className={styles.colcardd}>
            <Card.Img className={styles.cardimg}src={dietitian} />
            <Card.Title className={styles.cardtitlee}> 
            <Link to="/dietitian-login"  style={{textDecoration: "none",color:"#32502E",}}>  <FaUserMd color="dark" className={styles.icon} /> Dietitians</Link>
            </Card.Title>
        
          
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className={styles.colcard}>
          <Card.Body className={styles.colcardd}>
            <Card.Img className={styles.cardimg}src={companion} />
            <Card.Title className={styles.cardtitlee}>
            <Link to="/companion-login"  style={{textDecoration: "none",color:"#32502E",}}> <MdFamilyRestroom color="dark" className={styles.icon} /> Patient Compianion</Link>
            </Card.Title>
          
          
          </Card.Body>
        </Card>
      </Col>
      </Row>
    </>
  )
}

export default AllLogin
