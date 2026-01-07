import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./DefaultLayout.css"

export default function DefaultLayout() {
  return (
    <div className="default-layout min-h-screen flex flex-col">
      <Header />

      <main className="">
        <div className="">
       
           <Outlet />

        </div>
      </main>

      <Footer />
    </div>
  );
}
