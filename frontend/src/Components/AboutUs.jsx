
import React, { useState } from "react";

export default function AboutUs(){
    const [catData, setCatData] = useState(null);
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
    return (
        <div>
            <h1>Welcome to PurrHaven!</h1>
       <h2>PurrHaven where is a place, where we help cats find happy homes! 
        Our mission is to give homeless cats a second chance at a loving life. Meet our adorable feline friends in need of a family. 
        Click through our gallery to discover your future furry companion!PurrHaven is more than a shelter! It is a caring community dedicated to making a positive impact on the lives of these lovable cats.
        Choose adoption or donation and be a part of our mission to provide each cat with the care and attention they deserve.
        Join us in creating a world where every cat has a warm and loving home. Make PurrHaven your first stop in the journey of unconditional love!</h2>
        <img src="/images/cat.png" alt='PurrHaven'/>

        <div className="catlist">
        <div className="todoList"></div>
      {catData && catData.map((cat) => (
        <div key={cat._id}>
            <li><p> <strong>The cat name is {cat.name} </strong></p></li>
        </div>
      ))}
    </div>
        </div>
     
        
         
        
   
    )
}

