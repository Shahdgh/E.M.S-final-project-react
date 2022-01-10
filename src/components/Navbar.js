
import logo from "../assets/log.png"

import {  Nav, Navbar,} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext } from "react"
import HospitalsContext from "../utils/HospitalsContext"
import { GoSignOut, GoSignIn } from "react-icons/go"
import { ImProfile } from "react-icons/im"

function NavbarItem() {
  const { logout } = useContext(HospitalsContext)

  return (
    <>
      <Navbar
        style={{ height: "9vh", fontWeight: "600", fontSize: "35px", backgroundColor: "#32502E" }}
        collapseOnSelect
        expand="lg"
        bg="#1a571a"
        variant="dark"
      >
        <Navbar.Brand>
          <img
            src={logo}
            width="200px"
            height="50px"
            marginleft="10px"
            className="d-inline-block align-top"
            alt="EMS"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" style={{ fontSize: "15px", color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ fontSize: "15px", color: "white", textDecoration: "none" }} to="/menu">
                menu
              </Link>
            </Nav.Link>

            {localStorage.tokenDietitian ? (
              <Nav.Link>
                <Link style={{ fontSize: "15px", color: "white", textDecoration: "none" }} to="/meals">
                  Patient Meals
                </Link>
              </Nav.Link>
            ) : null}
          </Nav>

          {localStorage.tokenPatient ||
          localStorage.tokenDietitian ||
          localStorage.tokenCompanion ||
          localStorage.tokenEmployee ? (
            <Nav className="ms-auto">
           
              <Link style={{ fontSize: "15px", color: "white" }} className="nav-link" to="/profile">
                Profile <ImProfile style={{ fontSize: "15px" }} />
              </Link>
              <Link style={{ fontSize: "15px", color: "white" }} className="nav-link" to="/" onClick={logout}>
                Logout <GoSignOut style={{ fontSize: "15px" }} />
              </Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Link style={{ fontSize: "15px", color: "white" }} className="nav-link" to="/all-login">
                login <GoSignIn />
              </Link>
              {/* <Link style={{ fontSize: "15px", color: "white" }} className="nav-link" to="/cart">
                Cart
              </Link> */}
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarItem
