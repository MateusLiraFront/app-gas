import styles from "./Home.module.css";
import {Percent, Status} from "../../components/Percent/Percent";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.title}>Olá, Cláudio!</h2>
      <h3 className={styles.subtitle}>Aqui está o consumo do seu gás</h3>

      <div className={styles.card}>
        <div className={styles.displayItem}>
          <div className={styles}>
            <i
              className="fa-regular fa-circle-left"
              style={{ color: "#1f4288" }}
            />
          </div>
          <div className={styles}>Gás Casa 1</div>
          <div className={styles}>
            <i
              className="fa-regular fa-circle-right"
              style={{ color: "#2c5bb9" }}
            />
          </div>
        </div>

        <div className={styles.displayConsumo}>
          <div className={styles.botijao}>
            <div className={styles.sombraBg}></div>
            <div className={styles.SombraBot}></div>
            <Percent percent={55}  className={styles.botija}/>
          </div>
          <div className={styles.displayDetail}>
            <div className={styles}>
              <label><strong>STATUS: </strong></label>
              <label><strong><Status/></strong></label>
            </div>
            <Link className={styles.botaoDetail}
            to={"/dashboard"}>
            +Detalhes</Link>
           
          </div>
        </div>

        <div className={styles.detalhes}>
          <label>Data de Instalação: 28/10/2025</label>
          <label>Término em: .....</label>
          <label>Previsão Máxima: 08/01/2026</label>
        </div>
      </div>

      <div className={styles}></div>
    </div>
  );
}
