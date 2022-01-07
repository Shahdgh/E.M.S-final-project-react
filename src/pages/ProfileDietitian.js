import { useContext } from "react"
import DietitianInformation from "../components/DietitianInformation"

import HospitalsContext from "../utils/HospitalsContext"

function ProfileDietitian() {
  const { profileDietitians } = useContext(HospitalsContext)
  if (!profileDietitians) return <h1>Loading...</h1>
  // console.log(profileDietitians)

  return (
    <>
      <DietitianInformation key={profileDietitians._id} />
    </>
  )
}

export default ProfileDietitian
