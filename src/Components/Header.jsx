import React from 'react'
import {Head, Tags, Name, Navigation, Profile} from './HeaderStyle'
import { HashLink } from 'react-router-hash-link'

function Header () {


  return (
    <Head>
      <Profile src='profile.jpeg'></Profile>
      <Name>André Gomes</Name>
      <Navigation>
       <a href='/react-gh-pages/#experiência' style={{'text-decoration':'none'}}> <Tags>Experiência</Tags></a>
       <HashLink to ='/react-gh-pages/projects' style={{'text-decoration':'none'}}><Tags>Projetos</Tags></HashLink>
       <a  href='/react-gh-pages/#redes' style={{'text-decoration':'none'}}><Tags>Redes Sociais</Tags></a>
      </Navigation>
    </Head>
  )
}

export default Header