import { useState } from "react";
import * as S from "./index.style";
import Nav from "./../Nav/";

export default function Hamburger() {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <S.Container
                onClick={() => setClicked(clicked === false ? true : false)}
            >
                <S.Bar clicked1={clicked} />
                <S.Bar clicked2={clicked} />
                <S.Bar clicked3={clicked} />
            </S.Container>
            <Nav clicked={clicked} />
        </>
    );
}
