import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from '../App'
import Projects from '../Components/Body/Projects'

function Routers () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<App/>} path = '/andre-j-r.github.io/react-gh-pages/'/>
        <Route element = {<Projects/>} path = '/projects'/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers