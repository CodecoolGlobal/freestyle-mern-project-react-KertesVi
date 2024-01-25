import React, { useState, useEffect } from "react";



export default function BreedModal() {
    const [catBreedData, setCatBreedData] = useState(null);

    const [breed, setBreed] = useState(null)


    const api_key = "live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNp";
    // const LinkToBreeds = `https://www.vetstreet.com/cats/abyssinian`
    // const linkToBreedImage = `https://api.thecatapi.com/v1/images/search?limit=11&api_key=live_qHVIRoMIeLIhQM4UQcxYiZFMd0IAFH9sm9k8MaI6x0urTABY8EvbgHLzGiYZqZNpbreed_ids=abys`

    
    function convertBreedToBreedID(name, catBreedData) {
    for (let breed of catBreedData) {
      if (breed.name.toLowerCase() === name){
        console.log(breed.id)
        setBreed(breed.id)
        return breed.id
      }
    }
    }
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(` https://api.thecatapi.com/v1/breeds`,
          {headers: {'x-api-key': api_key}});
          const dataJson = await response.json();
          setCatBreedData(dataJson);


    convertBreedToBreedID("abyssinian", catBreedData)
          
        
        
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [breed]);
      return (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Some text in the Modal..</p>
            <p>{catBreedData && catBreedData[0].name}</p>
            <p>{catBreedData && catBreedData[0].description}</p>
       
          </div>
        </div>
      );
  }


//   fetch(url,{headers: {
//     'x-api-key': api_key
//   }})
// .then((response) => {
//  return response.json();
// })
// .then((data) => {
 
//  //filter to only include those with an `image` object
//  data = data.filter(img=> img.image?.url!=null)
 
// storedBreeds = data;
 
//  for (let i = 0; i < storedBreeds.length; i++) {
//   const breed = storedBreeds[i];
//   let option = document.createElement('option');
   
//    //skip any breeds that don't have an image
//    if(!breed.image)continue
   
//   //use the current array index
//   option.value = i;
//   option.innerHTML = `${breed.name}`;
// document.getElementById('breed_selector').appendChild(option);
  
//   }
//  //show the first breed by default
//  showBreedImage(0)
// })
// .catch(function(error) {
//  console.log(error);
// });

// function showBreedImage(index)
// { 
// document.getElementById("breed_image").src= storedBreeds[index].image.url;

// document.getElementById("breed_json").textContent= storedBreeds[index].temperament


// document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
// document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
// }