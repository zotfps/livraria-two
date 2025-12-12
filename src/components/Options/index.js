import styled from 'styled-components'

const LiOption = styled.li`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
  min-width: 120px;`

function Options({children}){
    return (
        <ul>
        <LiOption>{children}</LiOption>
        </ul>
    )
}

export default Options