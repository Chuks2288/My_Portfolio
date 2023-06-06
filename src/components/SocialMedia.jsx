import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export default function SocialMedia() {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.linkedin.com/in/chuks-dumbiri-38197419a"><BsLinkedin /></a>
            </div>
            <div>
                <a href="https://github.com/Chuks2288/"><BsGithub /></a>
            </div>
            <div>
                <a href=""><BsTwitter /></a>
            </div>
        </div>
    )
}
