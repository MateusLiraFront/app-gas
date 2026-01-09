import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import GoogleLogo from "../../assets/Google.png";
import FacebookLogo from "../../assets/Facebook.png";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">

        <h1 className="title">Login</h1>

        <p className="subtitle">Login com:</p>

        <div className="social-area">
          <button className="social-btn google">
            <img src={GoogleLogo} alt="Login com Google" />
          </button>

          <button className="social-btn facebook">
            <img src={FacebookLogo} alt="Login com Facebook" />
          </button>
        </div>

        <p className="subtitle">Login com Email e Senha:</p>

        <input className="input" type="email" placeholder="E-mail" />
        <input className="input" type="password" placeholder="Senha" />

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



