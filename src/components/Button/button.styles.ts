import styled from "styled-components";

export const BaseButton = styled.button`
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    background-color: ${ ({theme}) => theme.btnBg };
    color: ${ ({theme}) => theme.btnText };

    &:hover {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme } ) => theme.color};
        border: 1px solid ${({ theme }) => theme.color};
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;