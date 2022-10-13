import React from 'react'
import Style from './simplebutton.module.css'

function SimpleButton(props) {
  return (
    <button className={Style.button}><p className={Style.text}>{props.value}</p></button>
  )
}

export default SimpleButton