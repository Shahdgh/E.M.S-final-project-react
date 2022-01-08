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

import ProfileEmployee from "./pages/ProfileEmplyee"
import ProfilePatient from "./pages/ProfilePatient"
import ProfileDietitian from "./pages/ProfileDietitian"
import ProfileCompanion from "./pages/ProfileCompanion"
import AllDrinks from "./pages/MenuType"
import { MdSend } from "react-icons/md"
import Cart from "./pages/Cart"
import SidebarCart from "./components/SidebarCart"
import Footer from "./components/Footer"

// imoprt navigate

function App() {
  const [types, setTyps] = useState([])

  const [ingredients, setIngredients] = useState([])

  const [meals, setMeals] = useState([])
  const [mealPatients, setMealPatients] = useState([])

  
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

  // const getMeals = async () => {
  //   const response = await axios.get(`http://localhost:5000/api/meals`)
  //   setMeals(response.data)
  //   console.log(response.data)
  // }
  //////////////////////////////////////////////////////////////////////
  const getMealPatients = async () => {
    const response = await axios.get("http://localhost:5000/api/meals/patient", {
      headers: {
        Authorization: localStorage.tokenDietitian,
      },
    })
    setMealPatients(response.data)
    console.log(response.data)
  }
  //////////////////////////////////////
  useEffect(() => {
    getIngredients()
    getTypes()
    // getMeals()

    // mealPatient()
    if (localStorage.tokenEmployee) {
      getProfileEmployees()
    }
    if (localStorage.tokenCompanion) {
    getProfileCompanions()
    }
    if (localStorage.tokenPatient) {
      getProfilePatients()
    }
    if (localStorage.tokenDietitian) {
      getProfileDiettitians()
      getMealPatients()
    }
    // getMealPatients()
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
      localStorage.tokenEmployee = response.data
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
      getProfileCompanions()
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
      localStorage.tokenCompanion = response.data
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
  /////////////
  // Add Meals patient ////
  const addMealPatient = async mealIngredients => {
    try {
      const mealBody = {
        ingredients: mealIngredients.map(mealIngredient => mealIngredient._id),
      }
      await axios.post(`http://localhost:5000/api/meals/patient`, mealBody, {
        headers: {
          Authorization: localStorage.tokenPatient,
        },
      })

      toast.success("The Request has been sent , waiting for the Dietitian To accept")
      navigate("/menu")
      getProfilePatients()
    } catch (error) {
      console.log(error.response.data)
    }
  }
 // Add Meals Employee ////
 const addMealEmployee = async mealIngredients => {
  try {
    const mealBody = {
      ingredients: mealIngredients.map(mealIngredient => mealIngredient._id),
    }
    await axios.post(`http://localhost:5000/api/meals/employee`, mealBody, {
      headers: {
        Authorization: localStorage.tokenEmployee,
      },
    })

    toast.success("Your request has been accepted and it will be delivered to within an hour")
    navigate("/menu")
    getProfileEmployees()
  } catch (error) {
    console.log(error.response.data)
  }
}
 // Add Meals Companion////
 const addMealCompanion = async mealIngredients => {
  try {
    const mealBody = {
      ingredients: mealIngredients.map(mealIngredient => mealIngredient._id),
    }
    await axios.post(`http://localhost:5000/api/meals/companion`, mealBody, {
      headers: {
        Authorization: localStorage.tokenCompanion,
      },
    })

    toast.success("Your request has been accepted and it will be delivered to within an hour")
    navigate("/menu")
    getProfileCompanions()
  } catch (error) {
    console.log(error.response.data)
  }
}
  // Edit Meals patient ////
  const editMealPatient = async (e, mealPatientId) => {
    e.preventDefault()
    try {
      const form = e.target
      const mealBody = {
        comment: form.elements.comment.value,
        status: form.elements.status.value,
      }
      await axios.put(`http://localhost:5000/api/meals/patient/${mealPatientId}`, mealBody, {
        headers: {
          Authorization: localStorage.tokenDietitian,
        },
      })

      console.log("lkjhgfd")
      toast.success("meals Edit")
      navigate("/")
      getMealPatients()
    } catch (error) {
      console.log(error.response.data)
    }
  }

  ///////////////
  
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

    mealPatients,

    addMealPatient,
    editMealPatient,
    addMealEmployee,
    addMealCompanion,
  }

  return (
    <>
      <HospitalsContext.Provider value={store}>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/meals" element={localStorage.tokenDietitian || localStorage.tokenPatient ? <Meals /> : null} />
          {/* <Route path="/all-drinks" element={<AllDrinks />} /> */}

          <Route path="/all-login" element={<AllLogin />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/companion-login" element={<SignLogin />} />
          <Route path="/dietitian-login" element={<DietitianLogin />} />
          <Route path="/patient-login" element={<PatientLogin />} />

          <Route
            path="/profile"
            element={
              localStorage.tokenPatient ? (
                <ProfilePatient />
              ) : localStorage.tokenDietitian ? (
                <ProfileDietitian />
              ) : localStorage.tokenCompanion ? (
                <ProfileCompanion />
              ) : localStorage.tokenEmployee ? (
                <ProfileEmployee />
              ) : null
            }
          />

          {/* <Route path="/cart" element={ localStorage.tokenPatient ?<SidebarCart />:null} /> */}
        </Routes>
    
      </HospitalsContext.Provider>
    </>
  )
}

export default App
