import styles from "./Home.module.css";
import { Percent, Status } from "../../components/Percent/Percent";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-header-light.png";

export default function Home() {
const DataInstalacao = new Date("2026-01-08");
  const Termino = new Date("2026-03-22");
  const PrevisaoDuracao = Math.ceil(
  (Termino - DataInstalacao) / (1000 * 60 * 60 * 24)
     );
  

  return (
    <div className={styles.homeContainer}>
      <div className={styles.topDisplay}>
        <img src={logo} alt="Logo" className={styles.appLogo} />
        <h1 className={styles.title}>Olá, Cláudio!</h1>
        <h3 className={styles.subtitle}>Aqui está o consumo do seu gás</h3>
      </div>

      <div className={styles.card}>
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
                <strong >
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
            <label>  Data de Instalação: {DataInstalacao.toLocaleDateString()}</label>
          </div>
          <div className={styles.periodo}>
            <div className={`${styles.pointer} ${styles.B}`}></div>
            <label>  Término em: {Termino.toLocaleDateString()} </label>
          </div>
          <div className={styles.periodo}>
            <div className={`${styles.pointer} ${styles.C}`}></div>
            <label> Previsão Duração: {PrevisaoDuracao} dias</label>
          </div>
        </div>
      </div>

      <div className={styles}></div>
    </div>
  );
}
