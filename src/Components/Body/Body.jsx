import React from 'react'
import About from './About'
import Expertise from './Expertise';
import Redes from './Redes'

function Body () {

  return(
    <React.Fragment>
      <About></About>
      <Expertise/>
      <Redes/>
    </React.Fragment>
  )
}

export default Body