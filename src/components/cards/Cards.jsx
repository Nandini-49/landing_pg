import React from 'react'
import "./Cards.css"
const Cards = ({image, text}) => {
  console.log(image);
  return (
    <div className='card-section'>
    <h3>{text}</h3>
    <img src={image} alt='some image'/>
    </div>
  )
}

export default Cards
