import * as S from "./index.style";

import Logo from "../../assets/logo-corebiz-global-2.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";

export default function Footer() {
    return (
        <>
            <S.Container>
                <S.Box>
                    <div>
                        <S.Logo src={Logo} alt="Logo Corebiz" />
                        <p>direitos reservados. corebiz 2021</p>
                        <S.Social>
                            <a href="https://www.facebook.com/corebiz.ag/" rel="noreferrer" target="_blank">
                                <img src={Facebook} alt="Facebook Corebiz" />
                            </a>
                            <a href="https://www.linkedin.com/company/corebiz-brasil/" rel="noreferrer" target="_blank">
                                <img src={Linkedin} alt="Linkedin Corebiz" />
                            </a>
                            <a href="https://www.instagram.com/corebizag/" rel="noreferrer" target="_blank">
                                <img src={Instagram} alt="Instagram Corebiz" />
                            </a>
                        </S.Social>
                    </div>
                    <S.Menu>
                        <a href="https://www.corebiz.ag/pt/about/" rel="noreferrer" target="_blank">
                            a corebiz
                        </a>
                        <a href="https://www.corebiz.ag/pt/#framework-title" rel="noreferrer" target="_blank">
                            serviços
                        </a>
                        <a href="https://www.corebiz.ag/pt/cases/" rel="noreferrer" target="_blank">
                            cases
                        </a>
                        <a href="https://www.corebiz.ag/pt/contato/" rel="noreferrer" target="_blank">
                            contato
                        </a>
                    </S.Menu>
                </S.Box>

                <S.Offices>
                    <div>
                        <h1>.Brasil</h1>
                        <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</p>
                        <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                    </div>
                    <div>
                        <h1>.Argentina</h1>
                        <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                    </div>
                    <div>
                        <h1>.México</h1>
                        <p>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                    </div>
                    <div>
                        <h1>.Chile</h1>
                        <p>Roberto del Río 1137, Providencia.</p>
                    </div>
                </S.Offices>
            </S.Container>
        </>
    );
}
