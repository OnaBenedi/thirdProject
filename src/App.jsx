import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './components/pages/Login.jsx'
import Home from './components/pages/Home.jsx'

function App() {
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
