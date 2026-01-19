import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EditarGas.module.css";

export default function EditarGas() {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <FormularioGas onBack={() => setIsEditing(false)} />;
  }

  return (
    <div className={`absolute inset-0 ${styles.defaultContainer}`}>
      <div className={styles.topDisplay}>
        <i className={`fa-solid fa-angle-left ${styles.arrow}`} />
        <h3>Gás</h3>
      </div>

      <div className={styles.cardDisplay}>
        <div className={styles.header}>
          <h1 className={styles.title}>Botijões Cadastrados</h1>
        </div>

        <ListGas onEdit={() => setIsEditing(true)} />

        <Link to="/cadastrar-gas" className={styles.btn}>
          Novo
        </Link>
      </div>
    </div>
  );
}

export function ListGas({ onEdit }) {
  const gases = [
    { id: "124b341k3", nome: "Área do Churrasco" },
    { id: "98xk22aa9", nome: "Cozinha Principal" },
  ];

  return (
    <>
      {gases.map((gas) => (
        <div key={gas.id} className={styles.containerGas}>
          <div>
            <strong>{gas.nome}</strong>
            <div className={styles.gasId}>ID: {gas.id}</div>
          </div>

          <i
            className="fa-solid fa-pen-to-square"
            style={{ color: "var(--btn-interact)", cursor: "pointer" }}
            onClick={onEdit}
          />
        </div>
      ))}
    </>
  );
}

function FormularioGas({ onBack }) {
  const [form, setForm] = useState({
    nome: "",
    endereco: "",
    modelo: "P13",
    equipamentoId: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className={`absolute inset-0 ${styles.defaultContainer}`}>
      <div className={styles.topDisplay} onClick={onBack}>
        <i
          className={`fa-solid fa-angle-left ${styles.arrow}`}
          style={{ cursor: "pointer" }}
        />
        <h3>Voltar</h3>
      </div>

      <div className={styles.cardDisplay}>
        <div className={styles.header}>
          <h1 className={styles.title}>Informações do Botijão</h1>
        </div>

        <form className={styles.cadastroContainer}>
          <div className={styles.formGroup}>
            <label>Nome do Botijão</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              placeholder="Ex: Área do Churrasco"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Endereço</label>
            <input
              type="text"
              name="endereco"
              value={form.endereco}
              placeholder="Rua dos Programadores, 33"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Modelo do Botijão</label>
            <select name="modelo" value={form.modelo} required>
              <option value="P2">P2</option>
              <option value="P5">P5</option>
              <option value="P8">P8</option>
              <option value="P13">P13</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>ID do Equipamento</label>
            <input
              type="text"
              name="equipamentoId"
              value={form.equipamentoId}
              placeholder="Ex: 124b341k3"
              onChange={handleChange}
              required
            />
          </div>

          <button className={styles.btn} type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
