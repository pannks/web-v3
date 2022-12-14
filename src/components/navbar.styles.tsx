import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  align-items: center;
  margin: 0 auto;
  height: 2.4rem;
  width: 70%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #1e5bb8;
  color: #1e5bb8;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  color: #1e5bb8;
  align-self: center;
  padding: 0 15px;
  cursor: pointer;
`;
