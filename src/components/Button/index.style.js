import styled from "styled-components";

export const Box = styled.div`
    grid-area: button;

    display: grid;
    align-content: center;
    margin-top: 4rem;

    h2 {
        font-family: "Montserrat", sans-serif;
        font-size: 6rem;
        font-weight: 600;
        color: #fff;

        margin: 0;
        min-height: 14rem;
        max-height: 20rem;
        max-width: 51rem;

        overflow: hidden;
        word-break: break-word;

        @media (min-width: 1550px) {
            margin-top: 0;
            max-height: 27.3rem;
        }

        @media (min-width: 1350px) and (max-width: 1500px) {
            font-size: 4rem;
            max-height: 23.3rem;
        }

        @media (min-width: 1185px) and (max-width: 1359px) {
            font-size: 3.2rem;
        }

        @media (min-width: 1025px) and (max-width: 1184px) {
            font-size: 2.7rem;
        }

        @media (max-width: 900px) {
            font-size: 4rem;
            max-width: 34rem;
        }
    }

    @media (max-width: 900px) {
        margin-left: 0;
        margin-top: 0;
    }
`;

export const Button = styled.a`
    height: 6rem;
    max-width: 22rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5rem;
    margin: 4rem 0;

    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 50px rgba(0, 0, 0, 0.16);

    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #000;

    div {
        display: flex;
        align-items: center;

        h1 {
            display: none;
        }
    }

    span {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-left: 0.8rem;
        background: #000;

        &::after {
            content: "";
            display: inline-block;
            margin-bottom: 0.5rem;
            margin-left: 0.55rem;
            width: 0.4rem;
            height: 0.4rem;
            border-top: 0.2rem solid #fff;
            border-right: 0.2rem solid #fff;
            -moz-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }

    @media (max-width: 1700px) {
        margin: 2rem 0;
        height: 5rem;
    }
`;
