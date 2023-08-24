import React from 'react'
import '../Screens/Main.scss'
import Signin from '../Components/Signin/Signin'
import LeftCard from '../Components/Card/leftCard'

function Main() {
  return (
    <div className="main-container">
      <div className="linearGradient"></div>
      <div className="top-black"></div>
      <div className="bottom-white"></div>
      <div className="signin-form">
        <Signin/>
      </div>
      <div className="left-container">
        <LeftCard/>
      </div>
    </div> 
  )
}

export default Main
