import { useState } from "react";
import styles from "./Perfil.module.css";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Perfil() {
  const location = useLocation();
  const initialData = location.state || {
    nome: "Antônio Cardoso",
    endereco: "Rua dos Programadores, 33",
    email: "",
    senha: "",
  };

  const cadastroData = location.state;
  const veioDoCadastro = !!cadastroData?.email;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  const [perfil, setPerfil] = useState(
    savedUser || {
      nome: "",
      endereco: "",
      email: "",
      senha: "",
    },
  );

  const [isEditing, setIsEditing] = useState(!!location.state?.email);

  if (isEditing) {
    return (
      <EditarPerfil
        initialData={perfil}
        onBack={() => setIsEditing(false)}
        onSave={(data) => {
          setPerfil(data);
          localStorage.setItem("user", JSON.stringify(data));
          setIsEditing(false);
        }}
      />
    );
  }

  return <PerfilView data={perfil} onEdit={() => setIsEditing(true)} />;
}

function PerfilView({ data, onEdit }) {
  return (
    <div className={styles.defaultContainer}>
      <Link to={"/home"} className={styles.return}>
        <label className={styles.return}>
          <i class="fa-solid fa-angle-left"></i> Perfil
        </label>
      </Link>
      <div className={styles.cardDisplay}>
        <h1 className={styles.title}>Informações da Conta</h1>

        <div className={styles.infoGroup}>
          <span className={styles.label}>Nome</span>
          <span>{data.nome}</span>
        </div>

        <div className={styles.infoGroup}>
          <span className={styles.label}>Endereço</span>
          <span>{data.endereco}</span>
        </div>

        <div className={styles.infoGroup}>
          <span className={styles.label}>E-mail</span>
          <span>{data.email}</span>
        </div>

        <button className={styles.btnAdicionar} onClick={onEdit}>
          Editar
        </button>
      </div>
    </div>
  );
}

function EditarPerfil({ initialData, onBack, onSave }) {
  const [form, setForm] = useState(initialData);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <div className={styles.editContainer}>
      <label className={styles.returnPerfil} onClick={onBack}>
        <i className="fa-solid fa-angle-left"></i> Voltar
      </label>

      <label className={styles.titleEdit}>
        <strong>Editar Perfil</strong>
      </label>

      <form onSubmit={handleSubmit} className={styles.cadastroContainer}>
        <div className={styles.formGroup}>
          <label>Nome</label>
          <input name="nome" value={form.nome} onChange={handleChange} />
          <label>Endereço</label>
          <input
            name="endereco"
            value={form.endereco}
            onChange={handleChange}
          />
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} />
          <label>Senha</label>
          <input
            name="senha"
            value={form.senha}
            onChange={handleChange}
            type="password"
          />
        </div>
        <button type="submit" className={styles.btnAdicionar}>
          Salvar
        </button>
      </form>
    </div>
  );
}
