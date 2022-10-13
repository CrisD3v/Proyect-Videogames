import React from 'react'
import Style from './card.module.css'

function Card({ name, image, rating, genres }) {
  return (
    <div className={Style.card}>
      <img className={Style.bg} src={image} alt={name} />
      <div className={Style.cardContent}>
        <h3 className={Style.cardTitle}>{name}</h3>
        <span className={Style.bar}></span>
        <p className={Style.cardBody}>Rating: {rating}</p>
      </div>
      <div className={Style.description}>
        <h2 className={Style.title}>{name}</h2>
        <p className={Style.subTitle}>Rating: {rating}</p>
        <p className={Style.subTitle}>Genres:</p>
        <div className={Style.genre}>
          <p className={Style.text}>{genres.length || genres ? genres.toString(', ') : `No Genres`}</p>
        </div>
      </div>
    </div>
  )
}

export default Card