import { useEffect, useState } from "react";
import { calculateTripPrice } from "../../data/uberdummy";
import "./Comparator.css"
import uberLogo from "../../assets/logos/uber.png"
import cabifyLogo from "../../assets/logos/cabify.png"
import taxiLogo from "../../assets/logos/taxi.png"
//, cabifyKmPrice, distance
function Comparator({ uberData, cabifyData, taxiData, distance, time }) {
  const [uberPrice, setUberPrice] = useState();
  const [cabifyPrice, setCabifyPrice] = useState();
  const [taxiPrice, setTaxiPrice] = useState();

  useEffect(() => {
    setUberPrice(calculateTripPrice(uberData.fare.value, distance));
    setCabifyPrice(calculateTripPrice(cabifyData.fare.value, distance));
    setTaxiPrice(calculateTripPrice(taxiData.fare.value, distance))
  }, []);

  return (
    <div className="duracion-comparator">
      Duración del trayecto: {time}
      <div className="comparator">

      <div class="option selected">
        <label className="radio-option" htmlFor="option1">
          <img src={uberLogo} alt="uber-logo" />
        </label>
        <div className="ride-text">
        {uberPrice
            ? <div><p>Precio de tu viaje con Uber: <strong>{uberPrice.finalTripPrice} {uberData.fare.currency_code}</strong></p>
            <p>El conductor llegará en {uberData.pickup_estimate} minutos </p></div>

            : null}
        </div>
        <button class="select-button">Select</button>
      </div>
      <div class="option">
        <label className="radio-option" htmlFor="option2">
          <img src={cabifyLogo} alt="cabify-logo" />
        </label>
        <div className="ride-text">
          {cabifyPrice
            ? <div><p>Precio de tu viaje con Cabify: <strong>{cabifyPrice.finalTripPrice} {cabifyData.fare.currency_code}</strong></p>
            <p>El conductor llegará en {cabifyData.pickup_estimate} minutos</p></div>

            : null}
        </div>
        <button class="select-button">Select</button>
      </div>
      <div class="option">
        <label className="radio-option" htmlFor="option1">
          <img src={taxiLogo} alt="taxi-logo" />
        </label>
        <div className="ride-text">
          {taxiPrice
            ?<div><p className="taxi-text">Precio de tu viaje con un taxi: <strong>{taxiPrice.finalTripPrice} {taxiData.fare.currency_code}</strong></p>
            <p> El conductor llegará en {taxiData.pickup_estimate} minutos</p></div>
            : null}
        </div>
        <button class="select-button">Select</button>
      </div>
    </div>
    </div>
  );
}

export default Comparator;
