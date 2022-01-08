import logo from "../assets/log.png"
import { FaMapMarkedAlt, FaInstagramSquare, FaTwitter } from "react-icons/fa"
import { BsTelephoneFill } from "react-icons/bs"
import { IoTimeSharp } from "react-icons/io5"

function Footer() {
  return (
    <>
      <footer
      
        style={{
          background: "#32502E",
          color: "white",
          // height:"30vh",

          bottom: 0,
          width: "100%",

          margin: 0,
          padding: 0,
          // borderSize: "border-box"
        }}
      >
    
        <div>
          <div className="row">
            <div className="col-md-4 col 12" style={{ marginTop: 10 ,paddingTop:"10px"}}>
              <img
                src={logo}
                alt=""
                style={{
                  width: 100,
                  height: 100,
              
                  borderStyle: "solid",
                  borderColor: "black",
                  border: 1,
                  borderRadius: 7,
                }}
              />

              <span style={{ fontSize:"25px"}}>E.M.S</span>
            </div>
            <div className="col-md-4 col-12" style={{ marginTop: 10 ,paddingTop:"10px"}}>
              <h4 style={{ color: "lightgrey" }}> Coustomer Service </h4>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <BsTelephoneFill /> : 9200003425{" "}
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-12" style={{ marginTop: 10,paddingTop:"10px" }}>
              <h4 style={{ color: "lightgrey", textAlign: "justify", marginLeft: "90px" }}>
                <IoTimeSharp /> : Oppening Hours{" "}
              </h4>
              <p style={{color:"white",fontSize:"20px"}}>Sunday - Saturday : 7 am -10 pm</p>
            </div>

            <div className=" col-12" style={{ fontSize: 18, color: "lightgrey", marginLeft:"10px" }}>
              &copy; {new Date().getFullYear()} | All Rights Reserved
              <i style={{ padding: 10, color: "white", float: "right",marginRight:"40px", fontSize: "25px", cursor: "pointer" }}>
                {" "}
                <FaMapMarkedAlt />{" "}
              </i>
              <i style={{ padding: 10, color: "white", float: "right", fontSize: "25px", cursor: "pointer" }}>
                {" "}
                <FaInstagramSquare />{" "}
              </i>
              <i style={{ padding: 10, color: "white", float: "right", fontSize: "25px", cursor: "pointer" }}>
                {" "}
                <FaTwitter />{" "}
              </i>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
