import React from 'react';
import './navbar.css'

const defaultProps = {
  text: 'FlightNavPro',
};

const Text = (props) => {
  return (
    <div className='text'>
      {props.text ?? defaultProps.text}
    </div>
  );
};

const Header = (props) => {
  return (
    <div className='header'>
      {props.children}
      <div className='navlinks'>
        <Text text="FlightNav Pro" />
        <div className='links'>
        <a href='#' className='icon'> <svg viewBox="0 0 576 512">
    <path d="M482.3 192C516.5 192 576 221 576 256C576 292 516.5 320 482.3 320H365.7L265.2 495.9C259.5 505.8 248.9 512 237.4 512H181.2C170.6 512 162.9 501.8 165.8 491.6L214.9 320H112L68.8 377.6C65.78 381.6 61.04 384 56 384H14.03C6.284 384 0 377.7 0 369.1C0 368.7 .1818 367.4 .5398 366.1L32 256L.5398 145.9C.1818 144.6 0 143.3 0 142C0 134.3 6.284 128 14.03 128H56C61.04 128 65.78 130.4 68.8 134.4L112 192H214.9L165.8 20.4C162.9 10.17 170.6 0 181.2 0H237.4C248.9 0 259.5 6.153 265.2 16.12L365.7 192H482.3z">
    </path>
  </svg>Support</a>
        <a href='#' className='icon' > <svg  viewBox="0 0 512 512">
    <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM325.1 306.7L380.6 162.4C388.1 142.1 369 123.9 349.6 131.4L205.3 186.9C196.8 190.1 190.1 196.8 186.9 205.3L131.4 349.6C123.9 369 142.1 388.1 162.4 380.6L306.7 325.1C315.2 321.9 321.9 315.2 325.1 306.7V306.7z">
    </path>
  </svg> My Flights</a>
        <button className='btn' ><a href='#'>Login</a></button>
        <button className='btn'><a href='#' >Register</a></button>
        </div>
      </div>
    </div>
  );
};

export default Header;