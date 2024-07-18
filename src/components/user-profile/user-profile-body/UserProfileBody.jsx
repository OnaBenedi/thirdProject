import "./UserProfileBody.css"
import dummyIcon from "../../../assets/logos/rabbit-icon.png"
import { auth, db } from "../../../config/firebase.js";
import { getFirestore, collection, query, where, getDoc } from "firebase/firestore";



async function getUserInfo(email) {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email))
    const querySnap = await getDoc(q);
    console.log(querySnap);
  } catch(err) {
    console.error(err)
  }
}

function UserProfileBody() {
  const email = auth?.currentUser?.email;
  getUserInfo(email)

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
            <p>Correo Electrónico: {email}</p>
            <p>Teléfono: +1234567890</p>
          </div>
        </div>
      </div>
      <div className="profile-links">
          <a href="#">Ajustes</a>
          <a href="#">Método de Pago</a>
          <a href="#">Protección de Datos</a>
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