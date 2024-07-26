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
      demandMessage = "The demand is low, your driver will pick you up shortly!"
      break;
    case "regular":
      demandMessage = "The demand is regular, your driver is en route!"
      break;
    case "high":
      demandMessage = "The demand is high, please be patient until your driver arrives!"
      break;
    default:
      demandMessage = "Your driver is en route!"
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
        <p>Relax, we will take care of everything.</p>
        <p>
          {demandMessage}
        </p>
        <div className="add-favs">
          <p className="fav-p">Add this destination to favorites:</p>
          <div className="categories-button">
            <select name="favs" id="fav-trips" onChange={handleFavDestinationCategory}>
              <option value="none">Select an option</option>
              <option value="restaurants" >Restaurants</option>
              <option value="hotels">Hotels</option>
              <option value="stations">Stations</option>
            </select>
            <button onClick={handleFavDestination} id="add-button">Add</button>
          </div>
        </div>
      </div>

      <button className="close-button" onClick={sendDataToParent}>
        <span>&times;</span>
      </button>
    </div>
  );
}

export default ModalConfirmation;
