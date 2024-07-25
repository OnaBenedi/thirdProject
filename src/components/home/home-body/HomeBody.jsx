import { useEffect, useState } from "react";
import "./HomeBody.css";
import useGoogleMaps from "../../../hooks/useGoogleMaps";
import Comparator from "../../comparator/Comparator";
import { main } from "../../../data/uberdummy";
import Maps from "./maps/Maps";
import lowDemand from "../../../assets/svg/signal-weak-svgrepo-com.svg"
import mediumDemand from "../../../assets/svg/signal-fair-svgrepo-com.svg"
import highDemand from "../../../assets/svg/signal-strong-svgrepo-com.svg"
import sunnyWeather from "../../../assets/svg/sun.svg"
import rainyWeather from "../../../assets/svg/rain.svg"
import snowyWeather from "../../../assets/svg/snow.svg"
import ModalConfirmation from "../../modal-confirmation/ModalConfirmation";
import LanguageSwitcher from "../../LanguageSwitcher";
import { useTranslation } from 'react-i18next';

function HomeBody() {
  //almacena las direcciones escritas
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [originAndDestination, setOriginAndDestination] = useState({
    origin: "",
    destination: "",
  });
  //importa la data del hook que hace el primer fetch, trae la distancia y el tiempo
  const { t } = useTranslation();
  const { data, error, isLoading, fetchDirections } = useGoogleMaps(
    originAndDestination.origin,
    originAndDestination.destination
  );

  //llamamos a la "api" y nos proporciona el precio del trayecto y la info del clima etc
  const { uberDummy, cabifyDummy, taxiDummy, fareDummy } = main();

  //almacenamos la info de la "api"
  const [uberData, setUberData] = useState();
  const [cabifyData, setCabifyData] = useState();
  const [taxiData, setTaxiData] = useState();
  const [fareData, setFareData] = useState();

  //Estado para controlar la visibilidad del modal
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [demandConditions, setDemandConditions] = useState("")

  //cargamos la api a la vez que la pagina
  useEffect(() => {
    main();
    setUberData(uberDummy);
    setCabifyData(cabifyDummy);
    setTaxiData(taxiDummy)
    setFareData(fareDummy);
  }, []);

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

  //Funcion para manejar el cierre del modal
  function handlCloseModal () {
    setIsModalVisible(false)
  }

  //Funcion para abrir el modal
  function handleShowModal (){
    setIsModalVisible(true);
    setDemandConditions(fareData.demand_conditions);
  }


  return (
    <div className="home-body">
      <div className="search-bar">
        <div className="title">
          <h2>Welcome to HopOn!</h2>
        </div>
        <form onSubmit={handleSubmit} className="search">
          <label htmlFor="origin" >Origin:</label>
          <input
            type="text"
            name="from"
            value={from}
            onChange={handleOriginTrip}
            className="search-input"
            id="origin" placeholder="Enter your origin"
          />
          <div className="line-space"></div>
          <div className="line-space"></div>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            name="destination"
            value={destination}
            onChange={handleDestinationTrip}
            className="search-input"
            id="destination" placeholder="Enter your destination"
          />
          <button className="search-button">🔍</button>
        </form>
      </div>

      {fareData ? (
        <div className="fare-data">

          <div className="climate">
            Current weather
            {fareData.weather_conditions === "sunny" && <img alt="sunny-weather" src={sunnyWeather} />}
            {fareData.weather_conditions === "rainy" && <img alt="rainy-weather" src={rainyWeather} />}
            {fareData.weather_conditions === "snowy" && <img alt="snowy-weather" src={snowyWeather} />}
          </div>

          <div>
            Service demand
            {fareData.demand_conditions === "low" && <img alt="low-demand" src={lowDemand}/>}
            {fareData.demand_conditions === "regular" &&
              <img alt="medium-demand" src={mediumDemand} />}
            {fareData.demand_conditions === "high" &&
              <img alt="high-demand" src={highDemand} />}
          </div>
        </div>
      ) : null}
      {data ? (
        <Maps
          origin={originAndDestination.origin}
          destination={originAndDestination.destination}
          className="map-container"
        ></Maps>
      ) : error == "NOT_FOUND" && "No se ha podido geolocalizar tu destino u origen."}
      {data ? (
        <div>
          <Comparator
            uberData={uberData}
            cabifyData={cabifyData}
            taxiData={taxiData}
            distance={distance}
            time={tripDuration}
            onConfirm={handleShowModal}

          />
        </div>
      ) : null}

      {isModalVisible && <ModalConfirmation demandConditions= {demandConditions} sendDataToParent={handlCloseModal} favDestination={destination} />}
    </div>
  );
}

export default HomeBody;
