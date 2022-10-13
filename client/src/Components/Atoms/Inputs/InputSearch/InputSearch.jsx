import React from 'react'
import Style from './inputSearch.module.css'

function InputSearch({setNameVideogame}) {

  /**
   * Cuando cambia la entrada, evite la acción predeterminada y establezca el nombre del videojuego en el valor
   * de la entrada.
   **/

  const handleInputChange = (e) => {
    e.preventDefault();
    setNameVideogame(e.target.value);
  }
  return (
    <input type="text" className={Style.search} onChange={handleInputChange}/>
  )
}

export default InputSearch