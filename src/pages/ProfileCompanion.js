import { useContext } from "react"
import CompanionInformation from "../components/CompanionInformation"
import DietitianInformation from "../components/DietitianInformation"

import HospitalsContext from "../utils/HospitalsContext"

function ProfileCompanion() {
  const { profileCompanions } = useContext(HospitalsContext)
  if (!profileCompanions) return <h1>Loading...</h1>

  return (
    <>
     
      <CompanionInformation key={profileCompanions._id} />
  
    </>
  )
}

export default ProfileCompanion