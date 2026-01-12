import React, { useState } from "react";
import styles from "./Cadastro.module.css";
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
    <div className={styles.defaultContainer}>
      <div className={styles.loginHeader}>
        <h2 className={styles.title}>Cadastro</h2>
      </div>

      <Link className={styles.buttonAction} to="/home">
        Cadastrar
      </Link>

      <Link className={styles.link} to="/login">
        Já possuo cadastro
      </Link>
    </div>
  );
}
