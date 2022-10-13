import React, { useState } from 'react'
import Logo from '../../Atoms/Logo/Logo'
import NavForm from '../../Molecules/NavForm/NavForm'
import Style from './navbar.module.css'
import { Link } from "react-router-dom";
import AsideFilter from '../Aside/AsideFilter';
import IconDropDown from './../../Atoms/Icons/IconDropDown';

function Navbar({handleSetCurrentPage}) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
        <nav className={Style.navContent}>
            <Logo/>
            <NavForm handleSetCurrentPage={handleSetCurrentPage}/>
            <div className={Style.container}>
                <ul className={Style.subcontainer}>
                    <li className={Style.text} onClick={e=> setIsActive(!isActive)}>Filter<IconDropDown fill='#D72C3E' /></li>
                    {isActive && (
                      <AsideFilter handleSetCurrentPage={handleSetCurrentPage}/>
                    )}
                    <Link to='/addVG' className={Style.text}><li>ADD GAME</li></Link>
                </ul>
            </div>
        </nav>
    </div>
  )
}



export default Navbar