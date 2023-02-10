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


const SocialMedia = () => {

    return(
       <section id="social-media">
         {socialMedias.map((medias) => (
            <a href="#" className="social-btn" id={medias.name} key={medias.name}>
                {medias.icon}
            </a>
         ))}
       </section>
    )
}

export default SocialMedia;