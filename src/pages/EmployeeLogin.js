import React from "react"
import {useContext} from"react"
import styles from "./EmployeeLogin.module.css"
//navbar
import Navbar from "../components/Navbar"
//icon
import { MdEmail, MdPassword } from "react-icons/md"
import { FaMobile} from "react-icons/fa"
import { FcSms} from "react-icons/fc"
import HospitalsContext from "../utils/HospitalsContext"


function EmployeeLogin() {
    const { employeLogin } = useContext(HospitalsContext)
  return (
    <>
  
<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={employeLogin}>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="employeeId" class="login__input" name="employeeId" placeholder="Employee Id"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input"name="password" placeholder="Password"/>
				</div>
				<button  type="submit" value="login" class="button login__submit">
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			{/* <div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
			
				</div>
			</div> */}
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
        
    </>
  )
}

export default EmployeeLogin
