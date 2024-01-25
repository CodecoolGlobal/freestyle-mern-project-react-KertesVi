import './Signup.css';
import { useState } from "react";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
 
    const data = { username, email, password };

    fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
     })
      .catch((error) => console.error("Error submitting registration", error));
  }

  return (
    <div className="login-container">
      <form id="msform" onSubmit={handleSubmit}>
        <ul id="progressbar">
          <li className="active">Account Setup</li>
        </ul>

        <fieldset>
          <h1 className="fs-title">Create your account</h1>
          <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} name="username" placeholder="Username" />
          <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} name="email" placeholder="E-mail" />
          <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} name="password" placeholder="Password" />
          <button type='submit'>Submit your registration</button>
        </fieldset>
       
      </form>
      <div></div>
    </div>
  );
}