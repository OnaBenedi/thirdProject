import Header from "../header/Header"
import UserProfileBody from "./user-profile-body/UserProfileBody"
import Footer from "../footer/Footer"

function UserProfile() {
  return (
    <div style={{display:"flex", flexDirection:"column", height:"100vh", justifyContent:"space-between"}}>
      <Header/>
      <UserProfileBody/>
      <Footer/>      
    </div>
  )
}

export default UserProfile