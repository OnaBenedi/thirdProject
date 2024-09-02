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
      if (auth.currentUser) {
        console.log(auth.currentUser)
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data)
        } else {
          console.error("No user is currently signed in!")
        }
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      retrieveDataUser();
    }, 500);

    return () => clearTimeout(timer);
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
            <h2>{userData.nombre ? userData.nombre : "John" } {userData.apellido ? userData.apellido : "Doe"}</h2>
            <p>Email: {userData.email ? userData.email : "email@email.es"}</p>
            <p>Phone number: {userData.phoneNumber ? userData.phoneNumber : "+34 124 45 67 89"}</p>
          </div>
        </div>
      </div>
      <div className="profile-links">
        <Link to="/config" id="link1">Settings</Link>
        <Link to="/payment" id="link2">Payment Method</Link>
      </div>
    </div>
  );
}

export default UserProfileBody