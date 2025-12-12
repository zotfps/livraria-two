import logo from'../../img/logo.svg';
import styled from 'styled-components'

const DivLogo = styled.div`
        display: flex;
        font-size: 30px;`

const LogoImg = styled.img`
    margin-right: 5px;
`        
function Logo(){
    return (
        <DivLogo>
        <LogoImg src={logo} alt="logo-livraria-two"/>
            <p><strong>Livraria</strong> Two</p>
        </DivLogo>
    )
}

export default Logo