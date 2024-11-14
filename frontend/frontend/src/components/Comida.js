import React, { useState } from 'react';
import './Comida.css';

function Comida() {
  const [food, setFood] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState(0);

  const handleSubmit = () => {
    // Lógica para buscar calorias no banco e atualizar a barra de progresso
  };

  return (
    <div className="comida-container">
      <h2>Consumação de Comida</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Alimento" value={food} onChange={(e) => setFood(e.target.value)} />
        <input type="number" placeholder="Quantidade" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button type="submit">Registrar</button>
      </form>
      <progress value={calories} max="1000"></progress>
      <p>Comidas Registradas:</p>
      {/* Listagem de alimentos consumidos */}
    </div>
  );
}

export default Comida;
