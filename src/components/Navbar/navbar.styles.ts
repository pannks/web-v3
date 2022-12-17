import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
border-bottom: 1px solid ${({theme}) => theme.bgSoft} ;
`;

export const NavBrand = styled(Link)`
color: ${({ theme }) => theme.text} ;
font-size: 1rem;
`;

export const NavItems = styled.div`
display: flex;
justify-content: end;
gap: 15px;
`;

export const NavItem = styled(Link)`
margin: 0px 10px;

`;