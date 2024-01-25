import "./LandingPage.scss";
import { Link } from "react-router-dom";

export default function LandingPage() {

  return (
    <>
      <div className="section first cat">
        <Link to={"/home"}>
          <h2>
            Second chance at a <span className="other-text">loving</span> life
          </h2>
        </Link>
      </div>

      <div className="section second">
        <Link to={"/aboutus"}>
          <p>About Us</p>
        </Link>
      </div>

      <div className="section third cat"></div>

      <div className="section fourth">   
        <Link to={"/adoptedcats"}>
          <p>Adopt a cat</p>
        </Link>
      </div>
    
      <div className="section fifth cat"></div>

      <div className="section sixth">
        <Link to={"/donate"}>
          <p>Donate for a better life</p>
        </Link>
      </div>

      <div className="section seventh cat"></div>
    </>
  );
}