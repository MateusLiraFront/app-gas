import React, { useState } from "react";
import styles from "./CadastrarGas.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CadastrarGas() {
  const navigate = useNavigate();
  localStorage.setItem("hasGas", "true");

  function handleAdicionarGas() {
    localStorage.setItem("hasGas", "true");

    navigate("/home");
  }

  return (
    <div className={`absolute inset-0 ${styles.defaultContainer}`}>
      <div className={styles.topDisplay} onClick={() => navigate(-1)}>
        <i className={`fa-solid fa-angle-left ${styles.arrow}`} />
        <h3>Novo Gás</h3>
      </div>

      <div className={styles.cardDisplay}>
        <div className={styles.header}>
          <h1 className={styles.title}>Cadastro de novo Botijão</h1>
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

          <button className={styles.btnAdicionar}>Adicionar</button>
        </div>
      </div>
    </div>
  );
}
