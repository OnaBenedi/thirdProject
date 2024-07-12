import { useEffect, useState } from "react";
import { calculateTripPrice } from "../../data/uberdummy";
//, cabifyKmPrice, distance
function Comparator({uberData, cabifyData, distance, time}) {
    const [uberPrice, setUberPrice] = useState();
    const [cabifyPrice, setCabifyPrice] = useState();
    //const {} = calculateTripPrice();


    //setUberPrice()
useEffect(()=>{
    setUberPrice(calculateTripPrice(uberData.fare.value, distance))
    setCabifyPrice(calculateTripPrice(cabifyData.fare.value, distance))
}, [])


  return (
    <div>
        Duración del trayecto: {time}
        <div>
             {uberPrice ? `Precio de tu viaje con Uber: ${uberPrice.finalTripPrice} ${uberData.fare.currency_code}
            El conductor tardará aproximadamente: ${uberData.pickup_estimate} minutos en llegar` : null}
        </div>
        <div>
        { cabifyPrice ? `Precio de tu viaje con Cabify: ${cabifyPrice.finalTripPrice} ${cabifyData.fare.currency_code}
        El conductor tardará aproximadamente: ${cabifyData.pickup_estimate} minutos en llegar`: null}
        </div>

    </div>
  )
}

export default Comparator