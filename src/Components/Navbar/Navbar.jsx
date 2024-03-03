import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const f = ({isActive}) => isActive ? "activeLink link" : "link"
  return <nav>
        <NavLink className={f} to="/">cards</NavLink>
        <NavLink className={f} to="/korzina">korzina</NavLink>
  </nav>
};

export default Navbar;
