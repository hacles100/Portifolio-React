import React from "react";
import '../styles/components/socialmedia.sass';

import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const socialMedias = [
    {
        name: "linkedin",
        icon: <FaLinkedinIn/>
    },

    {
        name: "github",
        icon: <FaGithub/>
    },
]

const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

const SocialMedia = () => {

    return(
       <section id="social-media">
         {socialMedias.map((medias) => (
            <a href="#" className="social-btn" id={medias.name} key={medias.name} onClick={() => openInNewTab('https://www.linkedin.com/in/h%C3%A9ricles-rocha/')} >
                {medias.icon} 
                
            </a>
         ))}
       </section>
    )
}

export default SocialMedia;