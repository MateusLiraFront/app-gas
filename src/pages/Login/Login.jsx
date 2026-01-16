import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import logGoogle from "../../assets/Google.png";
import logFacebook from "../../assets/Facebook.png";
import logo from "../../assets/logo-header-light.png";

export default function Login() {
  const [tipo, setTipo] = useState("");

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>

      <img
         src={logo}
         alt="logo-header-light.png"
         className={styles.logo}
         /> 
      
        <div className={styles.formArea}>

        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="E-mail"
          className={styles.input}
        />

        <label htmlFor="tipo" className={styles.label}>
          Tipo de conta
        </label>
        <select
          id="tipo"
          className={styles.selectTipo}
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="Usuário Comum" disabled>
          </option>
          <option value="Usuário Comum">Usuário Comum</option>
          <option value="Gestor de Cliente">Gestor de Cliente</option>
        </select>

        <label htmlFor="senha" className={styles.label}>
          Senha
        </label>
        <input
          id="senha"
          type="password"
          placeholder="Senha"
          className={styles.inputSenha}
        />

        </div>

        <Link className={styles.forgot} to="/suporte">
          Esqueceu sua Senha?{" "}
          <span className={styles.linkText}>Recupere aqui</span>
        </Link>

        <Link className={styles.btnLogin} to="/home">
          ENTRAR
        </Link>

        <p className={styles.footerText}>
        Não possui uma conta?
          <Link to="/cadastro" className={styles.linkText}>  
          Clique aqui
          </Link>
        </p>

        <div className={styles.divisorLogin}>
          ou faça Login com:
        </div>

        <div className={styles.social_area}>
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



