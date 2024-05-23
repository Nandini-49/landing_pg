import React from 'react'
import './AdCards.css'

const AdCards = ({logo,text,des}) => {
  console.log(logo);
  return (
   
    <div className='card-section'>
    <h2>{text}</h2>
    <h4>{des}</h4>
    <div className='logo-container'>
        <img src={logo} alt='some image' />
    </div>
  </div>
  
  )
}

export default AdCards
