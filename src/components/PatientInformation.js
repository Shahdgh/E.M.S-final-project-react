import { Col, Row, Image } from "react-bootstrap"
import HospitalsContext from "../utils/HospitalsContext"
import { useContext,useState } from "react"
// import styles from "./EmployeeInformation.module.css"
import React from "react"
import {
  CDBCard,
  CDBBtn,
  CDBCardBody,
  CDBContainer,
} from "cdbreact"

import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { RiFileList2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { GiWeight,GiBodyHeight } from "react-icons/gi";

import PatientEditModal from "./PatientEditModal"
function PatientInformation() {
  // const { profileEmployee } = props
  const [editShow, setEditShow] = useState(false)
  const { profilePatients } = useContext(HospitalsContext)
  return (
    <>
      <CDBContainer>
        <CDBCard style={{ width: "35rem" }}>
          <Image className="img-fluid" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Image style={{ marginTop: "-5rem", textAlign:"center",alignItems:"center",marginLeft:"35%" }} className=" border " width="150px" src={profilePatients.avatar} />
          <CDBCardBody className="d-flex flex-column align-items-center mb-4">
            <h2  style={{fontSize:"25px",fontWeight:"800"}} >
              {profilePatients.firstName} {profilePatients.lastName}
            </h2>
            <p style={{fontSize:"20px",fontWeight:"800"}} >< MdEmail/>   Email : {profilePatients.email}</p>
            <p  style={{fontSize:"20px",fontWeight:"800"}} > <FaAddressCard /> File Number :   {profilePatients.fileNumber}</p>

            <p style={{fontSize:"20px",fontWeight:"800"}} ><BsFillPhoneFill /> Phone  {profilePatients.phone}</p>
            <p style={{fontSize:"20px",fontWeight:"800"}} ><GiBodyHeight /> Height :  {profilePatients.height}</p>
            <p style={{fontSize:"20px",fontWeight:"800"}} ><GiWeight  /> Weight : {profilePatients.weight}</p>
            <p style={{fontSize:"20px",fontWeight:"800"}} >  Age :  {profilePatients.age}</p>
            <p style={{fontSize:"20px",fontWeight:"800"}} ><RiFileList2Fill  /> Disease:  {profilePatients.disease}</p>

            
            
            <div>
              <CDBBtn style={{color:"white", backgroundColor:"#1a571a",padding:"5px 35px",fontSize:"20px",fontWeight:"800",border:"none"}} size="small" onClick={() => setEditShow(true)} color="dark">
                {" "}
                Edit <AiFillEdit/>
              </CDBBtn>
              <PatientEditModal show={editShow} setShow={setEditShow}  />
             
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
 
    </>
  )
}

export default PatientInformation