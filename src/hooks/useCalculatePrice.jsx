import { useState } from "react";

function useCalculatePrice(distance) {
  const [uberPrice, setUberPrice] = useState();
  const [cabifyPrice, setCabifyPrice] = useState();

  //debe llamar al dummy de uber y al de cabify y poner sus precios minimos o se hace en el propio json?
  function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return {
    uberPrice,
    cabifyPrice,
  };
}

export default useCalculatePrice;
