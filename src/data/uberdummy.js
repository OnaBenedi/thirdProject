let uberValue;
let cabifyValue;
let taxiValue;

let weatherPrice;
let weatherCondition;

let demandPrice;
let demandCondition;

let uberFinalValue;
let cabifyFinalValue;

let cabifyPickUpTime;
let uberPickUpTime;
let taxiPickUpTime;
//"api" uber/cabify pedirle el precio km, la app es la que te hace el calculo del precio del servicio (precio km, precio clima y precio demanda)
//app calcula precio final en si usando distancia, tiempo, precio servicio
function calculateKMPrice() {
  //functiones que te calculan precio minimo, precio maximo y precio final
  // function randomMinPrice(min, max) {
  //   return Math.random() * (max - min + 1) + min;
  // }

  // function randomMaxPrice(min, max) {
  //   return Math.random() * (max - min + 1) + min;
  // }

  function finalPrice(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  //factor que te permite calcular 2 decimales
  let factor = Math.pow(10, 2);

  //calculo de parametros de uber
  // let uberMinPrice = randomMinPrice(1, 2);
  // let uberMaxPrice = randomMaxPrice(3, 4);

  //calculo de parametros de cabify
  // let cabifyMinPrice = randomMinPrice(1, 2);
  // let cabifyMaxPrice = randomMaxPrice(3, 4);

  //calculo final uber
  let uberKmFinalPrice = finalPrice(1, 2);
  uberValue = Math.round(uberKmFinalPrice * factor) / factor;

  let cabifyKmFinalPrice = finalPrice(1, 2);
  cabifyValue = Math.round(cabifyKmFinalPrice * factor) / factor;

  let taxiKmFinalPrice = finalPrice(1, 3)
  taxiValue = Math.round(taxiKmFinalPrice * factor) / factor;
}

function calculateClimatePrice() {
  function randomClimate(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let climate = randomClimate(1, 3);

  if (climate == 1) {
    weatherPrice = 1;
    weatherCondition = "sunny";
  } else if (climate == 2) {
    weatherPrice = 1.5;
    weatherCondition = "rainy";
  } else if (climate == 3) {
    weatherPrice = 2;
    weatherCondition = "snowy";
  }
}

function calculateDemand() {
  let demand;
  function randomDemand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  demand = randomDemand(1, 3);
  if (demand == 1) {
    demandPrice = 0.5;
    demandCondition = "low";
  } else if (demand == 2) {
    demandPrice = 1;
    demandCondition = "regular";
  } else if (demand == 3) {
    demandPrice = 1.5;
    demandCondition = "high";
  }
}

//ver como hacer para que no se cambie cada vez que haces fetch, solo cuando cambia la pagina??

function calculateFinalPrice() {
  let factor = Math.pow(10, 2);
  let unroundedUber = uberValue * weatherPrice * demandPrice;
  let unroundedCabify = cabifyValue * weatherPrice * demandPrice;

  uberFinalValue = Math.round(unroundedUber * factor) / factor;
  cabifyFinalValue = Math.round(unroundedCabify * factor) / factor;
}

function calculatePickUpTime() {
  function randomPickUpTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  if (demandCondition == "low"){
    uberPickUpTime = randomPickUpTime(1, 7);
    cabifyPickUpTime = randomPickUpTime(1, 7);
    taxiPickUpTime = randomPickUpTime(1, 7)
  } else if (demandCondition == "regular"){
    uberPickUpTime = randomPickUpTime(8, 12);
    cabifyPickUpTime = randomPickUpTime(8, 12);
    taxiPickUpTime = randomPickUpTime(8, 12)
  } else if (demandCondition == "high"){
    uberPickUpTime = randomPickUpTime(13, 20);
    cabifyPickUpTime = randomPickUpTime(13, 20);
    taxiPickUpTime = randomPickUpTime(13, 20)
  }

}

//exportar como modulo!! coger desde home, useEffect desde home
export function main() {
  calculateKMPrice();
  calculateClimatePrice();
  calculateDemand();
  calculateFinalPrice();
  calculatePickUpTime();

  const uberDummy = {
    fare: {
      value: uberFinalValue,
      display: `${uberFinalValue}€`,
      currency_code: "EUR",
      company: "uber"
    },
    pickup_estimate: uberPickUpTime, //crear tiempo aleatorio recogida
  };

  const cabifyDummy = {
    fare: {
      value: cabifyFinalValue,
      display: `${cabifyFinalValue}€`,
      currency_code: "EUR",
      company: "cabify"
    },
    pickup_estimate: cabifyPickUpTime, //crear tiempo aleatorio recogida
  };

  const taxiDummy = {
    fare: {
      value: taxiValue,
      display: `${taxiValue}€`,
      currency_code: "EUR",
      company: "taxi"
    },
    pickup_estimate: taxiPickUpTime
  }

  const fareDummy = {
    weather_conditions: weatherCondition,
    demand_conditions: demandCondition,
  };

  return {
    uberDummy,
    cabifyDummy,
    taxiDummy,
    fareDummy,
  };
}

export function calculateTripPrice(companyPrice, distance) {
  //+((price / listprice).toFixed(2))
  //como redondear dos decimales

  const finalTripPriceUnrounded =  companyPrice*distance
  const finalTripPrice =  +((finalTripPriceUnrounded).toFixed(2))

  //((Math.round(companyPrice * distance))* 100) / 100;
  return {
    finalTripPrice,
  };
}
