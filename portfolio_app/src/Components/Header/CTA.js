import React from 'react';
import cv from './../../Images/Gopal.pdf';

function Cta() {
    return (
        <div className='ctarea'>
            <a href={cv} download className='btn'>Download cv</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default Cta;
