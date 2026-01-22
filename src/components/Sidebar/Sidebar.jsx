import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

export default function Sidebar({
  isOpen,
  setIsOpen,
  theme,
  onChangeTheme,
  onLogout,
  variant = "default",
}) {
  const closeSidebar = () => setIsOpen(false);
  const isAdmin = variant === "admin";
  const perfilRoute = isAdmin ? "/admin/perfil" : "/perfil";

  return (
    <div
      className={`${styles.sidebarDisplay} ${
        isOpen ? styles.open : styles.closed
      }`}
    >
      <div className={styles.sidebarInner}>
        <div className={styles.itensDisplay}>
          <div className={styles.themeSwitcher}>
           <strong className={styles.mode}> Modos:</strong>
            <button
              onClick={() => onChangeTheme("light")}
              className={`${styles.iconBtn} ${theme === "light" ? styles.active : ""}`}
              aria-label="Light mode"
            >
              <i
                className={
                  theme === "light" ? "fa-regular fa-sun" : "fa-solid fa-sun"
                }
              />
            </button>

            <button
              onClick={() => onChangeTheme("default")}
              className={`${styles.iconBtn} ${theme === "default" ? styles.active : ""}`}
              aria-label="Default mode"
            >
              <i
                className={
                  theme === "default"
                    ? "fa-regular fa-star"
                    : "fa-solid fa-star"
                }
              />
            </button>

            <button
              onClick={() => onChangeTheme("dark")}
              className={`${styles.iconBtn} ${theme === "dark" ? styles.active : ""}`}
              aria-label="Dark mode"
            >
              <i
                className={
                  theme === "dark" ? "fa-regular fa-moon" : "fa-solid fa-moon"
                }
              />
            </button>
          </div> 

          <Link
            to={perfilRoute}
            className={`${styles.link} ${styles.item}`}
            onClick={closeSidebar}
          >
            Perfil
          </Link>

          {!isAdmin && (
            <>
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
                Endereço
              </Link>
            </>
          )}

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
