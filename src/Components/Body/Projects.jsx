import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import List from '../ListOfProjects'
import Header from '../Header'
import {Description, MacImg, External, Name, HoveredMessage, Picture, ProjectsContainer, Project, Title, HoveredLink} from './ProjectsStyle'

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
                  <HoveredLink href={item.adress} target="_blank"><External src="external.png" alt="external"/></HoveredLink>
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