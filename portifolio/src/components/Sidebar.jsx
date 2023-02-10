import React from "react";
import Avatar from '../img/HericlesRocha.jpeg'
import '../styles/components/sidebar.sass'

const Sidebar = () => {

    return(
        <aside id="sidebar">
            <img src={Avatar} alt="My Photo" />
            <p className="title">FullStack Developer</p>
            <p>Social Media</p>
            <p>Info</p>
            <a href="" className="btn">Download resume</a>
        </aside>
    )
}

export default Sidebar;