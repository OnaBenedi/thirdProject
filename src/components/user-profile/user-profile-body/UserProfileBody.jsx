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
            <h2>Christopher Jiménez</h2>
            <p>Correo Electrónico: christ.test@gmail.com</p>
            <p>Teléfono: +34618129617</p>
          </div>
        </div>
      </div>
      <div className="profile-links">
          <a href="#" id="link1">Ajustes</a>
          <a href="#" id="link2">Método de Pago</a>
          <a href="#" id="link3">Protección de Datos</a>
        </div>
        <footer className="footer">
      <div className="footer-content">
        <p>© 2024 HopOn! Todos los derechos reservados.</p>
        <p>Desarrollado por Ona Benedí, María Bona, Chritopher Jiménez</p>
      </div>
    </footer>
    </div>
  );
}

export default UserProfileBody