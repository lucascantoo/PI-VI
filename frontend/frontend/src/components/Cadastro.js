import React, { useState } from 'react';
import masculinoIcon from '../assets/masculino.png'; // Importando o ícone masculino
import femininoIcon from '../assets/feminino.png';   // Importando o ícone feminino
import './Cadastro.css'; // Certifique-se de que o CSS está correto

function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, gender, weight, height });
  };

  const handleGenderClick = (selectedGender) => {
    setGender(selectedGender); // Atualiza o gênero selecionado
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="gender-options">
          {/* Usando as imagens importadas */}
          <img
            src={masculinoIcon}
            alt="Masculino"
            className={`gender-icon ${gender === 'Masculino' ? 'selected' : ''}`}
            onClick={() => handleGenderClick('Masculino')}
          />
          <img
            src={femininoIcon}
            alt="Feminino"
            className={`gender-icon ${gender === 'Feminino' ? 'selected' : ''}`}
            onClick={() => handleGenderClick('Feminino')}
          />
        </div>
        <input
          type="number"
          placeholder="Peso"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Altura"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
        <p>
          Já tem uma conta? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Cadastro;
