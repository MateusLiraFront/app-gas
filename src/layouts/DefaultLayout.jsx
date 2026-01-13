import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DefaultLayout.module.css";
import logo from "../assets/logo-header-light.png";

export default function DefaultLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.defaultLayout}>
      <div className={styles.header}>
        <Header />
      </div>

      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      )}

      <div className={styles.sidebar}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <main className={styles.displayPrincipal}>
        <div>
          <img src={logo} alt="Logo" className={styles.appLogo} />
          <Outlet />
        </div>
      </main>

      <div className={styles.footer}>
        <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
