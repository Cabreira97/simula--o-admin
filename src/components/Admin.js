// src/components/Admin.js

import React, { useEffect, useState } from 'react';
import './Admin.css'; // Importando o arquivo de estilo

const Admin = () => {
  const [joke, setJoke] = useState('');

  const fetchRandomJoke = () => {
    fetch('http://localhost:3000/jokes/random')
      .then(response => response.text())
      .then(data => setJoke(data))
      .catch(err => console.error(err));
  };

  return (
    <div className="admin-container">
      <h1>Admin - Piadas do Chuck Norris</h1>
      <div className="joke-section">
        <h2>Obter uma Piada Aleatória</h2>
        {joke && <p className="joke">{joke}</p>}
        <button onClick={fetchRandomJoke}>Randomizar Piada</button>
      </div>
    </div>
  );
};

export default Admin;
