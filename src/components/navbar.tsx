import { Link, Outlet } from "react-router-dom";
import { NavbarContainer, NavLinks, NavLink } from "./navbar.styles";

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <p>PannKs</p>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            Projects
          </NavLink>
          <NavLink className="nav-link" to="/auth">
            Sign in
          </NavLink>
        </NavLinks>
      </NavbarContainer>
      <Outlet />
    </div>
  );
};

export default Navbar;
