import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Social() {
    return (
        <div className='header__socials'>
            <a href='http://www.linkedin.com/in/gopal-singh-56186814b' target='__blank'>
                <LinkedInIcon></LinkedInIcon>
            </a>
            <a href='http://linkedin.com' target='__blank'>
                <GitHubIcon></GitHubIcon>
            </a>
        </div>
    )
}

export default Social
