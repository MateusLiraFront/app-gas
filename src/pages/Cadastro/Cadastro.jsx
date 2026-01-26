import React, { useState } from "react";
import styles from "./Cadastro.module.css";
import logGoogle from "../../assets/Google.png";
import logFacebook from "../../assets/Facebook.png";
import logo from "../../assets/logo-header-light.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("Usuário Comum");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const API_BASE = import.meta.env.VITE_API_URL || "/api";

  const handleCadastrar = async () => {
    if (!email || !senha) {
      setErrorMessage("Preencha e-mail e senha.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const isAdmin = tipo !== "Usuário Comum";
    const endpoint = isAdmin ? "/admin/register" : "/auth/register";
    const nomeFallback = email.split("@")[0] || "Usuario";

    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nomeFallback,
          email,
          senha,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Erro ao cadastrar");
      }

      const nomeRegistrado = data.name || data.nome || nomeFallback;
      localStorage.setItem(
        "user",
        JSON.stringify({
          nome: nomeRegistrado,
          endereco: "",
          email,
          senha,
          tipo,
        }),
      );

      setShowModal(true);
    } catch (error) {
      setErrorMessage(error.message || "Erro ao cadastrar");
    } finally {
      setIsLoading(false);
    }
  };

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
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMessage) setErrorMessage("");
            }}
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
            onChange={(e) => {
              setSenha(e.target.value);
              if (errorMessage) setErrorMessage("");
            }}
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
          onClick={handleCadastrar}
          disabled={isLoading}
        >
          {isLoading ? "CADASTRANDO..." : "CADASTRAR"}
        </button>

        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

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
