import styles from "./Dashgeral.module.css";

export default function Dashgeral() {
  return (
    <div className={`absolute inset-0 ${styles.dashGeralContainer}`}>
      <h1 className={styles.title}>Dashgeral</h1>
      <h2 className={styles.subtitle}>+ detalhes do consumo</h2>
    </div>
  );
}
