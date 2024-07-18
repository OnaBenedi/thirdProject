import "./ModalConfirmation.css";
import driverLogo from "../../assets/logos/driver.png"

function ModalConfirmation(props) {
  return (
    <div className="modal-wrapper">
      <img src={driverLogo} alt="driver-logo" className="driver" />
      <div className="modal-text">
        <p>¡Estás de suerte!</p>
        <p>
          ¡Tu conductor está de camino!
        </p>
      </div>
      <button className="close-button" onClick={()=>{props.sendDataToParent()}}>
        <span>&times;</span>
      </button>
    </div>
  );
}

export default ModalConfirmation;
