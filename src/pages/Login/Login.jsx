import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import logGoogle from "../../assets/Google.png";
import logFacebook from "../../assets/Facebook.png";
import logo from "../../assets/logo-header-light.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [missingFields, setMissingFields] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [tipo, setTipo] = useState("Usuário Comum");
  const navigate = useNavigate();

  const API_BASE = import.meta.env.VITE_API_URL || "/api";

  async function handleEntrar() {
    const faltando = [];

    if (!email) faltando.push("E-mail");
    if (!senha) faltando.push("Senha");

    if (faltando.length > 0) {
      setMissingFields(faltando);
      setShowModal(true);
      return;
    }

    setShowModal(false);
    setMissingFields([]);
    setErrorMessage("");
    setIsLoading(true);

    const isAdmin = tipo !== "Usuário Comum";
    const endpoint = isAdmin ? "/admin/auth/login" : "/auth/login";

    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Erro ao fazer login");
      }

      if (!data.token) {
        throw new Error("Token não retornado pela API");
      }

      const role = isAdmin ? "admin" : "cliente";
      const tokenType = data.tokenType || "Bearer";

      localStorage.setItem(
        "auth",
        JSON.stringify({ token: data.token, tokenType, role }),
      );
      localStorage.setItem("token", data.token);

      let userData = {
        nome: "",
        endereco: "",
        email,
        tipo,
      };

      if (!isAdmin) {
        const profileResponse = await fetch(`${API_BASE}/users/profile`, {
          headers: {
            Authorization: `${tokenType} ${data.token}`,
          },
        });

        if (profileResponse.ok) {
          const profile = await profileResponse.json().catch(() => ({}));
          userData = {
            ...userData,
            nome: profile.name || profile.nome || userData.nome,
            email: profile.email || userData.email,
          };
        } else {
          userData.nome = email.split("@")[0] || userData.nome;
        }
      } else {
        userData.nome = email.split("@")[0] || "Admin";
      }

      localStorage.setItem("user", JSON.stringify(userData));

      if (isAdmin) {
        navigate("/admin/home");
      } else {
        navigate("/home");
      }
    } catch (error) {
      setErrorMessage(error.message || "Erro ao fazer login");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <img src={logo} alt="logo-header-light.png" className={styles.logo} />

        <div className={styles.formArea}>
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
        </div>

        <Link className={styles.forgot} to="/suporte">
          Esqueceu sua Senha?{" "}
          <span className={styles.linkText}>Recupere aqui</span>
        </Link>

        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

        <button
          className={styles.btnLogin}
          onClick={handleEntrar}
          disabled={isLoading}
        >
          {isLoading ? "ENTRANDO..." : "ENTRAR"}
        </button>

        <p className={styles.footerText}>
          Não possui uma conta?
          <Link to="/cadastro" className={styles.linkText}>
            Clique aqui
          </Link>
        </p>

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
            <h2>Campos obrigatórios</h2><br/>
            <p>Preencha os seguintes campos:</p>

            <ul>
              {missingFields.map((field) => (
                <li key={field}>{field}</li>
              ))}
            </ul>

            <button
              className={styles.modalBtn}
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
