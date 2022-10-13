import React from 'react'
import Checkbox2 from '../Inputs/InputForm/Checkbox/Checkbox2'

function Genre({value,item, handleSetCurrentPage}) {

  return (
    <Checkbox2 value ={value} item={item} handleSetCurrentPage={handleSetCurrentPage} name='genre'/>
  )
}

export default Genre