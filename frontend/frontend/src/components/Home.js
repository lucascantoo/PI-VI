import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Controle de Saúde</h1>
      <p>Informações sobre saúde e bem-estar...</p>
      <div className="buttons">
        <button><Link to="/comida">Consumação de Comida</Link></button>
        <button><Link to="/agua">Consumação de Água</Link></button>
        <button><Link to="/logout">Logout</Link></button>
      </div>
    </div>
  );
}

export default Home;