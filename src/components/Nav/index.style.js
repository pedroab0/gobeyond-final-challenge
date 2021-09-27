import styled, { css } from "styled-components";

export const Box = styled.div`
    display: none;

    ${(props) =>
        props.clicked &&
        css`
            display: block;
            box-sizing: border-box;
            grid-area: menu;
        `};

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const Menu = styled.div`
    display: grid;
    align-items: center;
    width: 100%;
    margin-top: 3rem;

    a {
        color: #fff;
        font-family: "Montserrat", sans-serif;
        font-size: 2.2rem;
        font-weight: 600;

        text-decoration: none;
        text-align: center;

        border-bottom: solid 0.1rem #fff;

        padding: 0.8rem 0;
    }
`;
