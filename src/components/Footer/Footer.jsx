import styles from './Footer.module.css'
import { Link } from "react-router-dom";


export default function Footer() {
  return (
   <footer className={styles.footer}>
  <div className={styles.displayFooter}>

    <Link
      to="/home"
      className={styles.link}
    >
      <i className="fa-solid fa-house text-xl"></i>
      Home
    </Link>

    <Link
      to="/dashboard"
      className={styles.link}
    >
      <i className="fa-solid fa-chart-column"></i>
      Dashboard
    </Link>

    <button
      className={styles.buttonConfig}
    >
      <i className="fa-solid fa-gear text-xl"></i>
      Config
    </button>


  </div>
</footer>

  );
}

