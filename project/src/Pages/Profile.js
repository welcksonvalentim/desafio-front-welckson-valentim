import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Mock/mockAPI.json';
import '../App.css';

function Profile() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const handleClickExit = () => {
    localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    async function findUsers() {
      const emailLogin = await JSON.parse(localStorage.getItem('user'));
      const mockAPI = [
        {
          email: "admin@admin.com.br",
          name: "admin",
          age: 25,
          city: "BH"
        },
        {
          email: "validate@validate.com.br",
          name: "validate",
          age: 30,
          city: "SP"
        }
      ];
      const findUserIndb = mockAPI.find((user) => user.email === emailLogin.email);
      setUser(findUserIndb);
    }
    findUsers();
  }, []);


  return (
    <section>
      <Header />
      { user ? (
      <section className="settingSectionPerfil">
        <h4>{user.email}</h4>
        <h4>{user.name}</h4>
        <h4>{user.age}</h4>
        <h4>{user.city}</h4>
        <button
          type="button"
          onClick={ handleClickExit }
          className="settingSectionPerfilButtonExit"
        >
          Sair
        </button>
      </section>
      ) : <h4>Usuário não cadastrado</h4>}
      <Footer />
    </section>
  );
}

export default Profile;