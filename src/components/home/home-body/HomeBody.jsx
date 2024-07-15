import { useEffect, useState } from "react";
import "./HomeBody.css";
import redPin from "../../../assets/other-icons/location-pin-2965.png";
import greenPin from "../../../assets/other-icons/location-pin-green.png";
import useGoogleMaps from "../../../hooks/useGoogleMaps";
import Comparator from "../../comparator/Comparator";
import { main } from "../../../data/uberdummy";
import Maps from "./maps/Maps";

function HomeBody() {
  //almacena las direcciones escritas
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [originAndDestination, setOriginAndDestination] = useState({
    origin: "",
    destination: "",
  });

  //importa la data del hook que hace el primer fetch, trae la distancia y el tiempo

  const { data, error, isLoading, fetchDirections } = useGoogleMaps(
    originAndDestination.origin,
    originAndDestination.destination
  );

  //llamamos a la "api" y nos proporciona el precio del trayecto y la info del clima etc
  const { uberDummy, cabifyDummy, fareDummy } = main();

  //almacenamos la info de la "api"
  const [uberData, setUberData] = useState();
  const [cabifyData, setCabifyData] = useState();
  const [fareData, setFareData] = useState();

  //cargamos la api a la vez que la pagina
  useEffect(() => {
    main();
    setUberData(uberDummy);
    setCabifyData(cabifyDummy);
    setFareData(fareDummy);
  }, []); //por que se ejecuta cada vez que se teclea?

  // if(fareData.weather_conditions === "sunny"){
  //   setClimate("soleado")
  // }else if(fareData.weather_conditions === "rainy"){
  // setClimate("lluvia")
  // } else if(fareData.weather_conditions === "snowy"){
  //   setClimate("nieve")}

  //   if(fareData.demand_conditions === "low"){
  //     setDemand("baja")
  //  } else if (fareData.demand_conditions === "medium"){
  //    setDemand("media")
  //  } else if (fareData.demand_conditions === "high"){
  //     setDemand("alta")
  //   }

  useEffect(() => {
    if (originAndDestination.origin && originAndDestination.destination) {
      fetchDirections();
    }
  }, [originAndDestination]);
  //almacena la distancia y el tiempo, se debe pasar al useCalculatePrice hook y a su vez a la comparativa
  let distance = data ? data.rows[0].elements[0].distance.value / 1000 : null;
  let tripDuration = data ? data.rows[0].elements[0].duration.text : null;

  //establece punto de origen
  function handleOriginTrip(event) {
    setFrom(event.target.value);
  }

  //establece destino
  function handleDestinationTrip(event) {
    setDestination(event.target.value);
  }

  //evita funcionamiento form habitual
  function handleSubmit(event) {
    event.preventDefault();
    setOriginAndDestination({
      origin: from,
      destination: destination,
    });
  }

  //   fareData ? fareData.weather_conditions === "sunny" && "soleado" : null
  // fareData ? fareData.weather_conditions === "rainy" && "lluvia" : null
  // fareData ? fareData.weather_conditions === "snowy" && "nieve" : null

  // fareData ? fareData.demand_conditions === "low" && "baja" : null
  // fareData ? fareData.demand_conditions === "regular" && "media" : null
  // fareData ? fareData.demand_conditions === "high" && "alta" : null
  return (
    <div className="home-body">
      <div className="search-bar">
        <div className="title">
          <h2>Bienvenido a HopOn!</h2>
        </div>
        <form onSubmit={handleSubmit} className="search">
          <label htmlFor="from">Origen trayecto:</label>
          <input
            type="text"
            name="from"
            value={from}
            onChange={handleOriginTrip}
            className="search-input"
          />
          <div className="line-space"></div>
          <label htmlFor="destination">Destino:</label>
          <input
            type="text"
            name="destination"
            value={destination}
            onChange={handleDestinationTrip}
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </form>
      </div>

      {fareData ? (
        <div>
          {fareData.weather_conditions === "sunny" && `Clima actual: soleado`}
          {fareData.weather_conditions === "rainy" && `Clima actual: lluvia`}
          {fareData.weather_conditions === "snowy" && `Clima actual: nieve`}

          {fareData.demand_conditions === "low" && `Demanda del servicio: baja`}
          {fareData.demand_conditions === "regular" &&
            `Demanda del servicio: media`}
          {fareData.demand_conditions === "high" &&
            `Demanda del servicio: alta`}
        </div>
      ) : null}
      {data ? (
        <Maps
          origin={originAndDestination.origin}
          destination={originAndDestination.destination}
          className="map-container"
        ></Maps>
      ) : null}
      {data ? (
        <div>
          <Comparator
            uberData={uberData}
            cabifyData={cabifyData}
            distance={distance}
            time={tripDuration}

          />
        </div>
      ) : null}
      <footer className="footer">
      <div className="footer-content">
        <p>© 2024 HopOn! Todos los derechos reservados.</p>
        <p>Desarrollado por Ona Benedí, María Bona, Chritopher Jiménez</p>
      </div>
    </footer>
    </div>
  );
}

export default HomeBody;
