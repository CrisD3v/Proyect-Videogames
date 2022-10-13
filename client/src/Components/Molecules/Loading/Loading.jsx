import React from 'react'
import Style from './loading.module.css'
// import Loadingg from '../../../images/LoadGif.gif'
// import Loadingg from '../../../images/AmongLoad.gif'
import LoadingText from '../../../images/LoadingText2.gif'

function Loading() {
  return (
    <div className={Style.loadingContainer}>
        <div className={Style.subContent}>
            <img className={Style.loading} src='https://static.wixstatic.com/media/51ed87_17716ac543014d8bbbbf0400375009d7~mv2.gif' alt="" />
            <img className={Style.loadingText} src={LoadingText} alt="" />
        </div>
    </div>
  )
}

export default Loading