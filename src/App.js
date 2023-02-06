import React from 'react';
import './App.css';
import Header from './Components/Header'
import Body from './Components/Body/Body'
import {Link} from 'react-router-dom'
import {Container} from './Components/AppStyle'

function App () {
  return (
    <React.Fragment>
      <Container style={{'background-color': 'white'}}>
        <Header/>
        <Body/>
      </Container>
    </React.Fragment>
  )
}

export default App;
