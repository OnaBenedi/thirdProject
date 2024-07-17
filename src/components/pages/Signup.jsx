import "./Login.css";
import { useState } from "react";
import { register, login } from "../../../user-info/login";
import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword, signOut, } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const usersCollectionRef = collection(db, "users");

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
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmitUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(usersCollectionRef, {
        nombre: name,
        apellido: surname,
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(auth);

  return (
    <div className="Login">
      <div className="container">
        <div className="left">
          <h2>Crear cuenta</h2>
          <button className="signInButton" onClick={toggleRegister}>
            Registrarse
          </button>
        </div>
        <div className="right">
          <h2>Bienvenido</h2>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Nombre"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Apellido"
              type="text"
              onChange={(e) => setSurname(e.target.value)}
            />
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
              <button
                type="submit"
                className="loginButton"
                onClick={onSubmitUser}
              >
                Iniciar Sesión
              </button>
            )}
            <button onClick={logout}>Salir</button>
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
    </div>
  );
}

export default Signup;
