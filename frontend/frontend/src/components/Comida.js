import React, { useState } from 'react';
import './Comida.css';

function Comida() {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [foodList, setFoodList] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleFoodSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      item: foodItem,
      quantity: quantity,
      time: new Date().toLocaleTimeString(),
    };
    setFoodList([...foodList, newFood]);

    // Calcule o progresso com base na quantidade consumida
    setProgress((prevProgress) => Math.min(prevProgress + (parseFloat(quantity) / 100) * 100, 100));

    setFoodItem('');
    setQuantity('');
  };

  return (
    <div className="comida-container">
      <h2>Consumo de Comida</h2>

      <div className="input-container">
        <input
          type="text"
          placeholder="Digite o alimento"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantidade (em gramas)"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleFoodSubmit}>Registrar Comida</button>
      </div>

      <div className="progress-container">
        <p>Progresso do consumo</p>
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="food-list">
        <h3>Alimentos Consumidos</h3>
        <ul>
          {foodList.map((food, index) => (
            <li key={index}>
              <span>{food.item} - {food.quantity}g</span> <br />
              <small>{food.time}</small>
            </li>
          ))}
        </ul>
      </div>

      <div className="buttons-container">
        <button onClick={() => window.location.href = "/home"}>Home</button>
        <button onClick={() => window.location.href = "/agua"}>Consumo de Água</button>
        <button className="logout" onClick={() => alert('Deslogado com sucesso!')}>Logout</button>
      </div>
    </div>
  );
}

export default Comida;
