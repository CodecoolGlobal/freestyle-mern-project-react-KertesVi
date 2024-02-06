import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import  "./Breed.css";


export default function BreedModal() {
  const [catBreedData, setCatBreedData] = useState(null);
  const [id, setId] = useState(null);
  const [selectedBreedImage, setSelectedBreedImage] = useState(null);
  const [selectedBreedDetail, setSelectedBreedDetail] = useState(null);

  const [loading, setLoading] = useState(true);

  const breedID = useParams().id;

  const api_key =
    "live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNp";
  // const LinkToBreeds = `https://www.vetstreet.com/cats/abyssinian`
  // const linkToBreedImage = `https://api.thecatapi.com/v1/images/search?limit=11&api_key=live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNpbreed_ids=abys`

  function convertBreedNameToBreedID(name, catBreedData) {
    for (let breed of catBreedData) {
      if (breed.name === name) { // Abyssinian
        console.log(breed.name)
        setId(breed.id);  
        console.log(breed.id)                    // abys
        return breed.id;
      }
    }
  }

  const fetchBreedImage = async () => {
    try {
      console.log(id);
      const response = await fetch(` https://api.thecatapi.com/v1/images/search?limit=11&api_key=live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNpbreed_ids=siam`, {
        headers: { "x-api-key": api_key },
      });
      const dataJson = await response.json();
      setSelectedBreedImage(dataJson);
 

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(id);



  

  const fetchBreedDetails = async () => {
    try {
      const response = await fetch(` https://api.thecatapi.com/v1/breeds/siam`, {
        headers: { "x-api-key": api_key },
      });
      const dataJson = await response.json();
      setSelectedBreedDetail(dataJson);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(` https://api.thecatapi.com/v1/breeds`, {
          headers: { "x-api-key": api_key },
        });
        const dataJson = await response.json();
        setCatBreedData(dataJson);

        setId(convertBreedNameToBreedID(breedID, dataJson));
        // console.log(id) /// ide szeretném a click event.target.valuját vagy a breedId
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(id);
  
    fetchData();
    fetchBreedImage();
    fetchBreedDetails();
    if (id !== null) {setLoading(false)}
  }, []);

  

   
  
  if (loading) {
    return <h1>its loading</h1>
  }
  return (
    <div  className="selectedBreed">
      <div className="catcontainer">
        
        <p>{selectedBreedDetail  && selectedBreedDetail.name}</p>
        <p>{selectedBreedDetail  && selectedBreedDetail.description}</p> 
        {/* <p>{selectedBreedImage && selectedBreedImage[0].url}</p> */}
        <img src={selectedBreedImage && selectedBreedImage[0].url} width="300px"></img>
        {/* <p>{selectedBreedDetail  && selectedBreedDetail.child_friendly}</p> */}
        <Link to="/ourcats">
                <button  >Back to adoptable cats</button>
                </Link>
      </div>
    </div>
  );
}
