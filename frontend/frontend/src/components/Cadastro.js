import React, { useState } from 'react';
import api from '../services/api';  // Importando a configuração do Axios

function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      gender,
      weight,
      height,
    };
    try {
      const response = await api.post('/users', userData); // Fazendo a requisição POST
      console.log(response.data);  // Exibe a resposta
      // Redirecionar para login ou outra página
    } catch (error) {
      console.error('Erro ao cadastrar o usuário:', error);
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <div className="gender-options">
          <label>Masculino</label>
          <input type="radio" value="Masculino" checked={gender === 'Masculino'} onChange={() => setGender('Masculino')} />
          <label>Feminino</label>
          <input type="radio" value="Feminino" checked={gender === 'Feminino'} onChange={() => setGender('Feminino')} />
        </div>
        <input type="number" placeholder="Peso" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        <input type="number" placeholder="Altura" value={height} onChange={(e) => setHeight(e.target.value)} required />
        <button type="submit">Cadastrar</button>
        <p>Já tem uma conta? <a href="/login">Login</a></p>
      </form>
    </div>
  );
}

export default Cadastro;
