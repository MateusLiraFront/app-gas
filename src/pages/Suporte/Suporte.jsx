import React from "react";
import "./Suporte.css";
import { Link } from "react-router-dom";
import logGoogle from "../../assets/Google.png";
import logFacebook from "../../assets/Facebook.png";

export default function Suporte() {
  return (
    <div className="login-container">
      <div className="login-box">

        <h1 className="title">Recuperar Senha</h1>
        <p className="subtitle">Digite o e-mail cadastrado</p>

        <label className="label">E-mail</label>
        <input type="email" placeholder="" />

        <button className="btn-login">ENVIAR</button>

        <p className="footer-text">
          Não possui uma conta?
          <Link to="/cadastro"> Clique aqui</Link>
        </p>

        <p className="divider">Ou faça Login com:</p>

        <div className="social-area">
          <button className="social-btn">
            <img src={logGoogle} alt="Google" />
            Google
          </button>

          <button className="social-btn">
            <img src={logFacebook} alt="Facebook" />
            Facebook
          </button>
        </div>

      </div>
    </div>
  );
}
