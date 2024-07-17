import Header from "../header/Header"
import TripsBody from "./trips-body/TripsBody"
import Footer from "../footer/Footer"

function Trips() {
  return (
    <div style={{display:"flex", flexDirection:"column", height:"100vh", justifyContent:"space-between"}}>
    <Header/>
    <TripsBody/>
    <Footer />
    </div>
  )
}

export default Trips