import React from 'react'
import Style from './pagination.module.css'
import IconPrev from '../../Icons/IconPrev'
function PrevButton({click, disabled}) {
  return (
    <button className={Style.prevButton} onClick={click} disabled={disabled}>{<IconPrev fill='#fff' className={Style.icon}/>}</button>
  )
}

export default PrevButton