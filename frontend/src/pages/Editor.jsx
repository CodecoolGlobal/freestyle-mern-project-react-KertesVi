
import React, { useEffect, useState } from "react";
import CatPostForm from "../Components/CatPostForm";
import CatUpdaterForm from "../Components/CatUpdaterForm"
import CatTable from "../Components/CatTable";
import "./Editor.scss"

function Editor() {
  const [catData, setCatData] = useState([]);
  const [catAdder, setCatAdder] = useState(null);
  const [catUpdater, setCatUpdater] = useState(null)

  const [loading, setLoading] = useState(true);



  function fetchData() {
    return fetch("/api/cats")
    .then((res) => res.json())
    .then((cats) =>setCatData(cats))
    .then(console.log(catData))
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
    deleteCat(id)
  }

  function handleAddNewCat() {
    setCatAdder(true);
  }
  function handleFinishNewCatSet() {
    fetchData()
    .then(setCatAdder(false));
  }
  function handleUpdate(cat) {
    setCatUpdater(cat);
  }
  function finishHandleUpdateCat() {
    fetchData()
    .then(setCatUpdater(null));
  }

  useEffect(() => {
    fetchData()
    .then(setLoading(false))
  }, []);

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
    <CatTable cats={catData} onDelete={handleDelete} onUpdate={handleUpdate}/>
  </div>
}
export default Editor;

