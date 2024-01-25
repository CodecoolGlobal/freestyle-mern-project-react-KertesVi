import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import BreedModal from "../Components/BreedModal";

export default function OurCats() {
  const [catData, setCatData] = useState(null);
  // const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/cats");
        const dataJson = await response.json();

        setCatData(dataJson);
        console.log(dataJson);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);


  function showModal(event) {
  //   setVisible(!visible)
  //   return<BreedModal/>
  // <Link to={"/breed"}/>
console.log("breed is clicked");
const breed = (event.target.value);
console.log(breed);
  }


  return (
    <div>
      <div className="catlist">
        {catData &&
          catData.map((cat) => (
            <div className="container" key={cat._id}>
             
                  <h4>Name: {cat.name} </h4>
                <img src={cat.picture} alt={cat.name} width="30%"></img>
                <p>{cat.sex}</p>
                <p>Age: {cat.age}</p>
                <p>Location: {cat.location}</p>
                <p>Supported by {cat.dollars}$</p>
                <p>Breed: {cat.breed}</p>
                <Link to={cat.breed}>
                <button value={cat.breed} >Learn more about {cat.breed}</button>
                </Link>
            </div>
          ))}
      </div>
    </div>

    //   /<div class="card">
    //   <img src="img_avatar.png" alt="Avatar" style="width:100%">
    //   <div class="container">
    //     <h4><b>John Doe</b></h4>
    //     <p>Architect & Engineer</p>
    //   </div>
    // </div>
  );
}
