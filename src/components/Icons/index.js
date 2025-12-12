import styled from 'styled-components'

const ImgIcon = styled.img`
  margin-left: 50px;
  width: 35px;
`


function Icons({src, alt }) {
  return(
    <ImgIcon src={src} alt={alt} />
  )
}

export default Icons