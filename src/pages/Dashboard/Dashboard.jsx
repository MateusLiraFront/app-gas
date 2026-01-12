import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className={`absolute inset-0 ${styles.dashboardContainer}`}>
      <h1 className={styles.title}>Dashboard - Consumo de gás</h1>
      <h2 className={styles.subtitle}>Conteúdo + Gráficos</h2>

      <Link to="/dashgeral" className={styles.general}>
        <i />
        ver +
      </Link>
    </div>
  );
}
