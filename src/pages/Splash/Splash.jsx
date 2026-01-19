import React, { useState } from "react";
import styles from "./Splash.module.css";
import logo from "../../assets/logo-gas-second.png";
import { Link } from "react-router-dom";

export default function Splash() {
  return (
    <div className={styles.splashContainer}>
      <div className={`${styles.loginHeader} text-center mb-4`}>
        <img src={logo} alt="Logo" className={styles.appLogo} />
      </div>

      <Link className={styles.link} to="/login">
        <i>Começar</i>
      </Link>
    </div>
  );
}
