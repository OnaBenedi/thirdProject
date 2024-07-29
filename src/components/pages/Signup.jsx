import "./Signup.css";
import { useState } from "react";
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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
            <h2 className="login-title-left">Already have an account?</h2>
            <button className="signInButton" onClick={() => navigate("/")}>
              Log in
            </button>
          </div>
          <div className="right">
            <h2 className="signup-title-right">Welcome</h2>
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="name-container">
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
              </div>
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
              <button type="submit" className="login-button">
                Sign up
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
