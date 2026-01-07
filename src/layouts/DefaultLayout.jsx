import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./DefaultLayout.css"

export default function DefaultLayout() {
  return (
    <div className="default-layout min-h-screen flex flex-col">
      <Header />

      <main className="pt-20 pb-20 flex-1 px-4 py-6 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto">
        <div className="flex flex-row gap-6 md:flex-col">
          {/* <aside className="w-1/4 md:w-full bg-gray-100 p-4">
            Sidebar / Menu
          </aside> */}
           <Outlet />
          {/* <section className="flex-1 bg-gray-200 p-4">
            <Outlet />
          </section> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
