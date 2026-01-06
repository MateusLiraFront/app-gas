import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./DefaultLayout.scss";

export default function DefaultLayout() {
  return (
    <div className="default-layout min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
