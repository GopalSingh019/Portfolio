import React from 'react';
import me from '../../Images/me-about.jpg';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BusinessIcon from '@mui/icons-material/Business';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import './About.css'

function About() {
  return (
    
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me_image'>
              <img src={me} alt='' />
            </div>
          </div>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <WorkspacePremiumIcon className='about__icon' />
                <h5>Experience</h5>
                <small>1.6 Years</small>
              </article>

              <article className='about__card'>
                <BusinessIcon className='about__icon' />
                <h5>Organisation</h5>
                <small>Tata Consultancy Services</small>
              </article>

              <article className='about__card'>
                <FolderCopyIcon className='about__icon' />
                <h5>Project</h5>
                <small>Pricing Management Application</small>
              </article>
            </div>

            <p>
            Experienced JavaScript Developer with 1.6 years in the industry.
             Proficient with React. Used problem-solving aptitude to enhance 
             application performance by 14%. Enhanced Pricing Management Application 
             for US based Accounting Organisation.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>
      </section>
  
  )
}

export default About