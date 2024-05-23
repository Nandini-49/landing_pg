import React from 'react'
import './AdCards.css'

const AdCards = ({logo,text,des}) => {
  return (
   
    <div className='ad-card-section'>
      <div className='logo-container'>
        <img src={logo} alt='hjhj' />
    </div>
    <h2>{text}</h2>
    <h4>{des}</h4>
    
  </div>
  
  )
}

export default AdCards
