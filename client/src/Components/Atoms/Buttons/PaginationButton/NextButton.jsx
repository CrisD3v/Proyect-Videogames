import React from 'react'
import Style from './pagination.module.css'
import IconNext from '../../Icons/IconNext'

function NextButton({click, disabled}) {
  return (
    <button className={Style.nextButton} onClick={click} disabled={disabled}>{<IconNext fill='#fff' className={Style.icon}/>}</button>
  )
}

export default NextButton