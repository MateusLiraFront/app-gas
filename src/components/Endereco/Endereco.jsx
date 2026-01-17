import styles from "./Endereco.module.css";

export default function Endereco() {
  return (
    <div className={`absolute inset-0 ${styles.defaultContainer}`}>
      <div className={styles.topDisplay}>
        <i className={`fa-solid fa-angle-left ${styles.arrow}`} />
        <h3>Endereço do Usuário</h3>
      </div>

      <div className={styles.cardDisplay}>
        <div className={styles.header}>
          <h1 className={styles.title}>Selecione Local</h1>
        </div>
        <div className={styles.containerEndereco}>
          <strong> Rua x</strong>
          <i
            className="fa-solid fa-pen-to-square"
            style={{ color: "#235dc2" }}
          ></i>
        </div>
        <button className={styles.btnAdicionar}>Editar</button>
      </div>
    </div>
  );
}
