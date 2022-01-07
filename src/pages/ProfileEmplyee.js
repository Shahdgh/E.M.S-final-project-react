import { useContext } from "react"
import EmployeeInformation from "../components/EmployeeInformation"
import HospitalsContext from "../utils/HospitalsContext"

function ProfileEmployee() {
  const { profileEmployees } = useContext(HospitalsContext)
  if (!profileEmployees) return <h1>Loading...</h1>
  // console.log(profileEmployees)
  return (
    <>
      {/* {profileEmployees.map(profileEmployee => ( */}
      <EmployeeInformation key={profileEmployees._id} />
      {/* ))} */}
      {/* <EmployeeInformation/> */}
    </>
  )
}

export default ProfileEmployee
