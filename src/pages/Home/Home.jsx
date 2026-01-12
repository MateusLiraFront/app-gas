import "./Home.css";
import Percent from "../../components/Percent/Percent";

export default function Home() {
  return (
    <div className=" ">
      <h2>Bem vindo, Cláudio</h2>
      <h3>Aqui está o consumo do seu gás</h3>
      <Percent percent={23} />
    </div>
  );
}
