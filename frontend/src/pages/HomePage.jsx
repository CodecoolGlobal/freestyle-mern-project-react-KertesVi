import "./HomePage.scss";
import OurCats from "./OurCats";
import { Link } from "react-router-dom";
import { useState, createContext } from "react";

export const DataContext = createContext(null);

export default function HomePage({
  username,
  email,
  phone,
  address,
  fullname,
}) {
  const [globalData, setGlobalData] = useState(null);

  const handleLogout = () => {
    setGlobalData(null);
  };

  return (
    <div className="HomePage">
      <h1>Welcome to PurrHaven</h1>
      {username ? (
        <div className="login-container">
          <form id="msform">
            <fieldset>
              <h1 className="fs-title">My profile:</h1>
              <h3>Username: {fullname}</h3>
              <h3>Address: {address}</h3>
              <h3>Email: {email}</h3>
              <h3>phone: {phone}</h3>
              <button className="logout" type="submit" onClick={handleLogout}>
                Logout
              </button>
              <Link to={"/"}>
                <button className="logout">Edit</button>
              </Link>
            </fieldset>
          </form>
        </div>
      ) : (
        <div className="frame">
          <div className="card">
            <Link to={"/ourCats"}>
              <button className="custom-btn btn-16">Visitor</button>
            </Link>
            <img src="./images/image5.webp" alt="catpic" width="600px" ></img>
          </div>
          <div className="card">
            <Link to={"/Login"}>
              <button className="custom-btn btn-16">Login</button>
            </Link>
            <img
              src="./images/bgf8f8f8-flat750x075f-pad750x1000f8f8f8.jpg"
              alt="catpic"
            ></img>
          </div>
        </div>
      )}
    </div>
  );
}
