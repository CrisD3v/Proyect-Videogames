import React from 'react'
import IconArrow from '../../Atoms/Icons/IconArrow'
import Style from './detail.module.css'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function DetailTemplate(props) {

  const {container, cardWrapper,  actions, backButton, cardInfo, cardText, cardDescription, cardInfoOverview} = Style
  
  const videogame = useSelector((state) => state.detail)

  const { name, description, released, rating, platforms, image, genres } = videogame

  

  return (
  <div className={container}>
    <div className={cardWrapper}>
      <div className={cardInfoOverview} 
      style={{
        background: `linear-gradient(rgba(5, 7 , 12 , 0.30), rgba(5, 7 , 12 , 0.90)),url(${image})`,
      }}
      >
        <div className={actions}>
          <div className={backButton}>
           <Link to='/home' style={{color: '#fff'}}>
            <IconArrow/>
           </Link>
          </div>
        </div>
        <div className={cardInfo}>
          <div className={cardText}>
            <h3>PLATFORM</h3>
            <p>{platforms}</p>
          </div>
          <div className={cardText}>
            <h3>GENRES</h3>
            <p>{genres}</p>
          </div>
          <div className={cardText}>
            <h3>RATING</h3>
            <p>{rating}</p>
          </div>
          <div className={cardText}>
            <h3>RELEASED</h3>
            <p>{released}</p>
          </div>
        </div>
      </div>
      <div className={cardDescription}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  </div>
  )
}

export default DetailTemplate