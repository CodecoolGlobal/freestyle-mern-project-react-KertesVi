import { Link } from "react-router-dom";

export default function Editor() {
  return (
    <div>
    <nav className="navEditor">
   <Link to={"/add"} ><button>Add a new cat</button></Link>
      <input type="text" placeholder="Search.."></input>
      <div>Adoptation</div>
    </nav>
    <div ></div>
    </div>
  
  );
}
