import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-header-light.png";
import { useState } from "react";

export default function Header({ onToggleTheme, darkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.displayWelcome}>
        <div className={styles.displayLogo}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>

        <nav className={styles.navigation}>
          <Link to="/home" className={styles.link}>
            Início
          </Link>
          <Link to="/dashboard" className={styles.link}>
            Dashboard
          </Link>
          <Link to="/perfil" className={styles.link}>
            Perfil
          </Link>

          <button
            onClick={onToggleTheme}
            className={`${styles.darkMode}`}
          >
            {darkMode ? "Modo Claro" : "Modo Noturno"}
          </button>
        </nav>

        <div className={styles.dropdown}>
          <button
            type="button"
            className={styles.dropdownButton}
            onClick={() => setOpen(!open)}
          >
            Extra
            <span className={`${styles.dropdownIcon}`}>⌄</span>
          </button>

          {open && (
            <div className={styles.dropdownMenu}>
              <Link
                to="/cadastrar-gas"
                className={styles.dropdownItem}
                onClick={() => setOpen(false)}
              >
                Cadastrar Gás
              </Link>

              <Link
                to="/editar-gas"
                className={styles.dropdownItem}
                onClick={() => setOpen(false)}
              >
                Editar Gás
              </Link>

              <Link
                to="/endereco"
                className={styles.dropdownItem}
                onClick={() => setOpen(false)}
              >
                Endereço
              </Link>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <Link to="/login" className={styles.link}>
            Sair
          </Link>
        </div>
      </div>
    </header>
  );
}
