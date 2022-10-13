import React, { useState, useEffect } from 'react'
import Navbar from '../../Organisms/Nav/Navbar'
import Section from '../../Organisms/Sections/Section'
import { useDispatch, useSelector} from 'react-redux';
import {getVideogames, getGenres, memoryCurrentPage}  from './../../../actions/index';
import Loading from '../../Molecules/Loading/Loading';
import Err404 from '../Errors/Err404';

function HomeTemplate(props) {
  const dispatch = useDispatch()
  const allVideogames = useSelector((state) => state.videogames);
  const genres = useSelector((state) => state.genres)
  const [currentPage, setCurrentPage] = useState(1)

  /**
   * Cuando el usuario haga clic en el botón, configure la página actual en 1 y envíe el MemoryCurrentPage
   * Acción con el valor de 1.
   */

  const handleSetCurrentPage = () => {
    setCurrentPage(1);
    dispatch(memoryCurrentPage(1));
  }

  /* Un hook que se llama cuando se monta el componente.*/

  useEffect (() => {
    dispatch(getVideogames())
    dispatch(getGenres())
  },[dispatch])

  return (
    <div>
      {allVideogames.length === 1 && allVideogames[0] === "Error" ? (
        <Err404 handleSetCurrentPage={handleSetCurrentPage}/>
      ) : allVideogames <= 0 ||  genres <= 0 ? (
        <div >
          <Loading/>
        </div>
      ):(
        <div>
          <Navbar handleSetCurrentPage={handleSetCurrentPage}/>
          <Section setCurrentPage={setCurrentPage} currentPage={currentPage} handleSetCurrentPage={handleSetCurrentPage}/>
        </div>
      )}
        
    </div>
  )
}

export default HomeTemplate