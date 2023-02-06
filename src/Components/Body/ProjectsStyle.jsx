import styled from 'styled-components'

export const External = styled.img`
  cursor: pointer;
  left: 120px;
  top: 95px;
  position: relative;
  width: 20px;
  height: 20px;
  z-index: 2;
`

export const Name = styled.p`
  color: white;
  text-align: center;
`
export const MacImg = styled. img`
  position: absolute;
  height: 350px;
  width: 590px;
  z-index: 0;
`
export const Picture = styled.img`
  top: 22px;
  left: 76px;
  height: 280px;
  width: 445px;
  position: relative;
  z-index: 1;
`
export const HoveredMessage = styled.p`
  color: white;
  font-weight: bold;
  letter-spacing: 1.5px;
  position: absolute;
  left: 210px;
  top: 110px;
  z-index: 5;
`
export const Description = styled.p`
  color: white;
  font-family: 'Trebuchet MS', sans-serif;
  justify-content: center;
  line-height: 25px;
  opacity: 0.7;
  text-align: justify;
  margin: 120px 0 0 250px;
  width: 400px;
`
export const Project = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 400px;
  width: 100%;
  height: 100%;
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  height: 100%;
  width: 100%;
`

export const Title = styled.p`
  color: #64ffda;
  font-size: 36px;
  text-align: center;
`