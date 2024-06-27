function Prueba() {
  async function fetchDirections(originsParam="Barcelona", destinationsParam="Madrid") {
    const fetchData = await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originsParam}&destinations=${destinationsParam}&key=AIzaSyB1tDLTSP-9N3jeWjMbJUdGDoq9KTypxIg`
    );
    const retreivedData = await fetchData.json();

    let distance = retreivedData.rows[0].elements[0].distance.value;
    let duration = retreivedData.rows[0].elements[0].duration.text

    const retreivedDataStatus = retreivedData.rows[0].elements[0].status
    console.log(retreivedData);
    console.log(distance, duration);
    console.log(retreivedDataStatus);

    //funciona!!
  }
  fetchDirections();
  return <div>Prueba</div>;
}

export default Prueba;
