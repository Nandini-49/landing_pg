import React from 'react'
import './features.css'
import Cards from '../cards/Cards'
import AdCards from '../adCards/AdCards'
import logo1 from "../adCards/icon1.png"
import logo2 from "../adCards/icon2.png"
import logo3 from "../adCards/icon3.png"


const Features = () => {
  return (
    
    <div className='feature-section'>
      <h1> Flight Routes</h1>
    <div className='feature-card-section'>
      <Cards text="Flight Control Center"
             image="https://images.unsplash.com/photo-1614704766139-fa667ba48906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw3fHxmbGlnaHQlMjBjb250cm9sJTIwY2VudGVyfGVufDF8fHx8MTcxNjExMTg3Mnww&ixlib=rb-4.0.3&q=80&w=1080'"/>
      <Cards text="Weather Update"
             image="https://images.unsplash.com/photo-1561470230-cc0222ef2f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxODJ8fHdlYXRoZXIlMjB1cGRhdGVzfGVufDF8fHx8MTcxNjExMzA2Mnww&ixlib=rb-4.0.3&q=80&w=1080"/>
      <Cards text="Air Traffic Data"
             image="https://images.unsplash.com/photo-1498707406720-1094aef934da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw4N3x8YWlyJTIwdHJhZmZpYyUyMGRhdGF8ZW58MXx8fHwxNzE2MTEzMTMzfDA&ixlib=rb-4.0.3&q=80&w=1080"/>
      <Cards text="Real-time Analytics"
             image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxBbmFseXRpY3N8ZW58MXx8fHwxNzE2MTEzNTc3fDA&ixlib=rb-4.0.3&q=80&w=1080"/>
    </div>
    <div className='ad-card-section-wrapper'>
      <AdCards
       logo={logo1}
        text="Unbeatable Price Performance"
       
        des="We ensure the best deals, contact us if you find a lower price elsewhere!"
      />
      <AdCards
      logo={logo2}
        text="Instant Refund Services"
        
        des="Flight Cancellation Protection"
      />
      <AdCards
       logo={logo3}
        text="Covid-19 Updates"
       
        des="Stay informed about travel restrictions related to covid-19 and flight impacts."
      />
    </div>
   
    </div>
    
  )
}

export default Features
