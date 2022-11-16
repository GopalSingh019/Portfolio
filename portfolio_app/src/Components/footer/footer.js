import React from 'react'
import './footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function footer() {
  return (
    <footer  className='footer__container'>
        <h1>Portfolio App</h1>
            <ul className='footer__permalinks'>
                <li><a href='#'>Header</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Projects</a></li>
                <li><a href='#contact'>contact</a></li>
            </ul>
        <div className='footer__socials'>
            <a href='http://linkedin.com' target='__blank'><LinkedInIcon></LinkedInIcon></a>
            <a href='https://www.instagram.com/gopal190198/' target='__blank'><InstagramIcon></InstagramIcon></a>
            <a href='https://www.facebook.com/gopal.kumar.923171' target='__blank'><FacebookIcon></FacebookIcon></a>
        </div>
        <div className='footer__copyRight'>
            <small>&copy; Gopal Singh.All rights Reserved.</small>
        </div>
    </footer>
  )
}

export default footer