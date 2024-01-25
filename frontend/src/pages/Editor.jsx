import React, { useState } from "react";
import CatPostForm from "../Components/CatPostForm";
import CatUpdaterForm from "../Components/CatUpdaterForm"

export default function Editor() {
  const [catData, setCatData] = useState(null);
  const [catAdder, setCatAdder] = useState(null);
  const [catUpdater, setCatUpdater] = useState(null)

  function fetchData() {
    fetch('/api/cats/all')
      .then(response => response.json())
      .then(data => setCatData(data))
      .catch(error => console.log(error));
  }

  function handleDelete(id) {
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

  fetchData();
  return (
    catAdder ? (
      <CatPostForm handleFinish={handleFinishNewCatSet} />
    ) : catUpdater ? (
      <CatUpdaterForm cat={catUpdater} handleUpdate={finishHandleUpdateCat} />
    ) : (
      <div>
        <button onClick={handleAddNewCat}>add new cat</button>
        <div className="catlist">
          {catData && catData.map((cat) => (
            <div key={cat._id}>
              <li>Name:{cat.name}</li>
              <li>Sex:{cat.sex}</li>
              <li>Age:{cat.age}</li>
              <li>Location:{cat.location}</li>
              <li>Picture at:{cat.picture}</li>
              <li>Breed:{cat.breed}</li>
              <li>Money:{cat.dollars}$</li>

              <button onClick={handleUpdate(cat)}>update this cat</button>
              <button onClick={handleDelete(cat._id)}> delete this cat</button>
            </div>
          ))}
        </div>
      </div>
    ))
}