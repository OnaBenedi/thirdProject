import { useEffect, useState } from "react";
import { calculateTripPrice } from "../../data/uberdummy";
import "./Comparator.css";
import uberLogo from "../../assets/logos/uber.png";
import cabifyLogo from "../../assets/logos/cabify.png";
import taxiLogo from "../../assets/logos/taxi.png";
// import ModalConfirmation from "../modal-confirmation/ModalConfirmation";
//import Options from "../options/Options";

function Comparator({ uberData, cabifyData, taxiData, distance, time, onConfirm }) {
  const [uberPrice, setUberPrice] = useState();
  const [cabifyPrice, setCabifyPrice] = useState();
  const [taxiPrice, setTaxiPrice] = useState();
  const [optionsData, setOptionsData] = useState([]);

  // const [confirmed, setConfirmed] = useState(false);



  // function handleConfirmedTrip() {
  //   setConfirmed(true);
  // }

  // function handleClosedModal() {
  //   setConfirmed(false);
  // }

  useEffect(() => {
    setUberPrice(calculateTripPrice(uberData.fare.value, distance));
    setCabifyPrice(calculateTripPrice(cabifyData.fare.value, distance));
    setTaxiPrice(calculateTripPrice(taxiData.fare.value, distance));
    setOptionsData([uberData, cabifyData, taxiData]);
  }, []);

  return (
    <div className="duracion-comparator">
      Trip's duration: {time}
      <div className="comparator">
        {/* {optionsData ? optionsData.map((company)=>{
          <Options companyLogo={()=>{
          }}/>

        }):null} */}
        <div className="option selected">
          <label className="radio-option" >
            <img src={uberLogo} alt="uber-logo" />
          </label>
          <div className="ride-text text-padding">
            {uberPrice ? (
              <div >
                <p className="ride-text">
                  Uber price:{" "}
                  <strong>
                    {uberPrice.finalTripPrice} {uberData.fare.currency_code}
                  </strong>
                </p>
                <p className="ride-text">
                  The driver will arrive in {uberData.pickup_estimate} minutes{" "}
                </p>
              </div>
            ) : null}
          </div>
          <button className="select-button" onClick={onConfirm}>
            Select
          </button>
        </div>
        <div className="option">
          <label className="radio-option" >
            <img src={cabifyLogo} alt="cabify-logo" />
          </label>
          <div className="ride-text">
            {cabifyPrice ? (
              <div>
                <p className="ride-text">
                  Cabify price:{" "}
                  <strong>
                    {cabifyPrice.finalTripPrice} {cabifyData.fare.currency_code}
                  </strong>
                </p>
                <p className="ride-text">
                  The driver will arrive in {cabifyData.pickup_estimate} minutes
                </p>
              </div>
            ) : null}
          </div>
          <button className="select-button" onClick={onConfirm}>
            Select
          </button>
        </div>
        <div className="option">
          <label className="radio-option" >
            <img src={taxiLogo} alt="taxi-logo" />
          </label>
          <div className="ride-text">
            {taxiPrice ? (
              <div>
                <p className="taxi-text ride-text">
                  Taxi price:{" "}
                  <strong>
                    {taxiPrice.finalTripPrice} {taxiData.fare.currency_code}
                  </strong>
                </p>
                <p className="ride-text">
                  {" "}
                  The driver will arrive in {taxiData.pickup_estimate} minutes
                </p>
              </div>
            ) : null}
          </div>
          <button className="select-button" onClick={onConfirm}>
            Select
          </button>
        </div>
      </div>
      {/* {confirmed ? (
        <ModalConfirmation sendDataToParent={handleClosedModal} />
      ) : null} */}
    </div>
  );
}

export default Comparator;
