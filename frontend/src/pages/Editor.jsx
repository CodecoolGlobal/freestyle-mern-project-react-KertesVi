import React, { useEffect, useState } from "react";
import CatPostForm from "../Components/CatPostForm";
import CatUpdaterForm from "../Components/CatUpdaterForm"

function Editor() {
  const [catData, setCatData] = useState([]);
  const [catAdder, setCatAdder] = useState(null);
  const [catUpdater, setCatUpdater] = useState(null)

  const [loading, setLoading] = useState(true);



  function fetchData() {
    return fetch("/api/cats").then((res) => res.json());
  }

  function deleteCat(id){
    fetch(`/api/cats/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error));
    fetchData();
  }

  const handleDelete = (id) => {
   deleteCat(id);
  }

  function handleAddNewCat() {
    setCatAdder(true);
  }
  function handleFinishNewCatSet() {
    setCatAdder(false);
    fetchData();
  }
  function handleUpdate(cat) {
    setCatUpdater(cat);
  }
  function finishHandleUpdateCat() {
    setCatUpdater(null);
    fetchData();
  }

  useEffect(() => {
    fetchData()
    .then((cats) =>setCatData(cats))
    .then(setLoading(false))
    .then(console.log(catData))
  }, []);

  //replace with useeffect
  if (catAdder) {
    return <CatPostForm handleFinish={handleFinishNewCatSet} />
  }
  if (catUpdater) {
    return <CatUpdaterForm cat={catUpdater} handleUpdate={finishHandleUpdateCat} />
  }
  if (loading) {
    return <h1>its loading</h1>
  }
  return <div>
    <button id="newCatButton" onClick={handleAddNewCat}>add new cat</button>
    <div className="catlist">
      {catData.map((cat) => (
        <div key={cat._id}>
          <li>Name:{cat.name}</li>
          <li>Sex:{cat.sex}</li>
          <li>Age:{cat.age}</li>
          <li>Location:{cat.location}</li>
          <li>Picture at:{cat.picture}</li>
          <li>Breed:{cat.breed}</li>
          <li>Money:{cat.dollars}$</li>

          <button id="updateButton" onClick={handleUpdate(cat)}>update this cat</button>
          <button id="deleteButton" onClick={handleDelete(cat._id)}> delete this cat</button>
        </div>
      ))}
    </div>
  </div>
}
export default Editor;