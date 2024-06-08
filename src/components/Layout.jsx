import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./ScrollToTop";
export const Layout = () => {
  return (
    <ScrollToTop>
    <div className="flex flex-col min-h-dvh">
      <header className="bg-white">
        <Navbar />
      </header>
      <Outlet />
      <Footer />
      <Toaster />
    </div>
    </ScrollToTop>
  );
};
