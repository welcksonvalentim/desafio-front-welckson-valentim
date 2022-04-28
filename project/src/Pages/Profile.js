import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

function Profile() {
  const emailLogin = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const handleClickExit = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <section>
      <Header />
      <section className="settingSectionPerfil">
        <h4 className="settingSectionPerfilTitle">
          {emailLogin !== null && emailLogin.email}
        </h4>
        <button
          type="button"
          onClick={ handleClickExit }
          className="settingSectionPerfilButtonExit"
        >
          Sair
        </button>
      </section>
      <Footer />
    </section>
  );
}

export default Profile;