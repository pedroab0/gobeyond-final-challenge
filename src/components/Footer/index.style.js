import styled from "styled-components";

export const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    background: linear-gradient(-90deg, #f4f4f4 60%, #fff 40%);

    @media (max-width: 1024px) {
        display: grid;
        justify-content: center;
        padding: 4rem 0;
        background: linear-gradient(0deg, #f4f4f4 50%, #fff 50%);
    }
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 8rem;

    p {
        color: #000;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 4.5rem;

        @media (max-width: 1024px) {
            text-align: center;
        }
    }

    div {
        @media (max-width: 1024px) {
            display: grid;
            justify-content: center;
            align-items: center;
            margin-bottom: 3rem;
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 0%;
        box-sizing: border-box;
        padding: 0 4rem;
    }
`;

export const Menu = styled.div`
    display: grid;
    align-items: center;
    width: 31%;
    margin-left: 8rem;

    a {
        color: #000;
        font-family: "Montserrat", sans-serif;
        font-size: 1.2rem;
        font-weight: 600;

        text-decoration: none;
        text-align: left;

        border-bottom: solid 0.1rem #000;

        padding: 0.8rem 0;

        @media (max-width: 1024px) {
            text-align: center;
        }
    }

    @media (max-width: 1024px) {
        display: grid;
        align-items: center;
        text-align: center;
        justify-content: unset !important;
        width: 100%;
        margin-left: 0;
    }
`;

export const Logo = styled.img`
    width: 14rem;
    height: 3.2rem;

    @media (max-width: 1024px) {
        justify-self: center;
    }
`;

export const Social = styled.div`
    display: flex !important;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 1.4rem;
        height: 1.4rem;
        margin-right: 1.3rem;
    }

    @media (max-width: 1024px) {
        justify-content: center !important;
    }
`;

export const Offices = styled.div`
    display: flex;
    width: 55%;
    background: #f4f4f4;
    padding: 3.6rem 4rem;
    box-sizing: border-box;

    div {
        width: 25%;
        margin: 0 2rem;
    }

    p {
        color: #000;
        font-size: 1.2rem;
        font-weight: 500;
        font-family: "Montserrat", sans-serif;
        margin: 1.2rem 0;
    }

    h1 {
        margin: 0;

        color: #000;
        font-size: 2rem;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
    }

    @media (min-width: 1700px) {
        width: 62%;
    }

    @media (max-width: 1024px) {
        width: 100%;
        display: grid;
        justify-content: center;
        margin: 0;
        padding: 3rem 4rem;

        div {
            width: 100%;
            margin: 0;
        }
    }
`;
