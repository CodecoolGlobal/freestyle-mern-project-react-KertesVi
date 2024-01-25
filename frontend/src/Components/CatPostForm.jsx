import React, { useState } from "react"

function CatPostForm(props) {
    const finish = props.handleFinish

    const { name, setName } = useState(null)
    const { age, setAge } = useState(null)
    const { sex, setSex } = useState(null)
    const { location, setLocation } = useState(null)
    const { picture, setPicture } = useState(null)
    const { breed, setBreed } = useState(null)
    const { dollars, setDollars } = useState(null)


    function handlePost() {
        const data = { name, age, sex, location, picture, breed, dollars };
        fetch('api/cats', {
            method: 'POST',
            headers: {
                'Content-type': 'application'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .then(finish())
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Form onSubmit={handlePost}>
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
                <input type="url" value={picture} onChange={e => setPicture(e.target.value)} />
            </label>
            <label>Breed:
                <input type="text" value={breed} onChange={e => setBreed(e.target.value)} />
            </label>
            <label>Money:
                <input type="number" value={dollars} onChange={e => setDollars(e.target.value)} />
            </label>
        </Form>
    )
}
export default CatPostForm