import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-header-light.png";

export default function Header() {
  return (
   <header className={styles.header}>
  <div className={styles.displayWelcome}>

    <div className={styles.displayLogo}>
      <img
        src={logo}
        alt="logo"
        className={styles.logo}
      />
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
    </nav>

    <div className={styles.actions}>
      <Link to="/login" className={styles.link}>
        Sair
      </Link>
    </div>

  </div>
</header>

  );
}
