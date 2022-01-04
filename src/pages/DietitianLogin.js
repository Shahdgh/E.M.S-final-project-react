import HospitalsContext from "../utils/HospitalsContext";
import "./PatientLogin.css"
import React from "react"
import {useContext} from"react"

function DietitianLogin() {
  const { dietitianLogin } = useContext(HospitalsContext)
    return (
 


<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={dietitianLogin}>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="employeeId" class="login__input" name="employeeId" placeholder=" Employee Id"/>
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

export default DietitianLogin;