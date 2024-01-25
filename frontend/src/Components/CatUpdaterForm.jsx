import React, { useState } from "react";
function CatUpdaterForm(props) {
    const { name, setName } = useState(null)
    const { age, setAge } = useState(null)
    const { sex, setSex } = useState(null)
    const { location, setLocation } = useState(null)
    const { picture, setPicture } = useState(null)
    const { breed, setBreed } = useState(null)
    const { dollars, setDollars } = useState(null)

    const cat = props.cat;
    const update = props.handleUpdate;

    function handlePatch() {
        const data = { name, age, sex, location, picture, breed, dollars };
        fetch(`/api/cats/${cat._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

        update()
    }

    return (
        <Form onSubmit={handlePatch}>
            <label>name:
                <input placeholder={cat.name} type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>Age:
                <input placeholder={cat.age} type="number" value={age} onChange={e => setAge(e.target.value)} />
            </label>
            <label>Sex:
                <input placeholder={cat.sex} type="text" value={sex} onChange={e => setSex(e.target.value)} />
            </label>
            <label>Location:
                <input placeholder={cat.location} type="text" value={location} onChange={e => setLocation(e.target.value)} />
            </label>
            <label>Picture:
                <input placeholder={cat.picture} type="url" value={picture} onChange={e => setPicture(e.target.value)} />
            </label>
            <label>Breed:
                <input placeholder={cat.breed} type="text" value={breed} onChange={e => setBreed(e.target.value)} />
            </label>
            <label>Money:
                <input placeholder={cat.dollars} type="number" value={dollars} onChange={e => setDollars(e.target.value)} />
            </label>
            <button type="submit">Submit changes</button>
        </Form>
    )
}
export default CatUpdaterForm