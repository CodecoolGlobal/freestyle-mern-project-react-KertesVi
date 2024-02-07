import { createContext, useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export const DataContext = createContext(null);

export default function Layout() {
  const [globalData, setGlobalData] = useState(null);
  
  const handleLogout = () => {
    setGlobalData(null);
  };

  return (
    <DataContext.Provider value={{ globalData, setGlobalData }}>
      <Navbar username={globalData} onLogout={handleLogout} />
      <Outlet />
      <Footer />
    </DataContext.Provider>
  );
}