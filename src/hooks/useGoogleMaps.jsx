import { useState, useEffect } from "react";

function useGoogleMaps(originsParam = "New+York", destinationsParam = "Los+Angeles") {
  // <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&callback=console.debug&libraries=maps,marker&v=beta">
  // </script> https://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchDirections() {
      const fetchData = await fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originsParam}&destinations=${destinationsParam}&key=AIzaSyB1tDLTSP-9N3jeWjMbJUdGDoq9KTypxIg`
      );
      const retreivedData = await fetchData.json();
      console.log(retreivedData);
    }
    fetchDirections()
  }, [originsParam, destinationsParam]);

  return {
    data,
    error,
    isLoading,
  };
}

export default useGoogleMaps;
