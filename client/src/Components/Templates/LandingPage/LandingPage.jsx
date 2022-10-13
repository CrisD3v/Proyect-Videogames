import React from 'react'
import Style from './Landing.module.css'
import { Link } from "react-router-dom";
// import ButtonGame from '../../Atoms/Buttons/ButtonGame/ButtonGame';
import Start from '../../../images/Start2.gif'

function LandingPage() {
  return (
    <div className={Style.container}>
      <Link to="/home">
        <img className={Style.gif}  src={Start} alt="" />
      </Link>
    </div>
  )
}

export default LandingPage

