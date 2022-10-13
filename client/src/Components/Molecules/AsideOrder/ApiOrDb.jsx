import React from 'react'
import Checkbox from '../../Atoms/Inputs/InputForm/Checkbox/Checkbox'
import Style from './asideOrder.module.css'

function ApiOrDb({handleSetCurrentPage}) {
  return (
    <div className={Style.container}>
        <div className={Style.subContainer}>
            {/* <p className={Style.text}>ALL</p> */}
            <Checkbox value='ALL'handleSetCurrentPage={handleSetCurrentPage} id='apiOrDb' valueFil='all' name='apiOrDb'/>
        </div>
        <div className={Style.subContainer}>
            {/* <p className={Style.text}>Api</p> */}
            <Checkbox value='Api'handleSetCurrentPage={handleSetCurrentPage} id='apiOrDb' valueFil='' name='apiOrDb'/>
        </div>
        <div className={Style.subContainer}>
            {/* <p className={Style.text}>DB</p> */}
            <Checkbox value='DB'handleSetCurrentPage={handleSetCurrentPage} id='apiOrDb' valueFil='database' name='apiOrDb'/>
        </div>
    </div>
  )
}

export default ApiOrDb