import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import "./DefaultLayout.css";

export default function DefaultLayout() {
  return (
    <div className="default-layout min-h-screen flex flex-col">
      <Header />
      <div className="sidebar">
        <Sidebar />
      </div>

      <main className="">
        <div className="">
          <Outlet />
        </div>
      </main>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
