import { Link } from "react-router-dom";
// import "./Login.scss";
import { useState } from "react";
import HomePage from "./HomePage.jsx";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = { username, password };

    fetch("/api/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((responseData) => {
        // Assuming the API returns a user object upon successful login
        setFormSubmitted(true);
        setData(responseData.user); 
        // Adjust accordingly based on your API response
      })
      .catch((error) => {
        console.error("Error submitting login", error);
      });
  };
  console.log(data)
  return (
    <>
      <div className="login-container">
        <form id="msform" onSubmit={handleSubmit}>
          <fieldset>
            <h1 className="fs-title">Login to your account</h1>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <Link to={"/signup"}>
              <button type="submit">Signup</button>
            </Link>
          </fieldset>
        </form>
      </div>
    </>
  );
}
