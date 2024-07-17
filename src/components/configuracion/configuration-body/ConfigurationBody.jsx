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
            Username:
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
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ConfigurationBody;
