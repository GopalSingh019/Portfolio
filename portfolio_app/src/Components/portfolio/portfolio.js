import React from 'react';
import './portfolio.css';
import moviesapp from '../../Images/Movies-app.png';

function portfolio() {
    return (
            <section id="portfolio">
                <h5>My recent Work</h5>
                <h2>My projects</h2>
                <div className='container portfolio__container'>
                    <article className='portfolio__items'>
                        <div className='portfolio__item-image'>
                            <img src={moviesapp} alt='Movies App' />
                        </div>
                        <h3>Movies App</h3>
                        <p className='text-light'>This is Imdb clone App built using React Redux Tailwind and Tmdb Api</p>
                        <div className='portfolio__item-cta'>
                            <a href='http://github.com' className='btn'>Github</a>
                            <a href='https://movies-app-gopal.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                </div>
            </section>
    )
}

export default portfolio