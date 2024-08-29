import React from 'react'

import {
    FaEnvelopeOpen,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';

import {FiSend} from 'react-icons/fi';

import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">Don't be Shy!</h3>

                    <p className="contact__description">
                        Feel free to get in touch with me. I am always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon" />

                            <div>
                                <span className="info__title">Mail me</span>
                                <span className="info__desc">dhrutipatel1120@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="https://www.linkedin.com/in/dhruti-patel-530126268" className="contact__social-link">
                            <FaLinkedin />
                        </a>

                        <a href="https://github.com/Dhruti2002" className="contact__social-link">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact