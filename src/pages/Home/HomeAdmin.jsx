import { useState } from "react";
import styles from "./Home.module.css";
import logo from "../../assets/logo-header-light.png";
import Clientes from "../../components/Clientes/Clientes";

export default function HomeAdmin() {
  const [clientes, setClientes] = useState([
    {
      nome: "Jorge da Mata",
      email: "jorge@mail.com",
      ativos: 2,
      botijoes: [
        { nome: "Gás Casa 1", percentual: 58 },
        { nome: "Gás do Bar", percentual: 73 },
      ],
    },
    {
      nome: "Antônio Cardoso",
      email: "antonio@mail.com",
      ativos: 1,
      botijoes: [{ nome: "Gás Cozinha", percentual: 15 }],
    },
    {
      nome: "Pedro Lins",
      email: "pedro@mail.com",
      ativos: 0,
      botijoes: [],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function handleAddCliente() {
    if (!nome || !email) return;

    setClientes((prev) => [
      ...prev,
      {
        nome,
        email,
        ativos: 0,
        botijoes: [],
      },
    ]);

    setNome("");
    setEmail("");
    setShowModal(false);
  }

  return (
    <div className={styles.homeContainer}>
      {/* TOPO */}
      <div className={styles.topDisplay}>
        <img src={logo} alt="Logo" className={styles.appLogo} />
        <h1 className={styles.title}>Bem-vindo, Administrador!</h1>
        <h3 className={styles.subtitle}>
          Aqui estão os consumos dos seus clientes
        </h3>
      </div>

      {/* BOTÃO ADICIONAR */}
      <div className={styles.addClienteWrapper}>
        <button
          className={styles.btnAdicionar}
          onClick={() => setShowModal(true)}
        >
          + Adicionar
        </button>
      </div>

      {/* LISTA DE CLIENTES */}
      <div className={styles.displayClientes}>
        {clientes.map((cliente, index) => (
          <Clientes key={index} cliente={cliente} />
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Novo Cliente</h2>

            <input
              className={styles.inputCliente}
              type="text"
              placeholder="Nome do cliente"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              className={styles.inputCliente}
              type="email"
              placeholder="Email do cliente"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className={styles.modalActions}>
              <button className={styles.modalBtnAdd} onClick={handleAddCliente}>
                Adicionar
              </button>
              <button
                className={styles.modalBtnCancel}
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
