
import React, { useState } from "react";

export default function OurCats(){
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
            

        <div className="catlist">
     
      {catData && catData.map((cat) => (
        <div key={cat._id}>
            <li><p> <strong>The cat name is {cat.name} </strong></p></li>
        </div>
      ))}
    </div>
        </div>
     
        
         
        
   
    )
}