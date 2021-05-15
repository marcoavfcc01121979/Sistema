import React, { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import Title from '../../components/Title';
import firebase from '../../services/firebaseConnection'

// import { Container } from './styles';
import './styles.css'

function Customers() {
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');

  async function handleAdd(e) {
      e.preventDefault();

      if(nomeFantasia !== '' && cnpj !== '' && endereco !== '') {
        await firebase.firestore().collection('customers')
        .add({
          nomeFantasia: nomeFantasia,
          cnpj: cnpj,
          endereco: endereco
        })
        .then(() => {
          setNomeFantasia('');
          setCnpj('');
          setEndereco('');
          toast.info('Empresa cadastrada com sucesso!');
        })
        .catch((error) => {
          console.log(error);
          toast.error('Erro ao cadastrar essa empresa.');
        })
      } else {
        toast.error('Preencha todos os campos!')
      }
  }

  return(
      <div>
          <Header />

          <div className="content">
              <Title name="Clientes">
                <FiUser size={25} />
              </Title>

              <div className="container">
                <form className="form-profile customers" onSubmit={handleAdd}>
                    <label>Nome Fantasia</label>
                    <input type="text" placeholder="Nome da sua empresa" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} />

                    <label>Cnpj</label>
                    <input type="text" placeholder="Seu Cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

                    <label>Nome Fantasia</label>
                    <input type="text" placeholder="Endereço da empresa" value={endereco} onChange={(e) => setEndereco(e.target.value)} />

                    <button type="submit">Cadastrar</button>
                </form>
              </div>
          </div>
      </div>
      
  );
}

export default Customers;