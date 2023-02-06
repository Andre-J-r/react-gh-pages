import React from 'react'
import {ExpertiseDiv, Jobs, JobsLine, KnowledgeLine, Brain, Title} from './ExpertiseStyle'

function Expertise () {
  return (
    
    <ExpertiseDiv id='experiência'>
      <Title>Minhas Skills e Experiências</Title>
      <Brain src="brain.png" alt="notebook"/>
      <Jobs>
        <p style={{'color': '#c90de2', 'font-size': '25px', 'font-family' : 'Alegreya Sans SC'}}>Empresas colaboradoras:</p>
        <JobsLine> 2020 - 2022 - Cpfl Soluções </JobsLine>
        <JobsLine> 2018 - 2020 - MidiaTix</JobsLine>
        <JobsLine> 2017 - 2018 - IGN</JobsLine>
      </Jobs>
      <div style={{'text-align' : 'center', 'margin':'0 0 0 70px'}}>
          <p style={{'color': '#c90de2', 'font-size': '25px', 'font-family' : 'Alegreya Sans SC'}}>Línguas que eu falo:</p>
          <KnowledgeLine>HTML</KnowledgeLine>
          <KnowledgeLine>CSS</KnowledgeLine>
          <KnowledgeLine>JSON</KnowledgeLine>
          <KnowledgeLine>JQuerry</KnowledgeLine>
          <KnowledgeLine>BackboneJS</KnowledgeLine>
          <KnowledgeLine>React</KnowledgeLine>
          <KnowledgeLine>Redux</KnowledgeLine>
      </div>
    </ExpertiseDiv>
  )
}

export default Expertise