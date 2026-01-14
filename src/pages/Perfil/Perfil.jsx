import styles from "./Perfil.module.css";

export default function Perfil() {
  return (
    <div className={`absolute inset-0 ${styles.defaultContainer}`}>
      <div className={styles.topDisplay}>
        <i className={`fa-solid fa-angle-left ${styles.arrow}`} />
        <h3>Perfil do Usuário</h3>
      </div>

      <div className={styles.cardDisplay}>
        <div className={styles.header}>
          <h1 className={styles.title}>Antônio Cardoso</h1>
        </div>
        <div className={styles.cadastroContainer}>
          <label className={styles.title2}><strong>Informações da Conta</strong></label>

          <div className={styles.formGroup}>
            <label>Nome</label>
            <input type="text" placeholder="Antônio Cardoso de Melo" />
          </div>

          <div className={styles.formGroup}>
            <label>Endereço</label>
            <input type="text" placeholder="Rua dos Programadores, 33" />
          </div>

          <div className={styles.formGroup}>
            <label>E-mail</label>
            <input type="text" placeholder="antocmelo@gmail.com" />
          </div>

          <div className={styles.formGroup}>
            <label>Senha</label>
            <input type="password" placeholder="************" />
          </div>

          <button className={styles.btnAdicionar}>Editar</button>
        </div>
      </div>
    </div>
  );
}
