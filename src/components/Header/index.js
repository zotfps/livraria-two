import Logo from '../Logo'
import Options from '../../components/Options'
import Icons from '../../components/Icons'
import sacola from '../../img/sacola.svg'
import perfil from '../../img/perfil.svg'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;`

function Header() {
    return (
      <HeaderContainer>
        <Logo></Logo>
        <Options>Categorias</Options>
        <Options>Favoritos</Options>
        <Options>Minha Estante</Options>
        <Icons src={perfil} alt="Perfil" />
        <Icons src={sacola} alt="Sacola" />
      </HeaderContainer>
    )
}

export default Header