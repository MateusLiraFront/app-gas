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

  const [tipo, setTipo] = useState("Usuário Comum");
  const navigate = useNavigate();

  function handleEntrar() {
  const faltando = [];

  if (!email) faltando.push("E-mail");
  if (!senha) faltando.push("Senha");

  if (faltando.length > 0) {
    setMissingFields(faltando);
    setShowModal(true);
    return;
  }

  const userData = {
    email,
    senha,
    nome: "Antônio Cardoso",
    endereco: "Rua dos Programadores, 33",
    tipo,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  if (tipo === "Usuário Comum") {
    navigate("/home");
  } else {
    navigate("/admin/home");
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <Link className={styles.forgot} to="/suporte">
          Esqueceu sua Senha?{" "}
          <span className={styles.linkText}>Recupere aqui</span>
        </Link>

        <button className={styles.btnLogin} onClick={handleEntrar}>
          ENTRAR
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
