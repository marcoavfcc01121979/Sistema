import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Header from '../../components/Header';
import Title from '../../components/Title';

// import { Container } from './styles';
import './styles.css'

function New() {
  const [assunto, setAssunto] = useState('Suporte');
  const [status, setStatus] = useState('Aberto');
  const [complemento, setComplemento] = useState('');

  function handleRegister(e) {
      e.preventDefault()

      console.log('Clicou')
  }

  function handleChangeSelect(e) {
      e.preventDefault();

      setAssunto(e.target.value);
  }

  function handleOptionChange(e) {
    setStatus(e.target.value);  
  }
  
  return(
      <div>
          <Header />

          <div className="content">
              <Title name="Novo chamado">
                <FiPlus size={25} />
              </Title>

              <div className="container">
                <form className="form-profile" onSubmit={handleRegister}>
                    <label>Cliente</label>
                    <select>
                        <option key={1} value={1}>
                            Sujeito Programador
                        </option>
                    </select>

                    <label>Assunto</label>
                    <select value={assunto} onChange={handleChangeSelect}>
                        <option value="Suporte">
                            Suporte
                        </option>
                        <option value="Visita técnica">
                            Visita técnica
                        </option>
                        <option value="Financeiro">
                            Financeiro
                        </option>
                    </select>

                    <label>Status</label>
                    <div className="status">
                        <input 
                            type="radio"
                            name="radio"
                            value="Aberto"
                            onChange={handleOptionChange}
                            checked={status === 'Aberto'}
                        />
                        <span>Em Aberto</span>

                        <input 
                            type="radio"
                            name="radio"
                            value="Progresso"
                            onChange={handleOptionChange}
                            checked={status === 'Progresso'}
                        />
                        <span>Progresso</span>

                        <input 
                            type="radio"
                            name="radio"
                            value="Atendido"
                            onChange={handleOptionChange}
                            checked={status === 'Atendido'}
                        />
                        <span>Atendido</span>
                    </div>

                    <label>Complemento</label>
                    <textarea
                        type="text"
                        placeholder="Descreva seu problema (opcional)."
                        value={(e) => setComplemento(e.target.value)}
                    />

                    <button type="submit">Salvar</button>
                </form>
              </div>
          </div>
      </div>
  );
}

export default New;