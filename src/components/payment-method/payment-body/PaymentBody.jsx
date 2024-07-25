import "./PaymentBody.css"
import { useState } from "react";

function PaymentBody() {

    const [formData, setFormData] = useState({
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    
    
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    }
    
     
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted:', formData);
    }
    
    return (
        <div className="payment-method">
          <h2>Payment Method</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cardName">Name on Card</label>
              <input 
                type="text" 
                id="cardName" 
                name="cardName" 
                placeholder="Name on card" 
                value={formData.cardName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input 
                type="text" 
                id="cardNumber" 
                name="cardNumber" 
                placeholder="Card number" 
                value={formData.cardNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiration Date</label>
              <input 
                type="text" 
                id="expiryDate" 
                name="expiryDate" 
                placeholder="MM/YY" 
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input 
                type="text" 
                id="cvv" 
                name="cvv" 
                placeholder="CVV" 
                value={formData.cvv}
                onChange={handleChange}
              />
            </div>
            <button type="submit" id="pay-button">Pay</button>
          </form>
        </div>
    )
}

export default PaymentBody