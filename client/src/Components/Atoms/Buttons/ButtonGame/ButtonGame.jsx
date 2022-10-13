import React from 'react'
import Style from './buttonG.module.css'

function ButtonGame(props) {
  return (
     <span class={Style.startbtn}>{props.text}</span>
  )
}

export default ButtonGame