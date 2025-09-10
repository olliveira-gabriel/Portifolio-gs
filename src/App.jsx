import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/home/Home.jsx";
import Natureza from './pages/Natureza/Natureza.jsx';
import Humanas from './pages/Humanas.jsx';
import Matematica from './pages/Matematica.jsx';
import Linguagens from './pages/Linguagens.jsx';
import DesenvolvimentoSistemas from './pages/DesenvolvimentoSistemas.jsx';
import BancoDados from './pages/BancoDados.jsx';

import './App.css'

function App() {

  return (
    <Router>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/natureza" element={<Natureza/>} />
      <Route path="/humanas" element={<Humanas/>} />
      <Route path="/matematica" element={<Matematica/>} />
      <Route path="/linguagens" element={<Linguagens/>} />
      <Route path="/desenvolvimento-de-sistemas" element={<DesenvolvimentoSistemas/>} />
      <Route path="/banco-de-dados" element={<BancoDados/>} />
    </Routes>

  </Router>
  )
}

export default App
