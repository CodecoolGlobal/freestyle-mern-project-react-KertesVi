import React, { useState, useEffect } from "react";

export default function Cats(props) {
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        const dataJson = await response.json();

        setCatData(dataJson);
        console.log(dataJson);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="catList">
      <div>{catData && catData[0].name}</div>
      {catData &&
        catData.map((cat) => (
          <div key={cat._id}>
            <li>
              <p>
                <strong>{cat.name} </strong>
              </p>
            </li>
          </div>
        ))}
    </div>
  );
}
