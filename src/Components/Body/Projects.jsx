import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import List from '../ListOfProjects'
import Header from '../Header'
import {Description, MacImg, External, Name, HoveredMessage, Picture, ProjectsContainer, Project, Title} from './ProjectsStyle'

function Projects () {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <React.Fragment>
      <Header/>
      <Title>Projetos</Title>
      <ProjectsContainer>
        {
          List.map(function(item) {
            return <Project>
              <MacImg src="ma.png" alt="mac"/>
              { !isHovered ?
                (
                  <Picture src={item.picture} alt="cpfl" onMouseEnter={() => setIsHovered(true)}/>
                ) : 
                ( 
                  <React.Fragment>
                  <HoveredMessage>Visit the website</HoveredMessage>
                  <Picture style={{'opacity': '0.2'}} src={item.picture} alt="cpfl" onMouseLeave={() => setIsHovered(false)}/>
                  <a href={item.adress} target="_blank"><External style={{'left': '280px', 'top' : '170px', 'position' : 'absolute'}} src="external.png" alt="external"/></a>
                  </React.Fragment>
                )
              }
              <a href={item.adress} target="_blank"><External src="external.png" alt="external"/></a>
              <div style={{'margin': '20px 20px'}}>
                <Description>{item.description}</Description>
              </div>
              
            </Project>
          })
        }
      </ProjectsContainer>
    </React.Fragment>

  )
}

export default Projects