import React, { useContext, useState } from 'react';
import { FiSettings, FiUpload } from 'react-icons/fi'

import Header from '../../components/Header';
import Title from '../../components/Title';

import avatar from '../../assets/avatar.png'
// import { Container } from './styles';
import firebase from '../../services/firebaseConnection';


import './style.css';
import { AuthContext } from '../../contexts/auth';

function Profile() {
  const { user, signOut, setUser, storageUser } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);

  async function handleUpload() {

  }

  async function handleSave(e) {
      e.preventDefault();

      if(imageAvatar === null && name !== ''){
        await firebase.firestore().collection('users')
        .doc(user.uid)
        .update({
            name: name
        }).then(() => {
            let data = {
                ...user,
                name: name
            };
            setUser(data);
            storageUser(data);
        })
      }
      else if(name !== '' && imageAvatar !== null) {
          handleUpload();
      }
  }

  return(
      <div>
          <Header />
          
          <div className="content">
            <Title name="Meu Perfil">
                <FiSettings size={25} />
            </Title>

            <div className="container">
                <form className="form-profile" onSubmit={handleSave}>
                    <label className="label-avatar">
                        <span><FiUpload color="#FFF" size={25} /></span>
                        <input type="file" accept="image/*" onChange={handleFile} /><br/>
                        {avatarUrl === null ? 
                            <img src={avatar} width="250" height="250" alt="Foto de perfil do usuario." />
                            : 
                            <img src={avatarUrl} width="250" height="250" alt="Foto de perfil do usuario." />
                        } 
                    </label>

                    <label>
                        Nome
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    <label>
                        Email
                    </label>
                    <input type="text" value={email} disabled={true} />
                    <button type="submit">Salvar</button>
                </form>
            </div>
            <div className="container">
                <button className="logout-btn" onClick={() => signOut()}>
                    Sair
                </button>
            </div>
          </div>
      </div>
  );
}

export default Profile;