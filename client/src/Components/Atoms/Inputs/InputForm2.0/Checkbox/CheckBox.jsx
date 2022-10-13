import React from 'react'
import Style from './check.module.css'

function CheckBox({name, id, onChange, value}) {
  return (
   <div className="">
     <input className={Style.input} type="checkbox" name={name} id={id} onChange={onChange} value={value}/>
     <label htmlFor={id}>
        <h4>{name}</h4>
     </label>
   </div>
  )
}

export default CheckBox