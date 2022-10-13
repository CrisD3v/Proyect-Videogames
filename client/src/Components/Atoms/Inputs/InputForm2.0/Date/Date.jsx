import React from 'react'
import Style from './date.module.css'

function Date({value, onChange , name}) {
  return (
    <input type="date" name={name} className={Style.date} value={value} onChange={onChange} />
  )
}

export default Date