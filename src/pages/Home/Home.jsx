import styles from "./Home.module.css";
import { Percent, Status } from "../../components/Percent/Percent";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-header-light.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [hasGas, setHasGas] = useState(true);
  const [nome, setNome] = useState("");
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const DataInstalacao = new Date("2026-01-08");
  const Termino = new Date("2026-03-22");
  const PrevisaoDuracao = Math.ceil(
    (Termino - DataInstalacao) / (1000 * 60 * 60 * 24),
  );
  const API_BASE = import.meta.env.VITE_API_URL || "/api";

  useEffect(() => {
    const gasStatus = localStorage.getItem("hasGas");
    if (gasStatus === "false") {
      setHasGas(false);
    }

    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (storedUser?.nome) {
      setNome(storedUser.nome);
    }

    const auth = JSON.parse(localStorage.getItem("auth") || "null");
    const token = auth?.token || localStorage.getItem("token");
    const tokenType = auth?.tokenType || "Bearer";

    if (!token) return;

    setIsLoadingUser(true);
    fetch(`${API_BASE}/users/profile`, {
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
          setNome(nomeApi);
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
      .finally(() => setIsLoadingUser(false));
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.topDisplay}>
        <img src={logo} alt="Logo" className={styles.appLogo} />
        <h1 className={styles.title}>
          {nome ? `Olá, ${nome}!` : isLoadingUser ? "Olá..." : "Olá!"}
        </h1>
        <h3 className={styles.subtitle}>Aqui está o consumo do seu gás</h3>
      </div>

      <div className={styles.card}>
        {!hasGas ? (
          <div className={styles.emptyState}>
            <label className={styles.emptyLabel}>
              Não há nenhum gás cadastrado
            </label>

            <Link to="/cadastrar-gas" className={styles.btnAdicionarGas}>
              + Adicionar gás
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.nav}>
              <i className={`fa-solid fa-circle-left ${styles.arrows}`} />
              <label className={styles.gasName}>
                <strong>Gás Cozinha</strong>
              </label>
              <i className={`fa-solid fa-circle-right ${styles.arrows}`} />
            </div>

            <div className={styles.displayConsumo}>
              <div className={styles.botijao}>
                <div className={styles.sombraBg}></div>
                <div className={styles.SombraBot}></div>
                <Percent percent={50} className={styles.botija} />
              </div>
              <div className={styles.displayDetail}>
                <div className={styles}>
                  <label>
                    <strong className={styles.titleStatus}>STATUS: </strong>
                  </label>
                  <label>
                    <strong>
                      <Status />
                    </strong>
                  </label>
                </div>
                <Link className={styles.botaoDetail} to={"/dashboard"}>
                  +Detalhes
                </Link>
              </div>
            </div>

            <div className={styles.detalhes}>
              <div className={styles.periodo}>
                <div className={`${styles.pointer} ${styles.A}`}></div>
                <label>
                  {" "}
                  Data de Instalação: {DataInstalacao.toLocaleDateString()}
                </label>
              </div>
              <div className={styles.periodo}>
                <div className={`${styles.pointer} ${styles.B}`}></div>
                <label> Término em: {Termino.toLocaleDateString()} </label>
              </div>
              <div className={styles.periodo}>
                <div className={`${styles.pointer} ${styles.C}`}></div>
                <label> Previsão Duração: {PrevisaoDuracao} dias</label>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={styles}></div>
    </div>
  );
}
