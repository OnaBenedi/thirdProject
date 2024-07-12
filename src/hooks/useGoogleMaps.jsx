import { useState, useEffect } from "react";

function useGoogleMaps(
  originsParam = "New+York",
  destinationsParam = "Los+Angeles"
) {
  // <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=console.debug&libraries=maps,marker&v=beta">
  // </script> https://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters

  //almacenamos la info necesaria para el hook
  const [data, setData] = useState(null); //retorna objeto
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {

    //se realiza un fetch que se inicia al cambiar los parametros de origen y destino
    async function fetchDirections() {
      setIsLoading(true);
      const fetchData = await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originsParam}&destinations=${destinationsParam}&key=AIzaSyBCrvSbt8BPoxZpDso07nt2dG8QxgVAl1M&libraries=places`
      );
      const retreivedData = await fetchData.json();

      //almacenamos el estatus por si se da un error poderlo analizar
      const retreivedDataStatus = retreivedData.rows[0]?.elements[0]?.status;

      //en el try se comprueba que el error no venga de la API en el caso de que el fetch funcione bien
      try {
         //aqui o fuera??
        if (retreivedDataStatus == "OK") {
          setData(retreivedData);
        } else if (retreivedDataStatus == "NOT_FOUND") {
          setError("NOT_FOUND");
          console.log(
            "The origin and/or destination of this pairing could not be geocoded."
          );
        } else if (retreivedDataStatus == "ZERO_RESULTS") {
          setError("ZERO_RESULTS");
          console.log(
            "No route could be found between the origin and destination"
          );
        } else if (retreivedDataStatus == "MAX_ROUTE_LENGTH_EXCEEDED") {
          setError("MAX_ROUTE_LENGTH_EXCEEDED");
          console.log(
            "The requested route is too long and cannot be processed"
          );
        }
      } catch(err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }

      console.log(retreivedData);
    }
    // fetchDirections();
  // }, [originsParam, destinationsParam]);

  return {
    data,
    error,
    isLoading,
    fetchDirections,
  };
}

export default useGoogleMaps;
