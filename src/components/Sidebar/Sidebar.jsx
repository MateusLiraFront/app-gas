import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
  className={`${styles.sidebarDisplay} ${
    isOpen ? styles.open : styles.closed
  }`}
>
  <div className={styles.sidebarInner}>
    <div className={styles.itensDisplay}>

      <i
        className={`fa-solid ${
          isOpen ? "fa-circle-right" : "fa-circle-left"
        } ${styles.iconArrow} ${
          isOpen ? styles.open : styles.closed
        }`}
        style={{ color: "#e0ad07ff" }}
        onClick={() => setIsOpen(!isOpen)}
      ></i>

      <Link to="/perfil" className={`${styles.link} ${styles.item}`}>
        Perfil
      </Link>

      <Link to="/login" className={`${styles.link} ${styles.item}`}>
        Sair
      </Link>

    </div>
  </div>
</div>

  );
}
