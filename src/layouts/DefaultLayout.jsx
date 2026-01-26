import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./DefaultLayout.module.css";

export default function DefaultLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "default";
    handleThemeChange(savedTheme);
  }, []);

  function handleThemeChange(newTheme) {
    const html = document.documentElement;

    html.classList.remove("dark", "light");

    if (newTheme !== "default") {
      html.classList.add(newTheme);
    }

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <div className={styles.defaultLayout}>
      <div className={styles.header}>
        <Header />
      </div>

      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      )}

      <div className={styles.sidebar}>
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          theme={theme}
          onChangeTheme={handleThemeChange}
          onLogout={() => setShowLogoutModal(true)}
          variant="default"
        />
      </div>

      <main className={styles.displayPrincipal}>
        <Outlet />
      </main>

      <div className={styles.footer}>
        <Footer isOpen={isOpen} setIsOpen={setIsOpen} variant="default" />
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
                    localStorage.removeItem("auth");
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                    localStorage.removeItem("hasGas");
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
