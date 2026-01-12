import React from "react";
import styles from "./Suporte.module.css";
import { Link } from "react-router-dom";
import logGoogle from "../../assets/Google.png";
import logFacebook from "../../assets/Facebook.png";

export default function Suporte() {
  return (
  <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Recuperar Senha</h1>
        <p className={styles.subtitle}>Digite o e-mail cadastrado</p>

        <label className={styles.label}>E-mail</label>
        <input type="email" placeholder="" />

        <button className={styles.btnLogin}>ENVIAR</button>

        <p className={styles.footerText}>
          Não possui uma conta?
          <Link to="/cadastro"> Clique aqui</Link>
        </p>

        <p className={styles.divider}>Ou faça Login com:</p>

        <div className={styles.socialArea}>
          <button className={styles.socialBtn}>
            <img src={logGoogle} alt="Google" />
            
          </button>

          <button className={styles.socialBtn}>
            <img src={logFacebook} alt="Facebook" />
            
          </button>
        </div>
      </div>
    </div>
  );
}
