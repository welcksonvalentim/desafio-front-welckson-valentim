import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Login() {
  return (
    <main>
      <Header />
        <form>
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              className="input-name"
              type="text"
              placeholder="Digite seu email"
              name="email"
              required
              value="Email"
            />
          </label>
          <label htmlFor="password">
            <h4>Password</h4>
            <input
              className="input-password"
              type="text"
              placeholder="Digite sua senha"
              name="password"
              required
              value="Password"
            />
          </label>
          <label htmlFor="login-submit-button">
            <input
              className="button-input"
              type="button"
              name="buttonSubmit"
              required
              value="Logar"
              onClick
            />
          </label>
        </form>
      <Footer />
    </main>
  );
}

export default Login;