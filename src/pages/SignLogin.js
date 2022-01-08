import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import HospitalsContext from "../utils/HospitalsContext"
import "./SignLogin.css"
function SignLogin() {
  const { signCompanion, loginCompanion } = useContext(HospitalsContext)
  return (
    <Row>
      <Col  sm={6}>
        <div class="containerr">
          <div class="screenn">
            <div class="screen__content">
              <form className="login" onSubmit={signCompanion}>
                <h3 className="h3">Sign Up</h3>
                <div className="login__fielld">
                  <i className="login__icon "></i>
                  <input type="firstName" className="login__input" name="firstName" placeholder="First Name" />
                </div>
                <div className="login__field">
                  <i className="login__icon "></i>
                  <input type="lastName" className="login__input" name="lastName" placeholder="Last Name" />
                </div>

                <div className="login__fielld">
                  <i className="login__icon "></i>
                  <input type="url" className="login__input" name="avatar" placeholder="Avatar" />
                </div>
                <div className="login__fielld">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" className="login__input" name="fileNumber" placeholder="File Number Patient" />
                </div>
                <div className="login__fielld">
                  <i className="login__icon fas fa-envelope"></i>
                  <input type="email" className="login__input" name="email" placeholder="Email" />
                </div>
                <div className="login__fielld">
                  <i class="login__icon fas fa-lock"></i>
                  <input type="password" className="login__input" name="password" placeholder="Password" />
                </div>
                <button type="submit" value="login" className="button login__submit">
                  <span className="button__text"> Sign Up Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </Col>

      <Col  sm={6} >
        <div className="containerr">
          <div className="screenn">
            <div className="screen__content">
              <form className="login" onSubmit={loginCompanion}>
                <h3 className="h3"> Login</h3>
                <div className="login__fielld">
                  <i className="login__icon fas fa-envelope"></i>
                  <input type="email" className="login__input" name="email" placeholder="Email" />
                </div>
                <div className="login__fielld">
                  <i className="login__icon fas fa-lock"></i>
                  <input type="password" className="login__input" name="password" placeholder="Password" />
                </div>
                <button type="submit" value="login" className="button login__submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default SignLogin
