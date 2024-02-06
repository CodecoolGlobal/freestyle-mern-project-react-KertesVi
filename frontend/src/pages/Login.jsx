import { Link } from "react-router-dom";
// import "./Login.scss";
import { useState } from "react";
import HomePage from "./HomePage.jsx";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = { username, password };

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to login");
      }
      return res.json();
    })
    .then((responseData) => {
      setFormSubmitted(true);
      setUserData(responseData);
      setError(null);
    })
    .catch((error) => {
      console.error("Error submitting login", error);
      setError("Failed to login");
    });
  };

  return (
    formSubmitted ? <HomePage 
      username={username}
      email={userData.email}
      phone={userData.phone}
      address={userData.address}
      fullname={userData.fullname}
    /> : 
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
