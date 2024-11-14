import React, { useState } from 'react';
import './Agua.css';

function Agua() {
  const [waterAmount, setWaterAmount] = useState('');
  const [waterList, setWaterList] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleWaterSubmit = (e) => {
    e.preventDefault();
    const newWater = {
      amount: waterAmount,
      time: new Date().toLocaleTimeString(),
    };
    setWaterList([...waterList, newWater]);

    // Calcule o progresso com base na quantidade de água consumida
    setProgress((prevProgress) => Math.min(prevProgress + (parseFloat(waterAmount) / 2000) * 100, 100));

    setWaterAmount('');
  };

  return (
    <div className="agua-container">
      <h2>Consumo de Água</h2>

      <div className="input-container">
        <input
          type="number"
          placeholder="Quantidade (em ml)"
          value={waterAmount}
          onChange={(e) => setWaterAmount(e.target.value)}
        />
        <button onClick={handleWaterSubmit}>Registrar Água</button>
      </div>

      <div className="progress-container">
        <p>Progresso do consumo</p>
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="water-list">
        <h3>Água Consumida</h3>
        <ul>
          {waterList.map((water, index) => (
            <li key={index}>
              <span>{water.amount} ml</span> <br />
              <small>{water.time}</small>
            </li>
          ))}
        </ul>
      </div>

      <div className="buttons-container">
        <button onClick={() => window.location.href = "/home"}>Home</button>
        <button onClick={() => window.location.href = "/comida"}>Consumo de Comida</button>
        <button className="logout" onClick={() => alert('Deslogado com sucesso!')}>Logout</button>
      </div>
    </div>
  );
}

export default Agua;
