import React, { useState } from "react";
import styles from "./EditarGas.module.css";
import { Link } from "react-router-dom";

export default function EditarGas() {
  return (
    <div className={styles.defaultContainer}>
      <div className={""}>
        <h2 className={styles.title}>Selecione o Botijão</h2>
      </div>

      <button>Novo</button>

      <Link className={styles.link} to="/home">
        voltar
      </Link>
    </div>
  );
}
