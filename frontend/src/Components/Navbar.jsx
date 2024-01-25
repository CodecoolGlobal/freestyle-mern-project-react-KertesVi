import { Link } from "react-router-dom";

export default function Navbar() {
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
      <Link to={"/signup"}>
        <button>SignUp</button>
      </Link>
    </nav>
  );
}
