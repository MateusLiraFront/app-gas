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
      <div
        className={styles.container}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.nome}>{cliente.nome}</div>

        <div className={styles.ativos}>
          {cliente.ativos}
          <span className={styles.statusDot}></span>
        </div>
      </div>

      {open && cliente.botijoes.length > 0 && (
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

      {open && cliente.botijoes.length === 0 && (
        <div className={styles.collapse}>
          <span className={styles.semGas}>
            Nenhum botijão cadastrado
          </span>
        </div>
      )}
    </div>
  );
}
