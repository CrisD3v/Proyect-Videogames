import React from 'react'
import Style from './checkbox.module.css'
import { useDispatch } from "react-redux";
import {sortByRating, alphabeticalSort, filterByApiOrDb} from '../../../../../actions/index'
export default function Checkbox({handleSetCurrentPage, value, valueFil, id , name}) {
  const dispatch = useDispatch();

  /**
   * Cuando el usuario hace clic en el botón, la página actual se establece en 1, la acción de Sortbyrating es
   * Enviado.
   **/

  const handleSortByRating = (e) => {
    handleSetCurrentPage();
    dispatch(sortByRating(e.target.value));
  }

  /**
   * Cuando el usuario hace clic en el botón, la página actual se establece en 1, la acción AlphabeticalSort es
   * Enviado.
   **/

  const handleAlphabeticalSort = (e) => {
    handleSetCurrentPage();
    dispatch(alphabeticalSort(e.target.value));
  }

  /**
   * Cuando el usuario hace clic en el menú desplegable, la página actual se restablece a 1, FilterByapiordB
   * La acción se envía.
   **/

  const handleFilterByApiOrDb = (e) => {
    handleSetCurrentPage();
    dispatch(filterByApiOrDb(e.target.value));
  }



  return (
    <div className={Style.container1}>
    <p className={Style.text}>{value}</p>
    <label className={`${Style.togglerwrapper} ${Style.style1}`}>
      <input 
        type='radio' className='{Style.checkbox}' name={name}
        value={valueFil} onChange={id === 'rating' ? (e) => handleSortByRating(e): 
                                  id === 'alfabetic'? (e) => handleAlphabeticalSort(e): (e) => handleFilterByApiOrDb(e)} 
        
      />
      
      <div className={Style.togglerslider}>
        <div className={Style.togglerknob}></div>
      </div>
    </label>
  </div>
  )
}
