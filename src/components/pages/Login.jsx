import "./Login.css";
import { useState } from "react";
import { register, login } from "../../../user-info/login";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from 'react-router-dom';
import Footer from "../footer/Footer"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailTrue = email.trim();
    const passwordTrue = password.trim();

    if (isRegister) {
      try {
        if (emailTrue && passwordTrue) {
          await register(email, password);
          setMessage("User created successfully!");
        } else {
          setMessage("Please provide both email and password");
        }
      } catch (error) {
        console.error(error);
        setMessage("Error creating user");
      }
    } else {
      try {
        if (emailTrue && passwordTrue) {
          navigate("/home");
          const token = await login(email, password);
          setToken(token);
          setMessage("Logged in successfully!");
        } else {
          setMessage("Please provide both email and password");
        }
      } catch (error) {
        console.error(error);
        setMessage("Invalid email or password");
      }
    }
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Log in exitoso.")
      console.log(auth?.currentUser?.email)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="left">
          <h2>Crear cuenta</h2>
          <button className="signInButton" onClick={() => navigate("/signup")}>
            Registrarse
          </button>
        </div>
        <div className="right">
          <h2>Bienvenido</h2>
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
            {isRegister ? (
              <button type="submit">Regístrate</button>
            ) : (
              <button type="submit" className="loginButton" onClick={signIn}>
                Iniciar Sesión
              </button>
            )}
          </form>

          {message && (
            <div
              className={
                message.includes("Error") ? "error-message" : "success-message"
              }
            >
              {message}
            </div>
          )}
          {token && <div>Logged in with token: {token}</div>}
          <a href="#" className="resetPassword">
            Resetear contraseña
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
