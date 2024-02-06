import React, { useState } from "react"

function CatPostForm({handleFinish}) {

    const [ name, setName ] = useState()
    const [ sex, setSex ] = useState()
    const [ age, setAge ] = useState()
    const [ location, setLocation ] = useState()
    const [ picture, setPicture ] = useState()
    const [ breed, setBreed ] = useState()
    const [ dollars, setDollars ] = useState()


    function handlePost(e) {
        e.preventDefault();
        
        const data = { name: name, sex: sex, age: age, location: location, picture: picture, breed: breed, dollars: dollars };
        console.log(JSON.stringify(data))
        fetch('/api/cats', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
            .then(handleFinish())
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <form onSubmit={handlePost}>
            <label>name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>Age:
                <input type="number" value={age} onChange={e => setAge(e.target.value)} />
            </label>
            <label>Sex:
                <input type="text" value={sex} onChange={e => setSex(e.target.value)} />
            </label>
            <label>Location:
                <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
            </label>
            <label>Picture:
                <input type="text" value={picture} onChange={e => setPicture(e.target.value)} />
            </label>
            <label>Breed:
                <input type="text" value={breed} onChange={e => setBreed(e.target.value)} />
            </label>
            <label>Money:
                <input type="number" value={dollars} onChange={e => setDollars(e.target.value)} />
            </label>
            <button type="submit">Submit new cat</button>
        </form>
    );
}

export default CatPostForm