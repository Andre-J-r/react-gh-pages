import styled from 'styled-components'

export const RedesContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  width: 100%;
`
export const Img = styled.img`
  margin: 30px 30px;
  height: 70px;
  width: 70px;

  &:hover{
    transform: scale(2);
    transition: transform 1s
  }
`
export const P = styled.p`
  color: #c90de2;
  font-family: 'Aclonica';
  font-size: 22px;
  text-align: center;
`