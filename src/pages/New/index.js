import React, { useContext, useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/auth';

// import { Container } from './styles';
import './styles.css'
import firebase from '../../services/firebaseConnection'

function New() {
  const [loadCustomers, setLoadCustomers] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [customerSelected, setCustomerSelected] = useState(0);

  const [assunto, setAssunto] = useState('Suporte');
  const [status, setStatus] = useState('Aberto');
  const [complemento, setComplemento] = useState('');

  const { user } = useContext(AuthContext)

  useEffect(() => {
      async function loadCustomers() {
        await firebase.firestore().collection('customers')
            .get()
            .then((snapshot) => {
                let lista = [];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nomeFantasia: doc.data().nomeFantasia
                    })
                })
                if(lista.length === 0) {
                    console.log('NENHUMA EMPRESA ENCONTRADA');
                    setCustomers([ { id: '1', nomeFantasia: 'FREELA' } ]);
                    setLoadCustomers(false);
                    return;
                }

                setCustomers(lista);
                setLoadCustomers(false);
            })
            .catch((error) => {
                console.log('Deu algum erro!', error);
                setLoadCustomers(false);
                setCustomers([ { id: '1', nomeFantasia: '' } ]);
            })
      }

      loadCustomers();
  })

  function handleRegister(e) {
      e.preventDefault()

      console.log('Clicou')
  }

  // Chamado quando troca o assunto
  function handleChangeSelect(e) {
      e.preventDefault();

      setAssunto(e.target.value);
  }

  // Chamado quando troca o status
  function handleOptionChange(e) {
    setStatus(e.target.value);  
  }

  // chamado quando troca o cliente
  function handleChangeCustomers(e){
      //console.log(e.target.value);
      setCustomerSelected(e.target.value);

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
                    {loadCustomers ? (
                        <input type="text" disabled={true} value="Carregando clientes..." />
                    ) : (
                        <select value={customerSelected} onChange={handleChangeCustomers}>
                            {customers.map((item, index) => {
                                return(
                                    <option key={item.id} value={index}>
                                        {item.nomeFantasia}
                                    </option>
                                )
                            })}
                        </select>
                    )}
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