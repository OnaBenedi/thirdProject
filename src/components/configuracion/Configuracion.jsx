import Footer from "../footer/Footer"
import Header from "../header/Header"
import ConfigurationBody from "./configuration-body/ConfigurationBody"


function Configuracion() {
  return(
    <div style={{display:"flex", flexDirection:"column", height:"100vh", justifyContent:"space-between"}}>
    <Header/>
    <ConfigurationBody/>
    <Footer/>
    </ div>
  )
}

export default Configuracion