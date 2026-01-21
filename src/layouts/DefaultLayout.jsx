import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DefaultLayout.module.css";

export default function DefaultLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  function toggleTheme() {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  }

  return (
    <div className={styles.defaultLayout}>
      <div className={styles.header}>
        <Header 
        onToggleTheme={toggleTheme}
        darkMode={darkMode}
        />
      </div>

      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      )}

      <div className={styles.sidebar}>
         <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onToggleTheme={toggleTheme}
        darkMode={darkMode}
        onLogout={() => setShowLogoutModal(true)}
      />

      </div>

      <main className={styles.displayPrincipal}>
        <div>
          <Outlet />
        </div>
      </main>

      <div className={styles.footer}>
        <Footer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {showLogoutModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Confirmar saída</h2>
            <p>Tem certeza que deseja sair da aplicação?</p>

            <div className={styles.modalActions}>
              <button
                onClick={() => setShowLogoutModal(false)}
                className={styles.btnCancel}
              >
                Cancelar
              </button>

              <button
                onClick={() => {
                  setShowLogoutModal(false);
                  setIsOpen(false);
                  window.location.href = "/login";
                }}
                className={styles.btnSair}
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
