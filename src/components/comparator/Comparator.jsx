import { useEffect, useState } from "react";
import { calculateTripPrice } from "../../data/uberdummy";
import "./Comparator.css"
//, cabifyKmPrice, distance
function Comparator({ uberData, cabifyData, distance, time }) {
  const [uberPrice, setUberPrice] = useState();
  const [cabifyPrice, setCabifyPrice] = useState();
  //const {} = calculateTripPrice();

  //setUberPrice()
  useEffect(() => {
    setUberPrice(calculateTripPrice(uberData.fare.value, distance));
    setCabifyPrice(calculateTripPrice(cabifyData.fare.value, distance));
  }, []);

  return (
    <div>
      Duración del trayecto: {time}
      <div className="comparator">

      <div class="option selected">
        <input type="radio" name="option1" id="option1" />
        <label className="radio-option" htmlFor="option1">
          {uberPrice
            ? `Precio de tu viaje con Uber: ${uberPrice.finalTripPrice} ${uberData.fare.currency_code}
            El conductor tardará aproximadamente: ${uberData.pickup_estimate} minutos en llegar`
            : null}
        </label>
        <button class="select-button">Select</button>
      </div>
      <div class="option">
        <input type="radio" name="option2" id="option1" />
        <label className="radio-option" htmlFor="option1">
          CABIFY logo
        </label>
        <div className="ride-text">
          {cabifyPrice
            ? `Precio de tu viaje con Cabify: ${cabifyPrice.finalTripPrice} ${cabifyData.fare.currency_code}
            El conductor tardará aproximadamente: ${cabifyData.pickup_estimate} minutos en llegar`
            : null}
        </div>
        <button class="select-button">Select</button>
      </div>
    </div>
    </div>
  );
}

export default Comparator;
