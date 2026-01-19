import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen, onToggleTheme, darkMode, onLogout,}) {
  const closeSidebar = () => setIsOpen(false);

  return (
    <div
      className={`${styles.sidebarDisplay} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <div className={styles.sidebarInner}>
        <div className={styles.itensDisplay}>
            <button
      onClick={onToggleTheme}
      className={`${styles.link} ${styles.item}`}
    >
      {darkMode ? "Modo Claro" : "Modo Noturno"}
    </button>

          <Link
            to="/perfil"
            className={`${styles.link} ${styles.item}`}
            onClick={closeSidebar}
          >
            Perfil
          </Link>

          <Link
            to="/cadastrar-gas"
            className={`${styles.link} ${styles.item}`}
            onClick={closeSidebar}
          >
            Cadastrar Gás
          </Link>

          <Link
            to="/editar-gas"
            className={`${styles.link} ${styles.item}`}
            onClick={closeSidebar}
          >
            Editar Gás
          </Link>

          <Link
            to="/endereco"
            className={`${styles.link} ${styles.item}`}
            onClick={closeSidebar}
          >
            Endereco
          </Link>

          {/* <Link
            to="/login"
            className={`${styles.link} ${styles.item}`}
            onClick={closeSidebar}
          >
            Sair
          </Link> */}

          <button
            onClick={onLogout}
            className={`${styles.link} ${styles.item}`}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
