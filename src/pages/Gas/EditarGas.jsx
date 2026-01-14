import React, { useState } from "react";
import styles from "./EditarGas.module.css";
import { Link } from "react-router-dom";

export default function EditarGas() {
  return (
    <div className={`absolute inset-0 ${styles.defaultContainer}`}>
      <div className={styles.topDisplay}>
        <i className={`fa-solid fa-angle-left ${styles.arrow}`} />
        <h3>Editar Gás</h3>
      </div>

      <div className={styles.cardDisplay}>
        <div className={styles.header}>
          <h1 className={styles.title}>Edite Informações do Botijão</h1>
        </div>
        <div className={styles.cadastroContainer}>
          <div className={styles.formGroup}>
            <label>Nome do Botijão</label>
            <input type="text" placeholder="Ex. Área do Churrasco" />
          </div>

          <div className={styles.formGroup}>
            <label>Endereço</label>
            <input type="text" placeholder="Rua dos Programadores, 33" />
          </div>

          <div className={styles.formGroup}>
            <label>Data da Instalação</label>
            <div className={styles.inputIcon}>
              <input type="date" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Peso do botijão</label>
            <input type="text" placeholder="Ex: 13kg" />
          </div>

          <div className={styles.formGroup}>
            <label>ID do equipamento</label>
            <input type="text" placeholder="Ex: 124b341k3" />
          </div>

          <button className={styles.btnAdicionar}>Editar</button>
        </div>
      </div>
    </div>
  );
}
