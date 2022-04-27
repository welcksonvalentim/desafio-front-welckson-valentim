function Login() {
  return (
    <main>
      <h1>test</h1>
        <form>
          <label htmlFor="email">
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
              value="Entrar"
              onClick
            />
          </label>
        </form>
    </main>
  );
}

export default Login;