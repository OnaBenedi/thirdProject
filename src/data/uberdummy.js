let value;
let distance; 

function populateValues(){
    
    distance = Math.random();
    value = distance * (Math.floor(Math.random() * (10 - 5 + 1) + 5));
}

populateValues()
const dataDummy = {
  fare: {
    value: value,
    display: `${value}$`,
    currency_code: "USD",
  },
  trip: {
    distance_unit: "km",
    duration_estimate: 600,
    distance_estimate: distance,
  },
  pickup_estimate: 4,
};

console.log(dataDummy);
