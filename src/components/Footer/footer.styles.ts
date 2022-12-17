import styled from "styled-components"

export const Footer = styled.footer`
    background-color: ${({theme})=> theme.bgSoft};
    color: ${({theme})=> theme.text};
    font-size: 1.0rem;
    padding: 35px;
    text-align: center;
    span {
        font-weight: 200;
    }


`