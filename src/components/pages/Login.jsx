import './Login.css'

function Login() {
  return (
    <div className="Login">
      <div className="container">
        <div className="left">
          <h2>Crear cuenta</h2>
          <button className="signInButton">Registrarse</button>
        </div>
        <div className="right">
          <h2>Bienvenido</h2>
          <form>
            <input className='login-input' type="email" placeholder="Email" required />
            <input className='login-input' type="password" placeholder="Password" required />
            <button type="submit" className="loginButton">Iniciar Sesión</button>
          </form>
          <a href="#" className="resetPassword">Resetear contraseña</a>
        </div>
      </div>
    </div>
  );
}

export default Login