import React, { useState, useRef } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';


import emailjs from '@emailjs/browser';




const Footer = () => {

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);



    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setIsFormSubmitted(true);
        }, [1000])
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_76b0oag', 'template_q7nbwsb', form.current, 'D5XmabFOSzXP4NTDR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <h2 className="head-block">Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email" />
                    <a href="mailto:hello@micael.com" className="p-text">dumbirichuks@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+1 (123) 456-7890" className="p-text">+234 7064 923498</a>
                </div>
            </div>


            {!isFormSubmitted ? (
                <form className="app__footer-form app__flex" ref={form} onSubmit={sendEmail} >
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="user_name" required />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="user_email" required />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            name="message"
                            required
                        />
                    </div>
                    {/* <input type="submit" value="Send" className="p-text btn-submit" /> */}
                    <button type="submit" value={!loading ? 'Send' : 'Sending'} className="p-text btn-submit"
                        onClick={handleClick}
                    /button>
                </form>
            ) : (
                <div>
                    <h3 className="head-block">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__blackbg',
);
