import React, { useState } from "react";
import styles from "./Suporte.module.css";
import { Link } from "react-router-dom";
import logGoogle from "../../assets/Google.png";
import logFacebook from "../../assets/Facebook.png";
import logo from "../../assets/logo-header-light.png";
import { useNavigate } from "react-router-dom";

export default function Suporte() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("Usuário Comum");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const API_BASE = import.meta.env.VITE_API_URL || "/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage("Informe o e-mail.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const isAdmin = tipo !== "Usuário Comum";
    const endpoint = isAdmin
      ? "/admin/auth/forgot-password"
      : "/auth/forgot-password";

    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Erro ao enviar email");
      }

      setShowModal(true);
    } catch (error) {
      setErrorMessage(error.message || "Erro ao enviar email");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login com ${provider}`);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <picture alt="logo-header-light.png" className={styles.logo}>
          <source media="(min-hight: 800px)" srcset="" />
          <img src={logo} alt="logo-header-light.png" className={styles.logo} />
        </picture>

        <h1 className={styles.title}>Recuperar Senha</h1>
        <p className={styles.subtitle}></p>

        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">
            Digite o e-mail cadastrado
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMessage) setErrorMessage("");
            }}
            required
          />

          <label className={styles.label} htmlFor="tipo">
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

          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}

          <button
            className={styles.btnLogin}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "ENVIANDO..." : "ENVIAR"}
          </button>
        </form>

        <p className={styles.register}>
          Não possui uma conta?
          <Link to="/cadastro" className={styles.register}>
            {" "}
            Clique aqui
          </Link>
        </p>

        <div className={styles.return} onClick={() => navigate(-1)}>
          <i className={`fa-solid fa-angle-left ${styles.arrow}`} />
          <p>Voltar para tela de Login</p>
        </div>

        <p className={styles.divider}>Ou entrar com:</p>

        <div className={styles.socialArea}>
          <button
            className={styles.socialBtn}
            onClick={() => handleSocialLogin("Google")}
            aria-label="Login com Google"
          >
            <img src={logGoogle} alt="Google" />
          </button>

          <button
            className={styles.socialBtn}
            onClick={() => handleSocialLogin("Facebook")}
            aria-label="Login com Facebook"
          >
            <img src={logFacebook} alt="Facebook" />
          </button>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Email enviado</h2>
            <p>
              As instruções de recuperação foram enviadas para:
              <br />
              <strong>{email}</strong>
            </p>

            <button
              className={styles.modalBtn}
              onClick={() => {
                setShowModal(false);
                navigate("/login"); 
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
