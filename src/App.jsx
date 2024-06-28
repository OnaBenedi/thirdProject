import "./App.css";
import Home from "./components/home/Home";


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
