import "./Dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="absolute inset-0 ">
      <h1>Dashboard - Consumo de gás</h1>
      <h2>Conteúdo + Gráficos</h2>

      <Link
          to="/dashgeral"
          className="general">
          <i className="" />
          ver +
        </Link>

    </div>
  );
}
