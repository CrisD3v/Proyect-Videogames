import React, {useState} from 'react'
import InputSearch from '../../Atoms/Inputs/InputSearch/InputSearch'
import SimpleButton from '../../Atoms/Buttons/SimpleButtons/SimpleButton'
import { getVideogamesByName, resetVideogames } from "../../../actions/index";
import { useDispatch } from 'react-redux';

function NavForm({handleSetCurrentPage}) {
  const dispatch = useDispatch()
  const [nameVideogame, setNameVideogame] = useState("");

  /**
    * La función se llama cuando el usuario envía el formulario.Previene la acción predeterminada del formulario,
    * Luego verifica si el nombre de nombre no está vacío.Si no está vacío, llama a HandleSetCurrentPage
    * Función, restablece los videojuegos, obtiene los videojuegos por nombre y establece el NameVideOgame en un vacío
    * cuerda.
    **/
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (nameVideogame.trim().length) {
      handleSetCurrentPage();
      dispatch(resetVideogames());
      dispatch(getVideogamesByName(nameVideogame.trim()));
      setNameVideogame("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <InputSearch setNameVideogame={setNameVideogame}/>
        <SimpleButton value='SEARCH'/>
    </form>
  )
}

export default NavForm