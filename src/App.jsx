import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/user-profile/UserProfile";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup.jsx";
import Configuracion from "./components/configuracion/Configuracion.jsx";
import Trips from "./components/trips/Trips.jsx";
import Payment from "./components/payment-method/Payment.jsx";
import Error404 from "./components/pages/Error404.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="config" element={<Configuracion />} />
        <Route path="trips" element={<Trips />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
