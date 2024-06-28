let uberValue;
let cabifyValue;

//"api" uber/cabify pedirle el precio km, la app es la que te hace el calculo del precio del servicio (precio km, precio clima y precio demanda)
//app calcula precio final en si usando distancia, tiempo, precio servicio
function calculateKMPrice() {
  //functiones que te calculan precio minimo, precio maximo y precio final
  function randomMinPrice(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  function randomMaxPrice(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  function finalPrice(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  //factor que te permite calcular 2 decimales
  let factor = Math.pow(10, 2);

  //calculo de parametros de uber
  let uberMinPrice = randomMinPrice(1, 3);
  let uberMaxPrice = randomMaxPrice(4, 6);

  //calculo de parametros de cabify
  let cabifyMinPrice = randomMinPrice(1, 3);
  let cabifyMaxPrice = randomMaxPrice(4, 6);

  //calculo final uber
  let uberFinalPrice = finalPrice(uberMinPrice, uberMaxPrice);
  let uberFinalRounded = Math.round(uberFinalPrice * factor) / factor;

  let cabifyFinalPrice = finalPrice(cabifyMinPrice, cabifyMaxPrice);
  let cabifyFinalRounded = Math.round(cabifyFinalPrice * factor) / factor;

  return { uberFinalRounded, cabifyFinalRounded };
}

calculateKMPrice();

function populateValues() {
  value = distance * Math.floor(Math.random() * (10 - 5 + 1) + 5);
}

populateValues();
const dataDummy = {
  fare: {
    value: value,
    display: `${value}€`,
    currency_code: "EUR",
  },
  pickup_estimate: 4, //crear tiempo aleatorio recogida
};

console.log(dataDummy);
