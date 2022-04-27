import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css';

function Login() {
  return (
    <main>
      <Header />
        <form className='login'>
          <label htmlFor='email'>
            <h4>Email</h4>
            <input
              type='text'
              placeholder='Digite seu email'
              name='email'
              required
            />
          </label>
          <label htmlFor='password'>
            <h4>Password</h4>
            <input
              type='text'
              placeholder='Digite sua senha'
              name='password'
              required
            />
          </label>
          <button>Logar</button>
        </form>
      <Footer />
    </main>
  );
}

export default Login;