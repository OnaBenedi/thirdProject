import "./PaymentBody.css";
import { useState } from "react";
import paypal from "../../../assets/logos/paypal.png"

function PaymentBody() {
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [showPayPalForm, setShowPayPalForm] = useState(false);

  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paypalEmail: "",
    paypalPassword: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmitCreditCard(e) {
    e.preventDefault();
    console.log("Credit Card Form submitted:", formData);
  }

  function handleSubmitPayPal(e) {
    e.preventDefault();
    console.log("PayPal Form submitted:", formData);
  }

  return (
    <div className="payment-method">
      <h2>Payment Method</h2>

      
      <div className="form-group">
        <label htmlFor="creditCardToggle">
          <button
            type="button"
            id="creditCardToggle"
            onClick={() => setShowCreditCardForm(!showCreditCardForm)}
          >
            Credit Card {showCreditCardForm ? "▴" : "▾"}
          </button>
        </label>
      </div>

      
      {showCreditCardForm && (
        <form onSubmit={handleSubmitCreditCard}>
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
      )}

     
      <div className="form-group">
        <label htmlFor="paypalToggle">
          <button
            type="button"
            id="paypalToggle"
            onClick={() => setShowPayPalForm(!showPayPalForm)}
          >
            <img src={paypal} alt="" className="paypal-image"/> {showPayPalForm ? "▴" : "▾"}
          </button>
        </label>
      </div>

      
      {showPayPalForm && (
        <form onSubmit={handleSubmitPayPal}>
          <div className="form-group">
            <label htmlFor="paypalEmail">PayPal Email</label>
            <input
              type="email"
              id="paypalEmail"
              name="paypalEmail"
              placeholder="PayPal email"
              value={formData.paypalEmail}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paypalPassword">PayPal Password</label>
            <input
              type="password"
              id="paypalPassword"
              name="paypalPassword"
              placeholder="PayPal password"
              value={formData.paypalPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" id="pay-button">Pay</button>
        </form>
      )}
    </div>
  );
}

export default PaymentBody;



