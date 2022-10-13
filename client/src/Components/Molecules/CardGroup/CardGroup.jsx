import React from 'react'
import Card from '../../Atoms/Cards/Card';

function CardGroup({name , image , rating , genres}) {

  return (
        <div className="cards">
           <Card
             name={name} image={image} rating={rating} genres={genres}
            />
        </div>
  )
}



export default CardGroup