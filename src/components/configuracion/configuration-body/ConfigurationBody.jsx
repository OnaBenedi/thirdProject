import "./ConfigurationBody.css"

function ConfigurationBody() {
  function handleUpdate(e) {
    e.prevent.default();
  }
  return (
    <div className="config-container" >
      <h2>Ajustes</h2>
      <form onSubmit={handleUpdate}>
        <div className="input-container">
          <label>
            Usuario:
            <input type="text" name="username" />
          </label>
        </div>
        <div className="input-container">
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div className="input-container">
          <label>
            Contraseña:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit" id="button-style">Actualizar</button>
      </form>
    </div>
  );
}

export default ConfigurationBody;
