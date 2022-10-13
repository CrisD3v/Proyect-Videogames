import React from 'react'
import Style from './input.module.css'

export default function Input({type, name , placeholder, value, onChange ,onBlur}) {
  return (
    <input className={Style.input} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
  )
}
