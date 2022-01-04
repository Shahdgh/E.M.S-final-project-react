import { Col, Row, Image } from "react-bootstrap"
import HospitalsContext from "../utils/HospitalsContext"
import { useContext,useState } from "react"

import React from "react"
import {
  CDBCard,

  CDBBtn,
  CDBCardBody,
 
  CDBContainer,
} from "cdbreact"
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIdCardSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";

import DietitianEditModal from "./DietitianEditModal"

function DietitianInformation() {
 
  const [editShow, setEditShow] = useState(false)
  const { profileDietitians } = useContext(HospitalsContext)
  return (
    <>
      <CDBContainer>
        <CDBCard style={{ width: "35rem" }}>
          <Image className="img-fluid" src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <Image style={{ marginTop: "-5rem", textAlign:"center",alignItems:"center",marginLeft:"35%" }} className=" border " width="150px" src={profileDietitians.avatar} />
          <CDBCardBody className="d-flex flex-column align-items-center mb-4">
            <h2 style={{fontSize:"20px",fontWeight:"800"}}>
              {profileDietitians.firstName} {profileDietitians.lastName}
            </h2>
            <p style={{fontSize:"20px",fontWeight:"800"}} >< MdEmail/> Email:   {profileDietitians.email}</p>
            <p style={{fontSize:"20px",fontWeight:"800"}} ><IoIdCardSharp />  Emplyee ID:   {profileDietitians.employeeId}</p>

            <p style={{fontSize:"20px",fontWeight:"800"}} ><BsFillPhoneFill />  phone Number:   {profileDietitians.phone}</p>
           
            

            <div>
              <CDBBtn style={{color:"white", backgroundColor:"#1a571a",padding:"5px 35px"}} size="small" onClick={() => setEditShow(true)} color="dark">
                {" "}
                Edit <AiFillEdit/>
              </CDBBtn>
              <DietitianEditModal show={editShow} setShow={setEditShow}  />
             
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
 
    </>
  )
}

export default DietitianInformation