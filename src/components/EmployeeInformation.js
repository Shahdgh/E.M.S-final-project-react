import { Col, Row, Image } from "react-bootstrap"
import HospitalsContext from "../utils/HospitalsContext"
import { useContext, useState } from "react"
// import styles from "./EmployeeInformation.module.css"
import React from "react"
import { CDBCard, CDBBtn, CDBCardBody, CDBContainer } from "cdbreact"
import { BsFillPhoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import EmployeeEditModal from "./EmployeeEditModal"
import { IoIdCardSharp } from "react-icons/io5"
import { AiFillEdit } from "react-icons/ai"
import { FaHospitalUser } from "react-icons/fa"

function EmployeeInformation() {
  // const { profileEmployee } = props
  const [editShow, setEditShow] = useState(false)
  const { profileEmployees } = useContext(HospitalsContext)
  return (
    <>
      <CDBContainer>
        <CDBCard style={{ width: "35rem",marginTop:"30px" }}>
          <Image
            className="img-fluid"
            src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
          <Image
            style={{ marginTop: "-5rem", textAlign: "center", alignItems: "center", marginLeft: "35%" }}
            className=" border "
            width="150px"
            src={profileEmployees.avatar}
          />
          <CDBCardBody className="d-flex flex-column align-items-center mb-4">
            <h2 style={{ fontSize: "20px", fontWeight: "800" }}>
              {profileEmployees.firstName} {profileEmployees.lastName}
            </h2>
            <p style={{ fontSize: "20px", fontWeight: "800" }}>
              <IoIdCardSharp /> Emplyee ID: {profileEmployees.employeeId}
            </p>
            <p style={{ fontSize: "20px", fontWeight: "800" }}>
              <MdEmail /> Emial : {profileEmployees.email}
            </p>
            <p style={{ fontSize: "20px", fontWeight: "800" }}>
              <BsFillPhoneFill /> Phone Number: {profileEmployees.phone}
            </p>
            <p style={{ fontSize: "20px", fontWeight: "800" }}>
              <FaHospitalUser />
              Job: {profileEmployees.job}
            </p>
            <div>
              <CDBBtn
                style={{ color: "white", backgroundColor: "#1a571a", padding: "5px 35px" }}
                size="small"
                onClick={() => setEditShow(true)}
                color="dark"
              >
                {" "}
                Edit <AiFillEdit />
              </CDBBtn>
              <EmployeeEditModal show={editShow} setShow={setEditShow} />
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>

      {/* <div className={styles.background}>
        
        <Row xs={1} md={3} style={{}}>
          <Col>
            <Image src={profileEmployee.avatar} height="250px" className={styles.imageprofile} />
          </Col>
          <Col>
            <div className={styles.information}>
              <h2>
                {profileEmployee.firstName} {profileEmployee.lastName}
              </h2>
              <p>{profileEmployee.email}</p>
            </div>
          </Col>
        </Row>
     
    </div> */}
    </>
  )
}

export default EmployeeInformation
