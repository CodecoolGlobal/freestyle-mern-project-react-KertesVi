import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const routesWithoutNavbar = ["/"];
  const showNavbar = !routesWithoutNavbar.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
}
