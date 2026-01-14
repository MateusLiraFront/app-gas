import styles from "./Dashgeral.module.css";
import { useState } from "react";

export default function Dashgeral() {
  const [active, setActive] = useState("week");

  return (
    <div className={`absolute inset-0 ${styles.dashboardContainer}`}>
      <div className={styles.topDisplay}>
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
              {active === "week" ? <strong>Semanal</strong> : "Semanal"}
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
        </div>
      </div>
    </div>
  );
}
