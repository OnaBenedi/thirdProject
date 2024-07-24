import "./TripsBody.css"
import tripDataObj from "../../../data/tripData"
import madridSkyline from "../../../assets/prueba.jpg"

function TripsBody() {

  const restaurants = tripDataObj.madrid.restaurants;
  const hotels = tripDataObj.madrid.hotels;
  const stations = tripDataObj.madrid.stations;
  return (
    <div className="trips-container"  >
      <img src={madridSkyline} alt="madrid-img" />
      <h1>Madrid</h1>
      <div className="trips">

        <div className="restaurants">
          <h3>Restaurants</h3>
          <ul>
            {tripDataObj ? restaurants.map((restaurant, index)=>{
              return <div key={index}>
                <li>{restaurant}</li>
              </div>
            }) : null}
          </ul>
        </div>
        <div className="hotels">
          <h3>Hotels</h3>
          <ul>
          {tripDataObj ? hotels.map((hotel, index)=>{
              return <div key={index}>
                <li>{hotel}</li>
              </div>
            }) : null}
          </ul>
        </div>
        <div className="train-stations">
          <h3>Stations</h3>
          <ul>
          {tripDataObj ? stations.map((station, index)=>{
              return <div key={index}>
                <li>{station}</li>
              </div>
            }) : null}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default TripsBody;
