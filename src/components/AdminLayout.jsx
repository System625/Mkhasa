import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
// import AdminFooter from "./AdminFooter";
import { Toaster } from "react-hot-toast";

export const AdminLayout = () => {
  return (
    <div className="flex bg-white flex-col min-h-dvh">
      <header className="bg-white">
        <AdminNavbar />
      </header>
      <Outlet />
      {/* <AdminFooter /> */}
      <Toaster />
    </div>
  );
};
