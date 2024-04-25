import "../styles/components/nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav">
      <Link className="nav-item" to={"/home"}>
        Home
      </Link>
      <Link className="nav-item" to={'/projects'}>Projects</Link>
      <Link className="nav-item" to={"/contact"}>
        Contact
      </Link>
    </nav>
  );
}

export default Nav;
