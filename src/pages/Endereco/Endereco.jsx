import styles from "./Endereco.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Endereco() {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  if (isEditing) {
    return <EditarEndereco onBack={() => setIsEditing(false)} />;
  }

  return (
    <div className={`absolute inset-0 ${styles.defaultContainer}`}>
      <div className={styles.topDisplay}
      onClick={()=>navigate(-1)}>
        <i className={`fa-solid fa-angle-left ${styles.arrow}`} />
        <h3>Endereço do Usuário</h3>
      </div>

      <div className={styles.cardDisplay}>
        <div className={styles.header}>
          <h1 className={styles.title}>Lista de Endereços</h1>
        </div>

        <ListEndereco onEdit={() => setIsEditing(true)} />

        <button className={styles.btn} onClick={() => setIsEditing(true)}>
          Novo
        </button>

        <button
          className={styles.btn}
          onClick={() => setIsEditing(true)}
          style={{ background: "var(--btn-negative)" }}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}

export function ListEndereco({ onEdit }) {
  return (
    <div className={styles.containerEndereco}>
      <strong> Rua dos programadores</strong>
      <i
        className="fa-solid fa-pen-to-square"
        style={{ color: "var(--btn-interact)" }}
        onClick={onEdit}
      ></i>
    </div>
  );
}

export function EditarEndereco({ onBack }) {
  const [form, setForm] = useState({
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
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
          <h1 className={styles.title}>Informações do Endereço</h1>
        </div>
        <form className={styles.cadastroContainer}>
          <div className={styles.formGroup}>
            <label>Rua</label>
            <input
              type="text"
              name="rua"
              value={form.rua}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Número</label>
            <input
              type="text"
              name="numero"
              value={form.numero}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Bairro</label>
            <input
              type="text"
              name="bairro"
              value={form.bairro}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Cidade</label>
            <input
              type="text"
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Estado</label>
            <input
              type="text"
              name="estado"
              value={form.estado}
              onChange={handleChange}
              required
            />
          </div>

          <button className={styles.btn} type="submit">
            {" "}
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
