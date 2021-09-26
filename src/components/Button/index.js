import * as S from "./index.style";

export default function Button(props) {
    return (
        <S.Box>
            <h2>{props.title}</h2>
            <S.Button
                href="https://www.corebiz.ag"
                rel="noreferrer"
                target="_blank"
            >
                <div title="Veja mais no site da Corebiz">
                    <p>veja mais</p>
                    <span />
                </div>
            </S.Button>
        </S.Box>
    );
}
