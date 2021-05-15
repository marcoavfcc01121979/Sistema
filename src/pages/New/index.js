import React from 'react';
import { FiPlus } from 'react-icons/fi';
import Header from '../../components/Header';
import Title from '../../components/Title';

// import { Container } from './styles';
import './styles.css'

function New() {
  function handleRegister(e) {
      e.preventDefault()

      console.log('Clicou')
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

                    <label>Cliente</label>
                    <select>
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
                        />
                        <span>Em Aberto</span>

                        <input 
                            type="radio"
                            name="radio"
                            value="Progresso"
                        />
                        <span>Progresso</span>

                        <input 
                            type="radio"
                            name="radio"
                            value="Atendido"
                        />
                        <span>Atendido</span>
                    </div>

                    <label>Complemento</label>
                    <textarea
                        type="text"
                        placeholder="Descreva seu problema (opcional)."
                    />

                    <button type="submit">Salvar</button>
                </form>
              </div>
          </div>
      </div>
  );
}

export default New;