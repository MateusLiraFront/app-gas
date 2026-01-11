import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar-display">
      <div className="itens-display">
        <i
          className="fa-solid fa-circle-right icon-arrow"
          style={{ color: "#e0ad07ff" }}
        ></i>

        <Link to="/perfil" className="link item um">
          <i className="" />
          Perfil
        </Link>

        <Link to="/login" className="link item">
          <i className="" />
          Sair
        </Link>
      </div>
    </div>
  );
}
