import styled from 'styled-components'

export const ExpertiseDiv = styled.div`
  background-color: white;
  border: solid 1px ;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 200px auto 270px;
  height: 470px;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 150px auto 100px;
    height: 100%;
    width: 95%;
  }
`
export const Title = styled.p`
  color: black;
  letter-spacing: 1px;
  margin: 40px 0 ;
  font-family: 'Aclonica';
  font-size: 26px;
  text-align: center;
  width: 100%;
  
  @media (max-width: 768px) {
   margin: 50px 0 40px 20px;
   text-align: left;
   font-size: 5.2vw;
  }
`
export const Brain = styled.img`
  position: relative;
  right: 100px;
  top: 40px;
  width: 250px;
  height: 250px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    left: 80%;
    top: 3%;
    position: absolute;
  }
`
export const Jobs = styled.div`
  align-text: center;
  border-right: 1px solid black;
  padding-right: 30px;

  @media (max-width: 768px) {
    border: none;
    padding: 0;
    width: 100%;
  }
`
export const KnowledgeDiv = styled.div`
  text-align : center;
  margin : 0 0 0 70px;
  @media (max-width: 768px) {
    margin: 0 0 30px 0;
    width: 100%;
  }
`
export const KnowledgeLine = styled.li`
  font-size: 12px;
  font-family: 'Allan';
  letter-spacing: 1px;
  line-height: 32px;
  list-style: none;

  @media (max-width: 768px) {
    
  }
`

export const JobsLine = styled.p`
  color: black;
  font-family: 'Allan';
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 55px;
  list-style: none;
  opacity: 0.8;

  @media (max-width: 768px) {
    text-align: center;
  }
`