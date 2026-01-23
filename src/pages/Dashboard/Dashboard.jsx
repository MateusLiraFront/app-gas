import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-header-light.png";

export default function Dashboard() {
  const MAX_KG = 13;

  const calcularAltura = (kg) => {
    return `${(kg / MAX_KG) * 100}%`;
  };

  const consumos = [
    { mes: "jan", kg: 6.5, special: false },
    { mes: "fev", kg: 5.3, special: false },
    { mes: "mar", kg: 7.8, special: true },
    { mes: "abr", kg: 4.9, special: false },
    { mes: "mai", kg: 6.2, special: false },
    { mes: "jun", kg: 8.1, special: true },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <div className={styles.selector}>
          <i className="fa-solid fa-circle-left" />
          <span className={styles.gasName}>Gás Casa 1</span>
          <i className="fa-solid fa-circle-right" />
        </div>

        <div className={styles.responsiveGrid}>
          <div className={styles.chartCard}>
            <div className={styles.chartMain}>
              <div className={styles.yAxis}>
                <span>13kg</span>
                <span>10kg</span>
                <span>7kg</span>
                <span>4kg</span>
                <span>0kg</span>
              </div>
              <div className={styles.barsContainer}>
                {consumos.map((item, index) => (
                  <div className={styles.barWrapper}>
                    <div
                      title={`${item.kg} kg`}
                      className={`${styles.bar} ${
                        item.special ? styles.barGreen : styles.barBlue
                      }`}
                      style={{ height: calcularAltura(item.kg) }}
                    />
                    <span className={styles.barLabel}>{item.mes}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.chartFooter}>
              <span className={styles.footerText}>Gasto em Kilos</span>
              <button className={styles.badgeMensal}>Mensal</button>
            </div>
          </div>

          <div className={styles.periodSection}>
            <h3 className={styles.periodTitle}>Período de Cada Botijão:</h3>
            <div className={styles.periodList}>
              <div className={styles.periodItem}>
                <div className={`${styles.dot} ${styles.dotDarkBlue}`}></div>
                <span>07/01 à 22/03</span>
              </div>
              <div className={styles.periodItem}>
                <div className={`${styles.dot} ${styles.dotLightGreen}`}></div>
                <span>22/03 à 15/05</span>
              </div>
              <div className={styles.periodItem}>
                <div className={`${styles.dot} ${styles.dotGold}`}></div>
                <span>15/05 à --/--</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
