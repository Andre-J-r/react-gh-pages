import styled from 'styled-components'

export const RedesContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  width: 100%;

  @media (max-width: 768px) {
    height: 250px;
    justify-content: space-around;
  }
`
export const Img = styled.img`
  margin: 30px 30px;
  height: 70px;
  width: 70px;

  &:hover{
    transform: scale(2);
    transition: transform 1s
  }

  @media (max-width: 768px) {
    margin: 0;
    height: 100%;
    width: 100%;
  }
`
export const P = styled.p`
  color: #c90de2;
  font-family: 'Aclonica';
  font-size: 22px;
  text-align: center;

  @media (max-width: 768px) {
    
  }
`