import Navbar from "./components/Navbar"
import { Route, Routes, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import "./App.css"
import SectionOne from "./components/SectionOne"
import SignLogin from "./pages/SignLogin"
import PatientLogin from "./pages/PatientLogin"
import EmployeeLogin from "./pages/EmployeeLogin"

import Home from "./pages/Home"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import HospitalsContext from "./utils/HospitalsContext"
import Menu from "./pages/Menu"
import AllLogin from "./pages/AllLogin"
import DietitianLogin from "./pages/DietitianLogin"
import Meals from "./pages/Meals"
import ProfileEmplyee from "./pages/ProfileEmplyee"
import ProfileEmployee from "./pages/ProfileEmplyee"
import ProfilePatient from "./pages/ProfilePatient"
import ProfileDietitian from "./pages/ProfileDietitian"
import ProfileCompanion from "./pages/ProfileCompanion"

// imoprt navigate

function App() {
  const [types, setTyps] = useState([])

  const [ingredients, setIngredients] = useState([])

  const [meals, setMeals] = useState([])
  const [profileEmployees, setProfileEmplyees] = useState({})
  const [profilePatients, setProfilePatients] = useState({})
  const [profileDietitians, setProfileDietitians] = useState({})
  const [profileCompanions, setProfileCompanions] = useState({})

  const navigate = useNavigate()

  ///Get Ingredients
  const getIngredients = async () => {
    const response = await axios.get("http://localhost:5000/api/admin/ingredients")

    setIngredients(response.data)
  }

  /////Types
  const getTypes = async () => {
    const response = await axios.get("http://localhost:5000/api/types")

    setTyps(response.data)
  }

  const getMeals = async () => {
    const response = await axios.get("http://localhost:5000/api/meals")
    setMeals(response.data)
  }

  useEffect(() => {
    getIngredients()
    getTypes()
    getMeals()
    if (localStorage.tokenEmployee) {
      getProfileEmployees()
    }
      getProfileCompanions()
    // }
    if (localStorage.tokenPatient) {
      getProfilePatients()
    }
    if (localStorage.tokenDietitian) {
      getProfileDiettitians()
    }
  }, [])

  //////Employee Login
  const employeLogin = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const employeeBody = {
        employeeId: form.elements.employeeId.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`http://localhost:5000/api/employees/login`, employeeBody, {
        headers: {
          Authorization: localStorage.tokenEmployee,
        },
      })
      localStorage.tokenFood = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ///profile Employee

  const getProfileEmployees = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/employees/profile`, {
        headers: {
          Authorization: localStorage.tokenEmployee,
        },
      })
      setProfileEmplyees(response.data)
      // console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const editEmployee = async (e, employeeId) => {
    e.preventDefault()
    try {
      const form = e.target
      const employeeBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        phone: form.elements.phone.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.put(`http://localhost:5000/api/employees/profile/${employeeId}`, employeeBody, {
        headers: {
          Authorization: localStorage.tokenEmployee,
        },
      })
      getProfileEmployees()
      toast.success("Edit profile success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /////Patient Login
  const patientLogin = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const patientBody = {
        fileNumber: form.elements.fileNumber.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`http://localhost:5000/api/patients/login`, patientBody, {
        headers: {
          Authorization: localStorage.tokenPatient,
        },
      })
      localStorage.tokenPatient = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  ///profile Patient
  const getProfilePatients = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/patients/profile`, {
        headers: {
          Authorization: localStorage.tokenPatient,
        },
      })
      setProfilePatients(response.data)
      // console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  ///Edit Patient
  const editPatient = async (e, patientId) => {
    e.preventDefault()
    try {
      const form = e.target
      const patientBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        avatar: form.elements.avatar.value,
        phone: form.elements.phone.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.put(`http://localhost:5000/api/patients/profile/${patientId}`, patientBody, {
        headers: {
          Authorization: localStorage.tokenPatient,
        },
      })
      getProfilePatients()
      toast.success("Edit profile success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  ////Dietitian LogiN
  const dietitianLogin = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const dietitianBody = {
        employeeId: form.elements.employeeId.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`http://localhost:5000/api/dietitians/login`, dietitianBody, {
        headers: {
          Authorization: localStorage.tokenDietitian,
        },
      })
      localStorage.tokenDietitian = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ////////get profile Dietitian
  const getProfileDiettitians = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/dietitians/profile`, {
        headers: {
          Authorization: localStorage.tokenDietitian,
        },
      })
      setProfileDietitians(response.data)
      // console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  ////Edit profile Dietitian

  const editDietitian = async (e, dietitianId) => {
    e.preventDefault()
    try {
      const form = e.target
      const dietitianBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        avatar: form.elements.avatar.value,
        phone: form.elements.phone.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      await axios.put(`http://localhost:5000/api/dietitians/profile/${dietitianId}`, dietitianBody, {
        headers: {
          Authorization: localStorage.tokenDietitian,
        },
      })
      getProfileDiettitians()
      console.log("kgjnbozpd")
      toast.success("Edit Profile success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ///Sign Up Companion
  const signCompanion = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const companionBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
        avatar: form.elements.avatar.value,
        fileNumber: form.elements.fileNumber.value,
      }
      await axios.post("http://localhost:5000/api/companions/signup", companionBody)
      toast.success("sign up success")
      navigate("/companion-login")
      getProfileDiettitians()
    } catch (error) {
      console.log(error.response.data)
    }
  }
  /////Login Companion
  const loginCompanion = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const companionBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post(`http://localhost:5000/api/companions/login`, companionBody, {
        headers: {
          Authorization: localStorage.tokenCompanion,
        },
      })
      localStorage.tokenFood = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  ///Profile get Companion
  const getProfileCompanions = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/companions/profile`, {
        headers: {
          Authorization: localStorage.tokenCompanion,
        },
      })
      setProfileCompanions(response.data)
      // console.log(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const editCompanion = async (e, companionId) => {
    e.preventDefault()
    try {
      const form = e.target
      const companionBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        avatar: form.elements.avatar.value,
        // phone: form.elements.phone.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        fileNumber: form.elements.fileNumber.value,
      }
      await axios.put(`http://localhost:5000/api/companions/profile/${companionId}`, companionBody, {
        headers: {
          Authorization: localStorage.tokenCompanion,
        },
      })
      getProfileCompanions()

      toast.success("Edit Profile success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  /////////logout///////////
  const logout = () => {
    localStorage.removeItem("tokenPatient")
    localStorage.removeItem("tokenDietitian")
    localStorage.removeItem("tokenEmployee")
    localStorage.removeItem("tokenCompanion")
 
    navigate("/")
  }

  ////////stor
  const store = {
    employeLogin,
    dietitianLogin,
    patientLogin,
    signCompanion, ///ماشتغل
    loginCompanion,
    logout,
  
    ////
    ingredients,
    types,
    meals,
    ////
    profileEmployees,
    editEmployee,
    ////
    profilePatients,
    editPatient,
    ///
    profileDietitians,
    editDietitian,
    /////
    profileCompanions,
    editCompanion,
    ///
  }

  return (
    <>
      <HospitalsContext.Provider value={store}>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/meals" element={<Meals />} />

          <Route path="/all-login" element={<AllLogin />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/companion-login" element={<SignLogin />} />
          <Route path="/dietitian-login" element={<DietitianLogin />} />
          <Route path="/patient-login" element={<PatientLogin />} />

          {/* <Route path="/profile" element={<ProfileEmployee />} /> */}
          <Route
            path="/profile"
            element={
              localStorage.tokenPatient ? <ProfilePatient /> 
              : localStorage.tokenDietitian ? <ProfileDietitian /> 
              : localStorage.tokenCompanion ?<ProfileCompanion/> 
              : localStorage.tokenEmployee ?<ProfileEmployee/>  :null
            }
          />
   
        </Routes>
      </HospitalsContext.Provider>
    </>
  )
}

export default App
