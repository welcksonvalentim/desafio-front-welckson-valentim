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

  const handleUs = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <section>
      <Header />
      { user ? (
      <section className='profile'>
        <form>
        <label htmlFor="email">
          <input name="email" value={ user.email }  onChange={ handleUs } type="email" required />
        </label>
        <label htmlFor="name">
          <input name="name" value={ user.name } onChange={ handleUs } type="name" required />
        </label>
        <label htmlFor="age">
          <input name="age" value={ user.age } onChange={ handleUs } type="age" required />
        </label>
        <label htmlFor="city">
          <input name="city" value={ user.city} onChange={ handleUs } type="city" required />
        </label>
      </form>
        <button
          type="button"
          onClick={ handleClickExit }
          className="profileButton"
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