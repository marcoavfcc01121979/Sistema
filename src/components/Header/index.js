import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import './style.css';

import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom';
// import { Container } from './styles';

import { FiHome, FiSettings, FiUser } from 'react-icons/fi'

function Header() {
  const { user } = useContext(AuthContext)
  return(
      <div className="sidebar">
          <div>
              <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt="Foto avatar" />
          </div>

          <Link to="/dashboard">
            <FiHome color="#FFF" size={24} />
            Chamadas
          </Link>
          <Link to="/customers">
            <FiUser color="#FFF" size={24} />
            Clientes
          </Link>
          <Link to="/profile">
            <FiSettings color="#FFF" size={24} />
            Configurações
          </Link>
      </div>
  );
}

export default Header;