import "./Signup.css";
import { useState, useEffect } from "react";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/signup");
        if (!response.ok) {
          console.error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
            name="password"
          />
          <button type="submit">Submit your registration</button>
        </fieldset>
      </form>
      <div></div>
    </div>
  );
}
