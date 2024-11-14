import React, { useState } from 'react';
import './Agua.css';

function Agua() {
  const [water, setWater] = useState('');
  const [waterConsumed, setWaterConsumed] = useState(0);

  const handleSubmit = () => {
    // Lógica para atualizar o valor da água consumida
  };

  return (
    <div className="agua-container">
      <h2>Consumação de Água</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Quantidade de Água (ml)" value={water} onChange={(e) => setWater(e.target.value)} />
        <button type="submit">Registrar</button>
      </form>
      <progress value={waterConsumed} max="3000"></progress>
      <p>Água Consumida:</p>
      {/* Listagem de água consumida */}
    </div>
  );
}

export default Agua;
