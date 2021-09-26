import styled, { css } from "styled-components";

export const Container = styled.span`
    display: inline-block;
    cursor: pointer;
    grid-area: hamburger;

    @media (min-width: 1025px) {
        display: none;
    } ;
`;

export const Bar = styled.div`
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;

    ${(props) =>
        props.clicked1 &&
        css`
            -webkit-transform: rotate(-45deg) translate(-9px, 6px);
            transform: rotate(-45deg) translate(-9px, 6px);
        `};
    ${(props) =>
        props.clicked2 &&
        css`
            opacity: 0;
        `};
    ${(props) =>
        props.clicked3 &&
        css`
            -webkit-transform: rotate(45deg) translate(-8px, -8px);
            transform: rotate(45deg) translate(-8px, -8px);
        `};
`;
