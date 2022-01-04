import HospitalsContext from "../utils/HospitalsContext";
import "./PatientLogin.css"
import React from "react"
import {useContext} from"react"

function PatientLogin() {
  const { patientLogin } = useContext(HospitalsContext)
    return (
 


<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={patientLogin}>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="fileNumber" class="login__input" name="fileNumber" placeholder="File Number"/>
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
     );
}

export default PatientLogin;