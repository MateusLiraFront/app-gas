import styles from "./Home.module.css";
import { Percent, Status } from "../../components/Percent/Percent";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-header-light.png";
import Clientes from "../../components/Clientes/Clientes";

export default function HomeAdmin() {
  const DataInstalacao = new Date("2026-01-08");
  const Termino = new Date("2026-03-22");
  const PrevisaoDuracao = Math.ceil(
    (Termino - DataInstalacao) / (1000 * 60 * 60 * 24),
  );

  const cliente1 = {
    nome: "Jorge",
    sobrenome: "da Mata",
    ativos: 2,
    botijoes: [
      { nome: "Gás Casa 1", percentual: 58 },
      { nome: "Gás do Bar", percentual: 73 },
    ],
  };
  
  const cliente2 = {
    nome: "Antônio",
    sobrenome: "Cardoso",
    ativos: 1,
    botijoes: [{ nome: "Gás Casa", percentual: 15 }],
  };

  const cliente3 = {
    nome: "Antônio",
    sobrenome: "Cardoso",
    ativos: 0,
    botijoes: [{ nome: "Gás Casa", percentual: 0 }],
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.topDisplay}>
        <img src={logo} alt="Logo" className={styles.appLogo} />
        <h1 className={styles.title}>Bem Vindo, Administrador!</h1>
        <h3 className={styles.subtitle}>
          Aqui estão consumo dos seus Clientes
        </h3>
      </div>
      <div className={styles.displayClientes}>
        <Clientes cliente={cliente1} />
        <Clientes cliente={cliente2} />
        <Clientes cliente={cliente3} />
      </div>

      <div className={styles}></div>
    </div>
  );
}
