import "./Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from 'react-router-dom';
import Footer from "../footer/Footer"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home")
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="left">
          <h2>Create an account</h2>
          <button className="signInButton" onClick={() => navigate("/signup")}>
            Sign up
          </button>
        </div>
        <div className="right">
          <h2>Welcome</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>
          <a href="#" className="resetPassword">
            Reset password
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
