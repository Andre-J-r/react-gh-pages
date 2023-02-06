import React from 'react'

import {AboutDiv, Citation, Info, Quotes, Text, P, ProjectsLink} from './AboutStyle'
import {Link} from 'react-router-dom'

function About () {

  return (
    <AboutDiv>
    <Info>
      Olá, eu me chamo <span style={{'color': '#64ffda'}}>André Gomes</span>, sou um desenvolvedor de software front end e construo websites e 
      aplicativos que são peças fundamentais no sucesso e engajamento de produtos e serviços em um mundo
      cada vez mais digital.
      <P>Veja alguns dos meus <Link to='/projects' style={{ 'textDecoration': 'none'}}><ProjectsLink>Projetos.</ProjectsLink></Link></P>
    </Info>
    <Citation>
      <Quotes>"</Quotes>
      <Text>Um código limpo, organizado e consiso equipara-se a beleza de um quadro de
      Leonardo da Vinci ou uma composição de Mozart.<Quotes style={{'float': 'right'}}>"</Quotes>
      <p style={{'color' : '#64ffda', 'opacity': '0.7', 'padding-top':'10px'}}> -Eu mesmo</p>
      </Text>
      
    </Citation>
    </AboutDiv>
  )
}

export default About