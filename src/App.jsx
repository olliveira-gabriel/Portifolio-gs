import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/home/home.jsx';
import Natureza from './pages/natureza/Natureza.jsx';
import Humanas from './pages/Humanas.jsx';
import Matematica from './pages/Matematica.jsx';
import './App.css'

function App() {

  return (
    <Router>
      <NavBar/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/natureza" element={<Natureza/>} />
      <Route path="/humanas" element={<Humanas/>} />
      <Route path="/matematica" element={<Matematica/>} />
    </Routes>

  </Router>
  )
}

export default App
