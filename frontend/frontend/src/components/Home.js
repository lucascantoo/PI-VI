import React from 'react';
import './Home.css'; // Certifique-se de que o CSS foi importado corretamente

function Home() {
  return (
    <div className="home-container">
      <h2>Bem-vindo ao Kcal-Culator!</h2>
      <div className="information-box">
        <h3>Dicas para um Estilo de Vida Saudável</h3>
        <p>Mantenha uma alimentação balanceada e beba bastante água todos os dias!</p>
      </div>
      
      <div className="buttons-container">
        <button onClick={() => window.location.href = "/comida"}>Consumo de Comida</button>
        <button onClick={() => window.location.href = "/agua"}>Consumo de Água</button>
        <button className="logout" onClick={() => alert('Deslogado com sucesso!')}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
