import "./ModalConfirmation.css";
import driverLogo from "../../assets/logos/driver.png"
import { useState } from "react";
import tripDataObj from "../../data/tripData"

function ModalConfirmation({demandConditions, sendDataToParent, favDestination}) {
  const [category, setCategory] = useState("");
  const favDestinationFromInput = favDestination;
  let demandMessage;
  switch(demandConditions){
    case "low":
      demandMessage = "La demanda es baja, ¡tu conductor te recogerá en breve!"
      break;
    case "regular":
      demandMessage = "La demanda es normal, ¡tu conductor está de camino!"
      break;
    case "high":
      demandMessage = "La demanda es alta, ¡ten un poco de paciencia hasta que llegue tu conductor!"
      break;
    default:
      demandMessage = "¡Tu conductor está de camino!"
  }

  function handleFavDestinationCategory (event){
    const selectedOption = event.target.value
    //let restaurants = tripDataObj.madrid.restaurants
   setCategory(selectedOption)
  }

  function handleFavDestination (){
    let restaurants = tripDataObj.madrid.restaurants;
    let hotels = tripDataObj.madrid.hotels;
    let stations = tripDataObj.madrid.stations;
    if (category == "restaurants"){
      restaurants.push(favDestination)
     } else if (category == "hotels"){
      hotels.push(favDestination)
     } else if (category == "stations"){
      stations.push(favDestination)
     }
  }
  return (
    <div className="modal-wrapper">
      <img src={driverLogo} alt="driver-logo" className="driver" />
      <div className="modal-text">
        <p>Calma, nosotros nos ocupamos de todo.</p>
        <p>
          {demandMessage}
        </p>
        <div className="add-favs">
          <p>Añade este destino a favoritos:</p>
          <select name="favs" id="fav-trips" onChange={handleFavDestinationCategory}>
            <option value="none">Selecciona una opción</option>
            <option value="restaurants" >Restaurantes</option>
            <option value="hotels">Hotels</option>
            <option value="stations">Estaciones</option>
          </select>
          <button onClick={handleFavDestination}>Añadir</button>
        </div>
      </div>

      <button className="close-button" onClick={sendDataToParent}>
        <span>&times;</span>
      </button>
    </div>
  );
}

export default ModalConfirmation;
