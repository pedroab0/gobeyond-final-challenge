import * as S from "./index.style";

export default function Nav(props) {
    return (
        <S.Box clicked={props.clicked}>
            <S.Menu>
                <a
                    href="https://www.corebiz.ag/pt/about/"
                    rel="noreferrer"
                    target="_blank"
                >
                    a corebiz
                </a>
                <a
                    href="https://www.corebiz.ag/pt/#framework-title"
                    rel="noreferrer"
                    target="_blank"
                >
                    serviços
                </a>
                <a
                    href="https://www.corebiz.ag/pt/cases/"
                    rel="noreferrer"
                    target="_blank"
                >
                    cases
                </a>
                <a
                    href="https://www.corebiz.ag/pt/contato/"
                    rel="noreferrer"
                    target="_blank"
                >
                    contato
                </a>
            </S.Menu>
        </S.Box>
    );
}
