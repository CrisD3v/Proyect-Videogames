import React from 'react'
import Style from './text.module.css'

function TextArea({name , id, value, onChange}) {
  return (
    <textarea className={Style.textarea} name={name} id={id} cols="30" rows="10" value={value} onChange={onChange}></textarea>
  )
}

export default TextArea