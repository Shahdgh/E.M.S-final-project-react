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
import CompanionEditModal from "./CompanionEditModal"
import companion from "../assets/compianion.jpg"

function CompanionInformation() {
    const [editShow, setEditShow] = useState(false)
    const { profileCompanions } = useContext(HospitalsContext)
    return (
         <CDBContainer>
        <CDBCard style={{ width: "35rem" }}>
          <Image className="img-fluid" src={companion}/>
          <Image style={{ marginTop: "-5rem", textAlign:"center",alignItems:"center",marginLeft:"35%" }} className=" border " width="150px" src={profileCompanions.avatar} />
          <CDBCardBody className="d-flex flex-column align-items-center mb-4">
            <h2 style={{fontSize:"20px",fontWeight:"800"}}>
              {profileCompanions.firstName} {profileCompanions.lastName}
            </h2>
            <p style={{fontSize:"20px",fontWeight:"800"}} ><IoIdCardSharp />  Patient File Number:   {profileCompanions.fileNumber}</p>
            <p style={{fontSize:"20px",fontWeight:"800"}}>< MdEmail/> Emial :  {profileCompanions.email}</p>


            <div>
              <CDBBtn style={{color:"white", backgroundColor:"#1a571a",padding:"5px 35px"}} size="small" onClick={() => setEditShow(true)} color="dark">
                {" "}
                Edit <AiFillEdit/>
              </CDBBtn>
              <CompanionEditModal   show={editShow} setShow={setEditShow}  />
             
            </div>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
 );
}

export default CompanionInformation;