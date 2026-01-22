import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer({ isOpen, setIsOpen, variant = "default" }) {
  const closeSidebar = () => setIsOpen(false);
  const isAdmin = variant === "admin";
  const homeRoute = isAdmin ? "/admin/home" : "/home";

  return (
    <footer className={styles.footer}>
      <div className={styles.displayFooter}>
        <Link to={homeRoute} className={styles.link} onClick={closeSidebar}>
          <i className="fa-solid fa-house text-xl"></i>
          <label className={styles.title}>Home</label>
        </Link>

        {!isAdmin && (
          <>
            <Link
              to="/dashboard"
              className={styles.link}
              onClick={closeSidebar}
            >
              <i className="fa-solid fa-fire-flame-curved"></i>
              <label className={styles.title}>Consumo</label>
            </Link>

            <Link
              to="/dashgeral"
              className={styles.link}
              onClick={closeSidebar}
            >
              <i className="fa-solid fa-chart-simple"></i>
              <label className={styles.title}>info</label>
            </Link>
          </>
        )}
        <button
          className={`${styles.buttonConfig} ${styles.link} ${
            isOpen ? styles.open : styles.closed
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fa-solid fa-list-ul"></i>
          <label className={styles.title}>Config</label>
        </button>
      </div>
    </footer>
  );
}
