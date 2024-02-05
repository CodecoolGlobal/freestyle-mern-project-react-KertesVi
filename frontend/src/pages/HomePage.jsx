import "./HomePage.scss";
// // import { useEffect, useState } from "react";
import React from "react";
import AdoptedCats from "./AdoptedCats";
import OurCats from "./OurCats";
import { Link } from "react-router-dom";

export default function HomePage({
  username,
  email,
  phone,
  address,
  fullname,
}) {
  return (
    <div className="HomePage">
      {username ? (
        <div>
          <h1>Your account details:</h1>
          <h1>Hello {fullname}</h1>
          <h3>Address: {address}</h3>
          <h3>Email: {email}</h3>
          <h3>phone: {phone}</h3>
          <OurCats />
        </div>
      ) : (
        <>
          <h1>Wellcome to FurrHaven</h1>
          <div className="frame">
            <Link to={"/ourCats"}>
              <button className="custom-btn btn-16">Visitor </button>
            </Link>
            <Link to={"/login"}>
              <button className="custom-btn btn-16">Login</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
