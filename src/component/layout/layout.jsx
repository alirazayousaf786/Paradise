import { Outlet } from "react-router-dom";
import Header from "../header.jsx";
import Footer from "../footer.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      
      {/* Page Content */}
      <main className="min-h-[70vh]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
