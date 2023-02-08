import styled from 'styled-components'

export const AboutDiv = styled.div`
  align-items: center;
  display: flex;
  margin-top: 100px;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
`

export const Info = styled.div`
  color: white;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 30px;
  opacity: 0.7;
  padding: 0 0 0 100px;
  text-align: justify;
  flex-grow: 2;
  

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0;
    width: 70%;
    text-align: center;
  }
`

export const Citation = styled.div`
  color: white;
  font-size: 30px;
  padding: 0 70px 0 100px;
  opacity: 0.7;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 15px 0;
    margin-top: 50px;
  }
`

export const Quotes = styled.span`
  color: orange;
  display: block;
  font-size: 30px;
  font-family: 'Trebuchet MS',sans-serif;
  height: 40px;
`

export const Text = styled.div`
  color: orange;
  font-family: 'Courier New', monospace;
  text-align: center;
`
export const ProjectsLink = styled.a`
  color: #64ffda;
  cursor: pointer;
  font-family: 'Lucida Console', Monaco, monospace;
  
  position: relative;
  &:before{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 4px;
    background-color: #64ffda;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
  }

  &:hover:before{
    transform-origin: left;
    transform: scaleX(1);
  }
`
export const P = styled.p`
  text-decoration: none;
  text-decoration-color: orange;
  text-decoration-thickness : 1px;
  text-underline-offset: 5px;
`