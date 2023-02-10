import React from "react";
import Avatar from '../img/HericlesRocha.jpeg'
import '../styles/components/sidebar.sass'
import Information from "./Information";
import SocialMedia from "./SocialMedia";

const Sidebar = () => {

    return(
        <aside id="sidebar">
            <img src={Avatar} alt="My Photo" />
            <p className="title">FullStack Developer</p>
            <SocialMedia/>
            <Information/>
            <a href="" className="btn">Download resume</a>
        </aside>
    )
}

export default Sidebar;