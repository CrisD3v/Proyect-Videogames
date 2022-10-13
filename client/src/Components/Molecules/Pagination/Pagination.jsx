import React from 'react'
import PrevButton from '../../Atoms/Buttons/PaginationButton/PrevButton';
import InputPagination from '../../Atoms/Inputs/inputPagination/InputPagination';
import NextButton from './../../Atoms/Buttons/PaginationButton/NextButton';
import Style from './pagination.module.css'


function Pagination({page, actualPage, nextPage, prevPage}) {
  
  return (
    <div className={Style.container}>
        <PrevButton click={prevPage} disabled={actualPage === 1 || actualPage < 1 }/>
        <InputPagination value={actualPage}/>
        <p>DE {page}</p>
        <NextButton click={nextPage} disabled={actualPage === page}/>
    </div>
  )
}

export default Pagination