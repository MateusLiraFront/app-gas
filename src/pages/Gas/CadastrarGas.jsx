import React, { useState } from "react";
import styles from "./CadastrarGas.module.css";
import { Link } from "react-router-dom";

export default function CadastrarGas() {
  return (
    <div className={styles.defaultContainer}>
      <div className={styles.loginHeader}>
        <h2 className={styles.title}>Cadastro de Novo Botijão</h2>
      </div>

      <button>Adicionar</button>

      <Link className={styles.link} to="/home">
        voltar
      </Link>
    </div>
  );
}
