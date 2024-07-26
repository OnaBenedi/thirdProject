import Footer from "../footer/Footer"
import PaymentBody from "./payment-body/PaymentBody"
import Header from "../header/Header"

function Payment() {
  return (
    
      <div style={{display:"flex", flexDirection:"column", height:"100vh", justifyContent:"space-between"}}>
        <Header/>
        <main>
        <PaymentBody/>
        </main>
        <Footer/>
      </div>
    
  )
}

export default Payment