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
          <h1>Wellcome</h1>
          <p>... under construction</p>
        </>
      )}
    </div>
  );
}
