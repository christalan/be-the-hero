import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import './styles.css';

export default function Logon() {
  const [id, setId] = useState();
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile')
    } catch (err) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div class="logon-container">
      <section class="form">
        <img src={logo} alt="Be the Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
            required
          />
          <button type="submit" class="button">Entrar</button>

          <Link class="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} class="heroes-img" />
    </div>
  );

}