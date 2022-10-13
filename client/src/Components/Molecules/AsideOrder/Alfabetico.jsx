import React, { useState } from 'react'
import Checkbox from '../../Atoms/Inputs/InputForm/Checkbox/Checkbox'
import Style from './asideOrder.module.css'

function Alfabetico({handleSetCurrentPage}) {

  return (
    <div className={Style.container}>
        <div className={Style.subContainer}>
            {/* <p className={Style.text}>A - Z</p> */}
            <Checkbox value='Def' handleSetCurrentPage={handleSetCurrentPage} id='alfabetic' valueFil='default' name='alfabetico' checked />
        </div>
        <div className={Style.subContainer}>
            {/* <p className={Style.text}>A - Z</p> */}
            <Checkbox value='A - Z' handleSetCurrentPage={handleSetCurrentPage} id='alfabetic' valueFil='a-z' name='alfabetico'/>
        </div>
        <div className={Style.subContainer}>
            {/* <p className={Style.text}>Z - A</p> */}
            <Checkbox value='Z - A' handleSetCurrentPage={handleSetCurrentPage} id='alfabetic' valueFil='' name='alfabetico' />
        </div>
    </div>
  )
}

export default Alfabetico