import React, { useState } from "react";
import styles from "./Cadastro.module.css";
import { Link } from "react-router-dom";
import logGoogle from "../../assets/Google.png";
import logFacebook from "../../assets/Facebook.png";
import logo from "../../assets/logo-header-light.png";

export default function Login() {
  const [tipo, setTipo] = useState("");

  return (
    <div className={styles.cadastroContainer}>
      <div className={styles.cadastroBox}>
        <picture alt="logo-header-light.png" className={styles.logo}>
          <source media="(min-hight: 800px)" srcset="" />
          <img src={logo} alt="logo-header-light.png" className={styles.logo} />
        </picture>

        <h1 className={styles.titulo}>Cadastrar</h1>

        <div className={styles.cadastroform}>
          <label htmlFor="email" className={styles.label}>
            E-mail
          </label>

          <input
            id="email"
            type="email"
            placeholder="seuemail@mail.com"
            className={styles.input}
          />

          <label htmlFor="senha" className={styles.label}>
            Senha
          </label>
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            className={styles.inputSenha}
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
            <option value="Usuário Comum">Usuário Comum</option>
            <option value="Gestor de Cliente">Gestor de Cliente</option>
          </select>
        </div>

        <Link className={styles.btnCadastrar} to="/home">
          CADASTRAR
        </Link>

        <div className={styles.divisorLogin}>ou faça Login com:</div>

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
