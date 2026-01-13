import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer({ isOpen, setIsOpen }) {
  const closeSidebar = () => setIsOpen(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.displayFooter}>
        <Link to="/home" className={styles.link} onClick={closeSidebar}>
          <i className="fa-solid fa-house text-xl"></i>
          <label className={styles.title}>Home</label>
        </Link>

        <Link to="/dashboard" className={styles.link} onClick={closeSidebar}>
          <i className="fa-solid fa-chart-simple"></i>
          <label className={styles.title}>Dashboard</label>
        </Link>

        <Link to="/dashgeral" className={styles.link} onClick={closeSidebar}>
          <i className="fa-solid fa-chart-line"></i>
          <label className={styles.title}>info</label>
        </Link>

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
