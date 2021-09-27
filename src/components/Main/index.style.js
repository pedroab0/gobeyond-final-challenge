import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: 27% 63%;
    grid-template-areas:
        "button slide"
        "slider slide";
    justify-content: space-between;
    background: #000;
    padding: 0 8rem;

    @media (min-width: 1850px) {
        justify-content: unset;
    }

    @media (max-width: 1024px) {
        grid-template-columns: none;
        padding: 4rem;

        grid-template-areas:
            "button"
            "slide"
            "slider";
    }
`;

export const Slide = styled.img`
    grid-area: slide;

    max-width: 100%;
    max-height: 100%;
    border-radius: 1.2rem;
    margin: 3.6rem 0 5.3rem 0;

    @media (min-width: 1850px) {
        margin: 3.6rem 0 5.3rem 18rem;
    }

    @media (max-width: 1024px) {
        margin: 1.6rem 0 0 0;
    }
`;

export const Slider = styled.div`
    grid-area: slider;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    max-height: 7.2rem;
    margin: 1.6rem 0 0 0;

    @media (min-width: 1750px) and (max-width: 1850px) {
        padding: 0.4rem 0;
    }
    @media (min-width: 1650px) and (max-width: 1749px) {
        padding: 0.7rem 0;
    }
    @media (min-width: 1550px) and (max-width: 1649px) {
        padding: 1rem 0;
    }
    @media (min-width: 1200px) and (max-width: 1549px) {
        padding: 1.3rem 0;
        margin-bottom: 7.5rem;
    }
    @media (min-width: 1025px) and (max-width: 1199px) {
        padding: 1.6rem 0;
        margin-bottom: 7.5rem;
    }
    @media (min-width: 600px) and (max-width: 1024px) {
        width: auto;
        height: auto;
        justify-content: space-between;
    }
    @media (max-width: 400px) {
        padding: 1.2rem;
        margin: 0;
        justify-content: center;
    }
`;

export const Thumbnail = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: max-content;
    height: max-content;
    aspect-ratio: 1.7 /1;

    @media (max-width: 1024px) {
        aspect-ratio: 1 / 1;
    }

    ${(props) =>
        props.active
            ? "border: solid 4px #fff; cursor: default; &:disabled:hover {background: #000;}"
            : "border: solid 4px #000; cursor: pointer;}"};
`;
