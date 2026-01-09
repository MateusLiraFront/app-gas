import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-header-light.png";

export default function Header() {
  return (
    <header className="">
      <div className="display-welcome">
        <div className="display-logo">
          <img src={logo} alt="logo" className="logo"></img>
        </div>
        <div className="navigation">
          <Link to="/home" className="link">
            Início
          </Link>

          <Link to="/dashboard" className="link">
            Dashboard
          </Link>

          <Link to="/perfil" className="link">
            <i className="" />
            Perfil
          </Link>
        </div>
        <div>
          <Link to="/login" className="link">
            <i className="" />
            Sair
          </Link>
        </div>
      </div>

      {/* <label>
          <strong>Bem Vindo, Josué</strong>
        </label>
        <label>Aqui está as informações do seu Gás</label> */}
    </header>
  );
}
