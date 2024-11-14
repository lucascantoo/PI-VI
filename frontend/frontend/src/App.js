import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './components/Cadastro'; // Importando o componente de Cadastro
import Login from './components/Login';       // Importando o componente de Login
import Home from './components/Home';         // Importando o componente Home
import Comida from './components/Comida';     // Importando o componente Comida
import Agua from './components/Agua';         // Importando o componente Água

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/comida" element={<Comida />} />
          <Route path="/agua" element={<Agua />} />
          {/* Página padrão */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;