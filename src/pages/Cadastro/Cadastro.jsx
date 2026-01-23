import React, { useState } from "react";
import styles from "./Cadastro.module.css";
import { Link } from "react-router-dom";
import logGoogle from "../../assets/Google.png";
import logFacebook from "../../assets/Facebook.png";
import logo from "../../assets/logo-header-light.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("Usuário Comum");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  return (
    <div className={styles.cadastroContainer}>
      <div className={styles.cadastroBox}>
        <picture alt="logo-header-light.png" className={styles.logo}>
          <source media="(min-hight: 800px)" />
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha" className={styles.label}>
            Senha
          </label>
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            className={styles.inputSenha}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
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

        <button
          className={styles.btnCadastrar}
          onClick={() => {
            if (!email || !senha) return;
            setShowModal(true);
          }}
        >
          CADASTRAR
        </button>

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
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Cadastro realizado!</h2>

            <p>
              Tipo de conta:
              <br />
              <strong className={styles.tipoConta}>{tipo}</strong>
            </p>

            <button
              className={styles.modalBtn}
              onClick={() => {
                localStorage.setItem("hasGas", "false");
                navigate("/perfil", {
                  state: { email, senha },
                });
              }}
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
