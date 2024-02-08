import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Breed.scss"



export default function BreedModal() {
  const [loading, setLoading] = useState(true)
  const [id, setId] = useState('');
  const [selectedBreedImage, setSelectedBreedImage] = useState(null);
  const [selectedBreedDetail, setSelectedBreedDetail] = useState(null);
  const breedID = useParams().id;

  const api_key =
    "live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNp";
  // const LinkToBreeds = `https://www.vetstreet.com/cats/abyssinian`
  // const linkToBreedImage = `https://api.thecatapi.com/v1/images/search?limit=11&api_key=live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNpbreed_ids=abys`

  function convertBreedNameToBreedID(name, catBreedData) {
    for (const breed of catBreedData) {
      if (breed.name === name) {
        setId(breed.id)
        return breed.id;
      }
    }
  }

 async function fetchBreedImage(){
    try {
      const response = 
      await fetch(` https://api.thecatapi.com/v1/images/search?limit=11
      &api_key=live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNpbreed_ids=${id}`, {
        headers: { "x-api-key": api_key },
      });
      const dataJson = await response.json();
      setSelectedBreedImage(dataJson);
 

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  async function fetchBreedDetails(){
    try {
      const response = await fetch(` https://api.thecatapi.com/v1/breeds/${id}`, {
        headers: { "x-api-key": api_key },
      });
      const dataJson = await response.json();
      setSelectedBreedDetail(dataJson);
     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  async function fetchData() {
    try {
      const response = await fetch(` https://api.thecatapi.com/v1/breeds`, {
        headers: { "x-api-key": api_key },
      });
      const dataJson = await response.json();
      return dataJson
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData()
    .then((data) => {
      convertBreedNameToBreedID(breedID,data)})
    .then(()=>{
      fetchBreedImage();
      fetchBreedDetails();
      setLoading(false)
    })
  }, [id]);

  if(loading){
    return <h1>loading</h1>
  }
  
  return (
   
      <div id="circle-shape-example">
         <img  className="curve" src={selectedBreedImage && selectedBreedImage[0].url} ></img>
        <h1 >{selectedBreedDetail  && selectedBreedDetail.name}</h1>
        <p>{selectedBreedDetail  && selectedBreedDetail.description}</p> 
        {/* <p>{selectedBreedImage && selectedBreedImage[0].url}</p> */}
       
        {/* <p>{selectedBreedDetail  && selectedBreedDetail.child_friendly}</p> */}
        <Link to="/ourcats">
                <button className="back" >Back to adoptable cats</button>
                </Link>
      </div>
 
  );
}
