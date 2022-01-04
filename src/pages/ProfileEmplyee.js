import { useContext } from "react"
import EmployeeInformation from "../components/EmployeeInformation"
import HospitalsContext from "../utils/HospitalsContext"

function ProfileEmployee() {
  const { profileEmployees } = useContext(HospitalsContext)
  console.log(profileEmployees)
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
