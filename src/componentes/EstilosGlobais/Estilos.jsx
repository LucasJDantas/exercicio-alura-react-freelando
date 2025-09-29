import { Global } from "@emotion/react";

//Estilos globais
const estilos = tema => {
    return {
        html: {
            fontFamily: tema.fontFamily
        },
        body: {
            margin: 0
        }
    }
}

export const Estilos = () => {
    return (
        <Global
            styles={estilos}
        />
    )
}