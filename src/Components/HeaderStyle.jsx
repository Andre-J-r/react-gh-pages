import styled from 'styled-components'

export const Head = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Trebuchet MS', sans-serif;
  margin-top: 20px;
  height: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
    height: 50px;
    width: 100%;
  }
`
export const Name = styled.span`
  color: #64ffda;
  font-family: Garamond, serif;
  font-size: 30px;
  letter-spacing: 1px;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin:0 40px 0 120px;
    font-size: 26px;
  }
`
export const Profile = styled.img`
  border: solid #64ffda 3px;
  border-radius: 50%;
  color: orange;
  margin-left: 100px;
  height: 100px;
  width: 100px;

  @media (max-width: 768px) {
    margin-left: 70px;
  }
  
`
export const Navigation = styled.div`
  margin-left: 200px;
  @media (max-width: 768px) {
    display: flex;
    margin: 0 100px 0 50px;
    font-size: 18px;
  }
`
export const Tags = styled.span`
  color: white;
  font-family: 'Lucida Console', Monaco, monospace;
  letter-spacing: 1px;
  margin-right: 35px;

  &:hover{
    color: #64ffda;
    cursor: pointer;
  }
`
