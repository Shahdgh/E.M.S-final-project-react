import { useContext } from "react"
import DietitianInformation from "../components/DietitianInformation"

import HospitalsContext from "../utils/HospitalsContext"

function ProfileDietitian() {
  const { profileDietitians } = useContext(HospitalsContext)
  console.log(profileDietitians)

  return (
    <>
      <DietitianInformation key={profileDietitians._id} />
    </>
  )
}

export default ProfileDietitian
