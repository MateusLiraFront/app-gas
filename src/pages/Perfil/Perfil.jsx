import { useState } from "react";
import styles from "./Perfil.module.css";

export default function Perfil() {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <EditarPerfil onBack={() => setIsEditing(false)} />;
  }

  return <PerfilView onEdit={() => setIsEditing(true)} />;
}

function PerfilView({ onEdit }) {
  return (
    <div className={`absolute inset-0 ${styles.defaultContainer}`}>
      <div className={styles.topDisplay}>
        <i className={`fa-solid fa-angle-left ${styles.arrow}`} />
        <h3>Perfil do Usuário</h3>
      </div>

      <div className={styles.cardDisplay}>
        <div className={styles.header}>
          <h1 className={styles.title}>Antônio Cardoso</h1>
        </div>

        <div className={styles.cadastroContainer}>
          <label className={styles.title2}>
            <strong>Informações da Conta</strong>
          </label>

          <div className={styles.infoGroup}>
            <span className={styles.label}>Nome</span>
            <span>Antônio Cardoso de Melo</span>
          </div>

          <div className={styles.infoGroup}>
            <span className={styles.label}>Endereço</span>
            <span>Rua dos Programadores, 33</span>
          </div>

          <div className={styles.infoGroup}>
            <span className={styles.label}>E-mail</span>
            <span>antocmelo@gmail.com</span>
          </div>

          <button className={styles.btnAdicionar} onClick={onEdit}>
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}

function EditarPerfil({ onBack }) {
  const [form, setForm] = useState({
    nome: "",
    endereco: "",
    email: "",
    senha: "",
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
          <h1 className={styles.title}>Editar Perfil</h1>
        </div>

        <form className={styles.cadastroContainer}>
          <div className={styles.formGroup}>
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
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
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Senha</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              required
            />
          </div>

          <button className={styles.btnAdicionar} type="submit">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
