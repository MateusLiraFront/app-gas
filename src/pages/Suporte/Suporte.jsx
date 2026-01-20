import React, { useState } from "react";
import styles from "./Suporte.module.css";
import { Link } from "react-router-dom";
import logGoogle from "../../assets/Google.png";
import logFacebook from "../../assets/Facebook.png";

export default function Suporte() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setTimeout(() => {
      alert(`Instruções enviadas para: ${email}`);
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login com ${provider}`);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Recuperar Senha</h1>
        <p className={styles.subtitle}>Digite o e-mail cadastrado</p>

        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button 
            className={styles.btnLogin} 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "ENVIANDO..." : "ENVIAR"}
          </button>
        </form>

        <p className={styles.footerText}>
          Não possui uma conta?
          <Link to="/cadastro"> Clique aqui</Link>
        </p>

        <p className={styles.divider}>Ou faça Login com:</p>

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
    </div>
  );
}