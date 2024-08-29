import React from 'react';
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom' ;
import { FaArrowRight } from "react-icons/fa";
import './home.css' 

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img" />
             
            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Dhruti Patel.<br /></span> Full stack Web Developer
                    </h1>

                    <p className="home__description">
                        I'm  a passionate full stack web developer with a keen interest in creating efficient 
                        and dynamic web applications. Currently, I am in the learning stage, continuously 
                        expanding my skill set to keep up with the latest industry trends and technologies. 
                        My journey in web development began with a curiosity for how websites work, and it 
                        has evolved into a dedicated pursuit of crafting seamless digital experiences.
                    </p>

                    <Link to='/about' className='button'>
                        More About Me 
                        <span className='button__icon'>
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>            
        </section>
    )
}

export default Home;