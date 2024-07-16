import "./TripsBody.css"

function TripsBody() {
  return (
    <div className="trips-container">
      <h1>Madrid</h1>
      <h3>Restaurantes</h3>
      <ul>
        <li>Biang Biang Bar</li>
        <li>L'Entrecote Café de París</li>
        <li>Hermanos Vinagre</li>
        <li>El viajero</li>
      </ul>
      <h3>Hoteles</h3>
      <ul>
        <li>Eurostars Madrid Tower</li>
        <li>Hotel Madrid Gran Vía</li>
        <li>Hotel Palacio del Retiro</li>
      </ul>
      <h3>Estaciones</h3>
      <ul>
        <li>Puerta de Atocha-Almudena Grandes</li>
        <li>Chamartín</li>
        <li>Príncipe Pío</li>
      </ul>
    </div>
  );
}

export default TripsBody;
