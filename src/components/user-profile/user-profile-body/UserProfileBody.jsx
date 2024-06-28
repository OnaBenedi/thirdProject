import "./UserProfileBody.css"
import dummyIcon from "../../../assets/logos/rabbit-icon.png"


function UserProfileBody() {
  return (
    <div className="user-profile-body">
      <div className="profile-body-up">
        <div className="profile-left">
          <img src={dummyIcon} alt="user-icon" className="user-icon" />
          <p>Editar imagen de perfil</p>
        </div>
        <div className="profile-right">
          <div className="profile-info">
            <h2>Nombre Apellido</h2>
            <p>Correo Electrónico: ejemplo@correo.com</p>
            <p>Teléfono: +1234567890</p>
          </div>
        </div>
      </div>
      <div className="profile-links">
          <a href="#">Ajustes</a>
          <a href="#">Método de Pago</a>
          <a href="#">Protección de Datos</a>
        </div>
    </div>
  );
}

export default UserProfileBody