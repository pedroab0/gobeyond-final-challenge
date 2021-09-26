import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-areas:
        "logo hamburger"
        "menu menu";
    justify-content: space-between;
    align-items: center;

    padding: 5.6rem 8rem 0 8rem;

    background: #000;

    a {
        font-family: "Montserrat", sans-serif;
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        padding-top: 3.6rem;
    }

    @media (max-width: 1024px) {
        padding: 3.6rem 4rem 0 4rem;
    }
`;

export const Box = styled.div`
    display: contents;
`;

export const Logo = styled.img`
    width: auto;
    height: auto;
    grid-area: logo;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    a {
        font-weight: 400;
        font-size: 2.5rem;
        color: #fff;
        text-decoration: none;

        margin-left: 2rem;
        padding: 0.8rem 0;

        &:hover {
            border-bottom: solid 0.1rem #fff;
            padding-bottom: 0.7rem;
            color: #707070;
        }
    }

    @media (min-width: 1025px) and (max-width: 1440px) {
        margin-bottom: 0;
    }

    @media (max-width: 1024px) {
        display: none;
    }
`;
