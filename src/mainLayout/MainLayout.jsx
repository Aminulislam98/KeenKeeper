import { Outlet } from "react-router";
import Navbar from "../shared/Navbar.jsx";
import Footer from "../shared/Footer.jsx";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
