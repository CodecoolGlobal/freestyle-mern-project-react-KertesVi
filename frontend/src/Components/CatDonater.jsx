import { useState } from "react"

const CatDonater = ({cat,fetchData}) =>{
    const [donationAmount, setDonationAmount] = useState(1);


    function donateMoney(cat, moneyToDonate){
        let amount = parseInt(cat.dollars) + parseInt(moneyToDonate);
        let dollars = JSON.stringify({dollars:amount});

        return fetch(`/api/cats/${cat._id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: dollars,
          })
        .then((res) => res.json())
        .then(fetchData())
        .then(alert(`Thank you for donating ${donationAmount}$ for ${cat.name}!`))
      };

    return <div>
        <h5 className="food-list">Supported by {cat.dollars}$</h5>
         <label>Amount to donate:
                <input type="text" value={donationAmount} onChange={e => setDonationAmount(e.target.value)} />
            </label>
        <button type="button" onClick={() =>donateMoney(cat,donationAmount)}>Donate!</button>
    </div>

}
export default CatDonater
