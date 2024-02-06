import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ username, onLogout }) {
  return (
    <nav className="Navbar">
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
      <Link to={"/aboutus"}>
        <button>AboutUs</button>
      </Link>
      <Link to={"/adoptedcats"}>
        <button>Adopted cats</button>
      </Link>
      <Link to={"/ourcats"}>
        <button>Adoptable cats</button>
      </Link>
      {username ? (
        <>
          <Link to={"/editor"}>
            <button>Editor site</button>
          </Link>
          <Link to={"/"}>
            <button onClick={onLogout}>Logout</button>
          </Link>
        </>
      ) : (
        <>
          <Link to={"/signup"}>
            <button>SignUp</button>
          </Link>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}
