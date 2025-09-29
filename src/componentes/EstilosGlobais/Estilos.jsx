import { css, Global } from "@emotion/react";

const estilos = css`
    * {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    }
`

export const Estilos = () => {
    return (
        <Global
            styles={estilos}
        />
    )
}