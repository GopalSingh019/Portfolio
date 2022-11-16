import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import './Experience.css';

function Experience() {
  return (
    
      <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Frontend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <VerifiedIcon/>
                
                <div><h4>HTML</h4>
                <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                <VerifiedIcon/>
                <div><h4>CSS</h4>
                <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                <VerifiedIcon/>
                <div><h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                <VerifiedIcon/>
                <div><h4>TAILWIND</h4>
                <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                <VerifiedIcon/>
                <div><h4>REACT</h4>
                <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                <VerifiedIcon/>
                <div><h4>REDUX</h4>
                <small className='text-light'>Experienced</small></div>
              </article>
              {/* <article className='experience__details'>
                <VerifiedIcon/>
                <div><h4>WEBPACK</h4>
                <small className='text-light'>INTERMEDIATE</small></div>
              </article> */}
            </div>
          </div>
          <div className='experience__frontend'>
            <h3>Backend Development</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <VerifiedIcon/>
                
                <div><h4>Node</h4>
                <small className='text-light'>Beginner</small></div>
              </article>
              <article className='experience__details'>
                <VerifiedIcon/>
                <div><h4>Mongo</h4>
                <small className='text-light'>Beginner</small></div>
              </article>
              <article className='experience__details'>
                <VerifiedIcon/>
                <div><h4>Mongoose</h4>
                <small className='text-light'>Beginner</small></div>
              </article>
              <article className='experience__details'>
                <VerifiedIcon/>
                <div><h4>Express</h4>
                <small className='text-light'>Beginner</small></div>
              </article>
              
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default Experience