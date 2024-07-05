import { useState } from "react";
import { calculateTripPrice } from "../../data/uberdummy";
//, cabifyKmPrice, distance
function Comparator({uberKmPrice, distance}) {
   // const [uberPrice, setUberPrice] = useState();
    // const [cabifyPrice, setCabifyPrice] = useState();
    const {} = calculateTripPrice();
    let uberPrice = calculateTripPrice(uberKmPrice, distance)
    //setUberPrice()

    console.log(uberPrice.finalTripPrice);
    

  return (
    <div>
        <div>UBER PRICE
            {uberPrice.finalTripPrice}
        </div>
        <div>CABIFY PRICE</div>
        <div>TAXI PRICE</div>
    </div>
  )
}

export default Comparator