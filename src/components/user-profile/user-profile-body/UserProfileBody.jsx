import "./UserProfileBody.css"
import dummyIcon from "../../../assets/logos/rabbit-icon.png"
import { Link } from "react-router-dom";
import { auth, db } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


function UserProfileBody() {
  const [userData, setUserData] = useState([]);


  const retrieveDataUser = async () => {
    try {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()) {
        const data = docSnap.data();
        setUserData(data)
      }
    } catch {
      console.error(err.message)
    }
  }

  useEffect(() => {
    retrieveDataUser();
  }, [])

  return (
    <div className="user-profile-body">
      <div className="profile-body-up">
        <div className="profile-left">
          <img src={dummyIcon} alt="user-icon" className="user-icon" />
          <p>Edit profile picture</p>
        </div>
        <div className="profile-right">
          <div className="profile-info">
            <h2>{userData.nombre} {userData.apellido}</h2>
            <p>Email: {userData.email}</p>
            <p>Phone number: {userData.phoneNumber}</p>
          </div>
        </div>
      </div>
      <div className="profile-links">
        <a href="#" id="link1"><Link to="/config">Settings</Link></a>
        <a href="#" id="link2"><Link to="/payment">Payment Method</Link></a>
      </div>
    </div>
  );
}

export default UserProfileBody