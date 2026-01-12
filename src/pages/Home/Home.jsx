import styles from "./Home.module.css";
import Percent from "../../components/Percent/Percent";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h2 className={styles.title}>Bem vindo, Cláudio</h2>
      <h3 className={styles.subtitle}>Aqui está o consumo do seu gás</h3>
      <Percent percent={23} />
    </div>
  );
}
