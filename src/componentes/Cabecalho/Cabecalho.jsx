import styled from "@emotion/styled"

export const CabecalhoEstilizado = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
    justify-content: space-between;
    display: flex;
    padding: 24px;
`

const Button = styled.button`
  background: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`;

export const Header = () => {
    return (
        <CabecalhoEstilizado>
            <img src="./logo-freelando.svg" alt="Logo do Freelando"/>
            <Button>Login</Button>
        </CabecalhoEstilizado>
    )
}

