import styled from 'styled-components'

export const Head = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Trebuchet MS', sans-serif;
  margin-top: 20px;
  height: 100px;
`
export const Name = styled.span`
  color: #64ffda;
  font-family: Garamond, serif;
  font-size: 30px;
  letter-spacing: 1px;
  margin-left: 30px;
`
export const Profile = styled.img`
  border: solid #64ffda 3px;
  border-radius: 50%;
  color: orange;
  margin-left: 100px;
  height: 100px;
  width: 100px;
`
export const Navigation = styled.div`
  margin-left: 200px;
`
export const Tags = styled.span`
  color: white;
  font-family: 'Lucida Console', Monaco, monospace;
  letter-spacing: 1px;
  margin-right: 45px;

  &:hover{
    color: #64ffda;
    cursor: pointer;
  }
`
