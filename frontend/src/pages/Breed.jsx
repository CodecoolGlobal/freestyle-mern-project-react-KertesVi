import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function BreedModal() {
  const [catBreedData, setCatBreedData] = useState(null);
  const [id, setId] = useState(null);
  const [selectedBreedImage, setSelectedBreedImage] = useState(null);
  const [selectedBreedDetail, setSelectedBreedDetail] = useState(null);
  const breedType = useParams().id;

  const api_key =
    "live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNp";
  // const LinkToBreeds = `https://www.vetstreet.com/cats/abyssinian`
  // const linkToBreedImage = `https://api.thecatapi.com/v1/images/search?limit=11&api_key=live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNpbreed_ids=abys`

  function convertNameToId(name, allBreeds) {
    for (let breed of allBreeds) {
      if (breed.name.toLowerCase() == name.toLowerCase()) { // Abyssinian
        console.log(breed.id);    // abys
                       
       
      }
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(` https://api.thecatapi.com/v1/breeds`, {
    
        });
        const dataJson = await response.json();
        setCatBreedData(dataJson);
        console.log(dataJson);
        console.log(breedType)
        convertNameToId("breedType", dataJson); 
 
      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
   
    fetchData();
  }, [id]);

  
  useEffect(() => {
    const fetchBreedImage = async () => {
      try {
        const response = await fetch(` https://api.thecatapi.com/v1/images/search?limit=11&api_key=live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNpbreed_ids=${id}`, {
          headers: { "x-api-key": api_key },
        });
        const dataJson = await response.json();
        setSelectedBreedImage(dataJson);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(id);
    fetchBreedImage();
  }, [id]);

    
  // useEffect(() => {
  //   const fetchBreedDetails = async () => {
  //     try {
  //       const response = await fetch(` https://api.thecatapi.com/v1/breeds/${id}`, {
  //         headers: { "x-api-key": api_key },
  //       });
  //       const dataJson = await response.json();
  //       setSelectedBreedDetail(dataJson);
       
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   console.log(id);
  //   fetchBreedDetails();
  // }, [id]);

  return (
    <div  className="selectedBreed">
      <div className="container">
        
        <p>{catBreedData && catBreedData[0].name}</p>
        <p>{catBreedData && catBreedData[0].description}</p>
        <p>{selectedBreedImage && selectedBreedImage[0].url}</p>
        <img src={selectedBreedImage && selectedBreedImage[0].url} width="300px"></img>
        {/* <p>{selectedBreedDetail  && selectedBreedDetail.child_friendly}</p> */}
        <Link to="/ourcats">
                <button  >Back to adoptable cats</button>
                </Link>
      </div>
    </div>
  );
}
