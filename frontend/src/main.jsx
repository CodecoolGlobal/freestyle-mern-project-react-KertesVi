import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.jsx";
// import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Signup from './pages/Signup.jsx'
import Layout from "./Components/Layout.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import AdoptedCats from "./pages/AdoptedCats.jsx";
import Editor from "./pages/Editor.jsx";
import Ourcats from "./pages/OurCats.jsx";
import BreedModal from "./pages/Breed.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />}></Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path='signup' element={<Signup/>}></Route>
          <Route path="adoptedcats" element={<AdoptedCats />}></Route>
          <Route path="ourcats" element={<Ourcats />}></Route>
          <Route path="editor" element={<Editor />}></Route>
        <Route path="ourcats/:id" element={<BreedModal/>}></Route>
        </Route>
    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
