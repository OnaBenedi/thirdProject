import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './components/pages/Login.jsx'
import Home from './components/pages/Home.jsx'
import Cookies from 'js-cookie'

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
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
