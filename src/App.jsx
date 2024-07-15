import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/user-profile/UserProfile";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup.jsx"


function App() {
  // PRUEBAS USUARIOS

  // const [user, setUser] = useState(null);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // useEffect(() => {
  //   const savedUser = Cookies.get('user');
  //   if (savedUser) {
  //     setUser(JSON.parse(savedUser));
  //   }
  // }, []);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const user = { email, password }; // Normally, you'd validate these credentials
  //   setUser(user);
  //   Cookies.set('user', JSON.stringify(user), { expires: 7 });
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="profile" element={<UserProfile/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
