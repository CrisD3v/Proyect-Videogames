import React, {useEffect} from 'react'
import Style from './checkbox.module.css'
import { useSelector, useDispatch } from "react-redux";
import { filterByGenre, getGenres } from "../../../../../actions/index";

function Checkbox2({value, item, handleSetCurrentPage, name}) {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.genres);

  /* Comprobación de si la matriz AllGenres está vacía, si es así, enviará la acción GetGenres.*/
  useEffect(() => {
    if (!allGenres.length) dispatch(getGenres());
  })

  /**
   * Cuando el usuario hace clic en un género, la página actual se establece en 1 y el género se filtra.
   **/

  const handleFilterByGenre = (e) => {
    handleSetCurrentPage();
    dispatch(filterByGenre(e.target.value));
  }

 
  return (
    <div className={Style.container}>
        <ul className={Style.kscboxtags}>
            <li className={Style.list}>
                <input type="radio" name={name} className={Style.input} id={`checkbox${item}`} value={value} onChange={handleFilterByGenre} />
                <label htmlFor={`checkbox${item}`} className={Style.label}>{value}</label>
            </li>
        </ul>

    </div>
  )
}

export default Checkbox2