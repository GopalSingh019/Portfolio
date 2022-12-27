import React from 'react';
import './portfolio.css';
import moviesapp from '../../Images/Movies-app.png';
import rating from '../../Images/rating img.png';
import amazonImg from '../../Images/Amazon_clone.png'

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
                            <a href='https://github.com/GopalSingh019/ReactProject/tree/master/movies_app' className='btn'>Github</a>
                            <a href='https://movies-app-gopal.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                    <article className='portfolio__items'>
                        <div className='portfolio__item-image'>
                            <img src={rating} alt='Interactive Rating Component' />
                        </div>
                        <h3>Interactive Rating Component</h3>
                        <p className='text-light'>Interactive Rating Component built using javascript,Html,css,dom manipulation</p>
                        <div className='portfolio__item-cta'>
                            <a href='https://github.com/GopalSingh019/Frontend.Mentor-practice/tree/master/interactive-rating-component-main' className='btn'>Github</a>
                            <a href='https://helpful-cheesecake-46a737.netlify.app/#' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                    <article className='portfolio__items'>
                        <div className='portfolio__item-image'>
                            <img src={amazonImg} alt='Amazon Clone' />
                        </div>
                        <h3>Amazone Clone</h3>
                        <p className='text-light'>React Amazon Clone Application using Firebase and Stripe Payment - A Complete E-Commerce Shopping Application</p>
                        <div className='portfolio__item-cta'>
                            <a href='https://github.com/GopalSingh019/amazon_clone' className='btn'>Github</a>
                            <a href='https://gopal-amazon-clone.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                </div>
            </section>
    )
}

export default portfolio