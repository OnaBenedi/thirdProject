import dummyIcon from "../../../assets/other-icons/temporary-user.png"
import mainLogo from "../../../assets/logos/main-logo.png"
import "./HamburguerMenu.css"

function HamburguerMenu() {
    function handleSideMenu(){

    }
  return (
    
        <div className="side-menu-hidden" id="side-menu">
            <img src={mainLogo} alt="logo-small" className="main-logo-small"/>
            <hr />
            <div>
              <img src={dummyIcon} alt="user-icon" className="user-icon"/>
              <a href="#">Perfil de usuario</a>
            </div>
            <hr />
            <a href="#">Viajes</a>
            <hr />
            <a href="#">Configuración</a>


            <a href="#">Ayuda</a>
        </div>

  )
}

export default HamburguerMenu