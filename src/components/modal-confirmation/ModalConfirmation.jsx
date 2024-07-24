import "./ModalConfirmation.css";
import driverLogo from "../../assets/logos/driver.png"

function ModalConfirmation({demandConditions, sendDataToParent}) {

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


  return (
    <div className="modal-wrapper">
      <img src={driverLogo} alt="driver-logo" className="driver" />
      <div className="modal-text">
        <p>Calma, nosotros nos ocupamos de todo.</p>
        <p>
          {demandMessage}
        </p>
      </div>
      <button className="close-button" onClick={sendDataToParent}>
        <span>&times;</span>
      </button>
    </div>
  );
}

export default ModalConfirmation;
