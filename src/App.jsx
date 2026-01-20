import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import DefaultLayout from "./layouts/DefaultLayout";
import Splash from "./pages/Splash/Splash";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Home from "./pages/Home/Home";
import Suporte from "./pages/Suporte/Suporte";
import Dashboard from "./pages/Dashboard/Dashboard";
import Dashgeral from "./pages/Dashboard/Dashgeral";
import Perfil from "./pages/Perfil/Perfil";
import CadastrarGas from "./pages/Gas/CadastrarGas";
import EditarGas from "./pages/Gas/EditarGas";
import Endereco from "./pages/Endereco/Endereco";
import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas (sem layout) */}
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/suporte" element={<Suporte />} />

        {/* Rotas com layout */}
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashgeral" element={<Dashgeral />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastrar-gas" element={<CadastrarGas />} />
          <Route path="/editar-gas" element={<EditarGas />} />
          <Route path="/endereco" element={<Endereco/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;