import React from 'react'
import {Img, RedesContainer, P} from './RedesStyle'

function Redes () {
  return(
    <React.Fragment>
      <P>Dá uma olhadinha nas minhas redes sociais</P>
      <RedesContainer id = 'redes'>
          <a style={{'margin': '0 10px 0 10px'}} href='https://github.com/' target='_blank'><Img src="github.png" alt="github logo"/></a>
          <a style={{'margin': '0 10px 0 10px'}} href='https://twitter.com/' target='_blank'><Img src='twitter.jpeg' alt='twitter logo'/></a>
          <a style={{'margin': '0 10px 0 10px'}} href='https://linkedin.com/' target='_blank'><Img src='linkedin.png' alt='linkedin logo'/></a>
          <a  href='https://youtube.com/' target='_blank'><Img src='youtube.png' alt='youtube logo'/></a>
      </RedesContainer>
    </React.Fragment>
  )
}

export default Redes