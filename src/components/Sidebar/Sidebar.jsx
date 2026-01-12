import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar-display ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-display">
        <div className="itens-display">
          
          <i
            className={`fa-solid ${
              isOpen ? "fa-circle-right icon-arrow open" : "fa-circle-left icon-arrow closed"
            }`}
            style={{ color: "#e0ad07ff" }}
            onClick={() => setIsOpen(!isOpen)}
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
    </div>
  );
}
