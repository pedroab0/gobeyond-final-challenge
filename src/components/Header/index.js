import * as S from "./index.style";
import Logo from "../../assets/logo-corebiz-global.svg";
import Hamburger from "./../Hamburger/";

function Header() {
    return (
        <>
            <S.Container>
                <S.Box>
                    <S.Logo src={Logo} alt="Logo Corebiz" />
                    <Hamburger />
                </S.Box>
                <S.Nav>
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
                </S.Nav>
            </S.Container>
        </>
    );
}

export default Header;
