import { ThemeProvider } from "@emotion/react";

const tema = {
    cores: {
        branco: "",
        atencao: "",
        focus: "",
        primarias: {
            a: "#5754ED",
            b: "",
            c: ""
        },
        secundarias: {
            a: "#EBEAF9",
            b: "",
            c: ""
        },
        neutras: {
            a: "",
            b: "",
            c: "", 
            d: ""
        },
        dark: {
            a: "",
            b: ""
        }
    },
    espacamentos: {
        xxs: "4px",
        xs: "",
        s: "16px",
        m: "",
        l: "32px",
        xl: "",
        xxl: ""
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        { children }
    </ThemeProvider>
}

