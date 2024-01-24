import { Link } from "react-router-dom";

export default function Navbar() {
  return (

    <nav className="Navbar">
      <Link to={"/home"} >
      <button>Home</button>
      </Link>
      <Link to={"/login"} >
      <button>Login</button>
      </Link>
      <Link to={"/aboutus"} >
      <button>AboutUs</button>
      </Link>
      <Link to={"/adopedcats"} >
      <button>Cats with new home!</button>
      </Link>
    </nav>
   
  )
}
