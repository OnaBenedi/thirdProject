import "./TripsBody.css"
import tripData from "../../../data/tripData"

function TripsBody() {

  const restaurantes = tripData.madrid.restaurantes;
  const hoteles = tripData.madrid.hoteles;
  const estaciones = tripData.madrid.estaciones;
  return (
    <div className="trips-container"  >
      Currently under development!
      <h1>Madrid</h1>
      <div className="trips">

        <div className="restaurants">
          <h3>Restaurantes</h3>
          <ul>
            {tripData ? restaurantes.map((restaurante, index)=>{
              return <div key={index}>
                <li>{restaurante}</li>
              </div>
            }) : null}
          </ul>
        </div>
        <div className="hotels">
          <h3>Hoteles</h3>
          <ul>
          {tripData ? hoteles.map((hotel, index)=>{
              return <div key={index}>
                <li>{hotel}</li>
              </div>
            }) : null}
          </ul>
        </div>
        <div className="train-stations">
          <h3>Estaciones</h3>
          <ul>
          {tripData ? estaciones.map((estacion, index)=>{
              return <div key={index}>
                <li>{estacion}</li>
              </div>
            }) : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TripsBody;
