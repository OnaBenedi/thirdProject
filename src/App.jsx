import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/user-profile/UserProfile";
import UserTrips from "./components/user-trips/UserTrips";
import Configuracion from "./components/configuracion/Configuracion";
import Home from "./components/home/Home";
import Help from "./components/help/Help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="profile" element={<UserProfile/>}/>
        </Routes>      
    </BrowserRouter>
  );
}

export default App;
