import {Link} from "react-router-dom"
import "./Signup.scss";
import { useState, useContext } from "react";
import HomePage from "./HomePage.jsx";
import { DataContext } from "../Components/Layout.jsx";


export default function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [data, setData] = useState({})
  const { globalData, setGlobalData } = useContext(DataContext);


  function handleSubmit(e) {
    e.preventDefault();

    const data = { username, email, phone, password, address, fullname };

    fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`Wellcome ${fullname}! Successfull registration`)
        setFormSubmitted(true)
        setData(data)
        setGlobalData(username);
      })
      .catch((error) => console.error("Error submitting registration", error))
  }
  

  return formSubmitted ? (
      <HomePage username={username} email={email} phone={phone} address={address} fullname={fullname}/>
          ) :(
      <div className="login-container">
       
      <form id="msform" onSubmit={handleSubmit}>
     

        <fieldset>
          <h1 className="fs-title">Create your account</h1>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            placeholder="Username"
          />
           <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            name="fullname"
            placeholder="Full Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="E-mail"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            placeholder="Phone Number"
          />
             <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            placeholder="Address"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
       
          />
          <button type="submit" >Submit your registration</button>
          <Link to={'/login'}><button type="submit" >Login</button></Link>
        </fieldset>
      </form>
    </div>
  )
}
