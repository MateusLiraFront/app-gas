import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-header-light.png";

export default function Dashboard() {
  return (
    <div className={`absolute inset-0 ${styles.dashboardContainer}`}>
      <div className={styles.topDisplay}>
        <img src={logo} alt="Logo" className={styles.appLogo} />
        <h1 className={styles.title}>Relatório de Consumo</h1>
        <h3 className={styles.subtitle}>Informações do consumo</h3>
      </div>

      <div className={styles.cardDisplay}>
        <div className={styles.nav}>
          <i
            className={`fa-solid fa-circle-left ${styles.arrows}`}
          />
          <label className={styles.gasName}><strong>Gás Cozinha</strong></label>
          <i
            className={`fa-solid fa-circle-right ${styles.arrows}`}
          />
        </div>
        <div className={styles.grafico}></div>
      </div>

      <div className={styles.periodoDisplay}>
        <label>
          <strong>Período de Cada Botijão</strong>
        </label>
        <div className={styles.periodo}>
          <div className={`${styles.pointer} ${styles.A}`}></div>
          <label>07/01 à 22/03</label>
        </div>
        <div className={styles.periodo}>
          <div className={`${styles.pointer} ${styles.B}`}></div>
          <label>22/03 à 15/05</label>
        </div>
        <div className={styles.periodo}>
          <div className={`${styles.pointer} ${styles.C}`}></div>
          <label>15/05 à --/--</label>
        </div>
      </div>

      {/* <Link to="/dashgeral" className={styles.general}>
        <i />
        ver +
      </Link> */}
    </div>
  );
}
