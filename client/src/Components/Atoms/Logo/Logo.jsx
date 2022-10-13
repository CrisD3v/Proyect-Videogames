import React from 'react'
import logo from '../../../images/LogoPX.png'
import Style from './logo.module.css'
function Logo() {
  return (
    <div>
        <img src={logo} alt="" className={Style.logo}/>
        <h1 className={Style.title}>GAMES</h1>
        <p className={Style.subTitle}>PI HENRY 2022</p>
    </div>
  )
}

export default Logo