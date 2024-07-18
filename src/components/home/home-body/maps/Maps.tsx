import React from "react";
import { useState, useEffect } from "react";
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

//import dotenv from 'dotenv';

// dotenv.config();
const apiKey: any = import.meta.env.VITE_API_KEY
const mapId: any = import.meta.env.VITE_MAP_ID

function Maps({ origin, destination }) {
  const madrid = { lat: 40.416775, lng: -3.70379 };
  const position = madrid;


  const [viewState, setViewState] = useState({
    longitude: -3.70379,
    latitude: 40.416775,
  });
  return (
    <APIProvider
      apiKey={apiKey}
      region={"ES"}
      language={"es"}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <div style={{ height: "75vh", width: "75vw", borderRadius: "10px" }}>
        <Map
          {...viewState}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom
            )
          }
          defaultCenter={position}
          defaultZoom={14}
          mapId={mapId}
          fullscreenControl={false}

        >
          <Directions origin={origin} destination={destination} />
        </Map>
      </div>
    </APIProvider>
  );
}

export default Maps;

function Directions({ origin, destination }) {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);

  //initializes the server
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    directionsService
      .route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: false,
      })
      .then((res) => {
        directionsRenderer.setDirections(res);
        setRoutes(res.routes);
      });
  }, [directionsService, directionsRenderer, origin, destination]);

  return null;
}
