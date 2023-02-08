import styled from 'styled-components'

export const Head = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Trebuchet MS', sans-serif;
  margin-top: 20px;
  height: 100px;

  @media (max-width: 768px) {
    display:block;
    margin-top: 50px;
    height: 100%;
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
    margin-left: 40px;
    font-size: 7vw;
  }
`
export const Profile = styled.img`
  border: solid #64ffda 3px;
  border-radius: 50%;
  color: orange;
  margin-left: 100px;
  height: 60px;
  width: 60px;

  @media (max-width: 768px) {
    margin-left: 40px;
    
  }
  
`
export const Navigation = styled.div`
  margin-left: 200px;
  
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 70px 0 0 0;
    font-size: 3.5vw;
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

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    letter-spacing: 0 ;
    width: 100%;
  }  
`
