import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./Components/Layout.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import AdoptedCats from "./pages/AdoptedCats.jsx";
import Editor from "./pages/Editor.jsx";
import Ourcats from "./pages/OurCats.jsx";
import BreedModal from "./pages/BreedModal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />}></Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="adoptedcats" element={<AdoptedCats />}></Route>
          <Route path="ourcats" element={<Ourcats />}></Route>
        </Route>
        <Route path="editor" element={<Editor />}></Route>
        <Route path="breed" element={<BreedModal/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
