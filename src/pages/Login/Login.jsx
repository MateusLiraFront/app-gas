
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logGoogle from '../../assets/Google.png';
import logFacebook from '../../assets/Facebook.png';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">

        <h1 className="title">Login</h1>

        <p className="subtitle">Login com:</p>

        <div className="social-area">
          <button className="social-btn google">
            <img src={logGoogle} alt="Google" />
            
          </button>

          <button className="social-btn facebook">
            <img src={logFacebook} alt="Facebook" />
          
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
