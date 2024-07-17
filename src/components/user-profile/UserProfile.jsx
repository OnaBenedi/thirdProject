import Header from "../header/Header"
import UserProfileBody from "./user-profile-body/UserProfileBody"

function UserProfile() {
  return (
    <div style={{display:"flex", flexDirection:"column", height:"100vh", justifyContent:"space-between"}}>
      <Header/>
      <UserProfileBody/>
    </div>
  )
}

export default UserProfile