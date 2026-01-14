import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-header-light.png";

export default function Dashboard() {
  const consumos = [
    { mes: "jan", height: "55%", special: false },
    { mes: "fev", height: "40%", special: false },
    { mes: "mar", height: "50%", special: false },
    { mes: "abr", height: "45%", special: true },
    { mes: "mai", height: "55%", special: true },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.navContent}>
          <div className={styles.logoArea}>
            <img src={logo} alt="AlertaGás" className={styles.logo} />
            <span className={styles.brandName}>AlertaGás</span>
          </div>
          
          <nav className={styles.centerNav}>
            <Link to="/home">Início</Link>
            <Link to="/dashboard" className={styles.activeLink}>Dashboard</Link>
            <Link to="/perfil">Perfil</Link>
          </nav>

          <div className={styles.rightArea}>
            <Link to="/login" className={styles.exitLink}>Sair</Link>
          </div>
        </div>
      </header>

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
                  <div key={index} className={styles.barWrapper}>
                    <div 
                      className={`${styles.bar} ${item.special ? styles.barGreen : styles.barBlue}`} 
                      style={{ height: item.height }}
                    ></div>
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

      <nav className={styles.bottomNavMobile}>
        <Link to="/home"><i className="fa-solid fa-house"></i></Link>
        <Link to="/cadastrar-gas"><i className="fa-solid fa-cart-shopping"></i></Link>
        <Link to="/dashboard" className={styles.active}><i className="fa-solid fa-chart-simple"></i></Link>
        <Link to="/perfil"><i className="fa-solid fa-gear"></i></Link>
      </nav>
    </div>
  );
}