import React from 'react'
import Style from './inputpagination.module.css'
function InputPagination({value}) {
  return (
    <input type="text" value={value} className={Style.inputPagination} disabled/>
  )
}

export default InputPagination