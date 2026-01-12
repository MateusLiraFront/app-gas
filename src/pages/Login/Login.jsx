import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import logGoogle from "../../assets/Google.png";
import logFacebook from "../../assets/Facebook.png";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1>Login</h1>
        <label className={styles.subtitle}>Login com:</label>

        <div className={styles.socialArea}>
          <button className={`${styles.socialBtn} ${styles.google}`}>
            <img src={logGoogle} alt="Google" />
          </button>

          <button className={`${styles.socialBtn} ${styles.facebook}`}>
            <img src={logFacebook} alt="Facebook" />
          </button>
        </div>

        <p className={styles.subtitle}>Login com Email e Senha:</p>

        <div className={styles.displayInput}>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
        </div>

        <Link className={styles.forgot} to="/suporte">
          Esqueceu Email ou Senha?
        </Link>

        <Link className={styles.btnLogin} to="/home">
          ENTRAR
        </Link>

        <p className={styles.footerText}>
          Não possui uma conta?
          <Link to="/cadastro"> Clique aqui</Link>
        </p>
      </div>
    </div>
  );
}
