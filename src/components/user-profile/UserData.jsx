import { auth, db } from "../../config/firebase.js"
import { collection, getDoc } from "firebase/firestore";

const usersCollectionRef = collection(db, "users");

const getData = async () => {
  try {
    
  } catch (err) {
    console.error(err)
  }
}


const Email = () => {
  
  return (
    <span>
      {auth?.currentUser?.email}
    </span>
  )
}

const UserName = () => {
  return (
    <span>  </span>
  )
}

const UserSurname = () => {

}

export default { Email, UserName, UserSurname }
