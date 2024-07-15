

function ConfigurationBody() {
  function handleUpdate(e) {
    e.prevent.default();
  }
  return (
    <div>
      <h2>Ajustes</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
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
