// Layout.js
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";


const Layout = () => {
  return (
    <>
     
      <div className="main-content">
        {/* The Outlet will render the matching child route */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;