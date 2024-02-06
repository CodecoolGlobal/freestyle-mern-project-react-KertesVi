// import "./HomePage.scss";
import OurCats from "./OurCats";
import { Link } from "react-router-dom";

export default function HomePage({
  username,
  email,
  phone,
  address,
  fullname,
}) {
  return (
    <div className="HomePage">
      <h1>Wellcome to FurrHaven</h1>
      {username ? (
        <div className="accountDetails">
          <h3>Your account details:</h3>
          <h3>Username: {fullname}</h3>
          <h3>Address: {address}</h3>
          <h3>Email: {email}</h3>
          <h3>phone: {phone}</h3>
          <div className="adoptableCats">
          <h1>Adoptable Cats</h1>
          <OurCats />
          </div>
        </div>
      ) : (
        <div className="frame">
          <Link to={"/ourCats"}>
            <button className="custom-btn btn-16">Visitor </button>
          </Link>
          <Link to={"/Login"}>
            <button className="custom-btn btn-16">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}
