import React from 'react'
import Checkbox from '../../Atoms/Inputs/InputForm/Checkbox/Checkbox'
import Style from './asideOrder.module.css'


function Rating({handleSetCurrentPage}) {
  return (
    <div className={Style.container}>
        <div className={Style.subContainer}>
            {/* <p className={Style.text}>Menor a Mayor</p> */}
            <Checkbox handleSetCurrentPage={handleSetCurrentPage} value='Rating Def' valueFil='default' id='rating' name='rating'
            />
        </div>
        <div className={Style.subContainer}>
            {/* <p className={Style.text}>Menor a Mayor</p> */}
            <Checkbox handleSetCurrentPage={handleSetCurrentPage} value='Max a Min' valueFil='' id='rating' name='rating'
            />
        </div>
        <div className={Style.subContainer}>
            {/* <p className={Style.text}>Mayor a Menor</p> */}
            <Checkbox handleSetCurrentPage={handleSetCurrentPage} value='Min a Max' valueFil='low'id='rating' name='rating'
            />
        </div>
    </div>
  )
}

export default Rating