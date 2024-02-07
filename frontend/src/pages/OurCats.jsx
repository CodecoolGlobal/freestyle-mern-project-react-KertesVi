import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./OurCats.scss";
import CatDonater from "../Components/CatDonater";

export default function OurCats() {
  const [catData, setCatData] = useState(null);
  // const [visible, setVisible] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch("/api/cats");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const dataJson = await response.json();
      setCatData(dataJson);
     } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);


  function petTemplate(cat) {
    return (
      <div className="animal" key={cat._id}>
      <img className="pet-photo" src={cat.picture} alt={cat.name}/>
      <h3 className="pet-name">{cat.name} 
      <span className="breed">({cat.breed})</span></h3>
      <h5><strong>Age:</strong> {cat.age}</h5>

      <h5 className="food-list">{cat.sex}</h5>
      <h5 className="food-list">Location: {cat.location}</h5>
      <CatDonater cat={cat} fetchData={fetchData}/>
      <Link to={cat.breed}>
      <button className="moreinfo" value={cat.breed}>Learn more about {cat.breed}</button>
    </Link>
      </div>
    );
  }


  return (
    <>
      <h1 className="app-title">We have {catData && catData.length} adoptable cats </h1>
      {catData && catData.map((cat) => petTemplate(cat))}    
      <p className="footer">These {catData && catData.length} were added recently. Check back soon for updates.</p>
    </>
  );
}
