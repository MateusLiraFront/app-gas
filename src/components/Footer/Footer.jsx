import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Footer({ isOpen, setIsOpen, variant = "default" }) {
  const closeSidebar = () => setIsOpen(false);
  const isAdmin = variant === "admin";
  const homeRoute = isAdmin ? "/admin/home" : "/home";

  const linkClass = ({ isActive }) =>
    `${styles.link} ${isActive ? styles.active : ""}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.displayFooter}>
        <NavLink
          to={homeRoute}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
          onClick={closeSidebar}
        >
          <i className="fa-solid fa-house"></i>
          <label className={styles.title}>Home</label>
        </NavLink>

        {!isAdmin && (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              onClick={closeSidebar}
            >
              <i className="fa-solid fa-fire-flame-curved"></i>
              <label className={styles.title}>Consumo</label>
            </NavLink>

            <NavLink
              to="/dashgeral"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              onClick={closeSidebar}
            >
              <i className="fa-solid fa-chart-simple"></i>
              <label className={styles.title}>Info</label>
            </NavLink>
          </>
        )}
      <button
  className={`${styles.link} ${
    isOpen ? styles.configOpen : ""
  } ${styles.buttonConfig}`}
  onClick={() => setIsOpen(!isOpen)}
>
  <i className="fa-solid fa-list-ul"></i>
  <label className={styles.title}>Config</label>
</button>

      </div>
    </footer>
  );
}
