import { Outlet } from "react-router";
import Navbar from "../shared/Navbar.jsx";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div>footer</div>
    </div>
  );
};

export default MainLayout;
