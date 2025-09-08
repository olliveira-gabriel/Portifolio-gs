import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/home/Home.jsx'
import Natureza from './pages/Natureza/Natureza.jsx';
import './App.css'

function App() {

  return (
    <Router>
      <NavBar/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/natureza" element={<Natureza/>} />
    </Routes>

  </Router>
  )
}

export default App
