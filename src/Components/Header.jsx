import React from 'react'
import {Head, Tags, Name, Navigation, Profile} from './HeaderStyle'
import { HashLink } from 'react-router-hash-link'

function Header () {


  return (
    <Head>
      <Profile src='profile.jpeg'></Profile>
      <Name>André Gomes</Name>
      <Navigation>
       <HashLink to ='/#experiência' style={{'text-decoration':'none'}}> <Tags>Experiência</Tags></HashLink>
       <HashLink to ='/projects' style={{'text-decoration':'none'}}><Tags>Projetos</Tags></HashLink>
       <HashLink to ='/#redes' style={{'text-decoration':'none'}}><Tags>Redes Sociais</Tags></HashLink>
      </Navigation>
    </Head>
  )
}

export default Header