import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/user-profile/UserProfile";
//dotenv? para almacenar api key

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
