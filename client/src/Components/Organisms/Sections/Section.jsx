import React, { useState } from 'react'
import Style from './section.module.css'
import Genre from '../../Atoms/Genre/Genre'
import CardGroup from './../../Molecules/CardGroup/CardGroup';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../../Molecules/Pagination/Pagination';
import { Link } from 'react-router-dom';
import { fromByNameToAllVideogames } from '../../../actions';
import IconArrow from '../../Atoms/Icons/IconArrow';


function Section({setCurrentPage , currentPage, handleSetCurrentPage}) {
  const dispatch = useDispatch()

  /* Obtener los datos de la store*/

  const allVgames = useSelector((state) => state.videogames)
  const allgenres = useSelector((state) => state.genres)
  const videogamesByName = useSelector((state) => state.videogamesByName);
 
  /* Este es el código responsable de la paginación.*/

  const [page, setPage] = useState(1)
  const perPage = 15

  const maximo = Math.round(allVgames.length / perPage)
  const lastVgameIndex = currentPage * perPage 
  const firstVgIndex = lastVgameIndex - perPage
  const currentVgames = allVgames.slice(firstVgIndex,lastVgameIndex) 

  /**
   * Cuando el usuario hace clic en el botón, se llamará a la función de despacho y el
   * La función de BynametoAllVideOgames se pasará a la función de despacho.
   */

  const handleFromByNameToVideogame = () => {
    dispatch(fromByNameToAllVideogames());
  }

  /**
   * Cuando el usuario hace clic en el botón de página siguiente, el número de página actual aumenta por uno, el número de página
   * aumenta en uno, y el usuario se desplaza a la parte superior de la página.
   */

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
    setPage(page + 1)
    window.scroll({
      top: 0
    })
  }


  /**
   * PrevPage () es una función que establece la CurrentPage en la CurrentPage menos 1, establece la página en el
   * Página menos 1 y desplaza la ventana a la parte superior.
   */

  const prevPage = () => {
    setCurrentPage(currentPage - 1)
    setPage(page - 1)
    window.scroll({
      top: 0
    })
  }



  return (
    <div className={Style.contenedor}>
       {allVgames.length <= 15 &&
        allVgames.length >= 1 &&
        videogamesByName.length ? (
          <div className={Style.back} onClick={handleFromByNameToVideogame}>
            <IconArrow/>
            <p>return to all VideoGames</p>
          </div>
        ): null}
      <div className={Style.sunbcontentGenre}>
        <Genre value='All Genres' item='0' key='0' handleSetCurrentPage={handleSetCurrentPage}/>
        {allgenres && allgenres.map(g => {
          return(
            <Genre value={g.name} item={g.id} key={g.id} handleSetCurrentPage={handleSetCurrentPage} />
          )
        })}
      </div>
      <div className= {Style.subContent}>
        {currentVgames && currentVgames.map(d =>{
          return(
           <Link to={`/home/${d.id}`} key={d.id}>
              <CardGroup
                name={d.name} image={d.image} rating={d.rating} genres={typeof d.genres === 'object'? d.genres : d.genres} key={d.id}
              /> 
           </Link>
          )
        })}
      </div>
     <div className={Style.pagination}>
        <Pagination page={maximo} actualPage={currentPage} nextPage={nextPage} prevPage={prevPage}/>
     </div>
    </div>
  )
}




export default Section