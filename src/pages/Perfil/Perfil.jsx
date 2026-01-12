import styles from "./Perfil.module.css";

export default function Perfil() {
  return (
    <div className={styles.displayPerfil}>
      <i className={`fa-solid fa-user ${styles.perfil}`}></i>

      <h1 className={styles.title}>Perfil - Usuário Fulano</h1>
      <h2 className={styles.subtitle}>Editar dados</h2>
    </div>
  );
}
