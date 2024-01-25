// import "./HomePage.scss";
// import { useEffect, useState } from "react";
import React from "react";

export default function HomePage(props) {
  const { fullname } = props;

  return (
    <div className="HomePage">
      {fullname ? (
        <>
          <h1>Hello {fullname}</h1>
          <p>... under construction</p>
        </>
      ) : (
        <>
          <h1>This will be the homepage.....</h1>
          <p>... under construction</p>
          <img src="/images/cat.png" alt='What'/>
        </>
      )}
    </div>
  );
}
