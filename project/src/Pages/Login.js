import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };

  const handleClick = (event) => {
    localStorage.setItem('user', JSON.stringify({ email: login.email }));
    navigate('/profile');
  };

  return (
    <main>
      <Header />
        <form className='login' onSubmit={ (event) => handleClick(event) }>
          <label htmlFor='email'>
            <h4>Email</h4>
            <input
              type='email'
              placeholder='Digite seu email'
              name='email'
              value={ login.email }
              onChange={ handleInputChange }
              required
            />
          </label>
          <label htmlFor='password'>
            <h4>Password</h4>
            <input
              type='password'
              placeholder='Digite sua senha'
              name='password'
              required
            />
          </label>
          <label htmlFor='button'>
            <input
              type='submit'
              name='button'
              value='Logar'
              required
            />
          </label>
        </form>
      <Footer />
    </main>
  );
}

export default Login;