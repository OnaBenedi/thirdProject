import { useState } from "react";
import "./HomeBody.css";
import redPin from "../../../assets/other-icons/location-pin-2965.png";
import greenPin from "../../../assets/other-icons/location-pin-green.png";

function HomeBody() {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");

  function handleOriginTrip(event){
    setFrom(event.target.value)
  }

  function handleDestinationTrip(event){
    setDestination(event.target.value)
  }

  function preventDefault(event){
    event.preventDefault();
  }
  return (
    <div className="home-body">
      <form onSubmit={preventDefault}>
          <div className="container-from container-location-style">
            <img src={redPin} alt="from-pin" />
            <label htmlFor="from">Origen trayecto:</label>
            <input type="text" name="from" value={from} onChange={handleOriginTrip}/>
          </div>
          <div className="container-destination container-location-style">
            <img src={greenPin} alt="destination-pin" />
            <label htmlFor="destination">Destino:</label>
            <input type="text" name="destination" value={destination} onChange={handleDestinationTrip}/>
          </div>
          <button>Buscar ruta</button>
      </form>
      <div className="mapa-home">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png"
          alt="map-img"
        />
      </div>
    </div>
  );
}

export default HomeBody;
