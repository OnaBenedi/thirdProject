import "./Signup.css";
import { useState } from "react";
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import Footer from "../footer/Footer.jsx"
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        nombre: name,
        apellido: surname,
        phoneNumber: number,
        email: email,
      })
      navigate("/home")
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100svh" }}>
      <div className="Login">
        <div className="container-signup">
          <div className="left">
            <h2>Already have an account?</h2>
            <button className="signInButton" onClick={() => navigate("/")}>
              Log in
            </button>
          </div>
          <div className="right">
            <h2>Welcome</h2>
            <form onSubmit={handleSubmit}>
              <input
                className="login-input"
                placeholder="Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="login-input"
                placeholder="Surname"
                type="text"
                onChange={(e) => setSurname(e.target.value)}
              />
              <input
                className="login-input"
                placeholder="Phone Number"
                type="text"
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                className="login-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="loginButton"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
