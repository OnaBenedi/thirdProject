import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/user-profile/UserProfile";
import Login from "./components/pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="profile" element={<UserProfile/>}/>
        <Route path="login" element={<Login/>}/>
        </Routes>      
    </BrowserRouter>
  );
}

export default App;
