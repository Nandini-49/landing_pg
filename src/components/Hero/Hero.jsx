import React from 'react';
import "./hero.css"

const styles = {
  ImageContainer: {
    position: 'relative',
    width: 'auto',
    height: '655px',
    borderRadius: '18px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1585916788784-64aa099fec1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw5OHx8QWlycGxhbmV8ZW58MXx8fHwxNzE2MTEwOTc3fDA&ixlib=rb-4.0.3&q=80&w=1080',
}

const Hero = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} >

      <h1 className='text1'>Discover the safest routes.</h1>

      <div className='card'>
        <div style={{display: "flex", alignItems: "center" }}><h2>Explore <br/> <h1>Route Planer</h1> </h2></div>
        <div style={{display: "flex", alignItems: "center" }}><h2>To <br/> <h1>Destination</h1> </h2></div>
        <div style={{display: "flex", alignItems: "center" }}><h2>Take-Off <br/> <h1>Current-Date</h1> </h2></div>
        <div style={{display: "flex", alignItems: "center" }}><h2>Landing <br/> <h1>Return Date</h1> </h2></div>
        <div style={{display: "flex", alignItems: "center" }}><button className='button'> <svg className="icon-img" viewBox="0 0 24 24">
    <path d="m10 17 5-5-5-5v10z">
    </path>
    <path d="M0 24V0h24v24H0z" fill="none">
    </path>
  </svg>
  </button></div>
      </div>
      </div>
  );
};


export default Hero;