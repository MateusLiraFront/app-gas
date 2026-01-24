import styles from "./Dashgeral.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashgeral() {
  const [active, setActive] = useState("week");
  const navigate = useNavigate();

  const dadosConsumo = {
    week: {
      media: 2.4,
      menor: 1.1,
      maior: 3.6,
      total: 16.8,
      descricao:
        "Consumo total da semana considerando todos os botijões ativos.",
    },
    month: {
      media: 6.2,
      menor: 4.8,
      maior: 7.9,
      total: 6.2,
      descricao:
        "Consumo médio mensal considerando o gasto semanal.",
    },

    year: {
      media: 6.1,
      menor: 5.0,
      maior: 7.8,
      total: 73.4,
      descricao:
        "Consumo anual estimado com base no uso médio mensal dos botijões.",
    },
  };

  const dados = dadosConsumo[active];

  return (
    <div className={`absolute inset-0 ${styles.dashboardContainer}`}>
      <div className={styles.topDisplay} onClick={() => navigate(-1)}>
        <i className={`fa-solid fa-angle-left ${styles.arrow}`} />
        <h3>Informações de Consumo</h3>
      </div>

      <div className={styles.cardDisplay}>
        <div className={styles.header}>
          <h1 className={styles.title}>Dados Gerais de Consumo</h1>
          <h3 className={styles.subtitle}>
            Informações de todos botijões cadastrados
          </h3>
        </div>
        <div className={styles.grafico}>
          <div className={styles.nav}>
            <button
              className={`${styles.navItem} ${
                active === "week" ? styles.active : styles.inactive
              }`}
              onClick={() => setActive("week")}
            >
              {active === "week" ? (
                <strong className={styles}>Semanal</strong>
              ) : (
                "Semanal"
              )}
            </button>

            <button
              className={`${styles.navItem} ${
                active === "month" ? styles.active : styles.inactive
              }`}
              onClick={() => setActive("month")}
            >
              {active === "month" ? <strong>Mensal</strong> : "Mensal"}
            </button>

            <button
              className={`${styles.navItem} ${
                active === "year" ? styles.active : styles.inactive
              }`}
              onClick={() => setActive("year")}
            >
              {active === "year" ? <strong>Anual</strong> : "Anual"}
            </button>
          </div>
          <div className={styles.statsCard}>
            <div className={styles.statItem}>
              <span className={styles.statLabel}>Média</span>
              <strong>{dados.media} kg</strong>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statLabel}>Menor</span>
              <strong>{dados.menor} kg</strong>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statLabel}>Maior</span>
              <strong>{dados.maior} kg</strong>
            </div>
          </div>

          <div className={styles.resumeCard}>
            <h4 className={styles.resumeTitle}>Consumo Geral</h4>
            <p className={styles.resumeText}>{dados.descricao}</p>

            <div className={styles.totalBox}>
              <span>Total no período</span>
              <strong>{dados.total} kg</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
