import { useState } from "react";
import styles from "./Clientes.module.css";

export default function Clientes({ cliente }) {
  const [open, setOpen] = useState(false);

  function getStatusClass(percentual) {
    if (percentual < 20) return styles.vermelho;
    if (percentual <= 60) return styles.amarelo;
    return styles.verde;
  }

  return (
    <div className={styles.wrapper}>
      {/* CABEÇALHO */}
      <div
        className={styles.container}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.nome}>
          {cliente.nome} {cliente.sobrenome}
        </div>

        <div className={styles.ativos}>
          {cliente.ativos}
          <span className={styles.statusDot}></span>
        </div>
      </div>

      {/* COLLAPSE */}
      {open && (
        <div className={styles.collapse}>
          {cliente.botijoes.map((botijao, index) => (
            <div
              key={index}
              className={`${styles.botijao} ${getStatusClass(
                botijao.percentual
              )}`}
            >
              <span>{botijao.nome}</span>
              <span>{botijao.percentual}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
