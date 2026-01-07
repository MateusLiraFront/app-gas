import './Footer.css'
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="">
      <div className="display-footer">
        <Link 
         to="/home"
         className="link">
          <i className="fa-solid fa-house text-xl"></i>
          Home
        </Link>

         <Link
          to="/dashboard"
          className="link">
          <i className="fa-solid fa-chart-column" />
          Dashboard
        </Link>

        <button 
        className="button-config">
          <i className="fa-solid fa-gear text-xl"></i>
          Config
        </button>
        
         <Link
          to="/login"
          className="link">
          <i className="" />
          Sair
        </Link>
        
      </div>
    </footer>
  );
}

