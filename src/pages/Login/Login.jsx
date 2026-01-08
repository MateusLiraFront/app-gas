
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">

        <h1 className="title">Login</h1>

        <p className="subtitle">Login com:</p>

        <div className="social-area">
          <button className="social-btn google">
            <img src="/Google.png" alt="Google" />
            Google
          </button>

          <button className="social-btn facebook">
            <img src="/Facebook.png" alt="Facebook" />
            Facebook
          </button>
        </div>

        <p className="subtitle">Login com Email e Senha:</p>

        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <Link className="forgot" to="/suporte">
          Esqueceu Email ou Senha?
        </Link>

        <button className="btn-login">ENTRAR</button>

        <p className="footer-text">
          Não possui uma conta?
          <Link to="/cadastro"> Clique aqui</Link>
        </p>

      </div>
    </div>
  );
}
