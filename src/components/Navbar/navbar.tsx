import { Outlet } from "react-router-dom";
import TogglerButton from "../Button/togglerButton";
import { NavBrand, NavContainer, NavItems, NavItem } from "./navbar.styles";
const Navbar = ({ themeToggler }: any) => {
  return (
    <>
      <NavContainer>
        <NavBrand to="/">
          <p>PannKs</p>
        </NavBrand>
        <NavItems>
          <TogglerButton themeToggler={themeToggler} />
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/lectures">Lectures</NavItem>
          <NavItem to="/auth">Sign in</NavItem>
        </NavItems>
      </NavContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
