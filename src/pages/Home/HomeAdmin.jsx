import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import logo from "../../assets/logo-header-light.png";
import Clientes from "../../components/Clientes/Clientes";

export default function HomeAdmin() {
  const [modalType, setModalType] = useState("add");
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [nomeAdmin, setNomeAdmin] = useState("");
  const [isLoadingAdmin, setIsLoadingAdmin] = useState(false);
  const API_BASE = import.meta.env.VITE_API_URL || "/api";

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

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (storedUser?.nome) {
      setNomeAdmin(storedUser.nome);
    }

    const auth = JSON.parse(localStorage.getItem("auth") || "null");
    const token = auth?.token || localStorage.getItem("token");
    const tokenType = auth?.tokenType || "Bearer";

    if (!token) return;

    setIsLoadingAdmin(true);
    fetch(`${API_BASE}/admin/profile`, {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Falha ao buscar perfil");
        }
        const profile = await response.json().catch(() => ({}));
        const nomeApi = profile.name || profile.nome || storedUser?.nome;
        if (nomeApi) {
          setNomeAdmin(nomeApi);
          localStorage.setItem(
            "user",
            JSON.stringify({
              ...(storedUser || {}),
              nome: nomeApi,
              email: profile.email || storedUser?.email || "",
            }),
          );
        }
      })
      .catch(() => {})
      .finally(() => setIsLoadingAdmin(false));
  }, []);

  function handleExcluirCliente() {
    if (!clienteSelecionado) return;

    setClientes((prev) =>
      prev.filter((cliente) => cliente.email !== clienteSelecionado.email),
    );

    setClienteSelecionado(null);
    setShowModal(false);
  }

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
      <div className={styles.topDisplay}>
        <img src={logo} alt="Logo" className={styles.appLogo} />
        <h1 className={styles.title}>
          {nomeAdmin
            ? `Bem-vindo, ${nomeAdmin}!`
            : isLoadingAdmin
              ? "Bem-vindo..."
              : "Bem-vindo, Administrador!"}
        </h1>
        <h3 className={styles.subtitle}>
          Aqui estão os consumos dos seus clientes
        </h3>
      </div>

      <div className={styles.addClienteWrapper}>
        <button
          className={styles.btnExcluir}
          onClick={() => {
            setModalType("delete");
            setShowModal(true);
          }}
        >
          - Excluir
        </button>
        <button
          className={styles.btnAdicionar}
          onClick={() => {
            setModalType("add");
            setShowModal(true);
          }}
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
            {modalType === "add" ? (
              <>
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
                  <button
                    className={styles.modalBtnAdd}
                    onClick={handleAddCliente}
                  >
                    Adicionar
                  </button>
                  <button
                    className={styles.modalBtnCancel}
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2>Excluir Cliente</h2>

                <select
                  className={styles.inputCliente}
                  value={clienteSelecionado?.email || ""}
                  onChange={(e) =>
                    setClienteSelecionado(
                      clientes.find((c) => c.email === e.target.value),
                    )
                  }
                >
                  <option value="">Selecione um cliente</option>
                  {clientes.map((cliente) => (
                    <option key={cliente.email} value={cliente.email}>
                      {cliente.nome}
                    </option>
                  ))}
                </select>

                <div className={styles.modalActions}>
                  <button
                    className={styles.modalBtnDelete}
                    onClick={handleExcluirCliente}
                    disabled={!clienteSelecionado}
                  >
                    Excluir
                  </button>
                  <button
                    className={styles.modalBtnCancel}
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
