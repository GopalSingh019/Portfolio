import React from 'react';
import Cta from './CTA';
import image from '../../Images/me.png';
import Social from './HeaderSocials';
import './header.css';


function Header() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Gopal Singh</h1>
            <h5 className='text-light'>Frontend Developer</h5>
            <Cta/>
            <Social ></Social>
            <div className='scroll_down'><a href='#contact'>Scroll Down</a></div>
            <div className='me'>
                <img src={image} alt='Profile-pic'/>
            </div>
            
        </div>
    </header>
  )
}

export default Header