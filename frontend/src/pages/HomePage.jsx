// import "./HomePage.scss";
// import { useEffect, useState } from "react";

export default function HomePage(props) {
  const {fullname} = props;


    // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/signup");
  //       if (!response.ok) {
  //         console.error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       console.log("Fetched data:", data);
  //      } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (

    <div className="HomePage">
      {fullname ? (
        <>
      <h1>Hello {fullname}</h1>
      <button>Adopt a cat</button>
        <button>Donate for the shelter</button>
        <button>Our cats</button>
        <button>Adopted a cat</button>
        </>
        ): (
          <>
          <h1>Wellcome</h1>
        <button>Adopt a cat</button>
        <button>Donate for the shelter</button>
        <button>Our cats</button>
        <button>Adopted a cat</button>
        </>
        )}
    </div>
  );
}
