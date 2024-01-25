import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function BreedModal() {
  const [catBreedData, setCatBreedData] = useState(null);
  const [id, setId] = useState(null);
  const [selectedBreedData, setSelectedBreedData] = useState(null);
  const breedID = useParams().id;

  const api_key =
    "live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNp";
  // const LinkToBreeds = `https://www.vetstreet.com/cats/abyssinian`
  // const linkToBreedImage = `https://api.thecatapi.com/v1/images/search?limit=11&api_key=live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNpbreed_ids=abys`

  function convertBreedNameToBreedID(name, catBreedData) {
    for (let breed of catBreedData) {
      if (breed.name.toLowerCase() === name) { // Abyssinian
        setId(breed.id);                      // abys
        return breed.id;
      }
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(` https://api.thecatapi.com/v1/breeds`, {
          headers: { "x-api-key": api_key },
        });
        const dataJson = await response.json();
        setCatBreedData(dataJson);

        convertBreedNameToBreedID("Abyssinian", dataJson); /// ide szeretném a click event.target.valuját vagy a breedId
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(id);
    fetchData();
  }, [id]);

  
  useEffect(() => {
    const fetchBreed = async () => {
      try {
        const response = await fetch(` https://api.thecatapi.com/v1/images/search?limit=11&api_key=live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNpbreed_ids=${id}`, {
          headers: { "x-api-key": api_key },
        });
        const dataJson = await response.json();
        setSelectedBreedData(dataJson);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(id);
    fetchBreed();
  }, [id]);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
        <p>{catBreedData && catBreedData[0].name}</p>
        <p>{catBreedData && catBreedData[0].description}</p>
        <p>{selectedBreedData && selectedBreedData[0].url}</p>
        <img src={selectedBreedData && selectedBreedData[0].url} width="300px"></img>
      </div>
    </div>
  );
}
