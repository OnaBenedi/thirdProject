import { useEffect, useState } from "react";
import "./HomeBody.css";
import redPin from "../../../assets/other-icons/location-pin-2965.png";
import greenPin from "../../../assets/other-icons/location-pin-green.png";
import useGoogleMaps from "../../../hooks/useGoogleMaps";

function HomeBody() {
  //almacena las direcciones escritas
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [originAndDestination, setOriginAndDestination] = useState({
    origin: "",
    destination: "",
  })

  //importa la data del hook que hace el primer fetch, trae la distancia y el tiempo

  const {data, error, isLoading, fetchDirections} = useGoogleMaps(originAndDestination.origin, originAndDestination.destination);

  useEffect(()=>{
    if(originAndDestination.origin && originAndDestination.destination){
      fetchDirections()
    }
  }, [originAndDestination])
  //almacena la distancia y el tiempo, se debe pasar al useCalculatePrice hook y a su vez a la comparativa
  // let distance = data.rows[0].elements[0].distance.value;
  // let tripDuration = data.rows[0].elements[0].duration.text; //useParams??

  //establece punto de origen
  function handleOriginTrip(event){
    setFrom(event.target.value)
  }

  //establece destino
  function handleDestinationTrip(event){
    setDestination(event.target.value)
  }

  //evita funcionamiento form habitual
  function handleSubmit(event){
    event.preventDefault();
    setOriginAndDestination({
      origin: from,
      destination: destination
    })

  }
  return (
    <div className="home-body">
      <form onSubmit={handleSubmit}>
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
